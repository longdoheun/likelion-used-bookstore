/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { db } from "../utils/firebase_config";
import { doc, getDoc } from "firebase/firestore";

export default function Payment() {
  const fetch = async () => {
    const docRef = doc(db, "book", "tBM5EZUdcAMfl7C6Z0Rr");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  return (
    <div
      onClick={() => {
        fetch();
      }}
      css={style}
    >
      this is Payment page
    </div>
  );
}

const style = css`
  color: #000;
`;
