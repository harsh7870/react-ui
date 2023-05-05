import React from "react";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

const ContainerTwo = () => {
  return (
    <div className="container_two">
      <div className="tab_bar">
        <div className="title">
          <h3>Tasks</h3>
        </div>
        <div className="tabs">
          <div className="tab_icon">
            <MdOutlineNavigateBefore />
          </div>
          <div className="tab">
            <h4>Daily</h4>
          </div>
          <div className="tab">
            <h4>Pending</h4>
          </div>
          <div className="tab">
            <h4>Monthly</h4>
          </div>
          <div className="tab_icon">
            <MdOutlineNavigateNext />
          </div>
        </div>
      </div>
      <div className="main_card">
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </div>
  );
};

export default ContainerTwo;
