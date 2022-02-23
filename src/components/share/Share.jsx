import React, { useEffect, useState } from "react"
import { FacebookShareButton, FacebookIcon, TwitterIcon, TwitterShareButton } from "react-share"
import styled from "styled-components"

const Share = ({ showShare, handleShowShare }) => {
  const currentUrl = window.location.href

  const [show, setShow] = useState(showShare)

  const copyUrl = (e) => {
    e.stopPropagation()
    navigator.clipboard.writeText(currentUrl)
    alert("링크가 복사되었습니다.")
  }

  const handleExit = () => {
    setShow(false)
    handleShowShare(show)
  }

  // 카카오 공유 버튼 생성
  useEffect(() => {
    const createKakaoButton = () => {
      if (window.Kakao) {
        const kakao = window.Kakao

        if (!kakao.isInitialized()) {
          kakao.init("34cbf0f18f5987e6e9641ad7f4bc6106") // env 생성 필요
        }

        kakao.Link.createDefaultButton({
          container: "#kakao-link-btn",
          objectType: "feed",
          content: {
            title: "balaan",
            description: "#리액트 #카카오 #공유버튼",
            imageUrl: "https://i.balaan.io/review/RV0000021430-2.webp",
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
          social: {
            likeCount: 77,
            commentCount: 55,
            sharedCount: 333,
          },
          buttons: [
            {
              title: "웹으로 보기",
              link: {
                mobileWebUrl: window.location.href,
                webUrl: window.location.href,
              },
            },
          ],
        })
      }
    }

    createKakaoButton()
  }, [])

  return (
    <ShareContainer show={showShare} onClick={handleExit}>
      <ShareWrapper>
        <FacebookShareButton url={currentUrl} onClick={(e) => e.stopPropagation()}>
          <FacebookIcon size={80} borderRadius={10} />
        </FacebookShareButton>
        <button id="kakao-link-btn">
          <img src="/icons/kakao.png" alt="kakao-share-icon" />
        </button>
        <TwitterShareButton url={currentUrl} onClick={(e) => e.stopPropagation()}>
          <TwitterIcon size={80} borderRadius={10} />
        </TwitterShareButton>
        <URLButton onClick={copyUrl}>
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
