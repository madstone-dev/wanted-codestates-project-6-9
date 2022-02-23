import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Filter from "../components/Filter";
import GridType from "../components/GridType";
import Modal from "../components/Modal";
import TypeSelector from "../components/TypeSelector";
import ListType from "../components/ListType";
import { useDispatch, useSelector } from "react-redux";
import { updateSort } from "../reducers/reviewReducer";

const ReviewList = () => {
  const reviews = useSelector((state) => state.reviews.reviews);
  const [modalView, setModalView] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    id: "createdAt",
    text: "최신순",
    align: "desc",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateSort({ sort: selectedItem.id, align: selectedItem.align }));
  }, [dispatch, selectedItem]);
  const [viewType, setViewType] = useState("grid");
  // 최신순, 코멘트순, 랜덤순

  const changeType = (type) => {
    setViewType(type);
  };

  const handleModal = () => {
    setModalView((prev) => !prev);
  };
  return (
    <Container>
      <ContentContainer>
        <Filter handleModal={handleModal} selectedItem={selectedItem} />
        <TypeSelector viewType={viewType} changeType={changeType} />
        {viewType === "grid" ? <GridType reviews={reviews} /> : <ListType />}
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
  display: flex;
  justify-content: center;
  position: relative;
  background-color: #f9f9f9;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  background-color: white;
  position: relative;
  width: 550px;
  height: 100vh;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  overflow: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
