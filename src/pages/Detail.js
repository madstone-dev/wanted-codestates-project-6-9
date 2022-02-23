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
        <Header />
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
  display: flex;
  width: 100%;
  background-color: #f9f9f9;
  overflow: hidden;
`;

const DetailWrapper = styled.div`
  margin: auto;
  background-color: #fff;
`;

const ProductsContainer = styled.div`
  padding-top: 75px;
`;

export default Detail;
