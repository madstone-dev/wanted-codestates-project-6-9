import React, { useState } from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  width: 550px;
  font-weight: 600;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.5);
`;
const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  width: 100%;
  background-color: white;
  z-index: 5;
  box-sizing: border-box;
  div {
    box-sizing: border-box;
    width: 480px;
    margin-right: auto;
    margin-left: auto;
  }
`;

const Label = styled.label`
  color: ${(props) => props.checked && "black"};
`;
const ItemHeader = styled.div`
  margin: 25px 0px;
  font-size: 22px;
  text-align: center;
`;
const ItemBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
  &:not(:last-child) {
    border-bottom: 1px solid #ccc;
  }
  label {
    width: 100%;
  }
  input {
    width: 30px;
    height: 30px;
  }
  input:checked {
    background-color: black;
  }
`;
const ItemFooter = styled.div`
  display: flex;
  width: 100%;
`;
const ModalButton = styled.button`
  font-size: 20px;
  background-color: black;
  width: 100%;
  color: white;
  font-weight: 600;
  padding: 20px 0;
  margin-bottom: 30px;
  cursor: pointer;
`;

const sortType = [
  { id: "createdAt", text: "최신순", align: "desc" },
  { id: "commentCnt", text: "리뷰카운트순", align: "desc" },
  { id: "random", text: "랜덤 정렬", align: "rnd" },
];

const Modal = ({ handleModal, selectedItem, setSelectedItem }) => {
  const [checkedItem, setCheckedItem] = useState(selectedItem);

  const handleCheckedChange = (event) => {
    const { value } = event.target;
    const checked = sortType.filter((sortItem) => sortItem.id === value)[0];
    setCheckedItem(checked);
  };
  const handleSortChange = () => {
    handleModal();
    setSelectedItem(checkedItem);
  };
  return (
    <ModalContainer>
      <Overlay onClick={handleModal} />
      <Items>
        <ItemHeader>정렬</ItemHeader>
        <ItemBody>
          {sortType.map((sortItem) => (
            <Item key={sortItem.id}>
              <Label
                htmlFor={sortItem.id}
                checked={sortItem.id === checkedItem.id && true}
              >
                {sortItem.text}
              </Label>
              <input
                type="radio"
                id={sortItem.id}
                name="sort"
                value={sortItem.id}
                checked={sortItem.id === checkedItem.id}
                onChange={handleCheckedChange}
              />
            </Item>
          ))}
        </ItemBody>
        <ItemFooter>
          <ModalButton onClick={handleSortChange}>적용하기</ModalButton>
        </ItemFooter>
      </Items>
    </ModalContainer>
  );
};

export default Modal;
