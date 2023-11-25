import moment from "moment";
import { Dispatch } from "redux";
import { API_URL2 } from "../utils/config";
import { setCookie } from "../utils/cookie";
import { deleteWithToken, getAnyUrlWithToken, getWithToken, getWithUrl, postApi, postWithToken, postWithUrl } from "../utils/request";
import * as actionTypes from "../utils/types";
import AddGroup from "../views/Twitter/Accounts/AddGroup";
import { errorPopup, successPopup } from "../utils/popupMsg";
import { useState } from "react";

export interface IQuery {
    skip?: number;
    limit?: number;
    search?: string;
    pid?: string;
}

export const UPDATE_UI_LANGUAGE = "UPDATE_UI_LANGUAGE";
/**
 * @description method to update UI language over the project
 * @author Jagan
 * @date 29-10-2021
 * @param lang: string
 */
export function changeUiLanguage(lang: string) {
    return async function (dispatch: Dispatch<UiLanguageChangeAction>) {
        setCookie("lang", lang);
        dispatch({
            type: UPDATE_UI_LANGUAGE,
            payload: lang,
        });
    };
}
export interface UiLanguageChangeAction {
    type: typeof UPDATE_UI_LANGUAGE;
    payload: string;
}

export interface IFeedQuery {
    skip?: number;
    limit?: number;
    search?: string;
    handleId?: string;
    status?: number;
}
export const NEWS_FEED_LIST = "NEWS_FEED_LIST";
export const PAGINATION = "PAGINATION";
export interface IArticle {
    id?: string;
    _id: string;
    title: string;
    source: string;
    published_date: string;
    description: string;
    main_image: string;
    image_list: string[];
    video: string;
    transcript: string;
    author: string[];
    requestUrl: string;
    assigned_category: string;

    reported: boolean;
}
export interface ITweetArticle {
    // _id: string;
    // user_name: string;
    // user_id: string;
    // profile_image: string;
    // verified: boolean;
    // media: string[];
    // id: any;
    // tweet: string;
    // created_at: string;
    // metric: {
    //     retweet_count: number;
    //     reply_count: number;
    //     like_count: number;
    //     quote_count: number;
    //     impression_count: number;
    // };
    group_id: string;
    group_name: string;
    name: string;
    source: string;
    tweet_creation_time: string;
    tweet_id: string;
    tweet_operation_status: number;
    tweet_type: string;
    user: string;
    text: string;
    tweet: string;
}
export const GET_TWEETS_LIST = "GET_TWEETS_LIST";

export interface IGetTweetsAction {
    type: typeof GET_TWEETS_LIST;
    payload: ITweetArticle[];
}

export const getTweetsAction = (payload: IFeedQuery) => {
    return async (dispatch: Dispatch, getState: any) => {
        try {
            const State = getState();
            const allPosts = State?.State?.tweetsList || [];
            let url = ``;
            if (payload?.handleId) {
                url = `tweets/${payload?.handleId}/?skip=${payload?.skip || 0}&limit=${payload?.limit || 10}`;
            }
            else {
                // console.log(payload, 'lllllllllll')
                url = `tweets/?skip=${payload.skip || 0}&limit=${payload.limit || 10}`;
            }
            if (payload?.search) {
                url = `get_tweets?query=${encodeURIComponent(payload?.search)}&skip=${payload?.skip || 0}&limit=${payload?.limit || 10}`;
            }

            const response = await getWithToken(url);

            if (response?.data?.data) {
                let result = response.data.data || [];
                if (result?.data) {
                    result = result.data;
                }
                let newData = [];
                if (payload?.skip > 1) {
                    newData = [...allPosts, ...result];
                } else {
                    newData = [...result];
                }

                dispatch({
                    type: GET_TWEETS_LIST,
                    payload: newData || [],
                });
                return response?.data;
            } else {
                return response;
            }
        } catch (error) {
            console.error("error", error);
        }
    };
};





export const getTweetById = (id: string) => {
    return async (dispatch: Dispatch, getState: any) => {
        try {
            const response = await getWithToken(`tweet_details?tweet_id=${id} `)
            console.log(response?.data?.data, 'responseresponseresponse')
            return response?.data?.data

        } catch (error) {
            console.error("error", error);

        }
    }
}

export const getTweetHandles = (payload: IFeedQuery) => {
    return async (dispatch: Dispatch, getState: any) => {
        try {
            const response = await getWithToken(`/twitter-sources/`);
            if (response?.data?.data) {
                // dispatch({
                //     type: GET_TWEETS_LIST,
                //     payload: response?.data?.data || [],
                // });
                return response?.data?.data;
            } else {
                return response;
            }
        } catch (error) {
            console.error("error", error);
        }
    };
};

export const GET_NEWS_BY_CATEGORY = "GET_NEWS_BY_CATEGORY";
export interface INewsDetails extends IArticle { }
export interface IGetNewsByCategoryAction {
    type: typeof GET_NEWS_BY_CATEGORY;
    payload: INewsDetails[];
}
type ICatNewsPayload = {
    category?: string;
    skip: number;
    limit: number;
    search?: string;
    subCategory?: string;
};
export const getNewsByCategoryAction = (payload: ICatNewsPayload) => {
    return async (dispatch: Dispatch, getState: any) => {
        try {
            const State = getState();
            const allPosts = State?.State?.newsList || [];
            let url = "";
            if (payload.category === "India-China") {
                url = `/news/search/global/?terms=India china relations&skip=${payload.skip}&limit=${payload.limit}&category=${payload.category}`;
            } else if (payload.category === "Infrastructure") {
                url = `/news/search/global/?terms=Military infrastructure border PLA Defense Defence LAC Bridges Road Mountain Road&skip=${payload.skip}&limit=${payload.limit}&category=${payload.category}`;
            } else if (payload.subCategory) {
                url = `/news/category/${payload.category}/${payload.subCategory}?skip=${payload.skip || 0}&limit=${payload.limit || 10}`;
            } else {
                url = `/news/category/${payload.category}?skip=${payload.skip || 0}&limit=${payload.limit || 10}`;
            }
            const response = await getWithToken(url);
            if (response?.data?.data) {
                const result = response.data.data || [];
                let newData = [];
                if (payload?.skip > 1) {
                    newData = [...allPosts, ...result];
                } else {
                    newData = [...result];
                }

                dispatch({
                    type: GET_NEWS_BY_CATEGORY,
                    payload: newData || [],
                });
                return result;
            } else {
                return response;
            }
        } catch (error) {
            if (payload?.skip <= 1) {
                dispatch({
                    type: GET_NEWS_BY_CATEGORY,
                    payload: [],
                });
            }
            console.error("error", error);
        }
    };
};

export const getCcTvVideosAction = (payload: ICatNewsPayload) => {
    return async (dispatch: Dispatch, getState: any) => {
        try {
            const State = getState();
            const allPosts = State?.State?.newsList || [];
            let url = `/cctv/videos?skip=${payload.skip || 0}&limit=${payload.limit || 10}`;
            const response = await getWithToken(url);
            if (response?.data?.data) {
                const result = response.data.data || [];
                let newData = [];
                if (payload?.skip > 1) {
                    newData = [...allPosts, ...result];
                } else {
                    newData = [...result];
                }

                dispatch({
                    type: GET_NEWS_BY_CATEGORY,
                    payload: newData || [],
                });
                return result;
            } else {
                return response;
            }
        } catch (error) {
            if (payload?.skip <= 1) {
                dispatch({
                    type: GET_NEWS_BY_CATEGORY,
                    payload: [],
                });
            }
            console.error("error", error);
        }
    };
};

