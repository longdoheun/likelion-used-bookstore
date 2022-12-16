import { useState } from "react";
import { Outlet } from "react-router-dom";
import AppLayout from "../AppLayout";
import Footer from "../Footer/Footer";
import Header from "../Header";
import MenuBar from "../MenuBar";
import MobileMenuBar from "../MobileMenuBar";

const MainLayout = () => {
  const [isClicked, setIsClicked] = useState(true);

  return (
    <>
      <AppLayout.Side>
        {isClicked && <MenuBar />}
        {/* <MobileMenuBar
          onClick={() => {
            setIsClicked(isClicked ? false : true);
          }}
        /> */}
      </AppLayout.Side>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
