import { css } from "@emotion/react";

export const container = css`
    width: 100%;
    height: 64px;
    padding: 0px 50px;
    border-bottom: 1px solid #dbdbdb;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
`;

export const leftBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    & > button {
        border: none;
        outline: none;
        background-color: transparent;
        cursor: pointer;
        width: 36px;
        height: 36px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        font-weight: 500;
        transition: all 0.15s ease;

        &:hover {
            background-color: #f2f2f2;
        }
    }

    & > div {
        font-size: 18px;
        font-weight: 1000;
        color: oklch(51.1% 0.262 276.966);
        cursor: pointer;
    }
`;

export const rightBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    & > button {
        border: none;
        padding: 8px 16px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
        transition: all 0.15s ease;
    }

    & > button:nth-of-type(1) {
        background-color: transparent;

        &:hover {
            background-color: #f2f2f2;
        }
    }

    & > button:nth-of-type(2) {
        background: #4f39f6;
        background: linear-gradient(
            90deg,
            rgba(79, 57, 246, 0.9) 0%,
            rgba(152, 16, 250, 0.9) 100%
        );
        color: white;

        &:hover {
            background: #4f39f6;
            background: linear-gradient(
                90deg,
                rgba(79, 57, 246, 1) 0%,
                rgba(152, 16, 250, 1) 100%
            );
        }
    }
`;

export const sideBarContainer = (showSideBar) => css`
    position: absolute;
    z-index: 100;
    top: 0;
    left: ${showSideBar ? "0" : "-300px"};
    transition: all 0.15s ease-in-out;
`;

export const profileBox = css`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`