// export const getNewsSearchByCategoryAction = (payload: ICatNewsPayload) => {
//     return async (dispatch: Dispatch, getState: any) => {
//         try {
//             const State = getState();
//             const allPosts = State?.State?.newsList || [];
//             let url = `news/search/category/?terms=${payload.search}&skip=${payload.skip}&limit=${payload.limit}&category=${payload.category}`
//             const response = await getWithToken(url);
//             if (response?.data?.data) {
//                 const result = response.data.data || [];
//                 let newData = [];
//                 if (payload?.skip > 1) {
//                     newData = [...allPosts, ...result];
//                 } else {
//                     newData = [...result];
//                 }

//                 dispatch({
//                     type: GET_NEWS_BY_CATEGORY,
//                     payload: newData || [],
//                 });
//                 return result;
//             } else {
//                 return response;
//             }
//         } catch (error) {
//             console.error("error", error);
//         }
//     };
// };

export const REPORT_ARTICLE = "REPORT_ARTICLE";
export interface IReportArticlePayload {
    news_id: string;
    reported: boolean;
}

export interface IReportArticleAction {
    type: typeof REPORT_ARTICLE;
    payload: IReportArticlePayload;
}
export const reportArticleAction = (payload: IReportArticlePayload) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await postWithToken(`/reports/bookmark`, payload);
            // dispatch({
            //     type: REPORT_ARTICLE,
            //     payload: payload,
            // });
            return response;
        } catch (error) {
            console.error("error", error);
        }
    };
};

export const REPORTS_LIST = "REPORTS_LIST";
export interface IReport {
    id: any;
    date: any;
    totalArticles: number;
}
export interface IGetReportsAction {
    type: typeof REPORTS_LIST;
    payload: IReport[];
}

export const getReports = () => {
    return async (dispatch: Dispatch) => {
        try {
            let url = `/reports/all`;
            const response = await getWithToken(url);
            const result = response?.data?.data;
            if (result) {
                dispatch({
                    type: REPORTS_LIST,
                    payload: result || [],
                });
                return result || [];
            } else {
                return [];
            }
        } catch (error) {
            console.error("error", error);
            throw error;
        }
    };
};
export interface IReportedArticle {
    date: string;
    description: string;
    id: string;
    image: string;
    title: string;
}
export const GET_REPORT_ARTICLES = "GET_REPORT_ARTICLES";
export interface IGetReportArticlesAction {
    type: typeof GET_REPORT_ARTICLES;
    payload: IReportedArticle[];
}

export const getReportArticlesAction = (pid: string) => {
    return async (dispatch: Dispatch, getState: any) => {
        try {
            const response = await getWithToken(`/reports/details/${pid}`);
            if (response?.data?.data) {
                const result = response.data.data || [];

                dispatch({
                    type: GET_REPORT_ARTICLES,
                    payload: result || [],
                });
                return result;
            } else {
                return response;
            }
        } catch (error) {
            console.error("error", error);
        }
    };
};

export const POST_DETAIL = "POST_DETAIL";
export interface IPostDetail extends IArticle { }
export interface IPostDetailAction {
    type: typeof POST_DETAIL;
    payload: IPostDetail;
}

export const getPostDetailAction = (query: IQuery) => {
    return async (dispatch: Dispatch) => {
        try {
            let url = `/news/${query.pid}`;

            const response = await getWithToken(url);
            if (response?.status === 200) {
                dispatch({
                    type: POST_DETAIL,
                    payload: response?.data?.data?.[0],
                });
                return response || [];
            } else {
                return [];
            }
        } catch (error) {
            console.error("error", error);
            throw error;
        }
    };
};

export const GET_HOMEPAGE_DATA = "GET_HOMEPAGE_DATA";
export interface IHomepageData {
    Domestic: IArticle[];
    Economy: IArticle[];
    Infrastructure: IArticle[];
    Defence: IArticle[];
    International: IArticle[];
    "India-China": IArticle[];
    "Sci & Tech": IArticle[];
    tweets: ITweetArticle[];
    videos: IArticle[];
}
export interface IGetHomepageDataAction {
    type: typeof GET_HOMEPAGE_DATA;
    payload: IHomepageData;
}

export const getHomepageDataAction = () => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await getWithToken(`/home_page/`);
            const result = response?.data?.data;
            if (result) {
                dispatch({
                    type: GET_HOMEPAGE_DATA,
                    payload: result || {},
                });
                return result || {};
            } else {
                return [];
            }
        } catch (error) {
            console.error("error", error);
            throw error;
        }
    };
};

export const GET_RELATED_ARTICLES = "GET_RELATED_ARTICLES";

export interface IGetRelatedArticlesAction {
    type: typeof GET_RELATED_ARTICLES;
    payload: IArticle[];
}

export const getRelatedArticles = (query: IQuery) => {
    return async (dispatch: Dispatch, getState: any) => {
        try {
            const State = getState();
            const allPosts = State?.State?.newsList || [];
            let url = `/news/related/${query.pid}?skip=${query.skip || 0}&limit=${query.limit || 10}`;
            const response = await getWithToken(url);
            console.log("response?.data?.data", response?.data?.data);
            if (response?.data?.data) {
                const result = response.data.data || [];
                let newData = [];
                if (query?.skip > 1) {
                    newData = [...allPosts, ...result];
                } else {
                    newData = [...result];
                }

                dispatch({
                    type: GET_RELATED_ARTICLES,
                    payload: newData || [],
                });
                return result;
            } else {
                return response;
            }
        } catch (error) {
            console.error("error", error);
        }
    };
};

export const GET_SEARCH_RESULT = "GET_SEARCH_RESULT";

export interface IGetSearchResultAction {
    type: typeof GET_SEARCH_RESULT;
    payload: IArticle[];
}

export const getSearchResultAction = (query: IQuery) => {
    return async (dispatch: Dispatch, getState: any) => {
        try {
            const State = getState();
            const allPosts = State?.State?.searchResult || [];
            let url = `/news/search/global/?terms=${query.search}&skip=${query.skip || 0}&limit=${query.limit || 10}`;
            const response = await getWithToken(url);
            if (response?.data?.data) {
                const result = response.data.data || [];
                let newData = [];
                if (query?.skip > 1) {
                    newData = [...allPosts, ...result];
                } else {
                    newData = [...result];
                }

                dispatch({
                    type: GET_SEARCH_RESULT,
                    payload: newData || [],
                });
                return result;
            } else {
                return response;
            }
        } catch (error) {
            if (query?.skip <= 1) {
                dispatch({
                    type: GET_SEARCH_RESULT,
                    payload: [],
                });
            }
            console.error("error", error);
        }
    };
};

export const loginAction = (payload: actionTypes.ILoginPayload) => {
    return async function () {
        try {
            const response = await postApi("token/ ", payload);

            if (response.status === 200) {
                const result = response.data;
                setCookie("token", `Bearer ${result.access_token}`);
                setCookie("refreshToken", `${result.refresh_token}`);
            } else {
                throw response;
            }
            return response;
        } catch (error: any) {
            console.log("error", error);
            throw error;
        }
    };
};

