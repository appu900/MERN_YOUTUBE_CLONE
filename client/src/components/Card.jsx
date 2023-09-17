import React from "react";
import thumbNill from "../images/testThumbnill.jpg";
import chnlImage from "../images/girl-4448689_1280.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.h1`
  font-size: ${(props) => props.type === "sm" ? "14px" : "16px"};
  font-weight: 500;
  color: white;
  margin-left: ${(props) => props.type === "sm" && "10px"};
`;

const ChennalName = styled.h2`
  margin-top: 5px;
  font-size: 14px;
  color: #bdb8b8;
  margin-left: ${(props) => props.type === "sm" && "10px"};

`;
const Info = styled.div`
  font-size: 14px;
  color: #bdb8b8;
  margin-left: ${(props) => props.type === "sm" && "10px"};

`;

const Container = styled.div`
   width: 375px;
   margin-bottom:${(props) => props.type === "sm" ? "12px" : "45px"};
   cursor: pointer;
   border-radius: 0.5rem;
   display:${(props) => props.type === "sm" && "flex"};

`

const Image = styled.img`
  width:${(props) => props.type === "sm" ? "200px" : "100%"};
  height:${(props) => props.type === "sm" ? "100px" : "202px"};
  /* border-top-left-radius: 0.5rem8px;
  border-top-right-radius: 0.5rem; */

  border-radius: 0.5rem;
`

const ChennalImage = styled.img`
  width: 43px;
  height: 40px;
  border-radius: 9999px;
  margin-bottom: 1.5rem;
  display: ${(props) => props.type === "sm" && "none" };
`

// const Title = styled.p`
  
// `

const Card = ({type}) => {
  return (
    <Link to="/video/test">
    <Container type={type}>
      <div>
        <Image type={type} src={thumbNill}/>
      </div>
      {/* desc section */}

      <div className="flex items-center  mt-[9px] gap-3">
        <ChennalImage type={type}
          src={chnlImage}
    
        />
        <div className="">
          <Title type={type}>Reality of Social Media || facebook </Title>
          <ChennalName type={type} className="tracking-wide">
            Nitish Rajput
          </ChennalName>
          <Info type={type}>660,908 views . 1yr ago</Info>
        </div>
      </div>
    </Container>
    </Link>
  );
};

export default Card;
