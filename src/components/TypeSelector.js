import React, { useState } from 'react';
import styled from 'styled-components';

const TypeSelector = () => {
  const [selected, setSelected] = useState('grid');

  const changeType = (type) => {
    setSelected(type);
  };

  return (
    <Container>
      <Type
        viewType='grid'
        selected={selected === 'grid'}
        onClick={() => changeType('grid')}
      >
        <TypeIcon>그리드</TypeIcon>
      </Type>
      <Type
        viewType='list'
        selected={selected === 'list'}
        onClick={() => changeType('list')}
      >
        <TypeIcon>리스트</TypeIcon>
      </Type>
    </Container>
  );
};

export default TypeSelector;

const Container = styled.section`
  width: 100%;
  height: 3rem;
  background-color: red;

  display: flex;
`;

const Type = styled.div`
  width: 50%;
  background: #ffffff;
  border-bottom: 2px solid
    ${(props) => (props.selected ? '#000000' : '#b3b3b3')};
  color: ${(props) => (props.selected ? '#000000' : '#b3b3b3')};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const TypeIcon = styled.div``;
