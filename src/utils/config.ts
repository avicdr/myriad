// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwMTg4NDQwLCJpYXQiOjE2ODAxMDIwNDAsImp0aSI6IjE4NjYyNzIxY2Q4ZTQxOTk5NDM2NWZjZGM3M2FmZTQzIiwidXNlcl9pZCI6MX0.KdGa7FNBSxZpIkaLe-kQNLGxmS7hE84q61extkEMBO8"

// export const headers = {
//   Authorization: `Bearer ${token}` // set Authorization header with token
// };
// export const API_URL2 = "https://analytics-api.anveshan.org/api/v1";
export const API_URL2 = "https://myriad-api-analytic.digitemtech.com/api/v1";


export const API_URL = "https://api-twitter.digitemtech.com/api/";
export const APP_NAME = "MYRIAD";
export const USERNAME_REGEX = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;

export const TWITTER_URL = "https://twitter.com";
export const EMPTY_ICON = "/images/placeholders/empty.svg";
export const tweetsByIdApi = 'https://api.techdigitem.com/api/tweet_details'
export const searchTweetByIdApi ='https://api.techdigitem.com/api/tweet_details'
export const hasTagApi = 'https://api.techdigitem.com/api/hashtag_search'
export const searchTweetsApi = 'https://api.techdigitem.com/api/get_tweets'
/**------------- regex ------------ */

export const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const PASSWORD_REGEX = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
export const URL_REGEX = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i


export const DATE_TIME_FORMAT = "h:mm A - MMM D, yyyy"