import axios from "axios";
import { DialogClose, DialogOpen, DrawerClose, DrawerOpen, PagerLoader } from "./rxSubjects";

export const postDevData = async (
  name: any,
  group_id: any,
  group_name: any,
  access_token: any,
  access_key: any,
  secret_token: any,
  secret_key: any,
  bearer_token: any,
  account_type: any
) => {
  const url = "https://api.techdigitem.com/api/accounts";
  const data = {
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
    const response = await axios.post(url, data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const startLoader = () => {
  return PagerLoader.next(true);
};
export const ParseToken = (token: string) => {
  return decodeURIComponent(token).replace(/%20/g, " ");
};
export const stopLoader = () => {
  return PagerLoader.next(false);
};
