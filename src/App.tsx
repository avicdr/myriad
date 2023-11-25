import { Switch } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./hoc/Layout";
import Dashboard from "./views/Twitter/Dashboard/Dashboard";
import Tweet from "./views/Twitter/TweetSmart/Normal/Tweet";
import Comments from "./views/Twitter/TweetSmart/Normal/Comments";
import Retweets from "./views/Twitter/TweetSmart/Normal/Retweets";
import Draft from "./views/Twitter/TweetSmart/Normal/Draft";
import TweetStatus from "./views/Twitter/TweetSmart/Status/TweetStats";
import CommentsStatus from "./views/Twitter/TweetSmart/Status/CommentsStats";
import RetweetsStatus from "./views/Twitter/TweetSmart/Status/RetweetsStats";
import LikesStatus from "./views/Twitter/TweetSmart/Status/LikeStats";
import DraftStatus from "./views/Twitter/TweetSmart/Status/DraftStats";
import Groups from "./views/Twitter/Accounts/Groups";
import AddGroup from "./views/Twitter/Accounts/AddGroup";
import Accounts from "./views/Twitter/Accounts/Accounts"
import AddAccount from "./views/Twitter/Accounts/AddAccount";
import Todo from "./views/Twitter/Tasks/Todo";
import TrendingPosts from "./views/Twitter/Trending/Posts";
import TrendingTopics from "./views/Twitter/Trending/Topic";
import SearchProfile from "./views/Twitter/Search/SearchProfile";
import ContactAdmin from "./views/Twitter/Contact/ContactAdmin";
import ProfileAnalysis from "./views/Twitter/Search/ProfileAnalysis";
import Follow from "./views/Twitter/FollowUnfollow/Follow";
import UnFollow from "./views/Twitter/FollowUnfollow/Unfollow";
import Report from "./views/Twitter/HashTag/Report";
import MediaWall from "./views/Twitter/HashTag/MediaWall";
import Reports from "./views/Twitter/Reports/Reports";
import AiTweet from "./views/Twitter/AiUser/Normal/Tweet";
import AiComments from "./views/Twitter/AiUser/Normal/Comments";
import AiRetweets from "./views/Twitter/AiUser/Normal/Retweets";
import AiDraft from "./views/Twitter/AiUser/Normal/Draft";
import Tweetaction from "./views/Twitter/HashTag/TweetAction"
import Worldcloud from "./views/Twitter/HashTag/Wordcloud"
import AiTweetStatus from "./views/Twitter/AiUser/Status/TweetStats";
import AiCommentsStatus from "./views/Twitter/AiUser/Status/CommentsStats";
import AiRetweetsStatus from "./views/Twitter/AiUser/Status/RetweetsStats";
import AiLikesStatus from "./views/Twitter/AiUser/Status/LikeStats";
import AiDraftStatus from "./views/Twitter/AiUser/Status/DraftStats";
import EditGroup from "./views/Twitter/Accounts/Edit";



