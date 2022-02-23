import React from 'react'
import styled from 'styled-components'
import camera from '../src_assets/camera.png'

const FileContainer = styled.div`
  margin-right : 50px;
  img {
    max-width: 50px;
  };
  label {
    cursor: pointer;
  };
  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
  };
`;

export default function FileSelector({setImgBase64,setImgFile,imgFile,imgBase64}) {
  const handleChangeFile = (event) => {
    let reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString());
      };
    };

    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); 
      setImgFile(event.target.files[0]); 
    };
  };

  return (
    <FileContainer>
    <label htmlFor="imgFile">
      <img src={camera} alt="사진 선택" />
    </label>
    <input
      type="file"
      id="imgFile"
      name="imgFile"
      accept="image/*"
      onChange={handleChangeFile}
    />
  </FileContainer>
  )
}
