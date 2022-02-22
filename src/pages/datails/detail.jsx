import React from "react";
import Comments from './components/comments/comments';
import GoodsSlide from './components/goodsSlide/goodsSlide';
import Header from "./components/header/Header";

const Detail = props => {
  return <>
  <Header />
  <h1>Datail</h1>
  <GoodsSlide />
  <Comments />
  </>
};

export default Detail;
