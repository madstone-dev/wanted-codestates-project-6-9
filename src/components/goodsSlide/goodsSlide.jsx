import React from "react";
import styled from "styled-components";

const items = [
  {
    id: 1,
    src: "/images/01.jpeg",
    productName: "GG 마몽 퀼팅 여성 반지갑",
    productPrice: "587,010"
  },
  {
    id: 2,
    src: "/images/02.jpeg",
    productName: "GG 마몽 퀼팅 여성 반지갑",
    productPrice: "587,010"
  },
  {
    id: 3,
    src: "/images/01.jpeg",
    productName: "GG 마몽 퀼팅 여성 반지갑",
    productPrice: "587,010"
  },
  {
    id: 4,
    src: "/images/02.jpeg",
    productName: "GG 마몽 퀼팅 여성 반지갑",
    productPrice: "587,010"
  },
  {
    id: 5,
    src: "/images/01.jpeg",
    productName: "GG 마몽 퀼팅 여성 반지갑",
    productPrice: "587,010"
  },
  {
    id: 6,
    src: "/images/02.jpeg",
    productName: "GG 마몽 퀼팅 여성 반지갑",
    productPrice: "587,010"
  },
  {
    id: 7,
    src: "/images/01.jpeg",
    productName: "GG 마몽 퀼팅 여성 반지갑",
    productPrice: "587,010"
  },
  {
    id: 8,
    src: "/images/02.jpeg",
    productName: "GG 마몽 퀼팅 여성 반지갑",
    productPrice: "587,010"
  }
];

const GoodsSlide = props => {
  return (
    <Goods>
      <ItemList>
        {items
          ? items.map((item, index) =>
              <Item key={index}>
                <ItemImage src={`${item.src}`} alt={item.productName} />
                <ItemInfo>
                  <span>
                    {item.productName}
                  </span>
                  <span>
                    {item.productPrice}원
                  </span>
                </ItemInfo>
              </Item>
            )
          : ""}
      </ItemList>
    </Goods>
  );
};

export default GoodsSlide;

const Goods = styled.div`
  height: 253px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ItemList = styled.ul`
  margin: 0;
  height: 100%;
  padding: 0;
  width: 250%;
  display: flex;
  flex-direction: row;
  & li:nth-child(1) {
    margin-left: 1.5rem;
  }
`;

const Item = styled.li`
  list-style: none;
  cursor: pointer;
  width: 8.5rem;
  margin-right: 1rem;
  padding-top: 0.65rem;
`;

const ItemImage = styled.img`width: 100%;`;

const ItemInfo = styled.div`
  margin-top: 0.9rem;
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
