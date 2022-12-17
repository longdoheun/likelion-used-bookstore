/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import AppLayout from "../components/AppLayout";
import CartBuyFooter from "../components/CartBuyFooter";
import CartHead from "../components/CartHead";
import CartElement from "../components/CartElement/CartElement";
import useFetch from "../hooks/useFetch";
import useLogin from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Cart() {
  const userData = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      navigate("/login", { replace: true });
    }
  }, []);

  const cartData = useFetch(`user/${userData.uid}/cart`);

  return (
    <>
      <AppLayout.Main>
        <CartHead cartNum={cartData.length} />
        {/* <AppLayout.Component> */}
        <section css={cartListBox}>
          {cartData.map((data) => (
            <CartElement key={data.id} data={data}></CartElement>
          ))}
        </section>
        {/* </AppLayout.Component> */}
      </AppLayout.Main>
      <CartBuyFooter></CartBuyFooter>
    </>
  );
}

const cartListBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
