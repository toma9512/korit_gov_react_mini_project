import { css } from "@emotion/react";

export const container = css`
    width: 100vw;
    height: 100vh;
    background-color: #f9fafb;
    display: flex;
    justify-content: center;
    padding: 80px 0;
    box-sizing: border-box;
    overflow: auto;
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

export const boardContainer = css`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px;
    box-sizing: border-box;
    border-radius: 14px;
    cursor: pointer;
    border: 1px solid #dbdbdb;

    & > div:nth-of-type(1) {
        display: flex;
        flex-direction: column;
        gap: 10px;

        & > h4 {
            font-size: 20px;
            font-weight: 500;
            color: #0a0a0a;
        }

        & > p {
            font-size: 16px;
            font-weight: 400;
            color: #717182;
        }
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
    width: 32px;
    height: 32px;
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
