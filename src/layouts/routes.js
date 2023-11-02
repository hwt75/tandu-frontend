import * as React from "react";
import { Navigate, Route, Routes as ReactRouterRoutes } from "react-router-dom";
import { HomePage } from "../pages/home";
import { ContactPage } from "../pages/contact";
import {ErrorPage} from "../pages/errorPage";

export const Routes = () => {
    return (
        <ReactRouterRoutes>
            
            <Route path="/" element={<HomePage/>} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="*" element={<ErrorPage />} />
        </ReactRouterRoutes>
    )
}