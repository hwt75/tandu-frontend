import React from "react";
import { HashRouter } from "react-router-dom";
import { Layout } from "./layouts/layout";

export const App = () => {
  return (
    <HashRouter>
   <Layout/>
    </HashRouter>
  );
}

export default App;
