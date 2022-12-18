/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState, useEffect } from "react";
import SelectBox from "../components/SelectBox";
import useInput from "../hooks/useInput";
import { generalArr, majorArr } from "../utils/catergory";
import { storage } from "../utils/firebase_config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../utils/firebase_config";
import AppLayout from "../components/AppLayout";
import TagInput from "../components/TagInput/TagInput";

export default function Admin() {
  const InputData = {
    title: "",
    authors: "",
    subject: "",
    remaining: "",
    price: "",
    cost: "",
  };
  const [inputValue, onChangeValue] = useInput(InputData);

  // selectBox
  const [mandatory, setMandatory] = useState("필수");
  const [division, setDivision] = useState("major");
  const [category, setCategory] = useState("경영대학");
  const [rank, setRank] = useState("A");
  // img
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);

  const bookConverter = {
    toFirestore: (book) => {
      return {
        ...book,
        remaining: Number(book.remaining),
        price: Number(book.price),
        cost: Number(book.cost),
        rank: rank,
        mandatory: mandatory,
        category: category,
        division: division,
        imgUrl: url,
      };
    },
  };

  const handleImg = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const addData = async () => {
    const docRef = collection(db, "book").withConverter(bookConverter);
    try {
      const postRef = await addDoc(docRef, inputValue);
      alert(`Document written with ID: ${postRef.id}`);
      window.location.reload();
    } catch (err) {
      alert(`error message: ${err}`);
    }
  };

  const onSubmit = async () => {
    const imageRef = ref(storage, image.name);
    const byteRef = await uploadBytes(imageRef, image);
    try {
      const urlRef = await getDownloadURL(imageRef);
      try {
        setUrl(urlRef);
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    url && addData();
  }, [url]);

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
    <AppLayout.Main>
      <div css={adminStyle}>
        <div css={writeStyle}>책 정보 입력하기</div>
        {inputArr.map((inc) => (
          <TagInput key={inc.title} inputInfo={inc} />
        ))}
        <section css={flexStyle}>
          <SelectBox options={["major", "general"]} set={setDivision} />
          {division === "major" ? (
            <SelectBox options={majorArr} set={setCategory} />
          ) : (
            <SelectBox options={generalArr} set={setCategory} />
          )}
          <SelectBox options={["필수", "권장사항"]} set={setMandatory} />
          <SelectBox options={["A", "B", "C"]} set={setRank} />
        </section>
        <input type="file" onChange={handleImg} />

        <button onClick={onSubmit}>submit</button>
      </div>
    </AppLayout.Main>
  );
}

const adminStyle = css`
  width: 900px;
  /* background: #fff; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #242424;
  margin: auto;
`;

const writeStyle = css`
  width: 100%;
  border-bottom: 2px solid #cda901;
  font-family: "Courier New", Courier, monospace;
  font-weight: 700;
  line-height: 35px;
`;

const flexStyle = css`
  display: flex;
`;
