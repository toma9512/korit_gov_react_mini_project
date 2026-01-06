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

export const searchContainer = css`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    border: 1px solid #dbdbdb;
    padding: 4px 12px;
    box-sizing: border-box;
    border-radius: 8px;
    gap: 12px;
    color: #0a0a0a;
    font-size: 18px;

    & > input {
        outline: none;
        border: none;
        font-size: 14px;
        height: 24px;
        width: 100%;
        background-color: transparent;
    }
`;

export const listContainer = css`
    width: 100%;
    padding: 24px;
    display: flex;
    flex-direction: column;
    border-radius: 14px;
    border: 1px solid #dbdbdb;
    box-sizing: border-box;
    background-color: white;
    gap: 15px;

    & > ul {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
`;

export const userContainer = css`
    list-style: none;
    width: 100%;
    border: 1px solid #dbdbdb;
    border-radius: 14px;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 16px;
    box-sizing: border-box;
    gap: 20px;
    cursor: pointer;

    & > div:nth-of-type(1) {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 1px solid #dbdbdb;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        & > img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }

    & > div:nth-of-type(2) {
        display: flex;
        flex-direction: column;

        & > div {
            display: flex;
            align-items: center;
            gap: 10px;

            & > div {
                padding: 2px 8px;
                display: flex;
                justify-content: center;
                align-items: center;
                box-sizing: border-box;
                border: 1px solid #dbdbdb;
                border-radius: 12px;
            }
        }
    }
`;
