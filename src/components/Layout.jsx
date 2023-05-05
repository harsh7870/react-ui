import React from "react";
import Footer from "./Footer";
import LayoutTopbar from "./LayoutTopbar";
import ContainerOne from "./ContainerOne";
import ConatinerThree from "./ContainerThree";
import ContainerTwo from "./ContainerTwo";

const Layout = () => {
  return (
    <div className="container">
      <LayoutTopbar />
      <div className="main_container">
        <ContainerOne />
        <ContainerTwo />
        <ConatinerThree />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
