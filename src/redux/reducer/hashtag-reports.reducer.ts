import * as actionTypes from "../action";

export interface IHashtagReports {
    topInfluencers: actionTypes.ITopInfluencer[];

    mediaWalls: actionTypes.IMediaWall[];
    otherTrendingHastags: actionTypes.ITrendingHasthag[];
    hashtagMentions: actionTypes.IHashtagMention[];
    hashtagOrganizations: actionTypes.IHashtagOrganization[];
    hashtagTweetSentiments: actionTypes.IHashtagTweetSentiment | null;
    hashtagPopularTweets: actionTypes.IHashtagPopularTweet[];
    hashtagTweetFrequency: actionTypes.IHashtagTweetFrequency | null;
    hashtagTweetFrequencyHourly: actionTypes.IHashtagTweetFrequencyHourly | null;
    hashtagLanguages: actionTypes.IHashtagLanguage[];
    hashtagPlaces: actionTypes.IHashtagPlace[];
    hashtagUrls: actionTypes.IHashtagUrl[];
    hashtagRetweets: actionTypes.IHashtagRetweet[];
    hashtagAuthorLocations: actionTypes.IHashtagAuthorLocation[];
    wordCloud: actionTypes.IWordCloudData[];
    linkAnalysisData: actionTypes.ILinkAnalysisData;
    followers: actionTypes.IFollowers[];
    userActivityData: actionTypes.IUserActivityData | null;
    hashtagRetweetedUsers: actionTypes.IHashtagRetweetedUser[];
    hashtagActiveUsers: actionTypes.IHashtagActiveUser[];
    hashtagTrendingTweets: actionTypes.IHashtagTrendingTweet[];
    hashtagTrendingMentions: actionTypes.IHashtagTrendingMention[];
    hashtagTrendingHashtags: actionTypes.IHashtagTrendingHashtag[];
    hashtagAuthorPostCounts: actionTypes.IHashtagAuthorPostCount[];
}

const InitialState: IHashtagReports = {
    topInfluencers: [],
    mediaWalls: [],
    otherTrendingHastags: [],
    hashtagMentions: [],
    hashtagOrganizations: [],
    hashtagPopularTweets: [],
    hashtagTweetSentiments: null,
    hashtagTweetFrequency: null,
    hashtagTweetFrequencyHourly: null,
    hashtagPlaces: [],
    hashtagLanguages: [],
    hashtagUrls: [],
    wordCloud: [],
    linkAnalysisData: { links: [], nodes: [] },
    hashtagRetweets: [],
    followers: [],
    userActivityData: null,
    hashtagAuthorLocations: [],
    hashtagRetweetedUsers: [],
    hashtagActiveUsers: [],
    hashtagTrendingTweets: [],
    hashtagTrendingMentions: [],
    hashtagTrendingHashtags: [],
    hashtagAuthorPostCounts: [],
};

