/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import AppLayout from "../components/AppLayout";
import TagInput from "../components/TagInput/TagInput";
import useInput from "../hooks/useInput";

export default function SignIn() {
  const InputData = {
    title: "",
    authors: "",
    subject: "",
    remaining: "",
    price: "",
    cost: "",
  };
  const [inputValue, onChangeValue] = useInput(InputData);

  const inputInfo = {
    title: "책 제목",
    type: "text",
    placeholder: "최대 20자까지 입력 가능",
    name: "",
    value: "",
    onChange: () => {},
  };

  const inputArr = [
    {
      title: "책 제목",
      type: "text",
      placeholder: "최대 20자까지 입력 가능",
      name: "title",
      value: inputValue.title,
      onChange: onChangeValue,
    },
    {
      title: "책 저자",
      type: "text",
      placeholder: "최대 20자까지 입력 가능",
      name: "authors",
      value: inputValue.authors,
      onChange: onChangeValue,
    },
    {
      title: "과목",
      type: "text",
      placeholder: "책이 사용되는 과목을 입력",
      name: "subject",
      value: inputValue.subject,
      onChange: onChangeValue,
    },
    {
      title: "재고 수량",
      type: "number",
      placeholder: "해당 책 재고의 수량을 입력",
      name: "remaining",
      value: inputValue.remaining,
      onChange: onChangeValue,
    },
    {
      title: "정가",
      type: "number",
      placeholder: "해당 책의 정가를 입력",
      name: "cost",
      value: inputValue.cost,
      onChange: onChangeValue,
    },
    {
      title: "가격",
      type: "number",
      placeholder: "해당 책의 중고가격을 입력",
      name: "price",
      value: inputValue.price,
      onChange: onChangeValue,
    },
  ];

  return (
    <>
      <div css={style}>this is SignIn page</div>
      <AppLayout.Main>
        {inputArr.map((inc) => (
          <TagInput key={inc.title} inputInfo={inc} />
        ))}
      </AppLayout.Main>
    </>
  );
}

const style = css`
  color: #000;
`;
