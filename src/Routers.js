import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CommunityPage from "./pages/CommunityPage";
import MyPage from "./pages/MyPage";
import LoginPage from "./pages/LoginPage";
import ServicePage from "./pages/ServicePage";
// import PublicRoute from "./lib/router/PublicRoute";
import PrivateRoute from "./lib/router/PrivateRoute";


const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<HomePage />} path='/' exact />
                <Route element={<PrivateRoute />} path='/' exact>
                    <Route element={<CommunityPage />} path='/community' />
                </Route>
                <Route element={<PrivateRoute />} path='/' exact>
                    <Route element={<MyPage />} path='/mypage' />
                </Route>
                <Route element={<PrivateRoute />} path='/' exact>
                    <Route element={<ServicePage />} path='/service' />
                </Route>

                <Route element={<LoginPage />} path='/login' />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;