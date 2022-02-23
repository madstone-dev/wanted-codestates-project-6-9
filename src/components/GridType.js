import React from 'react';
import styled from 'styled-components';
import InfiniteScroll from './InfiniteScroll';

const GridList = ({ reviews }) => {
  const toDetail = (id) => {
    // 상세 페이지로 이동
  };

  return (
    <>
      <Container>
        {reviews.map((review) => (
          <Review onClick={toDetail(review.id)} key={review.id}>
            <ReviewImg src={review.image} alt='' />
          </Review>
        ))}
      </Container>
      {reviews.length > 0 && <InfiniteScroll />}
    </>
  );
};

export default GridList;

const Container = styled.section`
  width: 100%;

  margin-top: 3px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1px;

  overflow: hidden;
`;

const Review = styled.div`
  width: 11.5rem;
  height: 11.5rem;
  cursor: pointer;
  overflow: hidden;
`;

const ReviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
