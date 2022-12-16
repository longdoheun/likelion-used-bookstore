/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import useInput from "../../hooks/useInput";
import LoginAppendix from "./LoginAppendix";
import LoginBtn from "./LoginBtn";
import LoginInput from "./LoginInput";
import LoginTitle from "./LoginTitle";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function LoginBlock() {
  const [id, onChangeID] = useInput();
  const [password, onChangePassword] = useInput();
  const navigate = useNavigate();

  const onLogin = async (e) => {
    e.preventDefault();
    console.log(id, password);

    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        id,
        password
      );
      console.log(userCredential);
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div css={wrap}>
      <LoginTitle />
      <section css={loginStyle}>
        <LoginInput
          type={"text"}
          value={id}
          handler={onChangeID}
          placeholder={"ID"}
        />
        <LoginInput
          type={"password"}
          value={password}
          handler={onChangePassword}
          placeholder={"PASSWORD"}
        />
        <LoginBtn handler={onLogin} />
      </section>

      <LoginAppendix />
    </div>
  );
}

const wrap = css`
  margin-top: 40px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const loginStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  margin-top: 13px;
`;