/** ------------ hastag report apis ------------------- */
export const GET_OTHER_TRENDING_HASHTAGS = "GET_OTHER_TRENDING_HASHTAGS";
export interface ITrendingHasthag {
    trend_name: string;
    count: number;
}

export interface IGetOtherTrendingHastagsAction {
    type: typeof GET_OTHER_TRENDING_HASHTAGS;
    payload: ITrendingHasthag[];
}
export const getOtherTrendingHastagsAction = (hashtag: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await getWithUrl(`${API_URL2}/tweets/hashtags?trend_id=${hashtag}`);
            if (response?.data?.Data) {
                dispatch({
                    type: GET_OTHER_TRENDING_HASHTAGS,
                    payload: response.data?.Data || [],
                });
                return response;
            } else {
                return [];
            }
        } catch (error) {
            console.error("error", error);
            throw error;
        }
    };
};

export const GET_HASHTAG_MENTIONS = "GET_HASHTAG_MENTIONS";
export interface IHashtagMention {
    username: string;
    count: number;
}

export interface IGetHashtagMentionsListAction {
    type: typeof GET_HASHTAG_MENTIONS;
    payload: IHashtagMention[];
}
export const getHashtagMentionsList = (hashtag: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await getWithUrl(`${API_URL2}/tweets/mentions?trend_id=${hashtag}`);
            if (response?.data?.Data) {
                dispatch({
                    type: GET_HASHTAG_MENTIONS,
                    payload: response.data?.Data || [],
                });
                return response;
            } else {
                return [];
            }
        } catch (error) {
            console.error("error", error);
            throw error;
        }
    };
};

export const GET_HASHTAG_RETWEETS = "GET_HASHTAG_RETWEETS";
export interface IHashtagRetweet {
    username: string;
    count: number;
}

export interface IGetHashtagRetweetsListAction {
    type: typeof GET_HASHTAG_RETWEETS;
    payload: IHashtagRetweet[];
}
export const getHashtagRetweetsList = (username: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await getWithUrl(`${API_URL2}/user/retweet/count?username=${username}`);
            if (response?.data?.Data) {
                dispatch({
                    type: GET_HASHTAG_RETWEETS,
                    payload: response.data?.Data || [],
                });
                return response;
            } else {
                return [];
            }
        } catch (error) {
            console.error("error", error);
            throw error;
        }
    };
};

export const GET_HASHTAG_ORGANIZATIONS = "GET_HASHTAG_ORGANIZATIONS";
export interface IHashtagOrganization {
    title: string;
    count: number;
}
export interface IGetHashtagOrganizationsListAction {
    type: typeof GET_HASHTAG_ORGANIZATIONS;
    payload: IHashtagOrganization[];
}
export const getHashtagOrganizationsList = (hashtag: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await getWithUrl(`${API_URL2}/tweets/organization?hashtag=${hashtag}`);
            if (response?.data?.Data) {
                dispatch({
                    type: GET_HASHTAG_ORGANIZATIONS,
                    payload: response.data?.Data || [],
                });
                return response;
            } else {
                return [];
            }
        } catch (error) {
            console.error("error", error);
            throw error;
        }
    };
};

export const GET_HASHTAG_POPULAR_TWEETS = "GET_HASHTAG_POPULAR_TWEETS";
export interface IHashtagPopularTweet {
    author_id: string;
    author_name: string;
    created_at: string;
    impression_count: number;
    like_count: number;
    reply_count: number;
    retweet_count: number;
    text: string;
    _id?: any;
}
export interface IGetHashtagPopularTweetsAction {
    type: typeof GET_HASHTAG_POPULAR_TWEETS;
    payload: IHashtagPopularTweet[];
}
export const getHashtagPopularTweetsList = (hashtag: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await getWithUrl(`${API_URL2}/tweets/popular_tweet?trend_id=${hashtag}`);
            if (response?.data?.Data) {
                dispatch({
                    type: GET_HASHTAG_POPULAR_TWEETS,
                    payload: response.data?.Data || [],
                });
                return response;
            } else {
                return [];
            }
        } catch (error) {
            console.error("error", error);
            throw error;
        }
    };
};

export const GET_HASHTAG_TWEET_SENTIMENTS = "GET_HASHTAG_TWEET_SENTIMENTS";
export const GET_HASHTAG_WORD_CLOUD = "GET_HASHTAG_WORD_CLOUD";
export interface IHashtagTweetSentiment {
    series: any[];
    categories: string[];
}
export interface IGetHashtagTweetSentimentsAction {
    type: typeof GET_HASHTAG_TWEET_SENTIMENTS;
    payload: IHashtagTweetSentiment;
}
export interface IWordCloudData {
    text: string;
    value: number;
}
export interface IGetHashtagWordCloudAction {
    type: typeof GET_HASHTAG_WORD_CLOUD;
    payload: IWordCloudData[];
}
export const getHashtagTweetSentiments = (hashtag: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await getWithUrl(`${API_URL2}/tweets/tweet_sentiment?trend_id=${hashtag}`);
            if (response?.data?.Data) {
                let result = {
                    series: Object.values(response.data.Data?.sentiment),
                    categories: Object.keys(response.data.Data?.sentiment),
                };
                dispatch({
                    type: GET_HASHTAG_TWEET_SENTIMENTS,
                    payload: result || {},
                });
                dispatch({
                    type: GET_HASHTAG_WORD_CLOUD,
                    payload: response?.data?.Data?.worldcloud?.map((item: any) => ({ text: item.word, value: item.count })) || [],
                });
                return response;
            } else {
                return {};
            }
        } catch (error) {
            console.error("error", error);
            throw error;
        }
    };
};

export const GET_HASHTAG_TWEET_FREQUENCY = "GET_HASHTAG_TWEET_FREQUENCY";
export interface IHashtagTweetFrequency {
    series: string[];
    categories: string[];
}
export interface IGetHashtagTweetFrequencyAction {
    type: typeof GET_HASHTAG_TWEET_FREQUENCY;
    payload: IHashtagTweetFrequency;
}
export const getHashtagTweetFrequency = (hashtag: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await getWithUrl(`${API_URL2}/tweets/daily_frequency?trend_id=${hashtag}`);
            if (response?.data?.Data) {
                let result = {
                    categories: Object.keys(response.data?.Data)
                        ?.reverse()
                        ?.map((item) => moment(item).format("DD MMM, yyyy")),
                    series: Object.values(response.data?.Data)?.reverse(),
                };
                dispatch({
                    type: GET_HASHTAG_TWEET_FREQUENCY,
                    payload: result || {},
                });
                return response;
            } else {
                return {};
            }
        } catch (error) {
            console.error("error", error);
            throw error;
        }
    };
};

