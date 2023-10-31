import * as React from "react";
import { Route, Routes as ReactRouterRoutes } from "react-router-dom";
import { HomePage } from "../pages/home";
export const Routes = () => {
    return (
        <ReactRouterRoutes>
            <Route path="home" component={HomePage} />
            <Route path="/" element={<HomePage/>} />
        </ReactRouterRoutes>
    )
}