export const HashtagReportReducer = (State: IHashtagReports = InitialState, action: IActionTypes): IHashtagReports => {
    switch (action.type) {
        case actionTypes.GET_OTHER_TRENDING_HASHTAGS:
            return {
                ...State,
                otherTrendingHastags: action.payload,
            };
        case actionTypes.GET_HASHTAG_MENTIONS:
            return {
                ...State,
                hashtagMentions: action.payload,
            };
        case actionTypes.GET_HASHTAG_ORGANIZATIONS:
            return {
                ...State,
                hashtagOrganizations: action.payload,
            };
        case actionTypes.GET_HASHTAG_PLACES:
            return {
                ...State,
                hashtagPlaces: action.payload,
            };
        case actionTypes.GET_HASHTAG_LANGUAGES:
            return {
                ...State,
                hashtagLanguages: action.payload,
            };
        case actionTypes.GET_HASHTAG_URLS:
            return {
                ...State,
                hashtagUrls: action.payload,
            };
        case actionTypes.GET_HASHTAG_POPULAR_TWEETS:
            return {
                ...State,
                hashtagPopularTweets: action.payload,
            };
        case actionTypes.GET_HASHTAG_TWEET_SENTIMENTS:
            return {
                ...State,
                hashtagTweetSentiments: action.payload,
            };
        case actionTypes.GET_HASHTAG_TWEET_FREQUENCY:
            return {
                ...State,
                hashtagTweetFrequency: action.payload,
            };
        case actionTypes.GET_HASHTAG_TWEET_FREQUENCY_HOURLY:
            return {
                ...State,
                hashtagTweetFrequencyHourly: action.payload,
            };
        case actionTypes.GET_HASHTAG_WORD_CLOUD:
            return {
                ...State,
                wordCloud: action.payload,
            };
        case actionTypes.GET_LINK_ANALYSIS_DATA:
            return {
                ...State,
                linkAnalysisData: action.payload,
            };
        case actionTypes.GET_HASHTAG_RETWEETS:
            return {
                ...State,
                hashtagRetweets: action.payload,
            };
        case actionTypes.GET_FOLLOWERS_LIST:
            return {
                ...State,
                followers: action.payload,
            };
        case actionTypes.GET_USER_ACTIVITY:
            return {
                ...State,
                userActivityData: action.payload,
            };
        case actionTypes.GET_HASHTAG_AUTHOR_LOCATIONS:
            return {
                ...State,
                hashtagAuthorLocations: action.payload,
            };
        case actionTypes.GET_HASHTAG_RETWEETED_USERS:
            return {
                ...State,
                hashtagRetweetedUsers: action.payload,
            };
        case actionTypes.GET_HASHTAG_ACTIVE_USERS:
            return {
                ...State,
                hashtagActiveUsers: action.payload,
            };
        case actionTypes.GET_HASHTAG_TRENDING_TWEETS:
            return {
                ...State,
                hashtagTrendingTweets: action.payload,
            };
        case actionTypes.GET_HASHTAG_TRENDING_MENTIONS:
            return {
                ...State,
                hashtagTrendingMentions: action.payload,
            };
        case actionTypes.GET_HASHTAG_TRENDING_HASHTAGS:
            return {
                ...State,
                hashtagTrendingHashtags: action.payload,
            };
        case actionTypes.GET_HASHTAG_AUTHOR_POST_COUNT:
            return {
                ...State,
                hashtagAuthorPostCounts: action.payload,
            };
        case actionTypes.CLEAR_HASHTAG_REPORTS:
            return {
                ...State,
                otherTrendingHastags: [],
                hashtagMentions: [],
                hashtagOrganizations: [],
                hashtagPlaces: [],
                hashtagLanguages: [],
                hashtagUrls: [],
                hashtagPopularTweets: [],
                hashtagTweetSentiments: null,
                hashtagTweetFrequency: null,
                hashtagTweetFrequencyHourly: null,
                wordCloud: [],
                hashtagAuthorLocations: [],
                hashtagRetweetedUsers: [],
                hashtagActiveUsers: [],
                hashtagTrendingTweets: [],
                hashtagTrendingMentions: [],
                hashtagTrendingHashtags: [],
                hashtagAuthorPostCounts: [],
            };
        case actionTypes.GET_MEDIA_WALLS:
            return {
                ...State,
                mediaWalls: action.payload,
            };
        default:
            return State;
    }
};








export type IActionTypes =
    | actionTypes.IGetHashtagActiveUsersListAction
    | actionTypes.IGetHashtagTrendingTweetsListAction
    | actionTypes.IGetHashtagTrendingMentionsListAction
    | actionTypes.IGetHashtagTrendingHashtagsListAction
    | actionTypes.IGetHashtagAuthorPostCountsListAction
    | actionTypes.IGetOtherTrendingHastagsAction
    | actionTypes.IGetHashtagMentionsListAction
    | actionTypes.IGetHashtagOrganizationsListAction
    | actionTypes.IGetHashtagPopularTweetsAction
    | actionTypes.IGetHashtagTweetSentimentsAction
    | actionTypes.IGetHashtagTweetFrequencyAction
    | actionTypes.IGetHashtagTweetFrequencyHourlyAction
    | actionTypes.IGetHashtagLanguagesListAction
    | actionTypes.IGetHashtagUrlsListAction
    | actionTypes.IGetHashtagWordCloudAction
    | actionTypes.IGetHashtagPlacesListAction
    | actionTypes.IGetHashtagRetweetsListAction
    | actionTypes.IGetLinkAnalysisDataAction
    | actionTypes.IGetFollowersListAction
    | actionTypes.IGetUserActivityData
    | actionTypes.IClearHashtagReportsAction
    | actionTypes.IGetHashtagRetweetedUsersListAction
    | actionTypes.IGetMediaWallsLIstAction
    | actionTypes.IGetHashtagAuthorLocationsListAction
    | actionTypes.IGetTopInfluencerListAction;