export const GET_HASHTAG_TWEET_FREQUENCY_HOURLY = "GET_HASHTAG_TWEET_FREQUENCY_HOURLY";
export interface IHashtagTweetFrequencyHourly {
    series: string[];
    categories: string[];
}
export interface IGetHashtagTweetFrequencyHourlyAction {
    type: typeof GET_HASHTAG_TWEET_FREQUENCY_HOURLY;
    payload: IHashtagTweetFrequencyHourly;
}
export const getHashtagTweetFrequencyHourly = (hashtag: string, date: string) => {

    return async (dispatch: Dispatch) => {
        try {
            if (!date) {
                date = moment().format("yyyy-MM-DD");
            }
            const response = await getWithUrl(`${API_URL2}/tweets/hourly/freq/day?trend_id=${hashtag}&date=${date}`);
            if (response?.data?.Data) {
                let result = {
                    categories: response.data.Data.map((item: any) => item.time_in_hr),
                    series: response.data.Data.map((item: any) => item.count),
                };
                dispatch({
                    type: GET_HASHTAG_TWEET_FREQUENCY_HOURLY,
                    payload: result || {},
                });
                return response;
            } else {
                return {};
            }
        } catch (error) {
            console.error("error", error);
            throw error;
        }
    };
};

// places & langugage

export const GET_HASHTAG_PLACES = "GET_HASHTAG_PLACES";
export interface IHashtagPlace {
    title: string;
    count: number;
}
export interface IGetHashtagPlacesListAction {
    type: typeof GET_HASHTAG_PLACES;
    payload: IHashtagPlace[];
}
export const getHashtagPlacesList = (hashtag: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await getWithUrl(`${API_URL2}/tweets/places?trend_id=${hashtag}`);
            if (response?.data?.Data) {
                dispatch({
                    type: GET_HASHTAG_PLACES,
                    payload: response.data?.Data || [],
                });
                return response;
            } else {
                return [];
            }
        } catch (error) {
            console.error("error", error);
            throw error;
        }
    };
};

export const GET_HASHTAG_LANGUAGES = "GET_HASHTAG_LANGUAGES";
export interface IHashtagLanguage {
    title: string;
    count: number;
}
export interface IGetHashtagLanguagesListAction {
    type: typeof GET_HASHTAG_LANGUAGES;
    payload: IHashtagLanguage[];
}
export const getHashtagLanguagesList = (hashtag: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await getWithUrl(`${API_URL2}/tweets/languages?trend_id=${hashtag}`);
            if (response?.data?.Data) {
                dispatch({
                    type: GET_HASHTAG_LANGUAGES,
                    payload: response.data?.Data || [],
                });
                return response;
            } else {
                return [];
            }
        } catch (error) {
            console.error("error", error);
            throw error;
        }
    };
};

export const GET_HASHTAG_URLS = "GET_HASHTAG_URLS";
export interface IHashtagUrl {
    title: string;
    count: number;
}
export interface IGetHashtagUrlsListAction {
    type: typeof GET_HASHTAG_URLS;
    payload: IHashtagUrl[];
}
export const getHashtagUrlsList = (trend_id: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await getWithUrl(`${API_URL2}/tweets/urls?trend_id=${trend_id}`);
            if (response?.data?.Data) {
                dispatch({
                    type: GET_HASHTAG_URLS,
                    payload: response.data?.Data || [],
                });
                return response;
            } else {
                return [];
            }
        } catch (error) {
            console.error("error", error);
            throw error;
        }
    };
};

export const GET_HASHTAG_AUTHOR_LOCATIONS = "GET_HASHTAG_AUTHOR_LOCATIONS";
export interface IHashtagAuthorLocation {
    location: string;
    count: number;
}
export interface IGetHashtagAuthorLocationsListAction {
    type: typeof GET_HASHTAG_AUTHOR_LOCATIONS;
    payload: IHashtagAuthorLocation[];
}
export const getHashtagAuthorLocationsList = (hashtag: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await getWithUrl(`${API_URL2}/tweets/author/location/count/?trend_id=${hashtag}`);
            if (response?.data?.Data) {
                dispatch({
                    type: GET_HASHTAG_AUTHOR_LOCATIONS,
                    payload: response.data?.Data || [],
                });
                return response;
            } else {
                return [];
            }
        } catch (error) {
            console.error("error", error);
            throw error;
        }
    };
};

export const GET_HASHTAG_RETWEETED_USERS = "GET_HASHTAG_RETWEETED_USERS";
export interface IHashtagRetweetedUser extends IHashtagMention { }
export interface IGetHashtagRetweetedUsersListAction {
    type: typeof GET_HASHTAG_RETWEETED_USERS;
    payload: IHashtagRetweetedUser[];
}
export const getHashtagRetweetedUsersList = (hashtag: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await getWithUrl(`${API_URL2}/tweets/retweeted/users/?trend_id=${hashtag}`);
            if (response?.data?.Data) {
                dispatch({
                    type: GET_HASHTAG_RETWEETED_USERS,
                    payload: response.data?.Data || [],
                });
                return response;
            } else {
                return [];
            }
        } catch (error) {
            console.error("error", error);
            throw error;
        }
    };
};

export const GET_HASHTAG_ACTIVE_USERS = "GET_HASHTAG_ACTIVE_USERS";
export interface IHashtagActiveUser {
    username: string;
    count: number;
    profile_image_url: string;
}
export interface IGetHashtagActiveUsersListAction {
    type: typeof GET_HASHTAG_ACTIVE_USERS;
    payload: IHashtagActiveUser[];
}
export const getHashtagActiveUsersList = (hashtag: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await getWithUrl(`${API_URL2}/tweets/active/users/?trend_id=${hashtag}`);
            if (response?.data?.Data) {
                dispatch({
                    type: GET_HASHTAG_ACTIVE_USERS,
                    payload: response.data?.Data || [],
                });
                return response;
            } else {
                return [];
            }
        } catch (error) {
            console.error("error", error);
            throw error;
        }
    };
};

export const GET_HASHTAG_TRENDING_TWEETS = "GET_HASHTAG_TRENDING_TWEETS";
export interface IHashtagTrendingTweet {
    author_id: string;
    author_name: string;
    like_count: number;
    retweet_count: number;
    text: string;
    created_at: string;
    tweet_count: number;
    followers_count: number;
    following_count: number;
    profile_image_url: string;
}
export interface IGetHashtagTrendingTweetsListAction {
    type: typeof GET_HASHTAG_TRENDING_TWEETS;
    payload: IHashtagTrendingTweet[];
}
export const getHashtagTrendingTweetsList = (hashtag: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await getWithUrl(`${API_URL2}/tweets/trending/?trend_id=${hashtag}`);
            if (response?.data?.Data) {
                dispatch({
                    type: GET_HASHTAG_TRENDING_TWEETS,
                    payload: response.data?.Data || [],
                });
                return response;
            } else {
                return [];
            }
        } catch (error) {
            console.error("error", error);
            throw error;
        }
    };
};

export const GET_HASHTAG_TRENDING_MENTIONS = "GET_HASHTAG_TRENDING_MENTIONS";
export interface IHashtagTrendingMention {
    date: string;
    user_id: string;
    user_name: string;
    count: number;
}
export interface IGetHashtagTrendingMentionsListAction {
    type: typeof GET_HASHTAG_TRENDING_MENTIONS;
    payload: IHashtagTrendingMention[];
}
export const getHashtagTrendingMentionsList = (hashtag: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await getWithUrl(`${API_URL2}/tweets/trending/mentions/?trend_id=${hashtag}`);
            if (response?.data?.Data) {
                dispatch({
                    type: GET_HASHTAG_TRENDING_MENTIONS,
                    payload: response.data?.Data || [],
                });
                return response;
            } else {
                return [];
            }
        } catch (error) {
            console.error("error", error);
            throw error;
        }
    };
};

