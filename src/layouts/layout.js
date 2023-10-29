import * as React from "react";
import { Header } from "./header";
import { Routes } from "./routes";
import { Footer } from "./footer";

export const Layout = () => {
    return(
        <>
        <Header/>
        <Routes/>
        <Footer/>
        </>
    )
}