import React, { useEffect, useRef, useState } from 'react';
import ProductsCard from '../components/ProductsCard';
import Header from '../components/Header';
import styled from 'styled-components';
import Scrolltotop from '../components/ScrollToTop';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const { reviews } = useSelector((state) => state.reviews);
  const [loading, setLoading] = useState(false);
  const [currentItems, setCurrentItems] = useState(1);
  const end = useRef();

  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadMore();
          }
        },
        { threshold: 1 },
      );
      observer.observe(end.current);
    }
  }, [loading]);

  const loadMore = () => {
    setCurrentItems((prev) => prev + 1);
  };

  const SelectedProduct = () => {
    const selectedReview = reviews?.filter(
      (review) => review.id === Number(id),
    )[0];
    return <ProductsCard review={selectedReview} />;
  };

  return (
    <DetailContainer>
      <DetailWrapper>
        <Header title={'리뷰 상세보기'} />
        <ProductsContainer>
          <SelectedProduct />
          {reviews
            ?.filter((review) => review.id !== Number(id))
            ?.map((review) => (
              <ProductsCard key={review.id} review={review} />
            ))}
        </ProductsContainer>
        <Scrolltotop />
      </DetailWrapper>
      <div ref={end} />
    </DetailContainer>
  );
};

const DetailContainer = styled.div`
  position: relative;

  display: flex;
  width: 550px;
  height: 100vh;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  background-color: white;

  overflow: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const DetailWrapper = styled.div`
  margin: auto;
  width: 100%;
  background-color: #fff;
`;

const ProductsContainer = styled.div`
  padding-top: 75px;
`;

export default Detail;
