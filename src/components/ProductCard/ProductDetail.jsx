/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as CartIcon } from "../../assets/svg/add_shopping_cart.svg";
import { ReactComponent as BuyIcon } from "../../assets/svg/shopping_bag.svg";
import useNumWithComma from "../../hooks/useNumWithComma";
import CartNumControl from "../CartElement/CartNumControl";
import ProductBtn from "./ProductBtn";
import { rankSystem } from "../../utils/rankSystem";
import useCounter from "../../hooks/useCounter";
import useLogin from "../../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, doc } from "firebase/firestore";
import { db } from "../../utils/firebase_config";

export default function ProductDetail({ data }) {
  const navigate = useNavigate();
  const userData = useLogin();
  const stringPrice = useNumWithComma(data.price);
  const [quantity, plus, minus] = useCounter(data.remaining);
  const totalPrice = data.price * quantity;
  const stringTotal = useNumWithComma(totalPrice);

  const addData = async () => {
    const docRef = collection(db, "user", userData.uid, "cart");
    try {
      const postRef = await addDoc(docRef, {
        ...data,
        choose: quantity,
        total: totalPrice,
      });
      console.log(`Document written with ID: ${postRef.id}`);
    } catch (err) {
      alert(`error message: ${err}`);
    }
  };
  const onCart = () => {
    if (userData) {
      addData();
      navigate("/cart");
    } else {
      alert("로그인 후 이용할 수 있습니다");
      navigate("/login");
    }
  };

  const onBuy = () => {
    if (userData) {
      console.log("buy");
    } else {
      alert("로그인 후 이용할 수 있습니다");
      navigate("/login");
    }
  };

  return (
    <div css={conStyle}>
      <h1 css={tittleStyle}>{data.title}</h1>
      <section css={marginStyle}>
        <h5 css={infoStyle}>저자 : {data.authors} </h5>
        <h5 css={infoStyle}>출판사 : 성균관대학교 출판부</h5>
      </section>
      <div css={marginStyle}>
        <em css={priceStyle}>{stringPrice} </em>
        <em css={wonStyle}>원</em>
      </div>
      <section css={lineStyle}>
        <h5 css={infoStyle}>과목명 : {data.subject}</h5>
        <h5 css={infoStyle}>교재구매 : {data.mandatory}</h5>
      </section>
      <section css={optionStyle}>
        <h5 css={infoStyle}>[옵션 {data.rank}] 품질/등급 정보 </h5>
        {data.rank
          ? rankSystem[data.rank].map((info) => (
              <h5 key={info} css={rankStyle}>
                {info}
              </h5>
            ))
          : null}
      </section>
      <section css={optionStyle}>
        <h5 css={infoStyle}>[SKKU] {data.title}</h5>
        <span css={flexStyle}>
          <h5 css={infoStyle}>수량</h5>
          <CartNumControl quantity={quantity} plus={plus} minus={minus} />
        </span>
      </section>
      <h5 css={css(infoStyle, marginStyle)}>잔여수량 : {data.remaining}개</h5>
      <span css={css(flexStyle)}>
        <h5 css={infoStyle}>합계</h5>
        <span css={totalPriceStyle}>{stringTotal} 원</span>
      </span>
      <section css={css(flexStyle, marginStyle)}>
        <ProductBtn
          content={"CART"}
          handler={onCart}
          children={<CartIcon css={IconStyle} />}
        />
        <ProductBtn
          content={"BUY"}
          handler={onBuy}
          children={<BuyIcon css={IconStyle} />}
        />
      </section>
    </div>
  );
}

const IconStyle = css`
  width: 18px;
  height: 18px;
  & path {
    fill: #fff;
  }
`;
const conStyle = css`
  /* background-color: red; */
  width: 500px;
  margin-top: 20px;
`;

const marginStyle = css`
  margin-top: 20px;
`;

const lineStyle = css`
  padding-top: 10px;
  border-top: 1px solid #dedede;
  margin-top: 20px;
`;

const totalPriceStyle = css`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  /* font-size: 14px; */
  line-height: 35px;
  vertical-align: middle;
  color: #ff0000;
`;

const optionStyle = css`
  padding: 5px 20px 20px 20px;
  background: #f8f8f8;
  border-radius: 10px;
  margin-top: 20px;
`;

const tittleStyle = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 35px;
  color: #403600;
`;

const infoStyle = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 30px;
  color: #403600;
`;

const flexStyle = css`
  display: flex;
  justify-content: space-between;
`;

const priceStyle = css`
  font-family: "Inter";
  font-weight: 700;
  font-size: 30px;
  color: #403600;
`;

const wonStyle = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #403600;
`;

const rankStyle = css`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 25px;
  /* or 179% */

  letter-spacing: 0.1px;

  color: #403600;
`;
