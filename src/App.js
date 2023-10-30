import React from "react";
import { HashRouter } from "react-router-dom";
import { Layout } from "./layouts/layout";
import { Provider } from "react-redux";
import { store } from "./redux/store";
export const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Layout />
      </HashRouter>
    </Provider>
  );
};

export default App;
