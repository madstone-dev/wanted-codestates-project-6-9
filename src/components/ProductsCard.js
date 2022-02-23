import React, { useState } from 'react';
import styled from 'styled-components';
import ShareButtons from '../components/Detail/ShareButtons';
import GoodsSlide from '../components/Detail/goodsSlide/GoodsSlide';
import Comments from '../components/Detail/comments/Comments';

const ProductsCard = ({ review }) => {
  const [showReportBtn, setShowReportBtn] = useState(false);
  const [thumbClicked, setThumbClicked] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleShowShare = (show) => {
    // 모달창 띄웠을 때 스크롤 방지
    document.body.style.overflow = show ? 'hidden' : 'unset';

    setShowShare(show);
  };

  const handleLike = () => {
    setThumbClicked((prev) => !prev);
    setLikeCount((prev) => (thumbClicked ? prev - 1 : prev + 1));
  };

  // Date format 변경(yyyy-mm-dd)
  const convertDateFormat = (date) => {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month =
      newDate.getMonth() + 1 < 10
        ? `0${newDate.getMonth() + 1}`
        : newDate.getMonth() + 1;
    const day =
      newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate();

    return `${year}-${month}-${day}`;
  };

  return (
    <CardContainer>
      <CardHeader>
        <User>{review.id ?? 'userid'}</User>
        <CardHeaderRight>
          <CreatedTime>{convertDateFormat(review.createdAt)}</CreatedTime>
          <ReportDiv>
            <ReportButton
              onClick={() => setShowReportBtn((prev) => !prev)}
              src="https://i.balaan.io/mobile/img/icon/icon-more.png"
            />
            <ReportPopup show={showReportBtn}>
              <ReportImg
                src="https://i.balaan.io/mobile/img/icon/icon-siren.png"
                alt="reporting"
              />
              <span>신고하기</span>
            </ReportPopup>
          </ReportDiv>
        </CardHeaderRight>
      </CardHeader>
      <CardImageContainer>
        <Image src={review.image} />
      </CardImageContainer>
      <CardDescContainer>
        <InfoSection>
          <LikeAndShare>
            <LikeImg
              onClick={handleLike}
              src={
                thumbClicked
                  ? 'https://static.balaan.co.kr/mobile/img/review/like-hand-fill.png?v4'
                  : 'https://static.balaan.co.kr/mobile/img/icon/like_hand.png'
              }
            />
            <LikeCount>{likeCount}</LikeCount>
            <ShareImg
              onClick={() => handleShowShare(true)}
              src="https://static.balaan.co.kr/mobile/img/view/share.png?v=2"
            />
          </LikeAndShare>
          <HeartImg src="https://static.balaan.co.kr/mobile/img/icon/ic-new-heart-normal.png" />
        </InfoSection>
        <StarsSection>
          {Array.from([1, 2, 3, 4, 5], (el) => (
            <StarImg key={el}>
              <source
                type="image/webp"
                srcSet={`https://i.balaan.io/mobile/img/icons/icon-star-${
                  el <= review.score ? 'black' : 'gray'
                }.webp`}
              />
              <img
                src={`https://i.balaan.io/mobile/img/icons/icon-star-${
                  el <= review.score ? 'black' : 'gray'
                }.png`}
                alt="star"
              />
            </StarImg>
          ))}
        </StarsSection>
        <Options>구매 옵션명: 35</Options>
        <Review>{review.title}</Review>
        <TagContainer>
          <Tag>
            사이즈는 어떤가요? <span>정사이즈에요</span>
          </Tag>
          <Tag>
            색상은 어떤가요? <span>화면과 같아요</span>
          </Tag>
          <Tag>
            발볼은 어떤가요? <span>적당해요</span>
          </Tag>
        </TagContainer>
        <DeliveryBox>
          <BoxImg>
            <source
              type="image/webp"
              srcSet="https://i.balaan.io/mobile/img/icons/icon-box-20.webp"
            />
            <img
              src="https://i.balaan.io/mobile/img/icons/icon-box-20.png"
              alt="box"
            />
          </BoxImg>
          <span>
            배송 도착까지 <strong>2일 소요</strong>
          </span>
        </DeliveryBox>
      </CardDescContainer>
      <GoodsSlide />
      <Comments review={review} />
      <ShareButtons
        showShare={showShare}
        handleShowShare={handleShowShare}
        review={review}
      />
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 100%;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem 1.6rem;
`;

const User = styled.span`
  font-size: 1.3rem;
  font-weight: bold;

  cursor: pointer;
`;

const CardHeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const CreatedTime = styled.span`
  margin-right: 14px;

  color: #999;
  font-size: 1.1rem;
`;

const ReportDiv = styled.div`
  position: relative;

  display: flex;
`;

const ReportButton = styled.img`
  width: 2rem;
  height: 2rem;

  margin: auto;
`;

const ReportPopup = styled.div`
  position: absolute;
  top: 3rem;
  right: 0rem;

  display: ${({ show }) => (show ? 'flex' : 'none')};
  align-items: center;
  padding: 0.7rem 1.2rem;
  border-radius: 0.4rem;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.2);

  color: #020202;
  background: white;

  white-space: nowrap;
`;

const ReportImg = styled.img`
  width: 2.7rem;
  margin-right: 10px;
`;

const CardImageContainer = styled.div`
  width: 100%;
  height: 577px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

const CardDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InfoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1.6rem 1.9rem 1.6rem;
`;

const LikeAndShare = styled.div`
  display: flex;
  gap: 10px;
`;

const LikeImg = styled.img`
  width: 1.5rem;

  cursor: pointer;
`;

const LikeCount = styled.span`
  color: #222;

  font-size: 1.2rem;
  font-weight: bold;

  cursor: pointer;
`;

const ShareImg = styled.img`
  width: 1.5rem;

  cursor: pointer;
`;

const HeartImg = styled.img`
  width: 1.5rem;

  cursor: pointer;
`;

const StarsSection = styled.div`
  width: fit-content;
  padding: 0 1.6rem;
  margin-bottom: 5px;

  cursor: pointer;
`;

const StarImg = styled.picture`
  color: black;

  img {
    width: 1.3rem;
  }
`;

const Options = styled.p`
  padding: 0 1.6rem;
  margin: 0.5rem 0 1.2rem;

  color: #999;

  font-size: 1.2rem;
  font-weight: 300;
`;

const Review = styled.div`
  padding: 0 1.6rem 1.5rem;
  font-size: 1.2rem;
  font-weight: 500;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0 1.6rem;
  margin-bottom: 2rem;

  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Tag = styled.div`
  padding: 0.35rem 0.7rem;
  border: 1px solid #e5e5e5;
  border-radius: 1.1rem;

  background: white;

  font-size: 1.05rem;

  white-space: nowrap;
  cursor: default;

  span {
    color: #122f5c;
  }
`;

const DeliveryBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0.6rem 0.85rem;
  margin: 0 1.6rem 2rem;
  width: fit-content;
  border-radius: 0.4rem;

  background: #f6f6f6;
`;

const BoxImg = styled.picture`
  margin-right: 5px;

  img {
    width: 2rem;
  }
`;

export default ProductsCard;
