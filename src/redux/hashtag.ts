import { Dispatch } from "redux";

import { getWithToken, patchWithToken, postWithToken } from "../utils/request";




export interface GetHashtag {
    hashtag?: string;
 
}
export const getSearchHashtagData = (payload: GetHashtag) => {
    return async (dispatch: Dispatch, getState: any) => {
        try {
            const State = getState();
            const response = await getWithToken("/campaign/analysis");
            if (response?.data?.data) {
                const result = response.data.data || [];
                console.log(result,'pppppppppppppp');
                return result
            }
        } catch (error) {
            console.error("error", error);
        }
    };
};


export const createHashtag = (payload: any) => {
    return async (dispatch: Dispatch, getState: any) => {
        try {
            const State = getState();
            const response = await postWithToken("/campaigns",payload);
            if (response?.data?.data) {
                const result = response.data.data || [];
                console.log(result,'pppppppppppppp');
                return result
            }
        } catch (error) {
            console.error("error", error);
        }
    };
};

export const deleteHashtag = (payload: any) => {
    return async (dispatch: Dispatch, getState: any) => {
        try {
            const State = getState();
            const response = await patchWithToken("/campaigns",payload);
            if (response?.data?.data) {
                const result = response.data.data || [];
                console.log(result,'pppppppppppppp');
                return result
            }
        } catch (error) {
            console.error("error", error);
        }
    };
};
