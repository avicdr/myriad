import { combineReducers } from "redux";
import * as actionTypes from "../action";
import { HashtagReportReducer, IHashtagReports } from "./hashtag-reports.reducer";

export interface IState {
    language: string;
    totalCount: number;
    page: number;
    tweetsList: actionTypes.ITweetArticle[];
    reportList: actionTypes.IReport[] | actionTypes.IArticle[];
    postDetail: actionTypes.IPostDetail;
    newsList: actionTypes.INewsDetails[];
    homepageData: actionTypes.IHomepageData;
    relatedArticles: actionTypes.IArticle[];
    reportArticles: actionTypes.IReportedArticle[];
    searchResult: actionTypes.IArticle[];
    hashtagCampaignsList: actionTypes.IHashtagCampaign[];
    tweetLikes: actionTypes.ITweetLikeItem[];
    tweetReply: actionTypes.ITweetReplyItem[];
    groupslist: any;
    DELETE_GROUPS: any;
    accountlist: any;
    creategroup: any;
    trendingPosts: actionTypes.ITrendingLocationPost[];
    report: any;
    hashtagreport:any
    tweetsreport: any;
    dashboradreport: any;
    card: any;
    worldcloud: any;
    userreport:any;


}

const InitialState: IState = {
    language: "en",
    newsList: [],
    tweetsList: [],
    homepageData: null,
    page: 1,
    totalCount: 100,
    reportList: [],
    postDetail: null,
    relatedArticles: [],
    reportArticles: [],
    searchResult: [],
    hashtagCampaignsList: [],
    tweetLikes: [],
    tweetReply: [],
    groupslist: [],
    DELETE_GROUPS: null,
    accountlist: [],
    creategroup: [],
    trendingPosts: null,
    report: [],
    hashtagreport:[],
    tweetsreport: [],
    dashboradreport: [],
    card: [],
    worldcloud: [],
    userreport: [],
    

};

const stateReducer = (State: IState = InitialState, action: IActionTypes): IState => {



    switch (action.type) {
        case actionTypes.REPORTS_LIST:
            return {
                ...State,
                reportList: action.payload,
            };
        case actionTypes.POST_DETAIL:
            return {
                ...State,
                postDetail: action.payload,
            };
        case actionTypes.GET_RELATED_ARTICLES:
            return {
                ...State,
                relatedArticles: action.payload,
            };
        case actionTypes.GET_REPORT_ARTICLES:
            return {
                ...State,
                reportArticles: action.payload,
            };
        case actionTypes.GET_SEARCH_RESULT:
            return {
                ...State,
                searchResult: action.payload,
            };
        case actionTypes.GET_HASHTAG_CAMPAIGN_LIST:
            return {
                ...State,
                hashtagCampaignsList: action.payload,
            };
        case actionTypes.GET_TWEET_LIKES:
            return {
                ...State,
                tweetLikes: action.payload,
            };
        case actionTypes.GET_TWEET_REPLY:
            return {
                ...State,
                tweetReply: action.payload,
            };
        case actionTypes.GET_ACCOUNT_LIST:
            return {
                ...State,
                accountlist: action.payload,
            };

        case actionTypes.GETNOW_TRENDING:
            return {
                ...State,
                trendingPosts: action.payload,
            };
        case actionTypes.GET_GROUPS_LIST:
            return {
                ...State,
                groupslist: action.payload,
            };
        case actionTypes.DELETE_GROUPS:
            return {
                ...State,
                DELETE_GROUPS: action.payload,
            };
        case actionTypes.GET_TWEETS_LIST:
            return {
                ...State,
                tweetsList: action.payload,
            };
        case actionTypes.GET_REPORT:
            return {
                ...State,
                report: action.payload,
            };

        case actionTypes.GET_TWEET_REPORT
            :
            return {
                ...State,
                tweetsreport: action.payload,
            };

        case actionTypes.GET_DASHBOARD_REPORT
            :
            return {
                ...State,
                dashboradreport: action.payload,
            };
        case actionTypes.GET_DASHBOARD_CARD
            :
            return {
                ...State,
                card: action.payload,
            };

        case actionTypes.GET_WORLDCLOUD_DATA
            :
            return {
                ...State,
                worldcloud: action.payload,
            };

        case actionTypes.GET_DASHBOARD_CARD
            :
            return {
                ...State,
                card: action.payload,
            };
            case actionTypes.GET_HASHTAG_REPORT
            :
            return {
                ...State,
                hashtagreport: action.payload,
            };

            case actionTypes.GET_USER_DATA
            :
            return {
                ...State,
                userreport: action.payload,
            };
        default:
            return State;
    }
};

export const reducers = () =>
    combineReducers<ReduxStore>({
        State: stateReducer,
        HashtagReports: HashtagReportReducer,
    });

export interface ReduxStore {
    State: IState;
    HashtagReports: IHashtagReports;
}
//  export const reducer = () =>
//     combineReducers<ReduxStore>({
//         State: stateReducer,
//     });

export interface ReduxStore {
    State: IState;
}
export type IActionTypes =
    | actionTypes.UiLanguageChangeAction
    | actionTypes.IGetNewsByCategoryAction
    | actionTypes.IGetTweetsAction
    | actionTypes.IReportArticleAction
    | actionTypes.IGetReportsAction
    | actionTypes.IPostDetailAction
    | actionTypes.IGetHomepageDataAction
    | actionTypes.IGetRelatedArticlesAction
    | actionTypes.IGetReportArticlesAction
    | actionTypes.IGetHashtagCampaignListAction
    | actionTypes.ITweetLikesAction
    | actionTypes.ITweetReplyAction
    | actionTypes.IGetSearchResultAction
    | actionTypes.IgetGroupTweetAction
    | actionTypes.IDELETE_GROUPS
    | actionTypes.IGetAccountAction
    | actionTypes.INowTrendingAction
    | actionTypes.IGetReportAction
    | actionTypes.IGetTweetReportAction
    | actionTypes.IGetDashboardReportAction
    | actionTypes.IGetDashboardCARDAction
    | actionTypes.IGetWorldCloudAction
    | actionTypes.IGetHashtagReportAction
    | actionTypes.IGetUserDataction;
