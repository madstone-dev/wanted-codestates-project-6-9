import React from 'react'
import styled from "styled-components"

const RegisterBtn = styled.button`
  width : 100%;
  height:60px;
  margin : 10px 0;
  border : 1px solid #dbdbdb;
  border-radius : 5px;
  background-color : white;
  font-size : 20px;
  font-weight : 600;
  letter-spacing : 5px;
  &:hover{  
    background-color : #e5e5e5;
    cursor : pointer;
  };
`;

export default function BtnRegister() {
  return (
    <RegisterBtn type='submit'>작성하기</RegisterBtn>
  )
}