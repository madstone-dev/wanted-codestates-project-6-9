import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Filter from "../components/Filter";
import GridType from "../components/GridType";
import Modal from "../components/Modal";
import TypeSelector from "../components/TypeSelector";
import ListType from "../components/ListType";
import { useDispatch, useSelector } from "react-redux";
import { updatePage, updateSort } from "../reducers/reviewReducer";

const ReviewList = () => {
  const pageItems = useSelector((state) => state.reviews.pageItems);
  const page = useSelector((state) => state.reviews.page);

  const [viewType, setViewType] = useState("grid");
  const [modalView, setModalView] = useState(false);
  const [reviews, setReviews] = useState([]);

  const [selectedItem, setSelectedItem] = useState({
    id: "createdAt",
    text: "최신순",
    align: "desc",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    setReviews(pageItems);
  }, []);

  useEffect(() => {
    if (page !== 1) {
      setReviews((prev) => [...prev, ...pageItems]);
    }
  }, [page, pageItems]);

  useEffect(() => {
    dispatch(updateSort({ sort: selectedItem.id, align: selectedItem.align }));
  }, [dispatch, selectedItem]);

  const changeType = (type) => {
    setViewType(type);
    dispatch(updatePage(1));
  };

  const handleModal = () => {
    setModalView((prev) => !prev);
  };
  return (
    <Container>
      <ContentContainer>
        <Filter handleModal={handleModal} selectedItem={selectedItem} />
        <TypeSelector viewType={viewType} changeType={changeType} />
        {viewType === "grid" ? (
          <GridType reviews={reviews} />
        ) : (
          <ListType reviews={reviews} />
        )}
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
  /* display: flex;
  justify-content: center; */
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
