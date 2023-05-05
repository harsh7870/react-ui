import React from "react";
import {
  AiFillHome,
  AiTwotoneSetting,
  AiOutlineFileText,
} from "react-icons/ai";
import { TbBrain } from "react-icons/tb";
import { BsCurrencyRupee } from "react-icons/bs";

const SidebarMenu = () => {
  return (
    <div className="sidebar_menu">
      <ul>
        <li>
          <AiFillHome />
          <h3>Home</h3>
        </li>
        <li>
          <AiTwotoneSetting />
          <h3>Production</h3>
        </li>
        <li>
          <AiOutlineFileText />
          <h3>Reports</h3>
        </li>
        <li>
          <TbBrain />
          <h3>Planning</h3>
        </li>
        <li>
          <BsCurrencyRupee />
          <h3>Finances</h3>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
