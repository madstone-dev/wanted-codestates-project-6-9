import React from "react";
import styled from "styled-components";

const Comment = props => {
  return (
    <CommentComponent>
      <div>
        <span>member Id</span>
        <div>구매 후 바로 취소해도 반송료 받던데...</div>
      </div>
      <div>
        <span>52주</span>
      </div>
    </CommentComponent>
  );
};

export default Comment;

const CommentComponent = styled.li`
  list-style: none;
  width: 100%;
  margin-bottom: 1.2rem;
  & div:nth-child(1) {
    font-size: 1.2rem;
    font-weight: normal;
    line-height: 1.5;
    display: flex;
    flex-direction: row;
    align-items: center;
    span {
      font-size: 1.3rem;
      font-weight: bold;
      letter-spacing: -0.025rem;
      margin-right: 0.6rem;
    }
  }
  & div:nth-child(2) {
    span {
      margin-top: 0.4rem;
      color: #999;
    }
  }
`;
