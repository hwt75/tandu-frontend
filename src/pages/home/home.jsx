import * as React from "react";
import "./index.scss";
import banner from "../../assets/image/banner.jpg";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ErrorPage } from "../errorPage";
const Home = () => {
  return (
   <ErrorPage />
  );
};

export const HomePage = Home;
