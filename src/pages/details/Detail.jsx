import React, { useEffect, useRef, useState } from "react"
import ProductsCard from "../../components/productCard/ProductsCard"
import Header from "../../components/header/Header"
import styled from "styled-components"
import Scrolltotop from "../../common/scrollToTop"
import { useSelector } from "react-redux"

const Detail = () => {
  // list 페이지에서 넘어올 id
  const { reviews } = useSelector((state) => state.reviews)
  const [loading, setLoading] = useState(false)
  const [currentItems, setCurrentItems] = useState(1)
  const end = useRef()

  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadMore()
          }
        },
        { threshold: 1 }
      )
      observer.observe(end.current)
    }
  }, [loading])

  const loadMore = () => {
    setCurrentItems((prev) => prev + 1)
  }

  const SelectedProduct = (id) => {
    const selectedReview = reviews.filter((review) => review.id === id)
    // selectedReview
    return <ProductsCard review={{ id: "idg", title: "dd" }} />
  }

  return (
    <DetailContainer>
      <DetailWrapper>
        <Header />
        <ProductsContainer>
          <SelectedProduct />
          {/* <ProductsCard />
          <ProductsCard />
          <ProductsCard /> */}
        </ProductsContainer>
        <Scrolltotop />
      </DetailWrapper>
      <div ref={end} />
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
  margin: auto;
  background-color: #fff;
`

const ProductsContainer = styled.div`
  padding-top: 75px;
`

export default Detail
