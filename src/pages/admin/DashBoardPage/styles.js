import { css } from "@emotion/react";

export const container = css`
    width: 100vw;
    height: 100vh;
    background-color: #f9fafb;
    display: flex;
    justify-content: center;
    padding: 80px 0;
    box-sizing: border-box;
`;

export const mainContainer = css`
    height: 100%;
    width: 1100px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const headerContainer = css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div:nth-of-type(2) {
        display: flex;
        gap: 10px;

        & > button {
            border: none;
            padding: 8px 16px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
            transition: all 0.15s ease;
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 5px;

            &:hover {
                background-color: #f2f2f2;
            }
        }
    }
`;

export const statusContainer = css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px;

    & > div {
        display: flex;
        flex-direction: column;
        border: 1px solid #dbdbdb;
        box-sizing: border-box;
        background-color: white;
        border-radius: 14px;
        width: 100%;
        gap: 40px;

        & > div:nth-of-type(1) {
            padding: 24px 24px 0 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        & > div:nth-of-type(2) {
            padding: 0 24px 24px 24px;
        }
    }
`;

export const buttonContainer = css`
    display: flex;
    width: 100%;
    gap: 20px;
    justify-content: space-between;

    & > button {
        padding: 32px;
        width: 100%;
        border: 1px solid #dbdbdb;
        box-sizing: border-box;
        background-color: white;
        border-radius: 14px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: start;

        & > div {
            width: 56px;
            height: 56px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 30px;
            border-radius: 14px;
            background-color: #f2f2f2;
            border: 1px solid #dbdbdb;
            margin-bottom: 15px;
        }

        & > h3 {
            font-size: 26px;
        }
    }
`;