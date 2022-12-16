/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState, useEffect } from "react";
import AppLayout from "../AppLayout/AppLayout";
import { ReactComponent as LogoTitle } from "../../assets/svg/logo_title.svg";
import { ReactComponent as Bell } from "../../assets/svg/bell.svg";
import ProfileImg from "./ProfileImg";
import SearchInput from "../SearchInput/SearchInput";
import { useNavigate } from "react-router-dom";
import RoundBtn from "../RoundBtn/RoundBtn";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default function Header() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  const logOut = async () => {
    navigate("/");
    try {
      await signOut(auth);
      alert("user signed out");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppLayout.Main>
      <div css={headerStyle}>
        <LogoTitle
          css={LogoStyle}
          onClick={() => {
            navigate("/");
          }}
        />
        <SearchInput />
        {isLoggedIn ? (
          <>
            <ProfileImg handler={logOut} />
            <Bell css={iconStyle} />
          </>
        ) : (
          <RoundBtn.Login contents={"로그인"} />
        )}
      </div>
    </AppLayout.Main>
  );
}

const LogoStyle = css`
  height: 50.73px;
`;

const headerStyle = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  /* gap: 15px; */
  justify-content: space-between;
  align-items: center;
  margin-top: 81px;
  margin-bottom: 63.7px;
`;
const iconStyle = css`
  width: 50px;
  height: 50px;
`;
