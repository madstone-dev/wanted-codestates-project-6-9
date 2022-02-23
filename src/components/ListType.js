import React from 'react';
import styled from 'styled-components';

const GridList = () => {
  return (
    <Container>
      <Detail />
      <Detail />
      <Detail />
      <Detail />
      <Detail />
      <Detail />
    </Container>
  );
};

export default GridList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Detail = styled.div``;
