import React, { useState } from "react"
import styled from "styled-components"
import Rating from "../components/Register/Rating"
import Preview from "../components/Register/Preview"
import FileSelector from "../components/Register/FileSelector"
import InputTitle from "../components/Register/InputTitle"
import BtnRegister from "../components/Register/BtnRegister"
import { useDispatch } from "react-redux"
import { addReview } from "../reducers/reviewReducer"
import { EscapeBtn, CloseBtn, HeaderTitle } from "../components/Header"
import { useNavigate } from "react-router-dom"

export default function Register() {
  const [scoreBoolean, setScoreBoolean] = useState([false, false, false, false, false])
  const [title, setTitle] = useState("")
  const [imgBase64, setImgBase64] = useState("") // base64 미리보기용
  const [image, setImage] = useState(null) //이미지 파일
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const escape = () => {
    navigate("/")
  }

  const handleSubmit = (event) => {
    let score = 0
    for (let i of scoreBoolean) {
      if (i === true) {
        score++
      }
    }

    if ((score === 0) | (title === "") | (image === null)) {
      alert("모든 항목을 기입하세요")
    } else {
      dispatch(addReview({ title, image, score }))
      console.log({ title, image, score })
      setImage(null)
      setImgBase64("")
      setScoreBoolean([false, false, false, false, false])
      setTitle("")
    }
    event.preventDefault()
  }

  return (
    <div >
      <HeaderComponent>
        <EscapeBtn onClick={escape} />
        <HeaderTitle>리뷰 등록</HeaderTitle>
        <CloseBtn onClick={escape} />
      </HeaderComponent>
      <Inner>
        <form onSubmit={handleSubmit}>
          <Preview imgBase64={imgBase64} />
          <IconContainer>
            <FileSelector setImgBase64={setImgBase64} setImgFile={setImage} />
            <Rating scoreBoolean={scoreBoolean} setScoreBoolean={setScoreBoolean} />
          </IconContainer>
          <InputTitle id="title" name="title" title={title} setTitle={setTitle} />
          <BtnRegister />
        </form>
      </Inner>
    </div>
  )
}

const HeaderComponent = styled.nav`
  width: 500px;
  box-shadow: 0 0px 3px 0px #ccc;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem 0;
`

const Inner = styled.section`
  max-width: 500px;
  box-sizing: border-box;
  position: relative;
  margin: 0 auto;
  border: 1px solid #e5e5e5;
  padding: 0 25px;
`

const IconContainer = styled.div`
  display: flex;
`
