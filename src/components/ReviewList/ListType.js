import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import InfiniteScroll from './InfiniteScroll';
import ProductsCard from '../ProductsCard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const GridList = ({ reviews }) => {
  const maxPage = useSelector((state) => state.reviews.maxPage);
  const page = useSelector((state) => state.reviews.page);

  console.log(reviews);
  return (
    <>
      <Container>
        {reviews.map((review) => (
          <ProductsCard key={review.id} review={review} />
        ))}
      </Container>
      {reviews.length > 0 && maxPage !== page && <InfiniteScroll />}
    </>
  );
};

export default GridList;
