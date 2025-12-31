import { css } from "@emotion/react";

export const container = css`
    width: 100%;
    height: 100%;
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
`;

export const mainContainer = css`
    width: 1000px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 16px;
    box-sizing: border-box;
    align-items: center;

    & > div:nth-of-type(1) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 12px;

        & > div {
            width: 64px;
            height: 64px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 32px;
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

        & > h1 {
            font-size: 36px;
            color: #4f39f6;
            letter-spacing: 1px;
        }

        & > p {
            font-size: 16px;
            color: #4a5565;
        }
    }
`;

export const bottomContainer = css`
    background-color: white;
    width: 100%;
    padding: 32px;
    box-sizing: border-box;
    border-radius: 14px;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

export const innerBox = css`
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > div:nth-of-type(1),
    div:nth-of-type(2) {
        display: flex;
        flex-direction: column;
        gap: 15px;

        & > label {
            font-size: 18px;
            font-weight: 600;
            color: #364153;
        }

        & > input,
        textarea {
            padding: 12px 8px;
            border-radius: 8px;
            border: 1px solid #dbdbdb;
            font-size: 14px;
            background-color: rgb(243, 243, 245);
            transition: all 0.05s ease-in-out;

            &:focus {
                outline: 2px solid #dbdbdb;
            }
        }

        & > textarea {
            height: 150px;
            resize: none;
        }
    }

    & > div:nth-of-type(3) {
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > span {
            font-size: 14px;
            color: #6a7282;
        }
    }

    & > div:nth-of-type(4) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #dbdbdb;
        padding-top: 24px;
        box-sizing: border-box;
        gap: 10px;

        & > button {
            cursor: pointer;
            padding: 8px 24px;
            font-size: 14px;
            background-color: white;
            border: 1px solid #dbdbdb;
            border-radius: 8px;
            box-sizing: border-box;

            &:hover {
                background-color: #fafafa;
            }
        }

        & > div {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 15px;

            & > button:nth-of-type(1) {
                cursor: pointer;
                padding: 8px 24px;
                font-size: 14px;
                background-color: white;
                border: 1px solid #dbdbdb;
                border-radius: 8px;
                box-sizing: border-box;

                &:hover {
                    background-color: #fafafa;
                }
            }

            & > button:nth-of-type(2) {
                cursor: pointer;
                padding: 8px 24px;
                font-size: 14px;
                border-radius: 8px;
                border: none;
                box-sizing: border-box;
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
        }
    }
`;
