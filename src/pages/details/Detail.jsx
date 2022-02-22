import React from "react";
import ProductsCard from "./components/productCard/ProductsCard";
import Header from "./components/header/Header";
import styled from "styled-components";

const Detail = () => {
  return (
    <DetailComponent>
      <Header />
      <ProductsContainer>
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
      </ProductsContainer>
    </DetailComponent>
  );
};

const DetailComponent = styled.div`width: 100%;`;

const ProductsContainer = styled.div`padding-top: 75px;`;

export default Detail;
