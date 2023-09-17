import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ReplyIcon from "@mui/icons-material/Reply";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import chnlImage from "../images/girl-4448689_1280.jpg";
import Comments from "../components/Comments";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;
const Content = styled.div`
  flex: 5;
  align-items: center;
`;

const Recomendation = styled.div`
  flex: 2;
`;

const VideoWrapper = styled.div`
  border-radius: 20px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
`;
const Info = styled.span``;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Buttons = styled.button`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin-top: 15px;
  border: 0.5px solid gray;
`;

const ChennalInformation = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const SubscribeButton = styled.button`
  border: 1px solid white;
  width: 110px;
  border-radius: 50px;
  padding: 6px;
  background-color: #c9c6c6;
  color: black;
  margin-bottom: 16px;
`;

const VideoPage = () => {
  const { id } = useParams();

  return (
    <Container className="text-white">
      {/* video and comment section */}
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/cLoXQb5M6oI"
            title="Reality of Social Media | Nitish Rajput | Hindi"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>Reality of Social Media || Nitish rajput</Title>

        {/* here comes the chnl information subscrbe and like feature */}
        <Details className="items-center mt-1">
          <ChennalInformation>
            <div className="">
              <img
                src={chnlImage}
                alt=""
                className="w-[43px] h-[40px] rounded-full mb-6"
              />
            </div>
            <div className="mb-5">
              <p className="font-semibold text-[16px] tracking-wide">
                Nitish Rajput
              </p>
              <p className="text-sm text-gray-400">243k subscribers</p>
            </div>
            {/* subscribe and unsubscribe button */}
            <div>
              <SubscribeButton>Subscribe</SubscribeButton>
            </div>
          </ChennalInformation>
          <Buttons className="mb-8">
            <Button>
              <ThumbUpOutlinedIcon /> 2.2k
            </Button>
            <Button>
              <ThumbDownOutlinedIcon />
            </Button>
            <Button className="mb-1">
              <ReplyIcon />
              share
            </Button>
          </Buttons>
        </Details>
        {/* here comes this views and description section */}
        <div className="w-full h-[100px] rounded-lg bg-[#222222] px-3 py-2">
          <div className="text-[15px] flex items-center gap-3">
            <p>83,235k views </p>
            <p>30jun 2022</p>
          </div>
          <div>
            <p className="text-sm mt-2">
              The reality of social media today is a complex tapestry of
              connection, influence, and vulnerability. On the one hand, it has
              revolutionized how we communicate, allowing us to connect with
              friends and family across the globe, share our passions, and
              discover new horizons.{" "}
            </p>
          </div>
        </div>
        {/* comment section div */}
        <div>
          <Comments />
        </div>
      </Content>
      <Recomendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recomendation>
    </Container>
  );
};

export default VideoPage;
