import "isomorphic-fetch";
import { message } from "antd";
import { KEY_TOKEN } from "../containers/login";

const Api = (url: string, data: any, method?: string, file?: boolean) => {
  const API_KEY_TOKEN = localStorage.getItem(KEY_TOKEN) || "";
  const headers = {
    "content-type": "application/json",
    // KF_TOKEN: API_KEY_TOKEN,
    //"X-Requested-With": "XMLHttpRequest",
  };
  const fileHeaders = {
    "X-Requested-With": "XMLHttpRequest",
  };

  return fetch(url, {
    body: file ? data : JSON.stringify(data), // must match 'Content-Type' header
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, same-origin, *omit
    headers: file ? fileHeaders : headers,
    method: method || "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // *client, no-referrer
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      if (res.status === 404) {
        message.error("接口404");
        return false;
      }
      if (res.status === 403) {
        message.error("接口403");
        return false;
      }
      if (res.status === 500) {
        message.error("接口500");
        return false;
      }
      if (res.status === 400) {
        message.error("接口400");
        return false;
      }
    })
    .catch((err) => {
      console.log("err");
      return err;
    });
};

export default Api;
