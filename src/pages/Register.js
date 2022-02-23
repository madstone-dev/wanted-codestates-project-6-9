import React,{useState} from 'react';
import styled from 'styled-components';
import Rating from '../components/Rating';
import Preview from '../components/Preview';
import FileSelector from '../components/FileSelector';
import InputTitle from '../components/InputTitle';
import BtnRegister from '../components/BtnRegister';
import { useDispatch,useSelector } from 'react-redux';
import {addReview} from '../reducers/reviewReducer';
const Inner = styled.section`
  max-width: 500px;
  box-sizing: border-box;
  position: relative;
  margin: 0 auto;
  border : 1px solid #e5e5e5;
  padding : 0 25px;
`;

const IconContainer = styled.div`
  display : flex;
`;

export default function Register() {
  const [scoreBoolean,setScoreBoolean] = useState([false,false,false,false,false]);
  const [title,setTitle] = useState("");
  const [imgBase64, setImgBase64] = useState(""); // base64 미리보기용 
  const [image, setImage] = useState(null);	//이미지 파일	
  const dispatch=useDispatch();
  
  const handleSubmit = (event)=>{
    let score=0;
    for (let i of scoreBoolean){
        if (i===true){
          score++;
        };
    };

    if (score===0 | title==="" |image=== null){
      alert("모든 항목을 기입하세요");
    }
    else{
      dispatch(addReview({ title, image, score }));
      console.log({title,image,score});
      setImage(null);
      setImgBase64("");
      setScoreBoolean([false,false,false,false,false]);
      setTitle("");
    };
    event.preventDefault();
  };
  
  return (
    <div>
      <Inner>
        <form onSubmit={handleSubmit}>
          <Preview imgBase64={imgBase64}/>
          <IconContainer>
            <FileSelector 
              setImgBase64={setImgBase64}
              setImgFile={setImage}
            />
            <Rating 
              scoreBoolean={scoreBoolean} 
              setScoreBoolean={setScoreBoolean}
            />
          </IconContainer>
          <InputTitle  
            id="title" 
            name="title" 
            title={title} 
            setTitle={setTitle} 
          />
          <BtnRegister/>
          </form>
      </Inner>
      </div>
  )
}