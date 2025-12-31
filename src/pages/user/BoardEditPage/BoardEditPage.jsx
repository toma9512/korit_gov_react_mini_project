/** @jsxImportSource @emotion/react */
import { useNavigate, useParams } from "react-router-dom";
import * as s from "./styles";
import React, { useEffect, useState } from "react";
import { usePrincipalState } from "../../../store/usePrincipalState";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import {
    getBoardByBoardIdRequest,
    modifyBoardByBoardIdRequest,
    removeBoardByBoardIdRequest,
} from "../../../apis/board/boardApis";

function BoardEditPage() {
    const navigate = useNavigate();
    const [titleInputValue, setTitleInputValue] = useState("");
    const [contentInputValue, setContentInputValue] = useState("");
    const { principal } = usePrincipalState();
    const { boardId } = useParams();

    const titleInputOnChangeHandler = (e) => {
        setTitleInputValue(e.target.value);
    };

    const contentInputOnChangeHandler = (e) => {
        setContentInputValue(e.target.value);
    };

    const removeOnClickHandler = (e) => {
        if (!confirm("정말로 게시물을 삭제하시겠습니까?")) {
            return;
        }

        removeBoardByBoardIdRequest({
            boardId: boardId,
            userId: principal.userId,
        }).then((response) => {
            if (response.data.status === "success") {
                alert("게시물이 삭제되었습니다.");
                navigate(`/profile/${principal.username}`);
            } else if (response.data.status === "failed") {
                alert(response.data.message);
                return;
            }
        });
    };

    const editOnClickHandler = () => {
        if (
            titleInputValue.trim().length === 0 ||
            contentInputValue.trim().length === 0
        ) {
            alert("모든 항목을 입력해주세요");
            return;
        }

        if (contentInputValue.trim().length < 10) {
            alert("최소 10자 이상 입력해주세요");
            return;
        }

        if (!confirm("수정하시겠습니까?")) {
            return;
        }

        modifyBoardByBoardIdRequest({
            boardId: boardId,
            title: titleInputValue,
            content: contentInputValue,
            userId: principal.userId,
        }).then((response) => {
            if (response.data.status === "success") {
                alert("게시물이 수정 되었습니다.");
                navigate(`/board/${boardId}`);
            } else if (response.data.status === "failed") {
                alert(response.data.message);
                return;
            }
        });
    };

    const cancelOnClickHandler = () => {
        if (!confirm("정말 취소하시겠습니까?")) {
            return;
        }
        setTitleInputValue("");
        setContentInputValue("");
        navigate(`/profile/${principal.username}`);
    };

    useEffect(() => {
        getBoardByBoardIdRequest(boardId).then((response) => {
            if (response.data.status === "success") {
                setTitleInputValue(response.data.data.title);
                setContentInputValue(response.data.data.content);
            } else if (response.data.status === "failed") {
                alert(response.data.message);
            }
        });
    }, []);

    return (
        <div css={s.container}>
            <div css={s.mainContainer}>
                <div>
                    <div>
                        <MdOutlineTipsAndUpdates />
                    </div>
                    <h1>어떤 이야기로 수정할까요?</h1>
                    <p>당신의 지식과 경험을 커뮤니티와 공유해보세요</p>
                </div>
                <div css={s.bottomContainer}>
                    <div css={s.innerBox}>
                        <div>
                            <label htmlFor="title">제목</label>
                            <input
                                onChange={titleInputOnChangeHandler}
                                type="text"
                                id="title"
                                placeholder="제목을 입력하세요"
                                value={titleInputValue}
                            />
                        </div>
                        <div>
                            <label htmlFor="content">내용</label>
                            <textarea
                                onChange={contentInputOnChangeHandler}
                                id="content"
                                placeholder="내용을 입력하세요"
                                value={contentInputValue}></textarea>
                        </div>
                        <div>
                            <span>{contentInputValue.length}자</span>
                            {contentInputValue.length < 10 ? (
                                <span>최소 10자 이상 작성해주세요</span>
                            ) : (
                                <></>
                            )}
                        </div>
                        <div>
                            <button onClick={removeOnClickHandler}>
                                삭제하기
                            </button>
                            <div>
                                <button onClick={cancelOnClickHandler}>
                                    취소
                                </button>
                                <button onClick={editOnClickHandler}>
                                    수정하기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoardEditPage;
