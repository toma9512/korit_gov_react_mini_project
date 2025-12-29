import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import MainHeader from "../MainHeader/MainHeader";

function Layout({ children }) {
    const [showSideBar, setShowSideBar] = useState(false);

    return (
        <div css={s.container}>
            <MainHeader
                showSideBar={showSideBar}
                setShowSideBar={setShowSideBar}
            />
            <div
                css={s.filter(showSideBar)}
                onClick={() => setShowSideBar((prev) => (prev ? !prev : prev))}>
                {children}
            </div>
        </div>
    );
}

export default Layout;
