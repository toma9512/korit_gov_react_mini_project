import React from "react";
import { Route, Routes } from "react-router-dom";
import ProfilePage from "../pages/user/ProfilePage/ProfilePage";

function AccountRouter() {
    return <>
        <Routes>
            <Route path="/:username" element={<ProfilePage />} />
        </Routes>
    </>;
}

export default AccountRouter;
