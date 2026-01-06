import { css } from "@emotion/react";

export const container = css`
    width: 100vw;
    background-color: #f9fafb;
    display: flex;
    justify-content: center;
    padding: 80px 0;
`;

export const mainContainer = css`
    height: 100%;
    width: 1100px;
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

export const profileContainer = (status) => css`
    width: 100%;
    border: 1px solid #dbdbdb;
    border-radius: 14px;
    box-sizing: border-box;
    padding: 24px;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > div:nth-of-type(1) {
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > h4 {
            font-size: 34px;
        }

        & > span {
            border-radius: 14px;
            padding: 8px 16px;
            box-sizing: border-box;
            border: 1px solid ${status === "ACTIVE" ? "#dbdbdb" : "#ffc9c9"};
            background-color: ${status === "ACTIVE" ? "#f0fdf4" : "#fef2f2"};
            color: ${status === "ACTIVE" ? "#008236" : "#c10007"};
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 14px;
        }
    }

    & > div:nth-of-type(2) {
        display: flex;
        justify-content: start;
        align-items: start;
        gap: 20px;

        & > div:nth-of-type(1) {
            width: 92px;
            height: 92px;
            border: 1px solid #dbdbdb;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;

            & > img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        & > div:nth-of-type(2) {
            display: flex;
            flex-direction: column;
            gap: 10px;

            & > div {
                display: flex;
                justify-content: start;
                align-items: center;
                gap: 15px;
            }
        }
    }
`;

export const manageContainer = (status) => css`
    width: 100%;
    border: 1px solid #dbdbdb;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    & > div > button {
        padding: 8px 12px;
        border-radius: 14px;
        font-size: 14px;
        background-color: #e7000b;
        color: white;
        border: none;
        box-sizing: border-box;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 10px;
    }
`;
