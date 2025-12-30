import { css } from "@emotion/react";

export const container = css`
    width: 100%;
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
    padding-bottom: 50px;
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

    & > button {
        border: none;
        background-color: transparent;
        border-radius: 8px;
        color: oklch(0.446 0.03 256.802);
        cursor: pointer;
        transition: all 0.15s ease;
        padding: 5px 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        &:hover {
            color: black;
        }
    }
`;

export const profileBox = css`
    width: 100%;
    background-color: white;
    padding: 24px;
    box-sizing: border-box;
    border-radius: 14px;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

export const profileTopBox = css`
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    box-sizing: border-box;

    & > div:nth-of-type(1) {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 20px;
    }

    & > div:nth-of-type(2) > button {
        border: none;
        padding: 8px 16px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
        transition: all 0.15s ease;
        background-color: transparent;

        &:hover {
            background-color: #f2f2f2;
        }
    }
`;

export const profileImage = css`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    cursor: pointer;

    & > img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    & > input {
        display: none;
    }
`;

export const profileBottomBox = css`
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const profileSettingBox = css`
    width: 100%;
    background-color: white;
    padding: 24px;
    box-sizing: border-box;
    border-radius: 14px;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

export const settingButtonBox = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;

    & > button {
        border: 1px solid #dbdbdb;
        background-color: transparent;
        padding: 16px 12px;
        font-size: 16px;
        border-radius: 8px;
        text-align: start;
        cursor: pointer;

        &:hover {
            background-color: #f2f2f2;
        }
    }
`;

export const profileBoardBox = css`
    width: 100%;
    background-color: white;
    padding: 24px;
    box-sizing: border-box;
    border-radius: 14px;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);

    & > div {
        gap: 10px;
        display: flex;
        flex-direction: column;
    }
`;

export const boardBox = css`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const progressBox = css`
    filter: blur(0);
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    backdrop-filter: blur(4px);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.3);

    & > h4 {
        font-size: 60px;
        color: #0a0a0a;
    }
`