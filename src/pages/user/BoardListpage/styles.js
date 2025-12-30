import { css } from "@emotion/react";

export const container = css`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: #fafafa;
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

    & > div:nth-of-type(1) {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 16px;
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
        gap: 24px;
        padding: 0 12px;
        box-sizing: border-box;
        width: 100%;

        & > div:nth-of-type(1) {
            font-size: 36px;
            font-weight: 700;
            color: #4f39f6;
        }

        & > div:nth-of-type(2) {
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
        }
    }
`;

export const listContainer = css`
    width: 100%;
    padding: 0 12px;
    box-sizing: border-box;

    & > ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 30px;

        & > li {
            display: flex;
            flex-direction: column;
            gap: 16px;
            padding: 24px;
            box-sizing: border-box;
            border-radius: 14px;
            box-shadow: 0px 10px 15px 3px rgba(0, 0, 0, 0.1);
            transition: all 0.15s ease;
            cursor: pointer;

            &:hover {
                box-shadow: 0px 20px 15px 3px rgba(0, 0, 0, 0.1);
            }

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
`

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