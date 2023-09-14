import React from "react";
import youtubeLogo from "../images/mainLogo.png";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ExploreIcon from "@mui/icons-material/Explore";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0;
  margin-top: 5px;
  font-size: 12px;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid #7777;
`;

const Login = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 9px;
`;
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

const Menu = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="flex items-center">
        <p className="text-3xl">
          <ion-icon name="menu-outline"></ion-icon>
        </p>
        <img
          onClick={(e) => navigate("/")}
          src={youtubeLogo}
          alt=""
          className="h-[80px] cursor-pointer"
        />
      </div>

      {/* menu section */}

      <div className="">
        <Item className="text-sm">
          <HomeIcon className="" />
          <p className="text-[14px] ">Home</p>
        </Item>

        <Item className="text-sm">
          <ExploreIcon />
          <p className="text-[14px] ">Explore</p>
        </Item>

        <Item className="text-sm">
          <SubscriptionsIcon />
          <p className="text-[14px] ">Subscription</p>
        </Item>

        <div className="w-full border border-gray-700 mt-3 opacity-40"></div>

        <Item className="text-sm">
          <VideoLibraryIcon />
          <p className="text-[14px] ">Library</p>
        </Item>

        <Item className="text-sm">
          <HistoryIcon />
          <p className="text-[14px] ">History</p>
        </Item>

        <div className="w-full border border-gray-700 mt-3 mb-6 opacity-40"></div>
        <Login className="">
          <LoginButton>
            <AccountCircleIcon />
            <p>SIGN IN</p>
          </LoginButton>
        </Login>
        <div className="w-full border border-gray-700 mt-6 opacity-40"></div>

        <Item className="text-sm">
          <LibraryMusicIcon />
          <p className="text-[14px] ">Music</p>
        </Item>

        <Item className="text-sm">
          <SportsEsportsIcon />
          <p className="text-[14px] ">Gaming</p>
        </Item>

        <Item className="text-sm">
          <SubscriptionsIcon />
          <p className="text-[14px] ">Movies</p>
        </Item>

        <Item className="text-sm">
          <SubscriptionsIcon />
          <p className="text-[14px] ">Live</p>
        </Item>

        <div className="w-full border border-gray-700 mt-3 opacity-40"></div>

        <Item className="text-sm">
          <SettingsIcon />
          <p className="text-[14px] ">Settings</p>
        </Item>

        <Item className="text-sm">
          <NightlightIcon />
          <p className="text-[14px] ">Light Mode</p>
        </Item>
      </div>
    </div>
  );
};

export default Menu;
