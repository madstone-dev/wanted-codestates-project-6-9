import React from 'react'
import styled from 'styled-components';

export default function Preview({imgBase64}) {
  return (
    <ImgBox imgBase64={imgBase64}/>
  )
}

const ImgBox = styled.div`
  width: 100%;
  height : 400px;
  background: ${props => props.imgBase64==="" ? `#F9F9F9` : `url(${props.imgBase64})`};
  border: ${props => props.imgBase64==="" ? `1px solid #e5e5e5` : 'none'};
  background-size:cover;
  margin : 10px auto;
`;