import { css } from "@emotion/react";

export const container = css`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: auto;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }

    background: #eef2ff;
    background: linear-gradient(
        90deg,
        rgba(238, 242, 255, 1) 0%,
        rgba(250, 245, 255, 1) 50%,
        rgba(253, 242, 248, 1) 100%
    );
`;

export const blurBox = (showSideBar) => css`
    ${showSideBar ? "filter: blur(4px);" : ""}
    height: 100%;
`;
