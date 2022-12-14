/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import profileImg from "../../assets/images/profile.png";
import React from "react";

export default function OrderHistory(props) {
  const { myInfo } = props;
  return (
    <div css={wrapStyle}>
      <div css={infoWrapStyle}>
        <h1 css={slotTitleStyle}>회원 정보</h1>
        <p css={editButtonStyle}>내 정보 수정▶</p>
      </div>
      <div css={infoWrapStyle}>
        <img
          css={profileImgStyle}
          src={profileImg}
          alt=""
          width="124"
          height="124"
        ></img>
        <section>
          <h3 css={nameStyle}>{myInfo.name}</h3>
          <p css={infoStyle}>{myInfo.email}</p>
          <p css={infoStyle}>
            성균관대학교 {myInfo.major} {myInfo.class}학번
          </p>
          <p css={infoStyle}>{myInfo.semester}학기 재학중</p>
        </section>
      </div>
    </div>
  );
}

const wrapStyle = css`
  margin-bottom: 20px;
`;

const slotTitleStyle = css`
  font-weight: 550;
  font-size: 24px;
  color: #403600;
`;

const infoWrapStyle = css`
  /* width: 1233px; */
  display: flex;
  justify-content: left;
  align-items: center;
  margin-bottom: 12px;
`;

const editButtonStyle = css`
  margin-left: 12px;
  color: #666666;
  font-size: 14px;
  cursor: pointer;
`;

const profileImgStyle = css`
  border-radius: 30px;
  margin-right: 10px;
`;

const nameStyle = css`
  font-size: 24px;
`;

const infoStyle = css`
  font-size: 14px;
  color: #666666;
`;
