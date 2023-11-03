import * as React from "react";
import { Route, Routes as ReactRouterRoutes } from "react-router-dom";
import { HomePage } from "../pages/home";
import { ServicePage } from "../pages/servicePage";
import { ScholarshipPage } from "../pages/scholarshipPage"
export const Routes = () => {
    return (
        <ReactRouterRoutes>
            <Route path="/home" element={<HomePage/>} />
            <Route path="/service" element={<ServicePage/>} />
            <Route path="/ScholarshipPage" element={<ScholarshipPage/>} />
            <Route path="*" element={<HomePage/>} />
        </ReactRouterRoutes>
    )
}