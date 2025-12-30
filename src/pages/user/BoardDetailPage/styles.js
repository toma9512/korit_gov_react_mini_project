import { css } from "@emotion/react";

export const container = css`
    width: 100%;
    height: 100%;
    background: #eef2ff;
    background: linear-gradient(
        90deg,
        rgba(238, 242, 255, 1) 0%,
        rgba(250, 245, 255, 1) 50%,
        rgba(253, 242, 248, 1) 100%
    );
    display: flex;
    justify-content: center;
    align-items: start;
`;

export const mainContainer = css`
    width: 1000px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 16px;
    box-sizing: border-box;
    align-items: start;

    & > div:nth-of-type(1) {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 14px;
        color: #4a5565;
        cursor: pointer;
        padding: 8px 12px;
        box-sizing: border-box;
        border-radius: 8px;
        transition: all 0.15s ease;

        &:hover {
            color: black;
        }
    }

    & > div:nth-of-type(2) {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        border-radius: 14px;
        box-shadow: 0px 10px 15px 3px rgba(0, 0, 0, 0.1);
        background-color: white;
        width: 100%;
        gap: 20px;
    }
`;

export const topBox = css`
    display: flex;
    flex-direction: column;
    gap: 15px;
    box-sizing: border-box;
    padding: 24px;
    border-bottom: 1px solid #dbdbdb;

    & > h4 {
        font-size: 30px;
        font-weight: 500;
        color: #0a0a0a;
    }
`;

export const boardBottomBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div:nth-of-type(1) {
        display: flex;
        align-items: center;
        gap: 10px;

        & > p {
            font-size: 14xp;
            color: #0a0a0a;
        }
    }
`;

export const profileBox = css`
    width: 40px;
    height: 40px;
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
`;

export const bottomBox = css`
    padding: 24px;
    box-sizing: border-box;

    & > p {
        color: #364153;
    }
`;

