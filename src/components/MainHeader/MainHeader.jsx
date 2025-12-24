/** @jsxImportSource @emotion/react */
import { IoMenu } from "react-icons/io5";
import * as s from "./styles";
import React from "react";

function MainHeader() {
    return (
        <div css={s.container}>
            <div css={s.leftBox}>
                <button>
                    <IoMenu />
                </button>
                <div>TechBoard</div>
            </div>
            <div css={s.rightBox}>
                <button>로그인</button>
                <button>회원가입</button>
            </div>
        </div>
    );
}

export default MainHeader;
