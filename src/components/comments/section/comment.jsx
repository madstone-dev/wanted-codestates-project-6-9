import React from "react";
import styled from "styled-components";

const Comment = ({ comment }) => {
  return (
    <CommentComponent>
      <CommentContent>
        <span>
          {comment.reviewId}
        </span>
        <div>
          {comment.content}
        </div>
      </CommentContent>
      <TimeLapse>
        <span>
          {comment.createdAt}
        </span>
      </TimeLapse>
    </CommentComponent>
  );
};

export default Comment;

const CommentComponent = styled.li`
  list-style: none;
  width: 100%;
  margin-bottom: 1.2rem;
`;

const CommentContent = styled.div`
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
`;

const TimeLapse = styled.div`
  line-height: 1.5;
  span {
    margin-top: 0.4rem;
    color: #999;
  }
`;
