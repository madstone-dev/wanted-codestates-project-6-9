import React, { useState } from "react";
import styled from "styled-components";
import Filter from "../components/Filter";
import GridList from "../components/GridList";
import Modal from "../components/Modal";
import TypeSelector from "../components/TypeSelector";

const ReviewList = () => {
  const [modalView, setModalView] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    id: "recent",
    text: "최신순",
  });

  const handleModal = () => {
    setModalView((prev) => !prev);
  };
  return (
    <Container>
      <ContentContainer>
        <Filter handleModal={handleModal} selectedItem={selectedItem} />
        <TypeSelector />
        <GridList />
      </ContentContainer>
      {modalView && (
        <Modal
          handleModal={handleModal}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        ></Modal>
      )}
    </Container>
  );
};

export default ReviewList;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: #f9f9f9;
`;

const ContentContainer = styled.div`
  background-color: white;
  position: relative;
  width: 550px;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; ;
`;
