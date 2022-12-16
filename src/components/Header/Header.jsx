/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import AppLayout from "../AppLayout/AppLayout";
import { ReactComponent as LogoTitle } from "../../assets/svg/logo_title.svg";
import { ReactComponent as Bell } from "../../assets/svg/bell.svg";
import SearchInput from "../SearchInput/SearchInput";
import { useNavigate } from "react-router-dom";
import RoundBtn from "../RoundBtn/RoundBtn";
import { getAuth, signOut } from "firebase/auth";
import useLogin from "../../hooks/useLogin";

export default function Header() {
  const navigate = useNavigate();
  const userData = useLogin();

  const logOut = async () => {
    const auth = getAuth();
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
        {userData ? (
          <>
            <div css={ProfileStyle(userData.profileUrl)} onClick={logOut}></div>
            {/* <ProfileImg data={userData} handler={logOut} /> */}
            <Bell css={iconStyle} />
          </>
        ) : (
          <RoundBtn.Login contents={"로그인"} />
        )}
      </div>
    </AppLayout.Main>
  );
}
const ProfileStyle = (url) => css`
  width: 40px;
  height: 40px;
  background: #d9d9d9;
  background-image: url(${url});
  background-size: cover;
  border-radius: 50%;
`;

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
