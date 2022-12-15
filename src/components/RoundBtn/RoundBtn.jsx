/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function RoundBtn({ contents }) {
  const navigate = useNavigate();
  return (
    <div
      css={btnStyle}
      onClick={() => {
        navigate("/products");
      }}
    >
      {contents}
    </div>
  );
}

const btnStyle = css`
  /* height: 22px; */
  padding: 4px 9px;
  background: #facf37;
  box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 11px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: normal;
  /* identical to box height */
  color: #ffffff;
`;
