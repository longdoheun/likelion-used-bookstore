/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as SearchIcon } from "../../assets/svg/search.svg";
import useInput from "../../hooks/useInput";

export default function InputStyle() {
  const [inputValue, setInputValue] = useInput();

  const onSubmit = () => {
    console.log(inputValue);
  };

  return (
    <div css={inputContainer}>
      <input
        css={inputStyle}
        autoComplete="off"
        type="text"
        name="name"
        value={inputValue}
        placeholder="책 제목, 과목, 전공명 등으로 책을 찾아보세요!"
        onChange={setInputValue}
      />
      <SearchIcon onClick={onSubmit} />
    </div>
  );
}

const inputContainer = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 13px 26px;
`;

const inputStyle = css`
  width: 100%;
`;
