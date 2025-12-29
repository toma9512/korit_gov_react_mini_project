/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { IoArrowBack } from "react-icons/io5";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupRequest } from "../../../apis/auth/authApis";

function SignupPage() {
    const navigate = useNavigate();
    const [signupInputValue, setSignupInputValue] = useState({
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
    });

    const inputOnChangeHandler = (e) => {
        setSignupInputValue((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    // 8자 이상 16자 미만, 영문자, 숫자 및 특수 문자 포함
    const passwordRegex =
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;
    // 이메일 형식
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

    const signupOnClickHandler = (e) => {
        if (
            signupInputValue.username.trim().length === 0 ||
            signupInputValue.email.trim().length === 0 ||
            signupInputValue.password.trim().length === 0 ||
            signupInputValue.passwordConfirm.trim().length === 0
        ) {
            alert("모든 항목을 입력해주세요.");
            return;
        }

        if (!passwordRegex.test(signupInputValue.password)) {
            alert(
                "비밀번호는 8자 이상 16자 미만이며, 영문자, 숫자 및 특수 문자를 포함해야 합니다."
            );
            return;
        }

        if (!emailRegex.test(signupInputValue.email)) {
            alert("올바른 이메일 형식이 아닙니다.");
            return;
        }

        if (signupInputValue.password !== signupInputValue.passwordConfirm) {
            alert("비밀번호가 일치하지 않습니다");
            return;
        }

        if (!confirm("회원가입을 하시겠습니까?")) {
            return;
        }

        signupRequest({
            username: signupInputValue.username,
            email: signupInputValue.email,
            password: signupInputValue.password,
        }).then((response) => {
            if (response.data.status === "success") {
                alert(response.data.message);
                navigate("/auth/signin");
            } else if (response.data.status === "failed") {
                alert(response.data.message);
                return;
            }
        }).catch((error) => {
            alert("문제가 발생했습니다. 다시 시도해주세요.")
            return;
        })
    };

    return (
        <div css={s.container}>
            <div css={s.mainContainer}>
                <div>
                    <button onClick={() => navigate(-1)}>
                        <IoArrowBack />
                        뒤로가기
                    </button>
                </div>
                <div css={s.signupBox}>
                    <div css={s.topBox}>
                        <h4>회원가입</h4>
                        <p>TechBoard와 함께 시작하세요</p>
                    </div>
                    <div css={s.bottomBox}>
                        <div>
                            <label htmlFor="username">이름</label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                onChange={inputOnChangeHandler}
                                value={signupInputValue.username}
                                placeholder="이름을 입력하세요"
                            />
                        </div>
                        <div>
                            <label htmlFor="email">이메일</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                onChange={inputOnChangeHandler}
                                value={signupInputValue.email}
                                placeholder="이메일을 입력하세요"
                            />
                        </div>
                        <div>
                            <label htmlFor="password">비밀번호</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                onChange={inputOnChangeHandler}
                                value={signupInputValue.password}
                                placeholder="비밀번호를 입력하세요"
                            />
                        </div>
                        <div>
                            <label htmlFor="passwordConfirm">
                                비밀번호 확인
                            </label>
                            <input
                                id="passwordConfirm"
                                name="passwordConfirm"
                                type="password"
                                onChange={inputOnChangeHandler}
                                value={signupInputValue.passwordConfirm}
                                placeholder="비밀번호를 다시 입력하세요"
                            />
                        </div>
                        <button onClick={signupOnClickHandler}>회원가입</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;
