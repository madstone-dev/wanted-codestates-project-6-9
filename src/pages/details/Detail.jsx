import React, { useEffect, useRef, useState } from "react";
import ProductsCard from "../../components/productCard/ProductsCard";
import Header from "../../components/header/Header";
import styled from "styled-components";
import Scrolltotop from "../../common/scrollToTop";

const Detail = () => {
  const [loading, setLoading] = useState(false);
  const [currentItems, setCurrentItems] = useState(1);
  const end = useRef();

  useEffect(
    () => {
      if (loading) {
        const observer = new IntersectionObserver(
          entries => {
            if (entries[0].isIntersecting) {
              loadMore();
            }
          },
          { threshold: 1 }
        );
        observer.observe(end.current);
      }
    },
    [loading]
  );

  const loadMore = () => {
    setCurrentItems(prev => prev + 1);
  };

  return (
    <DetailContainer>
      <DetailWrapper>
        <Header />
        <ProductsContainer>
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
        </ProductsContainer>
      </DetailWrapper>
      <Scrolltotop />
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

const ProductsContainer = styled.div`padding-top: 75px;`;

export default Detail;
