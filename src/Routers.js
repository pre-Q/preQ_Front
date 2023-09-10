import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CommunityPage from "./pages/CommunityPage";
import MyPage from "./pages/MyPage";
import LoginPage from "./pages/LoginPage";
import ServicePage from "./pages/ServicePage";
// import PublicRoute from "./lib/router/PublicRoute";
import PrivateRoute from "./lib/router/PrivateRoute";
import PostDetail from "./pages/PostDetail";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import ApplicationPage from "./pages/ApplicationPage";


const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<HomePage />} path='/' exact />
                <Route element={<PrivateRoute />} path='/' exact>
                    <Route element={<CommunityPage />} path='/community' />
                </Route>
                <Route element={<PrivateRoute />} path='/' exact>
                    <Route element={<CreatePost />} path='/community/create' />
                </Route>
                <Route element={<PrivateRoute />} path='/' exact>
                    <Route element={<EditPost />} path='/community/edit/item/:id' />
                </Route>
                <Route element={<PrivateRoute />} path='/' exact>
                    <Route element={<PostDetail />} path='/community/item/:id' />
                </Route>
                <Route element={<PrivateRoute />} path='/' exact>
                    <Route element={<MyPage />} path='/mypage' />
                </Route>
                <Route element={<PrivateRoute />} path='/' exact>
                    <Route element={<ApplicationPage />} path='/service' />
                </Route>
                <Route element={<PrivateRoute />} path='/' exact>
                    <Route element={<ServicePage />} path='/service/question' />
                </Route>
                <Route element={<LoginPage />} path='/login' />
                {/* <Route element={<EditPostForm />} path='/community/edit/:id' /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;