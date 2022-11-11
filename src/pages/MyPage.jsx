/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React from 'react'
import MenuBar from "../components/MenuBar/MenuBar"

export default function MyPage() {
  return (
    <>
      <div css={style}>this is MyPage</div>
      <MenuBar/>
    </>
  )
}

const style = css`
    color : #000;
`