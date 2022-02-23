import React from 'react'
import styled from 'styled-components';

const ImgBox = styled.div`
  width: 300px;
  height : 300px;
  background: ${props => props.imgBase64==="" ? `white` : `url(${props.imgBase64})`};
  background-size:cover;
  margin : 10px auto;
`;

export default function Preview({imgBase64}) {
  return (
    <ImgBox imgBase64={imgBase64}/>
  )
}