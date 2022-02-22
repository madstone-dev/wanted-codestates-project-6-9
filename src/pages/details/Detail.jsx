import React from "react"
import ProductsCard from "./components/productCard/ProductsCard"
import Header from "./components/header/Header"
import styled from "styled-components"

const Detail = () => {
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
    </DetailContainer>
  )
}

const DetailContainer = styled.div`
  display: flex;
  width: 100%;

  background-color: #f9f9f9;
  overflow: hidden;
`

const DetailWrapper = styled.div`
  width: 500px;
  margin: auto;

  background-color: #fff;
`

const ProductsContainer = styled.div`
  padding-top: 75px;
`

export default Detail