export const GET_HASHTAG_TRENDING_HASHTAGS = "GET_HASHTAG_TRENDING_HASHTAGS";
export interface IHashtagTrendingHashtag {
    hashtag: string;
    count: number;
    date: string;
}
export interface IGetHashtagTrendingHashtagsListAction {
    type: typeof GET_HASHTAG_TRENDING_HASHTAGS;
    payload: IHashtagTrendingHashtag[];
}
export const getHashtagTrendingHashtagsList = (hashtag: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await getWithUrl(`${API_URL2}/tweets/trending/hashtags/?trend_id=${hashtag}`);
            if (response?.data?.Data) {
                dispatch({
                    type: GET_HASHTAG_TRENDING_HASHTAGS,
                    payload: response.data?.Data || [],
                });
                return response;
            } else {
                return [];
            }
        } catch (error) {
            console.error("error", error);
            throw error;
        }
    };
};

export const GET_HASHTAG_AUTHOR_POST_COUNT = "GET_HASHTAG_AUTHOR_POST_COUNT";
export interface IHashtagAuthorPostCount {
    username: string;
    count: number;
}
export interface IGetHashtagAuthorPostCountsListAction {
    type: typeof GET_HASHTAG_AUTHOR_POST_COUNT;
    payload: IHashtagAuthorPostCount[];
}
export const getHashtagAuthorPostCountsList = (hashtag: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await getWithUrl(`${API_URL2}/tweets/authors/posts/count/?trend_id=${hashtag}`);
            if (response?.data?.Data) {
                dispatch({
                    type: GET_HASHTAG_AUTHOR_POST_COUNT,
                    payload: response.data?.Data || [],
                });
                return response;
            } else {
                return [];
            }
        } catch (error) {
            console.error("error", error);
            throw error;
        }
    };
};

export const GET_LINK_ANALYSIS_DATA = "GET_LINK_ANALYSIS_DATA";
export interface ILinkAnalysisData {
    nodes: any[];
    links: any[];
}
export interface IGetLinkAnalysisDataAction {
    type: typeof GET_LINK_ANALYSIS_DATA;
    payload: ILinkAnalysisData;
}
export interface ILinkAnalysisPayload {
    users: string[];
    trend_id: string;
}
export const getLinkAnalysisData = (payload: ILinkAnalysisPayload) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await postWithUrl(`${API_URL2}/user/userlinks`, payload);
            if (response?.data?.Data) {
                let result = {
                    nodes: response?.data?.Data[0] || [],
                    links: response?.data?.Data[1] || [],
                };
                dispatch({
                    type: GET_LINK_ANALYSIS_DATA,
                    payload: result,
                });
                return response;
            } else {
                dispatch({
                    type: GET_LINK_ANALYSIS_DATA,
                    payload: { nodes: [], links: [] },
                });
                return [];
            }
        } catch (error) {
            console.error("error", error);
            throw error;
        }
    };
};

export interface IClearHashtagReportsAction {
    type: typeof CLEAR_HASHTAG_REPORTS;
    payload: any;
}
export const CLEAR_HASHTAG_REPORTS = "CLEAR_HASHTAG_REPORTS";
export const clearHashtagReports = () => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: CLEAR_HASHTAG_REPORTS,
                payload: null,
            });
        } catch (error) {
            console.error("error", error);
            throw error;
        }
    };
};

export const GET_FOLLOWERS_LIST = "GET_FOLLOWERS_LIST";
export interface IFollowers {
    id: number;
    username: string;
    name: string;
    tweets: number;
    followers: number;
    following: number;
    listed: number;
    profile_image_url: string;
}
export interface IGetFollowersListAction {
    type: typeof GET_FOLLOWERS_LIST;
    payload: IFollowers[];
}

export const getFollowersLIst = (username: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await getWithUrl(`${API_URL2}/user/followers/list/?username=${username}`);
            if (response?.data?.Data) {
                dispatch({
                    type: GET_FOLLOWERS_LIST,
                    payload: response?.data?.Data,
                });
                return response;
            }
        } catch (error) {
            console.error("error", error);
            // dispatch({
            //     type: GET_FOLLOWERS_LIST,
            //     payload: followersList,
            // });
            throw error;
        }
    };
};

export const GET_USER_ACTIVITY = "GET_USER_ACTIVITY";
export interface IUserActivityData {
    tweets: number[];
    retweets: number[];
    categories: string[];
}
export interface IGetUserActivityData {
    type: typeof GET_USER_ACTIVITY;
    payload: IUserActivityData;
}

export const getUserActivityData = (username: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await getWithUrl(`${API_URL2}/user/activity/?username=${username}`);
            if (response?.data?.Data) {
                let result: any = {
                    tweets: [],
                    retweets: [],
                    categories: [],
                };
                response?.data?.Data?.forEach((item: any) => {
                    result.tweets.push(item.tweet_count);
                    result.retweets.push(item.retweet_count);
                    result.categories.push(item.date);
                });
                dispatch({
                    type: GET_USER_ACTIVITY,
                    payload: result,
                });
                return response;
            }
        } catch (error) {
            console.error("error", error);
            throw error;
        }
    };
};

export interface IMediaWall {
    url: string;
    replyCount: number;
    retweetCount: number;
    likeCount: number;
    quoteCount: number;
    media: {
        type: "video" | "image";
        mediaUrl: string;
        previewUrl: string;
        fullUrl: string;
        thumbnail: string;
        duration: number;
        views: number;
    }[];
    trendId: string;
    mediaType: number;
    fullName: string;
    postCreatedAt: number;
    profileBannerUrl: string;
    profilePic: string;
    userId: string;
    userName: string;
}
export const GET_MEDIA_WALLS = "GET_MEDIA_WALLS";
export interface IGetMediaWallsLIstAction {
    type: typeof GET_MEDIA_WALLS;
    payload: IMediaWall[];
}
export interface IHashtagDetailsPayload {
    trendLogId?: string;
    page?: number;
    search?: string;
}
export const getMediaWallsLIstAction = ({ trendLogId, page = 1 }: IHashtagDetailsPayload) => {
    return async (dispatch: Dispatch, getState: any) => {
        try {
            const State = getState();
            const allPosts = State?.HashtagReports?.mediaWalls || [];
            const response = await getWithToken(`/api/media/wall?trendLogId=${encodeURIComponent(String(trendLogId))}&page=${page}`);

            if (response?.data?.data) {
                const result = response.data.data || [];
                let newData = [];
                if (page > 1) {
                    newData = [...allPosts, ...result];
                } else {
                    newData = [...result];
                }
                dispatch({
                    type: GET_MEDIA_WALLS,
                    payload: newData,
                });
                return result;
            } else {
                if (page <= 1) {
                    dispatch({
                        type: GET_MEDIA_WALLS,
                        payload: [],
                    });
                }
                return [];
            }
        } catch (error) {
            console.error("error", error);
            throw error;
        }
    };
};

