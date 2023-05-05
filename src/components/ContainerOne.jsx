import React from "react";
import { IoMdClose } from "react-icons/io";
import { FaUserTie } from "react-icons/fa";
import Notification from "./Notification";
import SidebarMenu from "./SidebarMenu";

const ContainerOne = () => {
  return (
    <div className="container_one">
      <div className="close_icon">
        <IoMdClose />
      </div>
      <div className="sidebar">
        <div className="user_detail">
          <FaUserTie />
          <h3>Farzan Mirza</h3>
        </div>
        <Notification />
      </div>
      <SidebarMenu />
    </div>
  );
};

export default ContainerOne;
