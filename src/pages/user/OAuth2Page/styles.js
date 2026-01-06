import { css } from "@emotion/react";

export const container = css`
    width: 100vw;
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
    padding-bottom: 50px;
`;

export const mainContainer = css`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 448px;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 14px;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

export const topBox = css`
    padding: 24px 24px 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    & > div {
        font-size: 50px;

        & > span {
            color: #2db400;
        }
    }

    & > h4 {
        color: oklch(51.1% 0.262 276.966);
        font-size: 32px;
        font-weight: 400;
    }

    & > p {
        font-size: 16px;
        color: #717182;
    }
`;

export const bottomBox = css`
    padding: 0px 24px 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 15px;

    & > button {
        border: none;
        padding: 8px 16px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
        transition: all 0.15s ease;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }

    & > button:nth-of-type(1) {
        padding: 16px 12px;
        border: none;
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

    & > button:nth-of-type(2) {
        padding: 16px 12px;
        background-color: transparent;
        border: 2px solid oklch(0.87 0.065 274.039);

        &:hover {
            background-color: #e3eafc;
        }
    }

    & > button:nth-of-type(3) {
        background-color: transparent;

        &:hover {
            background-color: #f2f2f2;
        }
    }
`;