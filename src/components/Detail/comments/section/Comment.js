import React, { useEffect } from 'react';
import styled from 'styled-components';

const Comment = ({ comment }) => {
  const getTimelapse = () => {
    let now = Date.now();
    let result = now - comment.createdAt;
    let minute = Math.floor(result / 60000);
    let hour = Math.floor(minute / 60);
    let date = Math.floor(hour / 24);
    if (hour > 24) {
      return `${date}일 전`;
    } else if (minute > 60) {
      return `${hour}시간 전`;
    } else if (result > 60000) {
      return `${minute}분 전`;
    } else if (result < 60000) {
      return '방금 전';
    }
  };

  useEffect(() => {
    getTimelapse();
  });

  return (
    <CommentComponent>
      <CommentContent>
        <span>userId</span>
        <div>{comment.content}</div>
      </CommentContent>
      <TimeLapse>
        <span>{getTimelapse()}</span>
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
