import { css } from "@emotion/react";

export const container = css`
    width: 100vw;
    background: #eef2ff;
    background: linear-gradient(
        90deg,
        rgba(238, 242, 255, 1) 0%,
        rgba(250, 245, 255, 1) 50%,
        rgba(253, 242, 248, 1) 100%
    );
    padding: 0px 50px;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    padding-bottom: 50px;
`;

export const mainContainer = css`
    width: 100%;
    height: 100%;
    padding: 70px 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 50px;
`;

export const topBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;

    & > h1 {
        font-size: 60px;
        color: oklch(51.1% 0.262 276.966);
        margin: 0;
        line-height: 60px;
        text-align: center;
        letter-spacing: 2px;
        cursor: default;
    }

    & > p {
        font-size: 20px;
        margin: 0;
        text-align: center;
        font-weight: 400;
        color: oklch(0.446 0.03 256.802);
        cursor: default;

        & > span {
            font-weight: 500;
        }
    }

    & > button {
        border: none;
        border-radius: 8px;
        padding: 12px 30px;
        font-size: 18px;
        cursor: pointer;
        background: #4f39f6;
        background: linear-gradient(
            90deg,
            rgba(79, 57, 246, 0.9) 0%,
            rgba(152, 16, 250, 0.9) 100%
        );
        color: white;
        transition: all 0.15s ease;
        box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);

        &:hover {
            background: #4f39f6;
            background: linear-gradient(
                90deg,
                rgba(79, 57, 246, 1) 0%,
                rgba(152, 16, 250, 1) 100%
            );
            box-shadow: 0px 20px 15px -3px rgba(0, 0, 0, 0.1);
        }
    }
`;

export const bottomBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 30px;
`;

export const card = css`
    padding: 32px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    border-radius: 16px;
    border: none;
    background-color: white;
    gap: 20px;

    & > div {
        width: 56px;
        height: 56px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 28px;
        background: #4f39f6;
        background: linear-gradient(
            90deg,
            rgba(79, 57, 246, 0.8) 0%,
            rgba(152, 16, 250, 0.8) 100%
        );
        color: white;
        border-radius: 14px;
        font-weight: 700;
    }
    transition: all 0.15s ease;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);

    &:hover {
        box-shadow: 0px 20px 15px -3px rgba(0, 0, 0, 0.1);
    }

    & > p {
        margin: 0;
        font-size: 16px;
        font-weight: 400;
    }
`;
