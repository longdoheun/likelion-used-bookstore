/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import bannerImg from "../../assets/images/banner.jpg";
import React from "react";

export default function Banner() {
  return (
    <div css={thumbnailStyle}>
      <img src={bannerImg} alt="banner.img" css={imgStyle} />
      <div css={titleStyle}>
        <h3 css={h3Style}>성균관대학교 유생들을 위한 중고 책 거래 플랫폼,</h3>
        <h1 css={h1Style}>
          <empty css={emptyStyle}>유생책방</empty>에 오신 것을 환영합니다
        </h1>
      </div>
    </div>
  );
}

const thumbnailStyle = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  max-height: 535px;
`;

// const layerStyle = css`
//   position: absolute;
//   width: 100%;
//   height: inherit;
//   background: rgba(0, 0, 0, 0.5);
// `;

const h3Style = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 55px;
  /* or 229% */
  text-align: right;
  letter-spacing: 0.1px;
  color: #ffffff;
`;

const h1Style = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 55px;
  /* or 153% */
  text-align: right;
  letter-spacing: 0.1px;
`;

const emptyStyle = css`
  color: #ffd742;
`;

const titleStyle = css`
  position: absolute;
  color: #fff;
`;

const imgStyle = css`
  width: auto;
  height: 100%;
`;
