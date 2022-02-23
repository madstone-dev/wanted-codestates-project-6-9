import React from 'react'
import styled from 'styled-components'

const InputReview=styled.textarea.attrs(props => ({
  placeholder : "리뷰를 작성해 주세요",
}))`
  resize:none;
  width:100%;
  box-sizing : border-box;
  padding : 20px;
  height : 100px;
  margin : 10px 0;
  border : 1px solid #dbdbdb;
  border-radius : 5px;
`;

export default function InputTitle({title,setTitle}) {
  const handleTitle = (event)=>{
    setTitle(event.target.value)
  };
  
  return (
    <InputReview value={title} onChange={handleTitle}/>
  )
}
