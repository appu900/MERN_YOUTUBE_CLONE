import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import chnlImage from "../images/girl-4448689_1280.jpg";
import PrevComment from "./PrevComment";


const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 43px;
  height: 40px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid gray;
  background-color: transparent;
  outline: none;
  width: 100%;
  font-size: 15px;
  padding: 5px;
`;

const Comments = () => {
  return (
    <div>
      <Container>
        <NewComment className="mt-4">
          <Avatar src={chnlImage} />
          <Input className="text-xm" placeholder="add a comment......" />
        </NewComment>
        <div>
            <PrevComment/>
            <PrevComment/>
            <PrevComment/>
            <PrevComment/>
            <PrevComment/>
            <PrevComment/>
            <PrevComment/>
            <PrevComment/>
            <PrevComment/>
            <PrevComment/>
            <PrevComment/>
            <PrevComment/>
            <PrevComment/>
            <PrevComment/>
            <PrevComment/>

            
        </div>
      </Container>
    </div>
  );
};

export default Comments;
