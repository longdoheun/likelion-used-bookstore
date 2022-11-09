/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React from 'react'

export default function MyPage() {
  return (
    <>
        <div css={style}>this is MyPage</div>
    </>
  )
}

const style = css`
    color : #000;
`