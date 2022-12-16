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
import AppLayout from "./components/AppLayout";
import MobileMenuBar from "./components/MobileMenuBar";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [isInvaildPath, setIsInvaildPath] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const blaklistedPaths = ["/login", "/signin"];
    setIsInvaildPath(
      blaklistedPaths.find((path) => path === location.pathname)
    );
  }, [location]);

  return (
    <div className="App" css={AppStyle}>
      {isInvaildPath ? null : (
        <AppLayout.Side>
          {isClicked && <MenuBar />}
          <MobileMenuBar
            onClick={() => {
              setIsClicked(isClicked ? false : true);
            }}
          />
        </AppLayout.Side>
      )}
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

const AppStyle = css`
  height: 100%;
  width: 100%;
`;

export default App;
