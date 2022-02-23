import React, { useState } from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import styled from 'styled-components';

const ShareButtons = ({ showShare, handleShowShare, review }) => {
  const currentUrl = `${window.location.href.split('details')[0]}details/${
    review.id
  }`;

  const [show, setShow] = useState(showShare);

  const copyUrl = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(currentUrl);
    alert('링크가 복사되었습니다.');
  };

  const handleExit = () => {
    setShow(false);
    handleShowShare(show);
  };

  // 카카오 공유 버튼 생성
  const createKakaoButton = (e) => {
    e.stopPropagation();
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init('34cbf0f18f5987e6e9641ad7f4bc6106'); // env 생성 필요
      }

      kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: 'balaan',
          description: `${review.title}`,
          imageUrl: `${review.image}`,
          link: {
            mobileWebUrl: currentUrl,
            webUrl: currentUrl,
          },
        },
        buttons: [
          {
            title: '리뷰 보기',
            link: {
              mobileWebUrl: currentUrl,
              webUrl: currentUrl,
            },
          },
        ],
      });
    }
  };

  return (
    <ShareButtonsContainer show={showShare} onClick={handleExit}>
      <ShareButtonsWrapper>
        <FacebookShareButton
          url={currentUrl}
          onClick={(e) => e.stopPropagation()}
        >
          <FacebookIcon size={80} borderRadius={10} />
        </FacebookShareButton>
        <KakaoButton onClick={createKakaoButton}>
          <KakaoImg
            src="https://static.balaan.co.kr/mobile/img/share/btn_share_kt.png"
            alt="kakaotalk"
          />
        </KakaoButton>
        <TwitterShareButton
          url={currentUrl}
          onClick={(e) => e.stopPropagation()}
        >
          <TwitterIcon size={80} borderRadius={10} />
        </TwitterShareButton>
        <URLButton onClick={copyUrl}>
          <URLImg
            src="https://static.balaan.co.kr/mobile/img/share/btn_share_url.png"
            alt="url"
          />
        </URLButton>
      </ShareButtonsWrapper>
    </ShareButtonsContainer>
  );
};

const ShareButtonsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 50%;

  display: ${({ show }) => (show ? 'flex' : 'none')};
  flex-direction: column;
  width: 550px;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.5);

  transform: translateX(calc(-50% + 25px));
  z-index: 1000;
`;

const ShareButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 10px;
`;

const KakaoButton = styled.button`
  width: 80px;
  height: 80px;
  background: none;
  border: none;
  padding: 0;
`;

const KakaoImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  cursor: pointer;
`;

const URLButton = styled.button`
  width: 80px;
  height: 80px;
  background: none;
  border: none;
  padding: 0;
`;

const URLImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  cursor: pointer;
`;

export default ShareButtons;
