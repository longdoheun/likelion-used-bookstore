/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuBar from "./components/MenuBar";
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

function App() {
  const [isVaildPath, setIsVaildPath] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const blaklistedPaths = ["/login", "/signin"];
    setIsVaildPath(!blaklistedPaths.find((path) => path === location.pathname));
    // console.log(blaklistedPaths.find((path) => path === location.pathname));
  }, [location]);

  return (
    <div className="App" css={style}>
      {isVaildPath ? <MenuBar /> : null}
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
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
    </div>
  );
}

const style = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default App;
