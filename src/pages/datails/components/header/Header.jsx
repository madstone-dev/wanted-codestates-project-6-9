import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = props => {
  const navigate = useNavigate();

  const escape = () => {
    navigate("/");
  };

  return (
    <HeaderComponent>
      <EscapeBtn onClick={escape} />
      <h3>리뷰 상세보기</h3>
      <CloseBtn onClick={escape} />
    </HeaderComponent>
  );
};

export default Header;

const HeaderComponent = styled.nav`
  width: 100%;
  positon: fixed;
  z-index: 999;
  box-shadow: 0 0px 3px 0px #ccc;
  background: #fff;
  display: flex;
  flex-dirextion: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem 0;
  top: 0;
  h3 {
    margin: 0;
    padding: 0;
    text-align: center;
    font-family: Lato;
    color: #020202;
    letter-spacing: 0.031rem;
    font-size: 1.4rem;
    font-weight: 700;
    white-space: nowrap;
  }
`;

const EscapeBtn = styled.img`
  width: 1.5rem;
  margin: 0.3rem 1.6rem 0;
`;

EscapeBtn.defaultProps = {
  src:
    "https://djp5oonlusoz4.cloudfront.net/contents/event/20190924/ic_left_btn.png",
  alt: "escapebutton"
};

const CloseBtn = styled.img`
  width: 1.5rem;
  margin: 0.3rem 1.6rem 0;
`;
CloseBtn.defaultProps = {
  src:
    "https://djp5oonlusoz4.cloudfront.net/contents/event/20190924/ic_can_btn.png",
  alt: "closebutton"
};
