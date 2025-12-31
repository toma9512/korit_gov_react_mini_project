import React, { useEffect } from "react";
import { usePrincipalState } from "../store/usePrincipalState";
import { useLocation } from "react-router-dom";

function ProtectedRouter({ children }) {
    const path = useLocation().pathname;
    const { isLoggedIn, principal, loading } = usePrincipalState();

    useEffect(() => {
        if (!loading && !isLoggedIn) {
            alert("로그인이 필요합니다");
            window.location.href = "/auth/signin";
        }

        if (
            !loading &&
            path.includes("board") &&
            principal.authorities[0].authority === "ROLE_TEMPORARY_USER"
        ) {
            alert("이메일 인증이 필요한 서비스 입니다.");
            window.location.href = `/profile/${principal.username}`;
        }
    }, [loading, path]);

    return children;
}

export default ProtectedRouter;