export const clearInitialData = (type: string) => {
    return async (dispatch: Dispatch, getState: any) => {
        switch (type) {
            case GET_MEDIA_WALLS:
                return dispatch({
                    type: GET_MEDIA_WALLS,
                    payload: [],
                });
            // case TOP_INFLUENCERS_LIST:
            //     return dispatch({
            //         type: TOP_INFLUENCERS_LIST,
            //         payload: [],
            //     });
            // case TOP_POSTS_LIST:
            //     return dispatch({
            //         type: TOP_POSTS_LIST,
            //         payload: [],
            //     });
            // case TOP_PROFILES_LIST:
            //     return dispatch({
            //         type: TOP_PROFILES_LIST,
            //         payload: [],
            //     });
            default:
                return null;
        }
    };
};

export interface ITopInfluencer {
    userId: string;
    userName: string;
    displayname: string;
    description: string;
    rawDescription: string;
    descriptionUrls: string[];
    verified: boolean;
    followersCount: number;
    friendsCount: number;
    statusesCount: number;
    favouritesCount: number;
    listedCount: number;
    mediaCount: number;
    location: string;
    protected: boolean;
    linkUrl: string;
    linkTcourl: string;
    profileImageUrl: string;
    profileBannerUrl: string;
    fetched_time: number;
    createdAt: number;
    botProbability: number;
}
export const TOP_INFLUENCERS_LIST = "TOP_INFLUENCERS_LIST";
export interface IGetTopInfluencerListAction {
    type: typeof TOP_INFLUENCERS_LIST;
    payload: ITopInfluencer[];
}
export const getTopInfluencerListAction = ({ trendLogId, page = 1, search }: IHashtagDetailsPayload) => {
    return async (dispatch: Dispatch, getState: any) => {
        try {
            const State = getState();
            const allPosts = State?.HashtagReports?.topInfluencers || [];
            let url = `/api/top/users?trendLogId=${encodeURIComponent(String(trendLogId))}&page=${page}`;
            if (search) {
                url = `${url}&search=${search}`;
            }

            const response = await getWithToken(url);
            if (response?.data?.data) {
                const result = response.data.data || [];
                let newData = [];
                if (page > 1) {
                    newData = [...allPosts, ...result];
                } else {
                    newData = [...result];
                }
                dispatch({
                    type: TOP_INFLUENCERS_LIST,
                    payload: newData,
                });
                return result;
            } else {
                if (page <= 1) {
                    dispatch({
                        type: TOP_INFLUENCERS_LIST,
                        payload: [],
                    });
                }
                return [];
            }
        } catch (error) {
            console.error("error", error);
            throw error;
        }
    };
};

export const postNewTweet = (payload: any) => {
    return async (dispatch: Dispatch, getState: any) => {
        try {
            const response = await postWithToken(`lambda-ops`, payload);

            return response;
        } catch (error) {
            console.error("error", error);
            throw error;
        }
    };
};

export const GET_GROUPS_LIST = "GET_GROUPS_LIST";

export interface GetGroupAction {
    skip?: number;
    limit?: number;
}

export interface IgetGroupTweetAction {
    type: typeof GET_GROUPS_LIST;
    payload: GetGroupAction;
}

export const getGroupTweetAction = (payload: GetGroupAction) => {
    return async (dispatch: Dispatch, getState: any) => {
        try {
            const State = getState();
            const response = await getWithToken("/groups");
            if (response?.data?.data) {
                const result = response.data.data || [];

                dispatch({
                    type: GET_GROUPS_LIST,
                    payload: result || [],
                });
                return result;
            } else {
                return response;
            }
        } catch (error) {
            console.error("error", error);
        }
    };
};

export const getGroupFacebookAction = (payload: GetGroupAction) => {
    return async (dispatch: Dispatch, getState: any) => {
        try {
            const State = getState();
            const response = await getWithToken("/facebook/groups");
            if (response?.data?.data) {
                const result = response.data.data || [];
                dispatch({
                    type: GET_GROUPS_LIST,
                    payload: result || [],
                });
                return result;
            } else {
                return response;
            }
        } catch (error) {
            console.error("error", error);
        }
    };
};

export const GET_ACCOUNT_LIST = "GET_ACCOUNT_LIST";

export interface GetAccount {
    skip?: number;
    limit?: number;
    accountType: string;
}

export interface IGetAccountAction {
    type: typeof GET_ACCOUNT_LIST;
    payload: GetAccount;
}

export const getAccountAction = (payload: GetAccount) => {
    return async (dispatch: Dispatch, getState: any) => {
        try {
            const State = getState();
            let url = `accounts?account_type=${payload.accountType}&skip=${payload.skip ?? 0}&limit=${payload.limit ?? 10}`;
            const response = await getWithToken(url);
            console.log("accountreasponse", response);
            if (response?.data?.data) {
                const result = response.data.data || [];
                dispatch({
                    type: GET_ACCOUNT_LIST,
                    payload: result || [],
                });
                return response;
            } else {
                dispatch({
                    type: GET_ACCOUNT_LIST,
                    payload: [],
                });
            }
        } catch (error) {
            console.error("error", error);
        }
    };
};

export const DELETE_GROUPS = "DELETE_GROUPS";

export interface DeleteGroup {
    id?: string;
}

export interface IDELETE_GROUPS {
    type: typeof DELETE_GROUPS;
    payload: DeleteGroup;
}

export const deleteGroupAction = (payload: DeleteGroup) => {
    return async (dispatch: Dispatch, getState: any) => {
        try {
            const State = getState();
            const response = await deleteWithToken("groups", payload);

            return response;
        } catch (error) {
            console.error("error", error);
        }
    };
};

export const GETNOW_TRENDING = "GETNOW_TRENDING";

export interface NowTrending {
    query: string;
}

export interface INowTrendingAction {
    type: typeof GETNOW_TRENDING;
    payload: ITrendingLocationPost[];
}
export interface ITrendingLocationPost {
    name: string;
    promoted_content: string;
    query: string;
    tweet_volume: number;
    url: string;
}

export const getNowTrending = (payload: NowTrending) => {
    return async (dispatch: Dispatch, getState: any) => {
        try {
            // let url = `trending_location?query=${payload.query}`;
            let url = `https://api.social.searcher.com/v2/97996cbd196c844ef2a1cc354918e10c&network=twitter&q=${payload.query}`

            const response = await getAnyUrlWithToken(url);
            if (response?.data?.data) {
                let trending_topics = response?.data?.data?.[0]?.trending_topics;

                if (trending_topics?.length) {
                    dispatch({
                        type: GETNOW_TRENDING,
                        payload: trending_topics,
                    });
                }
                return response;
            } else {
                dispatch({
                    type: GETNOW_TRENDING,
                    payload: [],
                });
            }
        } catch (error) {
            console.error("error", error);
            dispatch({
                type: GETNOW_TRENDING,
                payload: [],
            });
        }
    };
};

export const GET_HASHTAG_CAMPAIGN_LIST = "GET_HASHTAG_CAMPAIGN_LIST";
export interface IHashtagCampaign {
    _id: string;
    id?: string;
    name: string;
    new: number;
    verified: number;
    ghost: number;
    organic: number;
    startDateEpoch: string;
    endDateEpoch: string;
    endDate: string | number;
    startDate: string | number;
    status?: number;
    staged?: boolean;
}
export interface IGetHashtagCampaignListAction {
    type: typeof GET_HASHTAG_CAMPAIGN_LIST;
    payload: IHashtagCampaign[];
}
export const getHashtagCampaignListAction = () => {
    return async function (dispatch: Dispatch) {
        try {
            const response = await getWithToken(`/campaign/analysis?campaignType=2`);
            if (response.status === 200) {
                const result = response.data?.data;

                dispatch({
                    type: GET_HASHTAG_CAMPAIGN_LIST,
                    payload: result,
                });
            } else {
                throw response;
            }
            return "response";
        } catch (error: any) {
            console.log("error", error);
            throw error;
        }
    };
};