import FaceDashboard from "./views/Facebook/Dashboard/Dashboard";
import FaceTweet from "./views/Facebook/PostSmart/Normal/Post";
import FaceComments from "./views/Facebook/PostSmart/Normal/Comments";
import FaceRetweets from "./views/Facebook/PostSmart/Normal/Share";
import FaceDraft from "./views/Facebook/PostSmart/Normal/Draft";
import FaceTweetStatus from "./views/Facebook/PostSmart/Status/PostStats";
import FaceCommentsStatus from "./views/Facebook/PostSmart/Status/CommentsStats";
import FaceRetweetsStatus from "./views/Facebook/PostSmart/Status/ShareStats";
import FaceLikesStatus from "./views/Facebook/PostSmart/Status/LikeStats";
import FaceDraftStatus from "./views/Facebook/PostSmart/Status/DraftStats";
import FaceGroups from "./views/Facebook/Accounts/Groups";
import FaceAddGroup from "./views/Facebook/Accounts/AddGroup";
import FaceAccounts from "./views/Facebook/Accounts/Accounts";
import FaceAddAccount from "./views/Facebook/Accounts/AddAccount";
import FaceTodo from "./views/Facebook/Tasks/Todo";
import FaceTrendingPosts from "./views/Facebook/Trending/Posts";
import FaceTrendingTopics from "./views/Facebook/Trending/Topic";
import FaceSearchProfile from "./views/Facebook/Search/SearchProfile";
import FaceContactAdmin from "./views/Facebook/Contact/ContactAdmin";
import FaceProfileAnalysis from "./views/Facebook/Search/ProfileAnalysis";
import FaceFollow from "./views/Facebook/FollowUnfollow/Follow";
import FaceUnFollow from "./views/Facebook/FollowUnfollow/Unfollow";
import FaceReport from "./views/Facebook/HashTag/Report";
import FaceMediaWall from "./views/Facebook/HashTag/MediaWall";
import FaceReports from "./views/Facebook/Reports/Reports";
import FaceAiTweet from "./views/Facebook/AiUser/Normal/Post";
import FaceAiComments from "./views/Facebook/AiUser/Normal/Comments";
import FaceAiRetweets from "./views/Facebook/AiUser/Normal/Share";
import FaceAiDraft from "./views/Facebook/AiUser/Normal/Draft";
import EditAccount from "./views/Twitter/Accounts/EditAccount";
import InstaDashboard from "./views/Instagram/Dashboard/Dashboard";
import InstaTweet from "./views/Instagram/PostSmart/Normal/Post";
import InstaComments from "./views/Instagram/PostSmart/Normal/Comments";
import InstaRetweets from "./views/Instagram/PostSmart/Normal/Share";
import InstaDraft from "./views/Instagram/PostSmart/Normal/Draft";
import InstaTweetStatus from "./views/Instagram/PostSmart/Status/PostStats";
import InstaCommentsStatus from "./views/Instagram/PostSmart/Status/CommentsStats";
import InstaRetweetsStatus from "./views/Instagram/PostSmart/Status/ShareStats";
import InstaLikesStatus from "./views/Instagram/PostSmart/Status/LikeStats";
import InstaDraftStatus from "./views/Instagram/PostSmart/Status/DraftStats";
import InstaGroups from "./views/Instagram/Accounts/Groups";
import InstaAddGroup from "./views/Instagram/Accounts/AddGroup";
import InstaAccounts from "./views/Instagram/Accounts/Accounts";
import InstaAddAccount from "./views/Instagram/Accounts/AddAccount";
import InstaTodo from "./views/Instagram/Tasks/Todo";
import InstaTrendingPosts from "./views/Instagram/Trending/Posts";
import InstaTrendingTopics from "./views/Instagram/Trending/Topic";
import InstaSearchProfile from "./views/Instagram/Search/SearchProfile";
import InstaContactAdmin from "./views/Instagram/Contact/ContactAdmin";
import InstaProfileAnalysis from "./views/Instagram/Search/ProfileAnalysis";
import InstaFollow from "./views/Instagram/FollowUnfollow/Follow";
import InstaUnFollow from "./views/Instagram/FollowUnfollow/Unfollow";
import InstaReport from "./views/Instagram/HashTag/Report";
import InstaMediaWall from "./views/Instagram/HashTag/MediaWall";
import InstaReports from "./views/Instagram/Reports/Reports";
import InstaAiTweet from "./views/Instagram/AiUser/Normal/Post";
import InstaAiComments from "./views/Instagram/AiUser/Normal/Comments";
import InstaAiRetweets from "./views/Instagram/AiUser/Normal/Share";
import InstaAiDraft from "./views/Instagram/AiUser/Normal/Draft";

