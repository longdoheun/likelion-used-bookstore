/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Main from "./pages/Main";
import MyPage from "./pages/MyPage";
import NotFound from "./pages/NotFound";
import Payment from "./pages/Payment";
import Products from "./pages/Products";
import ProductsDetail from "./pages/ProductsDetail";
import SignIn from "./pages/SignIn";
import "./App.css";

function App() {
  return (
    <div className="App" css={style}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route
            path="/products/:product_id"
            element={<ProductsDetail />}
          ></Route>
          <Route
            path="/products/:product_id/payment"
            element={<Payment />}
          ></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const style = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #f9f7f3;
`;

export default App;
