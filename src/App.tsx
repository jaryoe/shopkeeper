import React from "react";
import { Provider } from "react-redux";
import { hot } from "react-hot-loader/root";
import { configStore } from "./store";
import Router from "./router";

const store = configStore();

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default hot(App);
