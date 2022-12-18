/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginAppendix() {
  const navigate = useNavigate();
  return (
    <div css={style}>
      <section css={css(font, color2)}>
        <em>아이디 찾기</em> | <em>비밀번호 찾기</em>
      </section>
      <section
        onClick={() => {
          navigate("/signin");
        }}
        css={css(font, color1)}
      >
        지금 회원가입 하러가기
      </section>
    </div>
  );
}

const style = css`
  display: flex;
  justify-content: space-between;
  margin-top: 17px;
`;

const font = css`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
`;

const color1 = css`
  color: #403600;
`;

const color2 = css`
  color: #969696; ;
`;
