/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState, useEffect } from "react";
import SelectBox from "../components/SelectBox";
import useInput from "../hooks/useInput";
import { generalArr, majorArr } from "../utils/catergory";
import { storage } from "../utils/firebase_config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, doc } from "firebase/firestore";
import { db } from "../utils/firebase_config";

export default function Admin() {
  const [title, setTitle] = useInput();
  const [author, setAuthor] = useInput();
  const [subject, setSubject] = useInput();
  const [remaining, setRemaining] = useInput();
  const [price, setPrice] = useInput();
  // selectBox
  const [mandatory, setMandatory] = useState("필수");
  const [division, setDivision] = useState("major");
  const [category, setCategory] = useState("경영대학");
  const [rank, setRank] = useState("A");
  // img
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);

  const postData = {
    title: title,
    authors: author,
    rank: rank,
    price: Number(price),
    mandatory: mandatory,
    subject: subject,
    category: category,
    remaining: Number(remaining),
    division: division,
    imgUrl: url,
  };

  const handleImg = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const addData = async () => {
    const docRef = collection(db, "book");
    try {
      const postRef = await addDoc(docRef, postData);
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

  return (
    <div css={adminStyle}>
      <div>this is Admin page</div>
      <input type="file" onChange={handleImg} />
      <input
        css={inputStyle}
        autoComplete="off"
        type="text"
        name="name"
        value={title}
        placeholder="책 제목"
        onChange={setTitle}
      />
      <input
        css={inputStyle}
        autoComplete="off"
        type="text"
        name="name"
        value={author}
        placeholder="책 저자"
        onChange={setAuthor}
      />
      <input
        css={inputStyle}
        autoComplete="off"
        type="text"
        name="name"
        value={subject}
        placeholder="과목"
        onChange={setSubject}
      />
      <input
        css={inputStyle}
        autoComplete="off"
        type="number"
        name="name"
        value={remaining}
        placeholder="수량"
        onChange={setRemaining}
      />
      <input
        css={inputStyle}
        autoComplete="off"
        type="number"
        name="name"
        value={price}
        placeholder="가격"
        onChange={setPrice}
      />
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
      <button onClick={onSubmit}>submit</button>
    </div>
  );
}

const adminStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: red;
  margin: auto;
`;

const inputStyle = css`
  width: 600px;
  border: 1px solid;
`;

const flexStyle = css`
  display: flex;
`;
