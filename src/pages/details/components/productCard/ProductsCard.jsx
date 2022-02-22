import React, { useState } from "react"
import styled from "styled-components"

const ProductsCard = () => {
  const [showReportBtn, setShowReportBtn] = useState(false)

  return (
    <CardContainer>
      <CardHeader>
        <User>a950819</User>
        <CardHeaderRight>
          <CreatedTime>2021-02-25</CreatedTime>
          <ReportDiv>
            <ReportButton onClick={() => setShowReportBtn((prev) => !prev)} src="https://i.balaan.io/mobile/img/icon/icon-more.png" />
            <ReportPopup show={showReportBtn}>
              <span>신고하기</span>
            </ReportPopup>
          </ReportDiv>
        </CardHeaderRight>
      </CardHeader>
      <CardImageContainer>
        <Image src="https://i.balaan.io/review/RV0000021430-2.webp" />
      </CardImageContainer>
      <CardDescContainer>
        <InfoSection>
          <LikeAndShare>
            <span>👍</span>
            <span>37</span>
            <span>공유</span>
          </LikeAndShare>
          <span>🤍</span>
        </InfoSection>
        <StarsSection>💥💥💥💥💥</StarsSection>
        <Options>구매 옵션명: 35</Options>
        <Review>아이 예뻐요 사진이랑 똑같습니다!</Review>
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
        <DeliveryBox>배송 도착까지 2일 소요</DeliveryBox>
      </CardDescContainer>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  width: 500px;
`

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem 1.6rem;
`

const User = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
`

const CardHeaderRight = styled.div`
  display: flex;
  align-items: center;
`

const CreatedTime = styled.span`
  margin-right: 14px;

  color: #999;
  font-size: 1.1rem;
`

const ReportDiv = styled.div`
  display: flex;
`

const ReportButton = styled.img`
  width: 2rem;
  height: 2rem;

  margin: auto;
`

const ReportPopup = styled.div`
  position: absolute;
  top: 3.4rem;
  right: 0;

  display: ${({ show }) => (show ? "block" : "none")};
  padding: 0.7rem 1.2rem;
  border-radius: 0.4rem;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.2);

  color: #020202;
  background: white;

  white-space: nowrap;
`

const CardImageContainer = styled.div`
  width: 100%;
  height: 577px;
`

const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`

const CardDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const InfoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1.6rem 1.9rem 1.6rem;
`

const LikeAndShare = styled.div`
  display: flex;
  gap: 10px;
`

const StarsSection = styled.div`
  padding: 0 1.6rem;
  margin-bottom: 5px;

  cursor: pointer;
`

const Options = styled.p`
  padding: 0 1.6rem;
  margin: 0.5rem 0 1.2rem;

  color: #999;

  font-size: 1.2rem;
  font-weight: 300;
`

const Review = styled.div`
  padding: 0 1.6rem 1.5rem;
  font-size: 1.2rem;
  font-weight: 500;
`

const TagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
`

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
`

const DeliveryBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0.6rem 0.85rem;
  margin: 0 1.6rem 2rem;
  width: fit-content;
  border-radius: 0.4rem;

  background: #f6f6f6;
`

export default ProductsCard