export interface ILikeTweetPayload {
    tweet_ids: string[];
    // "user_name" : "manisha"
}
export const likeTweetAction = (payload: ILikeTweetPayload) => {
    return async function (dispatch: Dispatch) {
        try {
            const response = await postWithToken(`/likes`, payload);

            return response;
        } catch (error: any) {
            console.log("error", error);
            throw error;
        }
    };
};

export const reTweetAction = (payload: ILikeTweetPayload) => {
    return async function (dispatch: Dispatch) {
        try {
            const response = await postWithToken(`/retweets`, payload);

            return response;
        } catch (error: any) {
            console.log("error", error);
            throw error;
        }
    };
};

export interface ICommentPayload {
    tweet_ids: string[];
    comments: string[];
    user_name?: string;
}
export const commentAction = (payload: ICommentPayload) => {
    return async function (dispatch: Dispatch) {
        try {
            const response = await postWithToken(`/replies`, payload);

            return response;
        } catch (error: any) {
            console.log("error", error);
            throw error;
        }
    };
};

export const GET_TWEET_SEARCH_LIST = "GET_TWEET_SEARCH_LIST";
export interface ITweetSearchListAction {
    type: typeof GET_TWEET_SEARCH_LIST;
    payload: ITweetArticle[];
}
export const getTweetSearchAction = () => {
    return async function (dispatch: Dispatch) {
        try {
            const response = await getWithToken(`/tweets?skip=0&limit=10&status=1`);
            if (response.status === 200) {
                const result = response.data?.data;

                dispatch({
                    type: GET_TWEET_SEARCH_LIST,
                    payload: result,
                });
            } else {
                throw response;
            }
            return "response";
        } catch (error: any) {
            console.log("error", error);
            throw error;
        }
    };
};

export const GET_TWEET_LIKES = "GET_TWEET_LIKES";
export interface ITweetLikeItem {
    group_id: string;
    group_name: string;
    region: string;
    source: string;
    tweet_creation_time: string;
    tweet_id: string;
    tweet_operation_status: number;
    user: string;
}
export interface ITweetLikesAction {
    type: typeof GET_TWEET_LIKES;
    payload: ITweetLikeItem[];
}
export const getTweetLikesAction = ({ skip = 0, limit = 10, region_ids = "" }) => {
    return async function (dispatch: Dispatch) {
        try {
            const response = await getWithToken(`/likes?skip=${skip || 0}&limit=${limit || 10}&region_ids=${region_ids}`);
            if (response.status === 200) {
                const result = response.data?.data;

                dispatch({
                    type: GET_TWEET_LIKES,
                    payload: result,
                });
            } else {
                throw response;
            }
            return response?.data;
        } catch (error: any) {
            console.log("error", error);
            throw error;
        }
    };
};
export const getReTweetAction = ({ skip = 0, limit = 10, region_ids = "" }) => {
    return async function (dispatch: Dispatch) {
        try {
            const response = await getWithToken(`/retweets?skip=${skip || 0}&limit=${limit || 10}&region_ids=${region_ids}`);
            if (response.status === 200) {
                const result = response.data?.data;

                dispatch({
                    type: GET_TWEET_LIKES,
                    payload: result,
                });
            } else {
                throw response;
            }
            return response?.data;
        } catch (error: any) {
            console.log("error", error);
            throw error;
        }
    };
};

export const GET_TWEET_REPLY = "GET_TWEET_REPLY";
export interface ITweetReplyItem {
    group_id: string;
    group_name: string;
    region: string;
    source: string;
    tweet_creation_time: string;
    tweet_id: string;
    tweet_operation_status: number;
    user: string;
}
export interface ITweetReplyAction {
    type: typeof GET_TWEET_REPLY;
    payload: ITweetReplyItem[];
}
export const getTweetReplyAction = ({ skip = 0, limit = 10, region_ids = "" }) => {
    return async function (dispatch: Dispatch) {
        try {
            const response = await getWithToken(`replies?skip=${skip || 0}&limit=${limit || 10}&region_ids=${region_ids}`);
            if (response.status === 200) {
                const result = response.data?.data;
                dispatch({
                    type: GET_TWEET_REPLY,
                    payload: result,
                });
            } else {
                throw response;
            }
            return response?.data;
        } catch (error: any) {
            console.log("error", error);
            throw error;
        }
    };
};

export const GET_REPORT = "GET_REPORT ";

export interface report {

    query?: string;

}

export interface IGetReportAction {
    type: typeof GET_REPORT;
    payload: report;
    report: any;
}

export const getReportAction = (payload: report) => {
    return async (dispatch: Dispatch, getState: any) => {
        try {
            const State = getState();
            let url = `get_tweets?query=${payload.query}`
            const response = await getWithToken(url)

            console.log(response.data.sentiment_kpi)
            console.log('reasponse', response.data.data.sentiment_kpi)
            if (response?.data?.data) {
                const result = response.data.data || [];
                dispatch({
                    type: GET_REPORT,
                    payload: result || [],
                });
                return response;
            } else {
                dispatch({
                    type: GET_REPORT,
                    payload: [],
                });
            }
        } catch (error) {
            console.error("error", error);
        }
    };
};

export const GET_HASHTAG_REPORT = "GET_HASHTAG_REPORT ";

export interface hashtagreport {
    hashtag?: string;

}

export interface IGetHashtagReportAction {
    type: typeof GET_HASHTAG_REPORT;
    payload: hashtagreport;
    hashtagreport: any;
}

export const gethashtagReportAction = (payload: hashtagreport) => {
    return async (dispatch: Dispatch, getState: any) => {
        try {
            const State = getState();

            let url = `get_tweets?hashtag=${encodeURIComponent(payload.hashtag)}&number_of_tweets=50&since_date=${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`
            const response = await getWithToken(url)

            console.log(response.data.sentiment_kpi)
            console.log('reasponse', response.data.data.sentiment_kpi)
            if (response?.data?.data) {
                const result = response.data.data || [];
                dispatch({
                    type: GET_HASHTAG_REPORT,
                    payload: result || [],
                });
                return response;
            } else {
                dispatch({
                    type: GET_HASHTAG_REPORT,
                    payload: [],
                });
            }
        } catch (error) {
            console.error("error", error);
        }
    };
};


export const GET_TWEET_REPORT = "GET_TWEET_REPORT";


export interface tweetreport {

    start_date: string;
    end_date: string;

}

export interface IGetTweetReportAction {

    type: typeof GET_TWEET_REPORT
    payload: tweetreport;
    tweetreport: any;
}

export const getTweetReportAction = (payload: tweetreport) => {


    return async (dispatch: Dispatch, getState: any) => {
        try {
            const State = getState();
            let url = `hashtag-analytics?region_id&account_id&start_date=${payload.start_date}&end_date=${payload.start_date}`
            const response = await getWithToken(url)
            if (response?.data) {
                const result = response?.data.message || [];

                dispatch({
                    type: GET_TWEET_REPORT || [],
                    payload: result
                });

                return response;
            } else {
                dispatch({
                    type: GET_TWEET_REPORT,
                    payload: [],
                });
            }
        } catch (error) {
            console.error("error", error);
        }
    };
};

