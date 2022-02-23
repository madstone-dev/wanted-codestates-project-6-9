import React from 'react'
import styled from 'styled-components'
import camera from '../../src_assets/camera.png'

export default function FileSelector({setImgBase64,setImgFile}) {
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
    <label htmlFor="image">
      <img src={camera} alt="사진 선택" />
    </label>
    <input
      type="file"
      id="image"
      name="image"
      accept="image/*"
      onChange={handleChangeFile}
    />
  </FileContainer>
  )
}

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
