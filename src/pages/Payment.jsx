/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import AppLayout from "../components/AppLayout";
import useInput from "../hooks/useInput";

export default function Payment() {
  const [name, setName] = useInput();

  return (
    <div css={style}>
      <AppLayout.Main>
        this is Payment page
        <AppLayout.Component>this is Payment page</AppLayout.Component>
      </AppLayout.Main>
    </div>
  );
}

const style = css`
  color: #000;
`;
