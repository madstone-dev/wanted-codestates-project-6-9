import React from "react"
import { FacebookShareButton, FacebookIcon, TwitterIcon, TwitterShareButton } from "react-share"
import styled from "styled-components"

const Share = ({ show }) => {
  const currentUrl = window.location.href

  const copyUrl = (url) => {
    navigator.clipboard.writeText(url)
    alert("링크가 복사되었습니다.")
  }

  return (
    <ShareContainer show={show}>
      <ShareWrapper>
        <FacebookShareButton url={currentUrl}>
          <FacebookIcon size={80} borderRadius={10}></FacebookIcon>
        </FacebookShareButton>
        <TwitterShareButton url={currentUrl}>
          <TwitterIcon size={80} borderRadius={10}></TwitterIcon>
        </TwitterShareButton>
        <URLButton onClick={() => copyUrl(currentUrl)}>
          <URLImg src="https://static.balaan.co.kr/mobile/img/share/btn_share_url.png" alt="url" />
        </URLButton>
      </ShareWrapper>
    </ShareContainer>
  )
}

const ShareContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);
`

const ShareWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 10px;
`

const URLButton = styled.button`
  width: 80px;
  height: 80px;
  background: none;
  border: none;
  padding: 0;
`

const URLImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  cursor: pointer;
`

export default Share