import AllTweet from "./views/All Plateforms/PostSmart/Normal/Post";
import AllGroups from "./views/All Plateforms/Accounts/Groups";
import AllAddGroup from "./views/All Plateforms/Accounts/AddGroup";
import Allaccounts from "./views/All Plateforms/Accounts/Accounts";
import AllAddAccount from "./views/All Plateforms/Accounts/AddAccount";
import LoginPage from "./views/LoginPage";
import TopUser from "./views/Twitter/HashTag/TopUser";
import SearchHashtag from "./views/Twitter/HashTag/SearchHashtag";

export default function App() {
  const isAuthenticated = localStorage.getItem("isAuthenticated")

  return (
    <Router>
      <div id="App" className="App">
        <div id="top-cont-id"></div>
        <Switch>
          {isAuthenticated !== "true" ?
            <Route path="/*">
              <LoginPage />
            </Route>
            : <div className="w-100">
              <Layout>
                <Route exact path="/">
                  <Dashboard />
                </Route>
                <Route path={"/twitter/tweetsmart/tweet"}>
                  <Tweet />
                </Route>
                <Route path={"/twitter/tweetsmart/comments"}>
                  <Comments />
                </Route>
                <Route path={"/twitter/tweetsmart/retweets"}>
                  <Retweets />
                </Route>
                <Route path={"/twitter/tweetsmart/draft"}>
                  <Draft tweetsList={undefined} length={undefined} />
                </Route>
                <Route path={"/twitter/Aiuser/tweet"}>
                  <AiTweet />
                </Route>
                <Route path={"/twitter/Aiuser/comments"}>
                  <AiComments />
                </Route>
                <Route path={"/twitter/Aiuser/retweets"}>
                  <AiRetweets />
                </Route>
                <Route path={"/twitter/Aiuser/draft"}>
                  <AiDraft />
                </Route>
                <Route path={"/twitter/tweetsmart/status/tweets"}>
                  <TweetStatus />
                </Route>
                <Route path={"/twitter/tweetsmart/status/comments"}>
                  <CommentsStatus />
                </Route>
                <Route path={"/twitter/tweetsmart/status/retweets"}>
                  <RetweetsStatus />
                </Route>
                <Route path={"/twitter/tweetsmart/status/likes"}>
                  <LikesStatus />
                </Route>
                <Route path={"/twitter/tweetsmart/status/draft"}>
                  <DraftStatus />
                </Route>
                <Route path={"/twitter/accounts/groups"}>
                  <Groups />
                </Route>
                <Route path={"/twitter/accounts/addgroup"}>
                  <AddGroup />
                </Route>
                <Route path={"/twitter/accounts/editgroup"}>
            <EditGroup />
           </Route>
                <Route path={"/twitter/accounts/accounts"}>
                  <Accounts />
                </Route>
                <Route path={"/twitter/accounts/addaccount"}>
                  <AddAccount />
                </Route>
               
              <Route path={"/twitter/accounts/editaccount"}>
                <EditAccount />
                 </Route>
                <Route path={"/twitter/tasks/todo"}>
                  <Todo />
                </Route>
                <Route path={"/twitter/trending/posts"}>
                  <TrendingPosts />
                </Route>
                <Route path={"/twitter/trending/topics"}>
                  <TrendingTopics />
                </Route>
                <Route path={"/twitter/search/profile"}>
                  <SearchProfile />
                </Route>
                <Route path={"/twitter/search/analysis"}>
                  <ProfileAnalysis />
                </Route>
                <Route path={"/twitter/actions/follow"}>
                  <Follow />
                </Route>
                <Route path={"/twitter/analysis/reports"}>
                  <Report />
                </Route>
                <Route path={"/twitter/analysis/search-hashtag"}>
                  <SearchHashtag />
                </Route>
                <Route path={"/twitter/analysis/mediawall"}>
                  <MediaWall />
                </Route>
                <Route path={"/twitter/reports"}>
                  <Reports />
                </Route>
                <Route path={"/twitter/actions/unfollow"}>
                  <UnFollow />
                </Route>
                <Route path={"/twitter/contactadmin/contact"}>
                  <ContactAdmin />
                </Route>
                <Route path={"/twitter/analysis/topuser"}>
                  <TopUser />
                </Route>
                <Route path={"/twitter/analysis/tweetaction"}>
                  <Tweetaction />
                </Route>
                <Route path={"/twitter/analysis/worldcloud"}>
                  <Worldcloud />
                </Route>
                <Route path={"/twitter/Aiuser/status/tweets"}>
                  <AiTweetStatus />
                </Route>
                <Route path={"/twitter/Aiuser/status/comments"}>
                  <AiCommentsStatus />
                </Route>
                <Route path={"/twitter/Aiuser/status/retweets"}>
                  <AiRetweetsStatus />
                </Route>
                <Route path={"/twitter/Aiuser/status/likes"}>
                  <AiLikesStatus />
                </Route>
                <Route path={"/twitter/Aiuser/status/draft"}>
                  <AiDraftStatus />
                </Route>
                      
                      {/* Facebook */}

                <Route exact path="/facebook/dashboard">
                  <FaceDashboard />
                </Route>
                <Route path={"/facebook/PostSmart/post"}>
                  <FaceTweet />
                </Route>
                <Route path={"/facebook/PostSmart/comments"}>
                  <FaceComments />
                </Route>
                <Route path={"/facebook/PostSmart/share"}>
                  <FaceRetweets />
                </Route>
                <Route path={"/facebook/PostSmart/draft"}>
                  <FaceDraft />
                </Route>
                <Route path={"/facebook/PostSmart/status/post"}>
                  <FaceTweetStatus />
                </Route>
                <Route path={"/facebook/PostSmart/status/comments"}>
                  <FaceCommentsStatus />
                </Route>
                <Route path={"/facebook/PostSmart/status/share"}>
                  <FaceRetweetsStatus />
                </Route>
                <Route path={"/facebook/PostSmart/status/likes"}>
                  <FaceLikesStatus />
                </Route>
                <Route path={"/facebook/PostSmart/status/draft"}>
                  <FaceDraftStatus />
                </Route>
                <Route path={"/facebook/accounts/groups"}>
                  <FaceGroups />
                </Route>
                <Route path={"/facebook/accounts/addgroup"}>
                  <FaceAddGroup />
                </Route>
                <Route path={"/facebook/accounts/accounts"}>
                  <FaceAccounts />
                </Route>
                <Route path={"/facebook/accounts/addaccount"}>
                  <FaceAddAccount />
                </Route>
                <Route path={"/facebook/tasks/todo"}>
                  <FaceTodo />
                </Route>
                <Route path={"/facebook/trending/posts"}>
                  <FaceTrendingPosts />
                </Route>
                <Route path={"/facebook/trending/topics"}>
                  <FaceTrendingTopics />
                </Route>
                <Route path={"/facebook/search/profile"}>
                  <FaceSearchProfile />
                </Route>
                <Route path={"/facebook/search/analysis"}>
                  <FaceProfileAnalysis />
                </Route>
                <Route path={"/facebook/actions/follow"}>
                  <FaceFollow />
                </Route>
                <Route path={"/facebook/analysis/reports"}>
                  <FaceReport />
                </Route>
                <Route path={"/facebook/analysis/mediawall"}>
                  <FaceMediaWall />
                </Route>
                <Route path={"/facebook/reports"}>
                  <FaceReports />
                </Route>
                <Route path={"/facebook/actions/unfollow"}>
                  <FaceUnFollow />
                </Route>
                <Route path={"/facebook/contactadmin/contact"}>
                  <FaceContactAdmin />
                </Route>

                <Route path={"/facebook/Aiuser/post"}>
                  <FaceAiTweet />
                </Route>
                <Route path={"/facebook/Aiuser/comments"}>
                  <FaceAiComments />
                </Route>
                <Route path={"/facebook/Aiuser/share"}>
                  <FaceAiRetweets />
                </Route>
                <Route path={"/facebook/Aiuser/draft"}>
                  <FaceAiDraft />
                </Route>

                           {/* Instagram */}

                <Route exact path="/instagram/dashboard">
                  <InstaDashboard />
                </Route>
                <Route path={"/instagram/PostSmart/post"}>
                  <InstaTweet />
                </Route>
                <Route path={"/instagram/PostSmart/comments"}>
                  <InstaComments />
                </Route>
                <Route path={"/instagram/PostSmart/share"}>
                  <InstaRetweets />
                </Route>
                <Route path={"/instagram/PostSmart/draft"}>
                  <InstaDraft />
                </Route>
                <Route path={"/instagram/PostSmart/status/post"}>
                  <InstaTweetStatus />
                </Route>
                <Route path={"/instagram/PostSmart/status/comments"}>
                  <InstaCommentsStatus />
                </Route>
                <Route path={"/instagram/PostSmart/status/share"}>
                  <InstaRetweetsStatus />
                </Route>
                <Route path={"/instagram/PostSmart/status/likes"}>
                  <InstaLikesStatus />
                </Route>
                <Route path={"/instagram/PostSmart/status/draft"}>
                  <InstaDraftStatus />
                </Route>
                <Route path={"/instagram/accounts/groups"}>
                  <InstaGroups />
                </Route>
                <Route path={"/instagram/accounts/addgroup"}>
                  <InstaAddGroup />
                </Route>
                <Route path={"/instagram/accounts/accounts"}>
                  <InstaAccounts />
                </Route>
                <Route path={"/instagram/accounts/addaccount"}>
                  <InstaAddAccount />
                </Route>
                <Route path={"/instagram/tasks/todo"}>
                  <InstaTodo />
                </Route>
                <Route path={"/instagram/trending/posts"}>
                  <InstaTrendingPosts />
                </Route>
                <Route path={"/instagram/trending/topics"}>
                  <InstaTrendingTopics />
                </Route>
                <Route path={"/instagram/search/profile"}>
                  <InstaSearchProfile />
                </Route>
                <Route path={"/instagram/search/analysis"}>
                  <InstaProfileAnalysis />
                </Route>
                <Route path={"/instagram/actions/follow"}>
                  <InstaFollow />
                </Route>
                <Route path={"/instagram/analysis/reports"}>
                  <InstaReport />
                </Route>
                <Route path={"/instagram/analysis/mediawall"}>
                  <InstaMediaWall />
                </Route>
                <Route path={"/instagram/reports"}>
                  <InstaReports />
                </Route>
                <Route path={"/instagram/actions/unfollow"}>
                  <InstaUnFollow />
                </Route>
                <Route path={"/instagram/contactadmin/contact"}>
                  <InstaContactAdmin />
                </Route>
                <Route path={"/instagram/Aiuser/post"}>
                  <InstaAiTweet />
                </Route>
                <Route path={"/instagram/Aiuser/comments"}>
                  <InstaAiComments />
                </Route>
                <Route path={"/instagram/Aiuser/share"}>
                  <InstaAiRetweets />
                </Route>
                <Route path={"/instagram/Aiuser/draft"}>
                  <InstaAiDraft />
                </Route>


      {/* All Patforms */}

                <Route path={"/allplateforms/PostSmart/post"}>
                  <AllTweet />
                </Route>
                <Route path={"/allplateforms/accounts/groups"}>
                  <AllGroups />
                </Route>
                <Route path={"/allplateforms/accounts/addgroup"}>
                  <AllAddGroup />
                </Route>
                <Route path={"/allplateforms/accounts/accounts"}>
                  <Allaccounts />
                </Route>
                <Route path={"/allplateforms/accounts/addaccount"}>
                  <AllAddAccount />
                </Route>
              </Layout>
            </div>}
        </Switch>
      </div>
    </Router>
  );
}