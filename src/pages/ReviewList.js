import React, { useState } from 'react';
import styled from 'styled-components';
import Filter from '../components/Filter';
import GridType from '../components/GridType';
import Modal from '../components/Modal';
import TypeSelector from '../components/TypeSelector';
import ListType from '../components/ListType';

const ReviewList = () => {
  const [modalView, setModalView] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    id: 'recent',
    text: '최신순',
  });
  const [viewType, setViewType] = useState('grid');

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
        {viewType === 'grid' ? <GridType /> : <ListType />}
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
