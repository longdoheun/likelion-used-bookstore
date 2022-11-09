/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React from 'react'

export default function Admin() {
  return (
    <>
    <div css={style}>this is Admin page</div>
    <div css={adminStyle}>this is Admin page</div>
    </>

  )
}

const style = css`
    color: #000;
    margin: auto;
`
const adminStyle = css`
    color: red;
    margin: auto;
`