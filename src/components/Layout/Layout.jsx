import React from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import MainHeader from "../MainHeader/MainHeader";

function Layout({ children }) {
    return (
        <div css={s.container}>
            <MainHeader />
            {children}
        </div>
    );
}

export default Layout;
