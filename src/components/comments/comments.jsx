import React, { useState, useRef } from "react";
import Comment from "./section/comment";
import styled from "styled-components";

const getDate = () => {
  let date = new Date();
  console.log(date);
};

const Comments = props => {
  const [text, setText] = useState("");
  const inputRef = useRef();

  const setTextValue = e => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    getDate();
    let data = {
      userId: Date.now(),
      text: text,
      createdAt: "25주"
    };
    console.log(data);
    // comment 저장
    inputRef.current.value = "";
  };

  return (
    <CommentsComponent>
      {true && <Comment />}
      <FormComponent onSubmit={onSubmit}>
        <CommentInput
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
`;

const CommentInput = styled.input`
  font-size: 1.3rem;
  border: none;
  padding: 1rem;
  width: 100%;
  border-radius: 4rem 0 0 4rem;
  border-right: 0;
  padding-left: 2rem;
  border: 1px solid #ddd;
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
  border: 1px solid #ddd;
`;
