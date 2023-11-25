import { getWithToken, postWithToken, deleteWithToken, commonHeader, postApi } from "./request";
import axios from "axios";
import { PagerLoader } from "./rxSubjects";
import { setCookie } from "./cookie";
import { errorPopup, successPopup, warningPopup, infoPopup } from "./popupMsg"
import { toast } from "react-toastify";
export const startLoader = () => {
  return PagerLoader.next(true);
};

export const stopLoader = () => {
  return PagerLoader.next(false);
};

export const loginAction = (username: string, password: string) => {
  return async function () {
    try {
      const response = await axios.post("token/", {
        username,
        password,
      });

      if (response.status === 200) {
        const result = response.data;
        setCookie("refreshToken", `${result.refresh}`);
        setCookie("token", `Bearer ${result.access}`);
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

// DEVELOPER ACCOUNT ADDING

export const postDevData = async (
  name: string,
  group_id: number,
  group_name: string,
  access_token: string,
  access_key: string,
  secret_token: string,
  secret_key: string,
  bearer_token: string,
  account_type: string
): Promise<void> => {
  const data: Record<string, string | number> = {
    name: name,
    group_id: group_id,
    group_name: group_name,
    access_token: access_token,
    access_key: access_key,
    secret_token: secret_token,
    secret_key: secret_key,
    bearer_token: bearer_token,
    account_type: account_type,
  };

  try {
    await postWithToken("accounts", data);
    successPopup("Account added successfully")
  } catch (error) {
    errorPopup("Error while adding account")
  }
};

// USER ACCOUNT ADDING

export const postUserData = async (
  name: string,
  group_id: number,
  groupName: string,
  userName: string,
  email: string,
  password: string,
  mobile_number: string,
  account_type: string
): Promise<void> => {
  const data = {
    name: name,
    group_id: group_id,
    group_name: groupName,
    username: userName,
    email: email,
    password: password,
    mobile_number: mobile_number,
    account_type: account_type,
  };

  try {
    await axios.post('https://api-twitter.digitemtech.com/api/accounts', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    successPopup('Account added successfully');
  } catch (error) {
    errorPopup('Error while adding account');
  }
};

// POPULATE GROUP SELECT OPTION WITH GROUPS

export const populateGroupSelect = async (elementId: string): Promise<void> => {
  try {
    const response = await getWithToken("groups");
    const data = response.data;
    const select = document.getElementById(elementId) as HTMLSelectElement;

    if (select != null) {
      const options = [
        `<option value="">Select Group</option>`,
        `<option value="all">Select All</option>`,
        ...data.data?.map(
          (group: { id: string; name: string }) =>
            `<option key="${group.id}" value="${group.id}">
              ${group.name}
            </option>`
        ),
      ].join("");

      select.innerHTML = options;
    }
  } catch (error) {
    console.log(error);
  }
};

// // POPULATE ACCOUNT SELECT OPTION WITH GROUPS

export const populateUserSelect = async (
  elementId: string,
  groupID: string,
): Promise<void> => {
  try {
    const response = await axios.get(
      `https://api-twitter.digitemtech.com/api/accounts?group_list=["${groupID}"]`,
      {
        headers: commonHeader,
      }
    );
    const data = response.data.data;
    const select = document.getElementById(elementId) as HTMLSelectElement;
    select.innerHTML = ""
    if (select != null) {
      const options = [
        `<option value="">Select User</option>`,
        ...data?.map(
          (account: { id: string; name: string }) =>
            `<option key="${account.id}" value="${account.id}">
                ${account.name}
              </option>`
        ),
      ].join("");

      select.innerHTML = options;
    }
  } catch (error) {
    if (error.status === 404) {
      const select = document.getElementById(elementId) as HTMLSelectElement;
      select.innerHTML = '<option value="">No accounts found</option>';
    }
  }
};

// POPULATE ACTIVE ACCOUNTS SECTION IN ACCOUNTS AND GROUPS

export const populateAccounts = async (elementId: string): Promise<void> => {
  try {
    const response = await getWithToken(
      "accounts?skip=0&account_type=user&limit=10"
    );

    const data = response.data;
    const item = document.getElementById(elementId);

    const options = [
      ...data.data?.map(
        (account, key) =>
          `<div class="detailItemStats justify-content-between">
            <div class="index item" id=${account.id}>${key + 1}</div>
            <div class="name item w-16">${account.name}</div>
            <div class="tweet item w-30">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, neque in pretium dignissim, lacus mi porttitor lectus, vel ultricies sem eros sed mauris. Donec et just
            </div>
            <div class="location item w-16">${account.group}</div>
            <div class="actions item w-16 d-flex justify-content-center">
                <div>
                  <Image
                    src="https://static.thenounproject.com/png/3391373-200.png"
                    alt="none"
                    />
                </div>
                <div onclick="deleteAccount('${account.id}')">
                  <Image
                    src="https://img.icons8.com/material-rounded/256/trash.png"
                    alt="none"
                    />
                </div>
            </div>
          </div>`
      ),
    ].join("");

    if (item) {
      item.innerHTML = options;
    }
  } catch (error) {
    // console.log(error);
  }
};

// DELETE AN ACCOUNT

export const deleteAccount = async (id: string): Promise<void> => {
  try {
    await deleteWithToken("accounts", { id: id });
    console.log(`Account with id ${id} has been deleted.`);
  } catch (error) {
    console.error(`Failed to delete account with id ${id}. Error:`, error);
  }
};

// ADD A GROUP

export const addGroup = async (
  group_name: string,
  group_region: string,
  group_url: string
): Promise<void> => {
  const data: Record<string, string | number> = {
    name: group_name,
    region: group_region,
    url: group_url,
  };

  try {
    await axios.post('https://api-twitter.digitemtech.com/api/groups', data, {
      headers: commonHeader,
    });
    successPopup("Group added successfully");

  } catch (error) {
    errorPopup("Error while adding group")
  }
};

// DELETE A GROUP

// export const deleteGroup = async (id: string): Promise<void> => {
//   try {
//     await deleteWithToken("groups", { id: id });
//     console.log(`Group with id ${id} has been deleted.`);
//   } catch (error) {
//     console.error(`Failed to delete Group with id ${id}. Error:`, error);
//   }
// };

// POPULATE GROUPS IN ACCOUNTS AND GROUPS SECTION

export const populateGroups = async (elementId: string): Promise<void> => {
  try {
    const response = await axios.get("https://api-twitter.digitemtech.com/api/groups", { headers: commonHeader });
    const data = response.data;
    const select = document.getElementById(elementId);

    const options = [
      ...data.data?.map(
        (group, key) =>
          `<div class="detailItemStats justify-content-between">
            <div class="index item" id=${key}>${key + 1}</div>
            <div class="text-center item">${group.name}</div>
            <div class="item w-25">
            </div>
            <div class="location item w-12">${group.region}</div>
            <div class="timeStamp item">20</div>
            <div class="actions item w-12 d-flex justify-content-center">
              <div>
                <Image
                  src="https://static.thenounproject.com/png/3391373-200.png"
                  alt="none"
                  class="w_20px"/>
              </div>
              <div id=${group.id} onclick="">
                <Image
                  src="https://img.icons8.com/material-rounded/256/trash.png"
                  alt="none"
                  class="w_20px"/>
              </div>
            </div>
          </div>`
      ),
    ].join("");


    select.innerHTML = options;
  } catch (error) {
    console.log(error);
  }
};


// PROFILE SEARCH HANDLING IN FOLLOW, SEARCH PROFILE, UNFOLLOW

export const handleProfileSearch = async (
  query: string,
  setProfileBanner: React.Dispatch<React.SetStateAction<any[]>>,
  setProfilePicture: React.Dispatch<React.SetStateAction<any[]>>,
  setProfileName: React.Dispatch<React.SetStateAction<any[]>>,
  setUsername: React.Dispatch<React.SetStateAction<any[]>>,
  setFollowers: React.Dispatch<React.SetStateAction<any[]>>,
  setFollowing: React.Dispatch<React.SetStateAction<any[]>>,
  setProfileDescription: React.Dispatch<React.SetStateAction<any[]>>
): Promise<void> => {
  const url = `profile_search?query=${query}`;
  try {
    startLoader()
    const response = await getWithToken(url);
    setProfileBanner(
      response.data.data.profile_details.profile_background_image_url_https
    );
    setProfilePicture(
      response.data.data.profile_details.profile_image_url_https
    );
    setProfileName(response.data.data.profile_details.user_name);
    setUsername(response.data.data.profile_details.screen_name);
    setFollowers(response.data.data.profile_details.followers_count);
    setFollowing(response.data.data.profile_details.friends_count)
    setProfileDescription(response.data.data.profile_details.description);
    stopLoader()
  } catch (error) {
    stopLoader()
    errorPopup(query ? `profile "${query}" not found` : `profile  not found`)
    console.error(error);
  }
};

// POPULATE LANGUAGE SELECT IN TWEET SMART TWEET TRANSLATION

export const populateLanguageSelect = async (): Promise<void> => {
  try {
    const response = await getWithToken("language");
    const data = response.data;

    const options = Object.entries(data.data)
      .map(
        ([key, value]) =>
          `<option key="${value}" value="${value}">
          ${key}
        </option>`
      )
      .join("");

    const fromSelects = document.querySelectorAll(
      ".fromLanguage"
    ) as NodeListOf<HTMLSelectElement>;
    fromSelects.forEach((select) => {
      select.innerHTML = `<option value="">From Language</option>` + options;
    });

    const toSelects = document.querySelectorAll(
      ".toLanguage"
    ) as NodeListOf<HTMLSelectElement>;
    toSelects.forEach((select) => {
      select.innerHTML = `<option value="">To Language</option>` + options;
    });
  } catch (error) {
    console.log(error);
  }
};

// POPULATE LIKES STATUS SECTION

export const getLikes = async (
  elementId: string,
  setTotalLikes: React.Dispatch<React.SetStateAction<any[]>>,
  lowerLimit: number,
  upperLimit: number
): Promise<void> => {
  try {
    const response = await getWithToken(
      `likes?skip=${lowerLimit}&limit=${upperLimit}`
    );
    const data = response.data;
    const element = document.getElementById(elementId);

    const options = [
      ...data.data?.map(
        (item, key) =>
          `<div key=${key + 1} id=${item.tweet_id}>
          <div class="detailItemStats justify-content-between">
            <div class="dropArrow">
              <img
                src="https://static.thenounproject.com/png/1123247-200.png"
                alt="none"
                onclick="const statsElem = event.currentTarget.closest('.detailItemStats').nextElementSibling; const detailStatsElem = event.currentTarget.closest('.detailItemStats'); statsElem.style.display = statsElem.style.display === 'none' ? 'flex' : 'none'; detailStatsElem.style.backgroundColor = detailStatsElem.style.backgroundColor === 'rgb(221, 242, 255)' ? '#FFFFFF' : '#DDF2FF'; statsElem.style.marginBottom = statsElem.style.marginBottom === '1rem' ? '0' : '1rem';"
              />
            </div>
            <div class="index item">${key + 1}</div>
            <div class="name item w-12-5">${item.user}</div>
            <div class="location item w-12-5">${item.region}</div>
            <div class="tweetType item w-12-5">Media</div>
            <div class="tweetStatus item w-12-5">${item.tweet_operation_status
          }</div>
            <div class="timeStamp item w-12-5">${item.tweet_creation_time}</div>
            <div class="actions item w-12-5">
              <img
                src="https://static.thenounproject.com/png/718767-200.png"
                alt="none"
                onclick="const statsElem = event.currentTarget.closest('.detailItemStats').nextElementSibling; const detailStatsElem = event.currentTarget.closest('.detailItemStats'); statsElem.style.display = statsElem.style.display === 'none' ? 'flex' : 'none'; detailStatsElem.style.backgroundColor = detailStatsElem.style.backgroundColor === 'rgb(221, 242, 255)' ? '#FFFFFF' : '#DDF2FF'; statsElem.style.marginBottom = statsElem.style.marginBottom === '1rem' ? '0' : '1rem';"
              />
              <img
                src="https://img.icons8.com/material-rounded/256/trash.png"
                alt="none"
              />
            </div>
          </div>
          <div class="stats p-2" style="display: none">
              <h6 class="ml-3 mr-3">Tweet Statistics:</h6>
              <h6>Comments: </h6>
              <p class="fntSz16 mt_10px light-green ml-5 mr-5">2</p>
              <h6>Retweets: </h6>
              <p class="fntSz16 mt_10px red ml-5 mr-5">2</p>
              <h6>Likes: </h6>
              <p class="fntSz16 mt_10px red ml-5 mr-5">10</p>
              <h6>Edits: </h6>
              <p class="fntSz<h22 mt_10px orange ml-5 mr-5">10</p>
            </div>
        </div>`
      ),
    ].join("");
    setTotalLikes(data.total_count);
    element.innerHTML = options;
  } catch (error) {
    console.log(error);
  }
};

// PARAPHRASING TEXT IN TWEET SMART

export const paraphraseText = async (
  text: string,
  setParaphrasedText: React.Dispatch<React.SetStateAction<any[]>>
): Promise<void> => {
  try {
    const response = await postWithToken("paraphrasing", { text: text });
    const data = response.data;
    setParaphrasedText(data.paraphrased_text);
  } catch (error) {
    console.log(error);
  }
};

// POPULATE ACTIVE USERS BY LIKES, COMMENTS, RETWEETS AND TWEETS SECTION IN DASHBOARD

export const populateDashboard = async (type: string): Promise<void> => {
  try {
    const response = await getWithToken(`active-users`);
    const data = response.data.message;
    let activeUsers: { [s: string]: unknown; } | ArrayLike<unknown>;
    if (type === "tweet") {
      activeUsers = data.active_users_by_tweet;
    } else if (type === "retweets") {
      activeUsers = data.active_users_by_retweets;
    } else if (type === "likes") {
      activeUsers = data.active_users_by_likes;
    } else if (type === "replies") {
      activeUsers = data.active_users_by_replies;
    } else {
      return;
    }

    // Get the top 5 active users for the given category
    const top5Users = Object.entries(activeUsers)


    // Populate the HTML element with the top 5 active users
    const container = document.getElementById(type);
    container.innerHTML = "";
    const elements = top5Users.map((user, key) => {
      const username = user[0];
      const count = user[1];
      return `
      <div class="d-flex w-100 pt-3 pb-3 justify-content-between bordertopdashed">
      <div class="d-flex">
        <div class="font-poppins mr-5">${key + 1}.</div>
        <div class="font-poppins">${username}</div>
      </div>
      <div class="font-poppins mr-3">${count}</div>
    </div>
      `;
    });
    container.innerHTML = elements.join("");
  } catch (error) {
    console.log(error);
  }
};

// POPULATE HASHTAG AND KEYWORD SECTION IN DASHBOARD

export const populateImpressions = async (): Promise<void> => {
  try {
    const response = await getWithToken("impressions-reach");
    const data = response.data.data as {
      hashtag: string;
      reach: number;
      impression: number;
    }[];
    const container = document.getElementById("hashtag_keyword_box");
    container.innerHTML = "";
    const elements = data
      .sort((a, b) => b.reach - a.reach) // sort by descending reach
      .slice(0, 5) // take the top 5
      .map(
        (d, i) => `
        <div class="detailItemStats bordertopdashed p-1">
          <div class="d-flex w-50">
            <div class="index dashItem">${i + 1}.</div>
            <div class="dashItem">${d.hashtag}</div>
          </div>
          <div class="tweet dashItem w-17-5">2k</div>
          <div class="location dashItem w-17-5">5k</div>
          <div class="timeStamp dashItem w-17-5">${d.reach}</div>
          <div class="timeStamp dashItem w-17-5">${d.impression}</div>
        </div>
      `
      );
    container.innerHTML = elements.join("");
  } catch (error) {
    console.log(error);
  }
};

// POPULATE TOP LANGUAGES SECTION IN DASHBOARD

export const topLanguages = async (): Promise<void> => {
  try {
    const response = await getWithToken("hashtag-analytics");
    const data = response.data.message.tweets_language_data;
    const container = document.getElementById("language_box");
    container.innerHTML = "";
    const elements = Object.entries(data)

      .map(
        ([language, count], i) => `
        <div class="d-flex w-100 justify-content-between bordertopdashed">
          <div class="d-flex">
            <div class="font-poppins mr-5">${i + 1}.</div>
            <div class="font-poppins">${language}</div>
          </div>
          <div class="font-poppins mr-3">${count}</div>
        </div>
      `
      );
    container.innerHTML = elements.join("");
  } catch (error) {
    console.log(error);
  }
};

// POPULATE TOP ICONS FROM DASHBOARD

export const getTwitterAnalytics = async (
  setTotalTweets: React.Dispatch<React.SetStateAction<any[]>>,
  setTotalRetweets: React.Dispatch<React.SetStateAction<any[]>>,
  setTotalLikes: React.Dispatch<React.SetStateAction<any[]>>,
  setTotalComments: React.Dispatch<React.SetStateAction<any[]>>,
  setTotalMediaTweets: React.Dispatch<React.SetStateAction<any[]>>
): Promise<void> => {
  try {
    const response = await getWithToken("analytics");
    const data = response.data.message;
    setTotalMediaTweets(data.total_media_tweets);
    setTotalTweets(data.total_tweets);
    setTotalRetweets(data.total_retweets);
    setTotalLikes(data.total_likes);
    setTotalComments(data.total_comments);
  } catch (error) {
    console.log(error);
  }
};

// POPULATE TRENDING HASHTAG BAR GRAPH FROM DASHBOARD

export const getTopHashtags = async (
  setData: React.Dispatch<React.SetStateAction<any[]>>
) => {
  try {
    const response = await getWithToken(`hashtag-analytics`);

    const hashtagData = response.data.message.hashtag_report_data;

    const sortedHashtags = Object.entries(hashtagData).sort(
      (a, b) => Number(b[1]) - Number(a[1])
    );

    const topHashtags = sortedHashtags.slice(0, 8).map((hashtag) => ({
      x: hashtag[0],
      y: hashtag[1],
    }));
    setData(topHashtags);
  } catch (error) {
    console.error(error);
  }
};

// POPULATE TWEETS STATS

export const getTweets = async (
  elementId: string,
  setTotalTweets: React.Dispatch<React.SetStateAction<any[]>>,
  lowerLimit: number,
  upperLimit: number
): Promise<void> => {
  try {
    const response = await getWithToken(
      `tweets?skip=${lowerLimit}&limit=${upperLimit}`
    );
    const data = response.data;
    const element = document.getElementById(elementId);
    const options = [
      ...data.data?.map(
        (item: { name: any; tweet: any; group_name: any; tweet_type: any; tweet_operation_status: any; tweet_creation_time: any; }, key: number) =>
          `<div class="detailItemStats justify-content-between">
          <input
            type="checkbox"
            name="checkMe"
            id="none"
          />
          <div class="index item" key=${key}>${key + 1}</div>
          <div class="name item">${item.name}</div>
          <div class="tweet item w-40">${item.tweet}</div>
          <div class="location item w-11">${item.group_name}</div>
          <div class="tweetType item w-11">${item.tweet_type}</div>
          <div class="tweetStatus item w-11">${item.tweet_operation_status
          }</div>
          <div class="timeStamp item w-11">${item.tweet_creation_time}</div>
          <div class="actions item w-11">
            <img
              src="https://static.thenounproject.com/png/718767-200.png"
              alt="none"
              onclick="const statsElem = event.currentTarget.closest('.detailItemStats').nextElementSibling; const detailStatsElem = event.currentTarget.closest('.detailItemStats'); statsElem.style.display = statsElem.style.display === 'none' ? 'flex' : 'none'; detailStatsElem.style.backgroundColor = detailStatsElem.style.backgroundColor === 'rgb(221, 242, 255)' ? '#FFFFFF' : '#DDF2FF'; statsElem.style.marginBottom = statsElem.style.marginBottom === '1rem' ? '0' : '1rem';"
            />
            <img
              src="https://img.icons8.com/material-rounded/256/trash.png"
              alt="none"
            />
          </div>
        </div>
        <div class="stats p-2" style="display: none">
              <h6 class="ml-3 mr-3">Tweet Statistics:</h6>
              <h6>Comments: </h6>
              <p class="fntSz16 mt_10px light-green ml-5 mr-5">2</p>
              <h6>Retweets: </h6>
              <p class="fntSz16 mt_10px red ml-5 mr-5">2</p>
              <h6>Likes: </h6>
              <p class="fntSz16 mt_10px red ml-5 mr-5">10</p>
              <h6>Edits: </h6>
              <p class="fntSz16 mt_10px orange ml-5 mr-5">10</p>
            </div>`
      ),
    ].join("");
    setTotalTweets(data.total_count);
    element.innerHTML = options;
  } catch (error) {
    console.log(error);
  }
};

// POPULATE RETWEETS STATS

export const getRetweets = async (
  elementId: string,
  setTotalRetweets: React.Dispatch<React.SetStateAction<any[]>>,
  lowerLimit: number,
  upperLimit: number
): Promise<void> => {
  try {
    const response = await getWithToken(
      `retweets?skip=${lowerLimit}&limit=${upperLimit}`
    );
    const data = response.data;
    const element = document.getElementById(elementId);
    const options = [
      ...data.data?.map(
        (item, key) =>
          `<div key=${key + 1} id=${item.tweet_id}>
            <div class="detailItemStats justify-content-between" style="background-color: #FFFFFF;">
            <div class="dropArrow" onclick="const statsElem = event.currentTarget.closest('.detailItemStats').nextElementSibling; const detailStatsElem = event.currentTarget.closest('.detailItemStats'); statsElem.style.display = statsElem.style.display === 'none' ? 'flex' : 'none'; detailStatsElem.style.backgroundColor = detailStatsElem.style.backgroundColor === 'rgb(221, 242, 255)' ? '#FFFFFF' : '#DDF2FF'; statsElem.style.marginBottom = statsElem.style.marginBottom === '1rem' ? '0' : '1rem';"
                <img
                  src="https://static.thenounproject.com/png/1123247-200.png"
                  alt="none"
                />
              </div>
              <div class="index item">${key + 1}</div>
              <div class="name item w-12-5">${item.user}</div>
              <div class="location item w-12-5">${item.region}</div>
              <div class="tweetType item w-12-5">Media</div>
              <div class="tweetStatus item w-12-5">${item.tweet_operation_status}</div>
              <div class="timeStamp item w-12-5">${item.tweet_creation_time}</div>
              <div class="actions item w-12-5">
                <img
                  src="https://static.thenounproject.com/png/718767-200.png"
                  alt="none"
                  id="eye_button"
                  onclick="const statsElem = event.currentTarget.closest('.detailItemStats').nextElementSibling; const detailStatsElem = event.currentTarget.closest('.detailItemStats'); statsElem.style.display = statsElem.style.display === 'none' ? 'flex' : 'none'; detailStatsElem.style.backgroundColor = detailStatsElem.style.backgroundColor === 'rgb(221, 242, 255)' ? '#FFFFFF' : '#DDF2FF'; statsElem.style.marginBottom = statsElem.style.marginBottom === '1rem' ? '0' : '1rem';"
                />
                <img
                  src="https://img.icons8.com/material-rounded/256/trash.png"
                  alt="none"
                />
              </div>
            </div>
            <div class="stats p-2" style="display: none">
              <h6 class="ml-3 mr-3">Tweet Statistics:</h6>
              <h6>Comments: </h6>
              <p class="fntSz16 mt_10px light-green ml-5 mr-5">2</p>
              <h6>Retweets: </h6>
              <p class="fntSz16 mt_10px red ml-5 mr-5">2</p>
              <h6>Likes: </h6>
              <p class="fntSz16 mt_10px red ml-5 mr-5">10</p>
              <h6>Edits: </h6>
              <p class="fntSz16 mt_10px orange ml-5 mr-5">10</p>
            </div>
          </div>`
      ),
    ].join("");


    setTotalRetweets(data.total_count);
    element.innerHTML = options;
  } catch (error) {
    console.log(error);
  }
};

// POPULATE TRENDING PAGE BAR GRAPH

export const getTrendingHashtags = async (
  setData: React.Dispatch<React.SetStateAction<any[]>>,
  setCategories: React.Dispatch<React.SetStateAction<any[]>>
) => {
  try {
    const response = await getWithToken(`hashtag-analytics`);

    const hashtagData = response.data.message.hashtag_report_data;

    const sortedHashtags = Object.entries(hashtagData).sort(
      (a, b) => Number(b[1]) - Number(a[1])
    );

    const topHashtags = sortedHashtags.slice(0, 10).map((hashtag) => ({
      name: hashtag[0],
      count: hashtag[1],
    }));
    setData(topHashtags.map((hashtag) => hashtag.count));
    setCategories(topHashtags.map((hashtag) => hashtag.name));
  } catch (error) {
    console.error(error);
  }
};

export const getTop20Hashtags = async (
  element_1_ID: string,
  element_2_ID: string
) => {
  try {
    const response = await getWithToken(`hashtag-analytics`);

    const hashtagData = response.data.message.hashtag_report_data;

    const sortedHashtags = Object.entries(hashtagData).sort(
      (a, b) => Number(b[1]) - Number(a[1])
    );

    const topHashtags = sortedHashtags.slice(0, 20).map((hashtag, index) => ({
      index: index + 1,
      name: hashtag[0],
      count: hashtag[1],
    }));

    const firstTenHashtags = topHashtags.slice(0, 10);
    const nextTenHashtags = topHashtags.slice(10, 20);

    // populate element_1_ID with the first 10 hashtags
    const element1 = document.getElementById(element_1_ID);
    if (element1) {
      element1.innerHTML = firstTenHashtags
        .map(
          (hashtag) => `
            <div class="detailItemStats justify-content-between">
              <div class="index item">${hashtag.index}</div>
              <div class="name text-left item">${hashtag.name}</div>
              <div class="location item">${hashtag.count}</div>
              <div class="actions item">
                <img src="https://static.thenounproject.com/png/718767-200.png" alt="none"/>
              </div>
            </div>
          `
        )
        .join("");
    }

    // populate element_2_ID with the next 10 hashtags
    const element2 = document.getElementById(element_2_ID);
    if (element2) {
      element2.innerHTML = nextTenHashtags
        .map(
          (hashtag) => `
            <div class="detailItemStats justify-content-between">
              <div class="index item">${hashtag.index}</div>
              <div class="name text-left item">${hashtag.name}</div>
              <div class="location item">${hashtag.count}</div>
              <div class="actions item">
                <img src="https://static.thenounproject.com/png/718767-200.png" alt="none"/>
              </div>
            </div>
          `
        )
        .join("");
    }
  } catch (error) {
    console.error(error);
  }
};

// POST TWEETS

export const postTweet = async (
  tweet_text: string,
  user_name: string,
  tweet_type: number,
  source: number
) => {
  try {
    const data = {
      tweet_text: tweet_text,
      user_name: user_name,
      tweet_type: tweet_type,
      source: source,
    };
    await postWithToken(`tweets`, data);
  } catch (error) {
    console.error(error);
  }
};
export const getPostsRelatedToTopic = async (query: string) => {
  try {
    const response = await axios.get(
      `https://api.social-searcher.com/v2/trends?key=97996cbd196c844ef2a1cc354918e10c&network=twitter&q=${query}`
    );
    const data = response.data;
    const posts = data.posts;
    console.log(data);
    // Populate the posts_container with each post
    const postsContainer = document.getElementById("posts_container");
    postsContainer.innerHTML = "";
    postsContainer.innerHTML = posts
      .map((post: any) => {
        return `
        <div class="w-33">
          <div class='cont d-flex flex-wrap justify-content-between w-100'>
            <div class='postCard p-3 bg-white d-flex flex-column border-circle m-3 poppins w-100'>
              <div class='d-flex w-max-content'>
                <img src=${post.user.image} class='pfp' />
                <div class='d-flex flex-column bold ml-5 mr-5 justify-content-center'>
                  <div class='user d-flex fntSz16'>
                    <div class='rightName'>${post.user.name}</div>
                  </div>
                  <div class='dateTime fntSz14'>${post.posted}</div>
                </div>
              </div>
              <hr />
              <div class='text'>
                ${post.text}
              </div>
              ${post.image
            ? `<img src=${post.image} class='mt-2 mb-2 wh-320 border-circle' />`
            : ""
          }
            </div>
          </div>
        </div>
      `;
      })
      .join("");
  } catch (error) {
    console.error(error);
  }
};

export const displayProfileTweets = async (query: string): Promise<void> => {
  const url = `profile_search?query=${query}`;
  try {
    const response = await getWithToken(url);
    const element = document.getElementById("recent_post_container");
    const profileUrl =
      response.data.data.profile_details.profile_image_url_https;
    const username = response.data.data.profile_details.user_name;
    const screen_name = response.data.data.profile_details.screen_name;
    const posts = response.data.data.user_time_line;
    const postElements = posts.map((post) => {
      return `
        <div class="d-flex w-35 p-1 m-2 bg-white border-circle h-fit-content" style="width: 48%;">
          <div class="d-flex w-40 p-3 m-3 bg-white border-circle h-fit-content w-fit-content">
            <div class="d-flex flex-column">
              <div class="d-flex profilePicture align-items-center">
                <img
                  src=${profileUrl}
                  alt=""
                />
                <div class="leftName pl-3 pr-3 fntSz20">@${screen_name}</div>
                <hr class="vertical fntSz20" />
                <div class="pl-3 fntSz20">${username}</div>
              </div>
              <div class="fntSz14 mt-3 mb-2">
                ${post}
              </div>
            </div>
          </div>
        </div>
      `;
    });

    // Append the text elements to the container
    element.innerHTML = postElements.join("");
  } catch (error) {
    console.error(error);
  }
};



// FOLLOW ACCOUNT

export const follow = async (accountID, handle, groupID) => {
  try {
    startLoader()
    const response = await postWithToken("follow", {
      // "account_id_list": [`${accountID}`],
      // "group_id_list": [`${groupID}`],
      "account_id_list": accountID,
      "group_id_list": groupID,
      "twitter_handle": `${handle}`,
      "operation": 7
    }
    )
    if (response.status == 200) {
      stopLoader()
      successPopup("Account followed successfully")
    }
    console.log(response)
  }
  catch (error) {
    stopLoader()
    errorPopup("Error while following account")
    console.log(error)
  }
}

export const unFollow = async (accountID, handle, groupID) => {
  try {
    startLoader()

    const response = await postWithToken("unfollow", {
      // "account_id_list": [`${accountID}`],
      // "twitter_handle": `${handle}`,
      "account_id_list": accountID,
      "group_id_list": groupID,
      "twitter_handle": `${handle}`,
      "operation": 7
    }
    )
    if (response.status == 200) {
      stopLoader()
      successPopup("Account unfollowed successfully")
    }
    console.log(response)
  }
  catch (error) {
    stopLoader()
    errorPopup("Error while unfollowing account")
    console.log(error)
  }
}

// HANDLE FOLLOW UNFOLLOW

export const handleFollow = (accountID, twitterHandle, groupID, ) => {
  // if(document.getElementById("groupSelect")?.ariaValueNow === "none" || document.getElementById("groupSelect").ariaValueNow === ""){
  //   errorPopup("Select a group first.")
  // }
  // else if(document.getElementById("usersSelect").ariaValueNow === "none" || document.getElementById("usersSelect").ariaValueNow===""){
  //   errorPopup("Select an account")
  // }
  if (groupID.length == 0) {
    errorPopup("Select a group first.")
  }
  else if (accountID.length == 0) {
    errorPopup("Select an account")
  }
  else {
    follow(accountID, twitterHandle, groupID)
  }
}

export const handleUnFollow = (accountID, twitterHandle, groupID ) => {
  // if (document.getElementById("groupSelect").ariaValueNow === "none" || document.getElementById("groupSelect").ariaValueNow === "") {
  //   errorPopup("Select a group first.")
  // }
  // else if (document.getElementById("usersSelect").ariaValueNow === "none" || document.getElementById("usersSelect").ariaValueNow === "") {
  //   errorPopup("Select an account")
  // }
  if (groupID.length == 0) {
    errorPopup("Select a group first.")
  }
  else if (accountID.length == 0) {
    errorPopup("Select an account")
  }
  else {
    unFollow(accountID, twitterHandle, groupID)

  }
}

// Now Trending 
export const searchTopHashtags = async (
  query: string,
) => {
  try {
    const response = await getWithToken(`trending_location?query=india`);
    const hashtagData = response.data.data[0].trendingTopics;
    console.log(hashtagData)
  }
  catch (error) {

  }
}

export const nFormatter = (num: number) => {
  if (num >= 1000000000000000) {
    return (num / 1000000000000).toFixed(1).replace(/\.0$/, "") + "T+";
  }
  if (num >= 1000000000000) {
    return (num / 1000000000000).toFixed(1).replace(/\.0$/, "") + "T";
  }
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num;
};



export const getMeterValue = (point = 0) => {
  point = point * 100
  let count = (180 / 100) * point;
  let val = 90 - count;
  return val;
};



export const parseQuery = (query: string): any => {
  query = query.trim().replace(/^[?#&]/, "");
  const queryParam: any = {};
  for (const param of query.split("&")) {
    if (param === "") {
      continue;
    }
    let [key, value] = param.split("=");
    queryParam[key] = value;
  }
  return queryParam;
};