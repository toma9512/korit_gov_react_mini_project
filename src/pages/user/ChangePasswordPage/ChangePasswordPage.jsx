/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import * as s from "./styles";
import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { changePasswordRequest } from "../../../apis/account/accountApis";
import { usePrincipalState } from "../../../store/usePrincipalState";
import { useQueryClient } from "@tanstack/react-query";

function ChangePasswordPage() {
    const { logout } = usePrincipalState();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData(["getPrincipal"])?.data
        ?.data;
    const [passwordInputValue, setPasswordInputValue] = useState({
        password: "",
        newPassword: "",
        newPasswordConfirm: "",
    });
    

    const inputOnChangeHandler = (e) => {
        setPasswordInputValue((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const passwordRegex =
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;
    
    const changePasswordOnClickHandler = () => {
        if (
            passwordInputValue.password.trim().length === 0 ||
            passwordInputValue.newPassword.trim().length === 0 ||
            passwordInputValue.newPasswordConfirm.trim().length === 0
        ) {
            alert("모든 항목을 입력해주세요.");
            return;
        }

        if (!passwordRegex.test(passwordInputValue.newPassword)) {
            alert(
                "비밀번호는 8자 이상 16자 미만이며, 영문자, 숫자 및 특수 문자를 포함해야 합니다."
            );
            return;
        }

        if (
            passwordInputValue.newPassword !==
            passwordInputValue.newPasswordConfirm
        ) {
            alert("비밀번호가 일치하지 않습니다");
            return;
        }

        if (!confirm("비밀번호를 변경하시겠습니까?")) {
            return;
        }

        changePasswordRequest({
            userId: principalData?.userId,
            password: passwordInputValue.password,
            newPassword: passwordInputValue.newPassword,
        })
            .then((response) => {
                if (response.data.status === "success") {
                    alert(response.data.message);
                    logout();
                } else if (response.data.status === "failed") {
                    alert(response.data.message);
                    return;
                }
            })
            .catch((error) => {
                alert("문제가 발생했습니다. 다시 시도해주세요.");
                return;
            });
    }

    return (
        <div css={s.container}>
            <div css={s.mainContainer}>
                <div>
                    <button onClick={() => navigate(-1)}>
                        <IoArrowBack />
                        뒤로가기
                    </button>
                </div>
                <div css={s.changePasswordBox}>
                    <div css={s.topBox}>
                        <h4>비밀번호 변경</h4>
                    </div>
                    <div css={s.bottomBox}>
                        <div>
                            <label htmlFor="password">비밀번호</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                onChange={inputOnChangeHandler}
                                value={passwordInputValue.password}
                                placeholder="비밀번호를 입력하세요"
                            />
                        </div>
                        <div>
                            <label htmlFor="newPassword">새로운 비밀번호</label>
                            <input
                                id="newPassword"
                                name="newPassword"
                                type="password"
                                onChange={inputOnChangeHandler}
                                value={passwordInputValue.newPassword}
                                placeholder="새로운 비밀번호를 입력하세요"
                            />
                        </div>
                        <div>
                            <label htmlFor="newPasswordConfirm">
                                비밀번호 확인
                            </label>
                            <input
                                id="newPasswordConfirm"
                                name="newPasswordConfirm"
                                type="password"
                                onChange={inputOnChangeHandler}
                                value={passwordInputValue.newPasswordConfirm}
                                placeholder="비밀번호를 다시 입력하세요"
                            />
                        </div>
                        <button onClick={changePasswordOnClickHandler}>
                            비밀번호 변경
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChangePasswordPage;
