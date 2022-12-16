/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import MyInfo from "../components/MyInfo";
import OrderHistory from "../components/OrderHistory";
import AppLayout from "../components/AppLayout";
import useLogin from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function MyPage() {
  const userData = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <div css={wrap}>
        <AppLayout.Main>
          <MyInfo myInfo={userData}></MyInfo>
          <OrderHistory />
        </AppLayout.Main>
      </div>
    </>
  );
}

const wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
