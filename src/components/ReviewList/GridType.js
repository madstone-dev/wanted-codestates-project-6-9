import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Scrolltotop from '../ScrollToTop';
import InfiniteScroll from './InfiniteScroll';

const GridList = ({ reviews }) => {
  const maxPage = useSelector((state) => state.reviews.maxPage);
  const page = useSelector((state) => state.reviews.page);

  const toDetail = (id) => {
    // 상세 페이지로 이동
  };

  return (
    <>
      <Container>
        {reviews.map((review) => (
          <Review onClick={toDetail(review.id)} key={review.id}>
            <ReviewImg src={review.image} alt="" />
          </Review>
        ))}
        <Scrolltotop />
      </Container>
      {reviews.length > 0 && maxPage !== page && <InfiniteScroll />}
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
