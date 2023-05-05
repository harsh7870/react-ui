import React from "react";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { AiFillHome, AiOutlineSetting } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";

const Notification = () => {
  return (
    <div className="notification">
      <div className="header">
        <div className="notification_icon">
          <MdOutlineNotificationsNone />
          <span>18</span>
        </div>
        <h3>Notification</h3>
      </div>
      <ul>
        <li>
          <div className="icon">
            <AiFillHome />
          </div>
          <div className="text">
            <p>
              Mirza International added a new documents of Buffcow T1 Color
              Brown Invoice
            </p>
            <p>45 minutes ago</p>
          </div>
        </li>
        <li>
          <div className="icon">
            <BsChatDots />
          </div>
          <div className="text">
            <p>Mirza International added a new documents of Buffcow T1 Color</p>
          </div>
        </li>
        <li>
          <div className="icon">
            <AiOutlineSetting />
          </div>
          <div className="text">
            <p>Mirza International added a new</p>
            <p>45 minutes ago</p>
          </div>
        </li>
      </ul>
      <div className="more">See all</div>
    </div>
  );
};

export default Notification;
