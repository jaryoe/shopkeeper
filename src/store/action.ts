import { BaseURL } from "../config/base";

const FETCH_LOGIN = "FETCH_LOGIN";

export const loginTypes = [FETCH_LOGIN];

export const fetchLogin = (payload: any) => {
  return {
    type: FETCH_LOGIN,
    payload,
    request: {
      url: `${BaseURL}/login`,
      next: () => {},
      error: () => {},
      reducer: {
        init: {
          user: "aaa",
        },
        name: "data",
      },
    },
  };
};

export const fetchAdduser = (payload: any) => {
    return {
      type: FETCH_LOGIN,
      payload,
      request: {
        url: `${BaseURL}/user/addUser`,
        next: () => {},
        error: () => {},
        reducer: {
          init: {
            user: "aaa",
          },
          name: "data",
        },
      },
    };
  };
