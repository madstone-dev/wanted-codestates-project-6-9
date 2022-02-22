import React from "react"
import ProductsCard from "./components/productCard/ProductsCard"
import Header from "./components/header/Header"
import styled from "styled-components"

const Detail = () => {
  return (
    <DetailContainer>
      <Header />
      <ProductsContainer>
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
      </ProductsContainer>
    </DetailContainer>
  )
}

const DetailContainer = styled.div`
  width: 500px;
`

const ProductsContainer = styled.div`
  padding-top: 75px;
`

export default Detail
