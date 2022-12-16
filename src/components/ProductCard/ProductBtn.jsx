/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function ProductBtn({ content, children, handler }) {
  return (
    <div css={wrap} onClick={handler}>
      <p css={contentStyle}>{content}</p>
      {children}
    </div>
  );
}
const contentStyle = css`
  width: 108px;
  height: 35px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 35px;
  /* identical to box height, or 175% */
  text-align: center;
  letter-spacing: 0.1px;
  color: #ffffff;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const wrap = css`
  width: 200px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #facf37;
  border-radius: 20px;
`;
