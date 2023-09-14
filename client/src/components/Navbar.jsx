import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";

const LoginButton = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  color: #3ea6ff;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Navbar = () => {
  return (
    <div className="w-full bg-[#121213] flex justify-between py-5 pl-[20%] ">
      <div className="w-[600px] border-2 border-[#343232] rounded-full flex focus:ring-2">
        <input
          type="text"
          className="h-full w-full bg-transparent text-white outline-none px-6 py-2 text-[15px]  rounded-l-full focus:ring-2"
        />
        <p className="w-[60px] h-full bg-[#222222] rounded-r-full flex justify-evenly py-1 text-white">
          <SearchIcon />
        </p>
      </div>

      <div className="mr-[2%] flex gap-3">
        <div className="text-[28px] text-white flex items-center gap-3">
          <VideoCameraBackIcon />
          <NotificationsIcon />
        </div>
        <LoginButton>
          <AccountCircleIcon />
          <p>SIGN IN</p>
        </LoginButton>
      </div>
    </div>
  );
};

export default Navbar;
