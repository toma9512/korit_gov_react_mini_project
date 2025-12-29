import { css } from "@emotion/react";

export const container = css`
    width: 300px;
    height: 100vh;
    background-color: white;
    box-shadow: 10px 0px 20px 5px rgba(0, 0, 0, 0.1);
`;

export const topBox = css`
    height: 64px;
    width: 100%;
    border-bottom: 1px solid #dbdbdb;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;

    & > div {
        font-size: 18px;
        font-weight: 700;
    }

    & > button { 
        background-color: transparent;
        border-radius: 8px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 20px;
        transition: all 0.15s ease;
        width: 36px;
        height: 36px;
        padding: 0;
        box-sizing: border-box;

        &:hover {
            background-color: #f2f2f2;
        }
    }
`

export const bottomBox = css`
    width: 100%;

    & > ul {
        list-style: none;
        padding: 16px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 7px;

        & > li {
            padding: 12px 16px;
            display: flex;
            gap: 10px;
            align-items: center;
            font-size: 16px;
            border-radius: 10px;
            transition: all 0.15s ease;
            cursor: pointer;
            color: #364153;

            &:hover {
                background-color: #f2f2f2;
            }
        }
    }
`
