import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Scrolltotop = props => {
  const [visible, setVisible] = useState(false);

  const ToggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", ToggleVisibility);
    return () => {
      window.removeEventListener("scroll", ToggleVisibility);
    };
  }, []);

  return visible
    ? <ScrollToTopButton visible onClick={scrollToTop}>
        TOP
      </ScrollToTopButton>
    : <ScrollToTopButton onClick={scrollToTop}>TOP</ScrollToTopButton>;
};

export default Scrolltotop;

const ScrollToTopButton = styled.button`
  opacity: ${props => (props.visible ? 1 : 0)};
  background-color: #ddd;
  position: fixed;
  right: 2rem;
  outline: none;
  bottom: 5.5rem;
  width: 4.2rem;
  height: 4.2rem;
  background: rgba(249, 249, 249, 1);
  box-sizing: border-box;
  z-index: 1000;
  border-radius: 0.5rem;
  border: none;
`;
