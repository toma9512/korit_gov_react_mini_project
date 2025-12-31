import { css } from "@emotion/react";

export const container = css`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #eef2ff;
    background: linear-gradient(
        90deg,
        rgba(238, 242, 255, 1) 0%,
        rgba(250, 245, 255, 1) 50%,
        rgba(253, 242, 248, 1) 100%
    );
`;
export const mainContainer = css`
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > div > button {
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

export const mergeBox = css`
    width: 448px;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 14px;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

export const topBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    gap: 20px;

    & > h4 {
        font-size: 30px;
        font-weight: 550;
        color: oklch(51.1% 0.262 276.966);
    }

    & > p {
        font-size: 16px;
        font-weight: 400;
        color: #717182;
    }
`;

export const bottomBox = css`
    padding: 0px 24px 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > div {
        display: flex;
        flex-direction: column;
        gap: 5px;

        & > input {
            padding: 12px 8px;
            border-radius: 8px;
            border: 1px solid #dbdbdb;
            font-size: 14px;
            background-color: rgb(243, 243, 245);
            transition: all 0.1s ease-in-out;

            &:focus {
                outline: 2px solid #dbdbdb;
            }
        }
    }

    & > button {
        border: none;
        border-radius: 8px;
        padding: 12px 30px;
        font-size: 14px;
        cursor: pointer;
        background: #4f39f6;
        background: linear-gradient(
            90deg,
            rgba(79, 57, 246, 0.9) 0%,
            rgba(152, 16, 250, 0.9) 100%
        );
        color: white;
        transition: all 0.15s ease;

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
