import axios from "axios";
// import publicIp from "public-ip";
import { API_URL, APP_NAME } from "./config";
import { clearSession, getCookie } from "./cookie";

// getting ip address of current user ( added fallback urls )
// const ipAddress = publicIp.v4({
// 	fallbackUrls: ["https://ifconfig.co/ip", "https://checkip.amazonaws.com"],
// });

// basic auth

// method to format api url
export const getUrl = (endpoint: string) => {
    return API_URL + endpoint;
};

axios.interceptors.request.use(function (config) {
    // document.title = APP_NAME + " - Loading..."
    return config;
});

// interceptro to intercept http request
axios.interceptors.response.use(
    (response) => {
        document.title = APP_NAME;
        return response;
    },
    async (error) => {
        console.error("API error", error);
        console.log("error.response", error.response);
        // document.title = APP_NAME
        if (!error.response) {
            return Promise.reject(error);
        } else if (error.response.status === 401 && error.response?.data?.code == "token_not_valid") {
            clearSession();
            window.location.href = "/login";
            return;
        } else if (error.response.data) {
            return Promise.reject({
                message: error.response?.data?.message || error.response?.data?.detail,
                status: error.response?.status,
            });
        }
        return Promise.reject(error);
    }
);

// default common header
export const commonHeader = {
    "Content-Type": "application/json",
    // lan: "en",
    // platform: "3", //web
    // city: "bengaluru",
    // country: "India",
    // ipaddress: "127.0.0.1",
    // latitude: "13.344",
    // longitude: "72.222",
};

// // Core Get Request for Sending Dynamic Headers
// axios.get(`${API_URL}/v1/usersCurrentLocation/`).then((res) => {
// 	if (res && res.data && res.data.data) {
// 		const data = res.data.data;
// 		commonHeader["lan"] = encodeURIComponent(data.lan || "en");
// 		commonHeader["platform"] = encodeURIComponent(data.platform || "3");
// 		commonHeader["city"] = encodeURIComponent(data.city || "bengaluru");
// 		commonHeader["country"] = encodeURIComponent(data.country_name || "India");
// 		commonHeader["ipaddress"] = encodeURIComponent(data.ip || "127.0.0.1");
// 		commonHeader["latitude"] = encodeURIComponent(data.latitude || "13.344");
// 		commonHeader["longitude"] = encodeURIComponent(data.longitude || "72.222");
// 	}
// });

// // updating common header ipaddress once received from ipAdress method
// ipAddress.then((res) => (commonHeader["ipaddress"] = res));

/**
 * @description GET method without token
 * @author jagannath
 * @date 30/12/2021
 * @param endpoint: string
 * @param otherHeaders: object
 * @return {*}
 */
export const getApi = (endpoint: string, otherHeaders: object = {}): Promise<any> => {
    return axios.get(getUrl(endpoint), {
        headers: { ...commonHeader, ...otherHeaders },
    });
};

/**
 * @description POST method without auth token
 * @author jagannath
 * @date 30/12/2021
 * @param endpoint: string
 * @param data: req payload
 * @param otherHeaders: object
 * @return {*} Promise
 */
export const postApi = (endpoint: string, data: any, otherHeaders: object = {}): Promise<any> => {
    // axios.defaults.headers.common["authorization"] =  basicAuth;
    return axios.post(getUrl(endpoint), data, {
        headers: { ...commonHeader, ...otherHeaders },
    });
};
export const postApiWithUrl = (url: string, data: any, otherHeaders: object = {}): Promise<any> => {
    // axios.defaults.headers.common["authorization"] =  basicAuth;
    return axios.post(url, data, {
        headers: { ...commonHeader, ...otherHeaders },
    });
};

/**
 * @description PATCH method without auth token
 * @author jagannath
 * @date 30/12/2021
 * @param endpoint: string
 * @param data: req payload
 * @param otherHeaders: object
 * @return {*} Promise
 */
export const patch = (endpoint: string, data: any, otherHeaders: object = {}): Promise<any> => {
    return axios.patch(getUrl(endpoint), data, {
        headers: { ...commonHeader, ...otherHeaders },
    });
};

/**
 * @description get method with auth token
 * @author jagannath
 * @date 30/12/2021
 * @param endpoint: string
 * @param otherHeaders: object
 * @return {*} Promise
 */
export const getWithToken = (endpoint: string, otherHeaders: object = {}): Promise<any> => {
    axios.defaults.headers.common["authorization"] = getCookie("token");
    return axios.get(getUrl(endpoint), {
        headers: { ...commonHeader, ...otherHeaders },
    });
};

export const getAnyUrlWithToken = (endpoint: string, otherHeaders: object = {}): Promise<any> => {
    axios.defaults.headers.common["authorization"] = getCookie("token");
    return axios.get(endpoint, {
        headers: { ...commonHeader, ...otherHeaders },
    });
};
export const getWithUrl = (url: string, otherHeaders: object = {}): Promise<any> => {
    axios.defaults.headers.common["authorization"] = getCookie("token");
    return axios.get(url, {
        headers: { ...commonHeader, ...otherHeaders },
    });
};

/**
 * @description post method with auth token
 * @author jagannath
 * @date 30/12/2021
 * @param endpoint: string
 * @param data: req payload
 * @param otherHeaders: object
 * @return {*} Promise
 */
export const postWithToken = (endpoint: string, data: any, otherHeaders: object = {}): Promise<any> => {
    axios.defaults.headers.common["authorization"] = getCookie("token");
    return axios.post(getUrl(endpoint), data, {
        headers: { ...commonHeader, ...otherHeaders },
    });
};
export const postWithUrl = (url: string, data: any, otherHeaders: object = {}): Promise<any> => {
    axios.defaults.headers.common["authorization"] = getCookie("token");
    return axios.post(url, data, {
        headers: { ...commonHeader, ...otherHeaders },
    });
};

/**
 * @description patch method with auth token
 * @author jagannath
 * @date 30/12/2021
 * @param endpoint: string
 * @param data: req payload
 * @param otherHeaders: object
 * @return {*} Promise
 */
export const patchWithToken = (endpoint: string, data: any, otherHeaders: object = {}): Promise<any> => {
    axios.defaults.headers.common["authorization"] = getCookie("token");
    return axios.patch(getUrl(endpoint), data, {
        headers: { ...commonHeader, ...otherHeaders },
    });
};

/**
 * @description PUT method with auth token
 * @author jagannath
 * @date 30/12/2021
 * @param endpoint: string
 * @param data: req payload
 * @param otherHeaders: object
 * @return {*} Promise
 */
export const putWithToken = (endpoint: string, data: any, otherHeaders: object = {}): Promise<any> => {
    axios.defaults.headers.common["authorization"] = getCookie("token");
    return axios.put(getUrl(endpoint), data, {
        headers: { ...commonHeader, ...otherHeaders },
    });
};

/**
 * @description Delete Req method with auth token
 * @author jagannath
 * @date 30/12/2021
 * @param endpoint: string
 * @param data: req payload
 * @param otherHeaders: object
 * @return {*} Promise
 */
export const deleteWithToken = async (endpoint: string, data: any, otherHeaders?: object): Promise<any> => {
    axios.defaults.headers.common["authorization"] = getCookie("token");
    return axios({
        url: getUrl(endpoint),
        method: "DELETE",
        data,
        headers: { ...commonHeader, ...otherHeaders },
    });
};
