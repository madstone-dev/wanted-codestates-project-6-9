import React from 'react';
import styled from 'styled-components';

import items from './data.json';

const GoodsSlide = (props) => {
  const goods = items.items;
  return (
    <Goods>
      <ItemList>
        {goods
          ? goods.map((item, index) => (
              <Item key={index}>
                <ItemImage src={`${item.src}`} alt={item.productName} />
                <ItemInfo>
                  <span>{item.productName}</span>
                  <span>{item.productPrice}원</span>
                </ItemInfo>
              </Item>
            ))
          : ''}
      </ItemList>
    </Goods>
  );
};

export default GoodsSlide;

const Goods = styled.div`
  height: 16rem;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ItemList = styled.ul`
  margin: 0;
  height: 99%;
  padding: 0;
  width: 250%;
  display: flex;
  flex-direction: row;
  & li:nth-child(1) {
    margin-left: 1.5rem;
    box-shadow: 0px 0px 5px 2px rgba(141, 141, 141, 0.2);
  }
`;

const Item = styled.li`
  height: 95%;
  list-style: none;
  cursor: pointer;
  width: 8.5rem;
  margin-right: 1rem;
  margin-top: 0.65rem;
  &:hover {
    transform: scale(1.01);
  }
`;

const ItemImage = styled.img`
  width: 100%;
`;

const ItemInfo = styled.div`
  margin-top: 0.9rem;
  margin-bottom: 0.9rem;
  padding: 0 0.4rem;
  text-align: center;
  span {
    display: block;
    font-family: Lato;
    font-size: 1.1rem;
    font-weight: normal;
    letter-spacing: -0.025rem;
    color: #111111;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
