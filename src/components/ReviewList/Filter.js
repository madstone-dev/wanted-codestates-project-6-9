import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  font-size: 20px;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
`;
const FilterItem = styled.div`
  display: flex;
  margin: 15px 10px;
  padding: 0px 25px;
`;
const SortButton = styled.div`
  border: 1px solid blue;
  border-radius: 25px;
  padding: 10px 20px;
`;
const FilterView = styled.div`
  background-color: #f9f9f9;
  display: flex;
  padding: 15px 25px;
  cursor: default;
`;
const ViewItem = styled.div`
  background-color: #e7e8f9;
  color: #4348a2;
  font-size: 18px;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 25px;
`;
const ReviewButton = styled.button`
  background-color: black;
  padding: 10px 20px;
  color: white;
  font-size: 20px;
`;
const Filter = ({ handleModal, selectedItem }) => {
  const navigate = useNavigate();
  const handleMovePage = (e) => {
    navigate('/register');
  };
  return (
    <FilterContainer>
      <ReviewButton onClick={handleMovePage}>리뷰등록</ReviewButton>
      <FilterItem>
        <SortButton onClick={handleModal}>정렬</SortButton>
      </FilterItem>
      <FilterView>
        <ViewItem>{selectedItem.text}</ViewItem>
      </FilterView>
    </FilterContainer>
  );
};

export default Filter;
