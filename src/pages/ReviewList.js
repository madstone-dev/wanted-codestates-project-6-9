import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Filter from '../components/ReviewList/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { updatePage, updateSort } from '../reducers/reviewReducer';
import TypeSelector from '../components/ReviewList/TypeSelector';
import GridType from '../components/ReviewList/GridType';
import ListType from '../components/ReviewList/ListType';
import Modal from '../components/ReviewList/Modal';

const Container = styled.div`
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

const ReviewList = () => {
  const pageItems = useSelector((state) => state.reviews.pageItems);
  const page = useSelector((state) => state.reviews.page);
  const sortBy = useSelector((state) => state.reviews.sortBy);
  const comments = useSelector((state) => state.reviews.comments);

  const [viewType, setViewType] = useState('grid');
  const [modalView, setModalView] = useState(false);
  const [reviews, setReviews] = useState([]);

  const [selectedItem, setSelectedItem] = useState({
    id: 'createdAt',
    text: '최신순',
    align: 'desc',
  });
  const dispatch = useDispatch();

  useEffect(() => {
    setReviews(pageItems);
  }, [sortBy, comments]);

  useEffect(() => {
    if (page !== 1) {
      setReviews((prev) => [...prev, ...pageItems]);
    } else {
      setReviews(pageItems);
    }
  }, [page]);

  useEffect(() => {
    dispatch(updateSort({ sort: selectedItem.id, align: selectedItem.align }));
    dispatch(updatePage(1));
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
        {viewType === 'grid' ? (
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
