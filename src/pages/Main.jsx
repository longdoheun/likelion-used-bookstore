/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useNavigate } from "react-router-dom"
import React from 'react'
import MenuBar from "../components/MenuBar";


export default function Main() {
    const navigate = useNavigate();

  return (
    <>
        <div css={style}>This is main page</div>
        <MenuBar/>
        <div onClick={()=>{navigate("/login")}}>login page</div>
        <div onClick={()=>{navigate("/Signin")}}>signin page</div>
        <div onClick={()=>{navigate("/Admin")}}>Admin page</div>
        <div onClick={()=>{navigate("/Mypage")}}>My page</div>
        <div onClick={()=>{navigate("/products/b3024958378/payment")}}>payment page</div>
        <div onClick={()=>{navigate("/products/b3024958378")}}>detail page</div>
        <div onClick={()=>{navigate("/products")}}>products page</div>
    </>
  );
}

const style = css`
    color: #000;
`