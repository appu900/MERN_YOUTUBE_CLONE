import React from "react";
import thumbNill from "../images/testThumbnill.jpg";
import chnlImage from "../images/girl-4448689_1280.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: white;
`;
const ChennalName = styled.h2`
  margin-top: 5px;
  font-size: 14px;
  color: #bdb8b8;
`;
const Info = styled.div`
  font-size: 14px;
  color: #bdb8b8;
`;

const Card = () => {
  return (
    <Link to="/video/test">
    <div className="w-[375px] mb-[45px] cursor-pointer  rounded-lg">
      <div>
        <img src={thumbNill} alt="" className="w-full h-[202px] rounded-t-lg" />
      </div>
      {/* desc section */}

      <div className="flex items-center  mt-[9px] gap-3">
        <img
          src={chnlImage}
          alt=""
          className="w-[43px] h-[40px] rounded-full mb-6"
        />
        <div className="">
          <Title>Reality of Social Media || facebook </Title>
          <ChennalName className="tracking-wide">
            Nitish Rajput
          </ChennalName>
          <Info>660,908 views . 1yr ago</Info>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Card;
