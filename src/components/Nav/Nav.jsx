/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "../AppLayout";
import { navList } from "./navList";

export default function Nav() {
  const navigate = useNavigate();
  return (
    <section css={navStyle}>
      <AppLayout.Main>
        <div css={flexStyle}>
          {navList.map((nav) => (
            <span
              key={nav.title}
              css={directStyle(true)}
              onClick={() => {
                navigate(nav.url);
              }}
            >
              {nav.title}
            </span>
          ))}
        </div>
      </AppLayout.Main>
    </section>
  );
}

const navStyle = css`
  box-sizing: border-box;
  background-color: #f9f7f3;
  /* background-color: #fff; */
  border: 1px solid #dedede;
  top: 0px;
  position: sticky;
  z-index: 1;
  margin-bottom: 20px;
`;

const flexStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const directStyle = (bool) => css`
  color: #403600;
  box-sizing: border-box;
  padding: 10px 0px;
  flex: 1;
  display: flex;
  justify-content: center;
`;
