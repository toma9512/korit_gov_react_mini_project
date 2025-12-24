import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/user/MainPage/MainPage";
import Layout from "../components/Layout/Layout";

function MainRouter() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </Layout>
        </>
    );
}

export default MainRouter;
