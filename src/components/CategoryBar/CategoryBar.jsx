/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { useState } from "react";
import { ReactComponent as PlusBtn } from "../../assets/svg/plus.svg";
import { ReactComponent as MinusBtn } from "../../assets/svg/minusFilled.svg";
export default function CategoryBar({ fraction, categoryArr }) {
  const [isOpen, setIsOpen] = useState(true);
  const toggleState = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section css={container}>
      <section css={flexStyle}>
        <div css={titleStyle}>{fraction}</div>
        {isOpen ? (
          <MinusBtn css={btnStyle} onClick={toggleState} />
        ) : (
          <PlusBtn css={btnStyle} onClick={toggleState} />
        )}
      </section>
      {isOpen && (
        <div css={wrap}>
          {categoryArr.map((category) => (
            <div key={category} css={categoryStyle}>
              {category}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
const btnStyle = css`
  width: 18px;
  height: 18px;
  vertical-align: center;
  & path {
    fill: #403600;
    /* fill: #cdac01; */
  }
`;

const container = css`
  margin-top: 20px;
  padding: 10px;
  width: 150px;
  /* box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.25); */
  border-top: 1px solid #cdac01;
  border-bottom: 1px solid #cdac01;
`;

const wrap = css`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 400px;
  overflow-y: scroll;
  border-radius: 8px;
  /* box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25); */
`;
const categoryStyle = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 35px;
  /* or 233% */

  display: flex;
  align-items: center;
  letter-spacing: 0.1px;
  margin-left: 5px;

  color: #403600;
`;
const titleStyle = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  /* or 200% */

  display: flex;
  align-items: center;
  letter-spacing: 0.1px;
  color: #403600;
`;

const flexStyle = css`
  display: flex;
  justify-content: space-between;
`;
