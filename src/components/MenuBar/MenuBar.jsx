/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import MenuIconArrange from "./MenuIconArrange";
import React, { useEffect, useRef, useState } from "react";

export default function MenuBar() {
  const menuBarRef = useRef();
  // console.log(menuBarRef.current.scrollTop);

  const [position, setPosition] = useState(0);

  function onScroll() {
    setPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    console.log(position, menuBarRef.current.scrollTop);
    menuBarRef.current.animate(
      {
        transform: [`translateY(${position}px)`],
      },
      {
        duration: 500, // 밀리초 지정
        fill: "forwards", // 종료 시 속성을 지님
        easing: "ease", // 가속도 종류
      }
    );
  }, [position]);

  return (
    <>
      <div css={containerStyle}>
        <div ref={menuBarRef} css={menuBarStyle}>
          <MenuIconArrange />
        </div>
      </div>
    </>
  );
}

const containerStyle = css`
  position: absolute;
  left: 50px;
  top: 81px;
`;

const menuBarStyle = css`
  box-sizing: border-box;
  width: 100px;
  height: 600px;
  border-radius: 40px;
  background-color: #ffd742;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
  position: relative;
`;
