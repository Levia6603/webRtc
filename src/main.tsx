import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./constants/GlobalStyle.ts";
import { Provider } from "react-redux";
import store from "../redux";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App></App>
    </Provider>
  </React.StrictMode>
);
