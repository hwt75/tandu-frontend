import * as React from "react";
import { Header } from "./header";
import { Routes } from "./routes";
import { Footer } from "./footer";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import "./layout.scss";
import { IconSideBar } from "../components/iconSideBar/home";

export const Layout = () => {
  return (
    <div className="App">
      <Header />
      <IconSideBar />
      <Routes />
      <Footer />
    </div>
  );
};
