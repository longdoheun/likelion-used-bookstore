/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Main from "./pages/Main";
import MyPage from "./pages/MyPage";
import NotFound from "./pages/NotFound";
import Payment from "./pages/Payment";
import Products from "./pages/Products";
import ProductsDetail from "./pages/ProductsDetail";
import SignIn from "./pages/SignIn";
import MainLayout from "./components/MainLayout/MainLayout";

function App() {
  return (
    <div className="App" css={AppStyle}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Main />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route
            path="/products/:product_id"
            element={<ProductsDetail />}
          ></Route>
          <Route
            path="/products/:product_id/payment"
            element={<Payment />}
          ></Route>
        </Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

const AppStyle = css`
  height: 100%;
  width: 100%;
`;

export default App;
