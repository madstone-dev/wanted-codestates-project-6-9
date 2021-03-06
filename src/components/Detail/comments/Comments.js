import React, { useState, useRef } from 'react';
import Comment from './section/Comment';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../../reducers/reviewReducer';

const Comments = ({ review }) => {
  const { reviews } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [text, setText] = useState('');
  const inputRef = useRef();

  const setTextValue = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alert('내용을 입력해주세요.');
    } else {
      let content = text;
      let reviewId = review.id;
      dispatch(addComment({ content, reviewId }));
    }
    setText('');
  };

  return (
    <CommentsComponent>
      {review.comments &&
        review.comments.map((comment, index) => (
          <Comment comment={comment} key={index} />
        ))}
      <FormComponent onSubmit={onSubmit}>
        <input
          ref={inputRef}
          type="text"
          value={text}
          onChange={setTextValue}
          placeholder="댓글을 입력해주세요."
        />
        <SubmitButton type="submit" onSubmit={onSubmit}>
          게시
        </SubmitButton>
      </FormComponent>
    </CommentsComponent>
  );
};

export default Comments;

const CommentsComponent = styled.div`
  margin-top: 30px;
  padding: 1.2rem 1.6rem;
  background: #f9f9f9;
`;

const FormComponent = styled.form`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  color: #333;
  border: 0;
  outline: 0;
  input {
    font-size: 1.3rem;
    border: none;
    padding: 1rem;
    width: 100%;
    border-radius: 4rem 0 0 4rem;
    border-right: 0;
    padding-left: 2rem;
    border-top: 1px solid #ddd;
    border-left: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    &:focus {
      outline: none;
    }
  }
`;

const SubmitButton = styled.button`
  font-size: 1.3rem;
  width: 7rem;
  cursor: pointer;
  padding-right: 2rem;
  border-left: 0;
  border-radius: 0 4rem 4rem 0;
  background: #fff;
  border: none;
  border-top: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
`;