function setData() {
    throw new Error("Function not implemented.");
}
export interface ITrenidngPost {
    text: string;
    lang: string;
    sentiment: string;
    network: string;
    postid: string;
    type: string;
    user: {
        userid: string;
        url: string;
        name: string;
        image: string;
        location: string;
        influence: {
            name: string;
            count: number;
        };
        description: string;
    };
    url: string;
    tags: string[];
    image: string;
    popularity: [
        {
            name: string;
            count: number;
        },
        {
            name: string;
            count: number;
        }
    ];
    user_mentions: [
        {
            url: string;
            text: string;
        }
    ];
    posted: string;
    urls: string[];
    place: any;
}
export const GET_TRENDING_POSTS = "GET_TRENDING_POSTS";
export interface IGetTrendingPostAction {
    type: typeof GET_TRENDING_POSTS;
    payload: ITrenidngPost[];
}
export interface IHashtagDetailsPayload {
    trendLogId?: string;
    page?: number;
    search?: string;
}
export const getTrendingPostsAction = (payload: IHashtagDetailsPayload) => {
    return async (dispatch: Dispatch, getState: any) => {
        try {
            const State = getState();
            const allPosts = State?.HashtagReports?.mediaWalls || [];
            const response = await getWithUrl(
                `https://api.social-searcher.com/v2/trends?key=97996cbd196c844ef2a1cc354918e10c&network=twitter&q=${payload.search}`
            );

            if (response?.data) {
                const result = response.data?.data
                console.log(response, 'kkkkkkkkkkkccccccccccc')
                let newData = [];
                if (payload?.page > 1) {
                    newData = [...allPosts, ...result];
                } else {
                    newData = [...result];
                }
                dispatch({
                    type: GET_MEDIA_WALLS,
                    payload: newData,
                });
                return result;
            } else {
                if (payload.page <= 1) {
                    dispatch({
                        type: GET_MEDIA_WALLS,
                        payload: [],
                    });
                }
                return [];
            }
        } catch (error) {
            console.error("error", error);
            throw error;
        }
    };
};







export const GET_DASHBOARD_REPORT = "GET_DASHBOARD_REPORT";



export interface IGetDashboardReportAction {

    type: typeof GET_DASHBOARD_REPORT;
    payload: any
}

export const getDashboardReportAction = () => {
    return async (dispatch: Dispatch, getState: any) => {
        try {
            const State = getState();

            const response = await getWithToken("active-users")


            if (response?.data) {
                const result = response?.data.message || [];
                console.log(result, "dashbaord")
                dispatch({
                    type: GET_DASHBOARD_REPORT || [],

                    payload: result
                });
                return response;
            } else {
                dispatch({
                    type: GET_DASHBOARD_REPORT,
                    payload: []
                });
            }
        } catch (error) {
            console.error("error", error);
        }
    };
};


export const GET_DASHBOARD_CARD = "GET_GET_DASHBOARD_CARD";

export interface card {
    region_id: string,
    account_id: string,
    start_date: String,
    end_date: String

}

export interface IGetDashboardCARDAction {

    type: typeof GET_DASHBOARD_CARD;
    payload: card
}

export const getDashboardCARDAction = (payload: card) => {
    return async (dispatch: Dispatch, getState: any) => {
        try {
            const State = getState();


            let url = `analytics?region_id=&account_id=&start_date=${payload.start_date}&end_date=${payload.end_date}`
            const response = await getWithToken(url)


            if (response?.data) {
                const result = response?.data.message || [];
                console.log(result, "dashbaord -card")
                dispatch({
                    type: GET_DASHBOARD_CARD || [],

                    payload: result
                });
                return response;
            } else {
                dispatch({
                    type: GET_DASHBOARD_CARD,
                    payload: []
                });
            }
        } catch (error) {
            console.error("error", error);
        }
    };
};

export const GET_WORLDCLOUD_DATA = "GET_WORLDCLOUD_DATA";

export interface Woldcloud {
    region_id: string,
    start_date: String,
    end_date: String

}

export interface IGetWorldCloudAction {

    type: typeof GET_WORLDCLOUD_DATA;
    payload: Woldcloud
}

export const getWorldCloudAction = (payload: Woldcloud) => {
    return async (dispatch: Dispatch, getState: any) => {
        try {
            const State = getState();
            let url = `wordcloud?region_id=&start_date=${payload.start_date}&end_date=${payload.end_date}`

            const response = await getWithToken(url)
            //  console.log(response , "worldclod")

            if (response?.data) {
                const result = response?.data.data || [];
                console.log(result, "worldclod")
                dispatch({
                    type: GET_WORLDCLOUD_DATA || [],

                    payload: result
                });
                return response;
            } else {
                dispatch({
                    type: GET_WORLDCLOUD_DATA,
                    payload: []
                });
            }
        } catch (error) {
            console.error("error", error);
        }
    };
};


export const GET_USERTWEET_DATA = "GET_USERTWEET_DATA";

export interface usertweet {
    region_id: string,
    account_id: string,
    start_date: String,
    end_date: String

}

export interface IGetUserTweetAction {

    type: typeof GET_USERTWEET_DATA;
    payload: usertweet
}

export const getUserTweetAction = (payload: usertweet) => {
    return async (dispatch: Dispatch, getState: any) => {
        try {
            const State = getState();
            let url = `analytics?region_id=${payload.region_id}&account_id=${payload.account_id}&start_date=${payload.start_date}&end_date=${payload.end_date}
            `
            const response = await getWithToken(url)
            // console.log(response, "tweet by user")

            if (response?.data) {
                const result = response?.data.message || [];

                console.log(result, "tweet by user")
                dispatch({
                    type: GET_DASHBOARD_CARD || [],

                    payload: result
                });
                return response;
            } else {
                dispatch({
                    type: GET_DASHBOARD_CARD,
                    payload: []
                });
            }
        } catch (error) {
            console.error("error", error);
        }
    };
};



export const GET_USER_DATA = "GET_USER_DATA";

export interface user {
    region_id: string,
    start_date: string,
    end_date: string

}

export interface IGetUserDataction {

    type: typeof GET_USER_DATA;
    payload: user
}

export const getUserDataction = (payload: user) => {
    return async (dispatch: Dispatch, getState: any) => {
        try {
            const State = getState();
            let url = `/active-users?region_id=${payload.region_id}&start_date=${payload.start_date}&end_date=${payload.end_date}`
            const response = await getWithToken(url)
            console.log(response, "dashboarduser")

            if (response?.data) {
                const result = response?.data.message || [];
                console.log(result, "dashbaord-user")
                dispatch({
                    type: GET_DASHBOARD_REPORT || [],
                    payload: result
                });
                return response;
            } else {
                dispatch({
                    type: GET_DASHBOARD_REPORT,
                    payload: []
                });
            }
        } catch (error) {
            console.error("error", error);
        }
    };
};


export const sentimentColor = {

    Positive: 'text-success',
    Negative: 'text-danger',
    Neutral: 'text-warning',
}
