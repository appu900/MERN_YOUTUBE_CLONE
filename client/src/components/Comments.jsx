import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const CommentsFromDb = styled.div`
  display: flex;
  align-items: center;
`;

const Comments = () => {

  const[comments,setComments] = useState([]);
  const fetchComments = async() =>{
    const response = await axios.get('')
    setComments(response.data);
  }  

  
  return (
    <div>
      <Container>hello</Container>
    </div>
  );
};

export default Comments;
