import React from 'react';
import styled from 'styled-components';
import GridList from '../components/GridList';
import TypeSelector from '../components/TypeSelector';

const ReviewList = () => {
  return (
    <Container>
      <ContentContainer>
        <TypeSelector />
        <GridList />
      </ContentContainer>
    </Container>
  );
};

export default ReviewList;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
`;

const ContentContainer = styled.div`
  width: 500px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
