import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const LayoutTopbar = () => {
  return (
    <div className="topbar">
      <div></div>
      <div>
        <div className="input">
          <input />
          <button>
            <AiOutlineSearch />
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default LayoutTopbar;
