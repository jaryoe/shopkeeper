import React, { useEffect, FC } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../../store/action";
import { FETCH_LOGIN } from "./types";

/**定义常量 */
export const KEY_REMPWD = "___REMPWD___";
export const KEY_USERINFO = "___USERINFO___";
export const KEY_TOKEN = "___KEY_TOKEN___";
export const USER_NAME = "___USER_NAME___";

const Login: FC<any> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const payload = {
      username: "alex",
      password: "123456",
    };
    dispatch(
      fetchData({
        type: FETCH_LOGIN,
        payload,
        url: "/login",
      })
    );
  }, [dispatch]);
  return <div>111222222329989890901</div>;
};

export default Login;
