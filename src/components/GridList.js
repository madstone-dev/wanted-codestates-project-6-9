import React from 'react';
import styled from 'styled-components';

const GridList = () => {
  const toDetail = (id) => {
    // 상세 페이지로 이동
  };

  return (
    <Container>
      <Review onClick={toDetail(1)}>
        <ReviewImg
          src='https://i.balaan.io/review/0b8cb96ad6e3bdc8e7ad05c021490f87-t.jpg'
          alt=''
        />
      </Review>
      <Review onClick={toDetail(1)}>
        <ReviewImg
          src='https://i.balaan.io/review/0b8cb96ad6e3bdc8e7ad05c021490f87-t.jpg'
          alt=''
        />
      </Review>{' '}
      <Review onClick={toDetail(1)}>
        <ReviewImg
          src='https://i.balaan.io/review/0b8cb96ad6e3bdc8e7ad05c021490f87-t.jpg'
          alt=''
        />
      </Review>{' '}
      <Review onClick={toDetail(1)}>
        <ReviewImg
          src='https://i.balaan.io/review/0b8cb96ad6e3bdc8e7ad05c021490f87-t.jpg'
          alt=''
        />
      </Review>{' '}
      <Review onClick={toDetail(1)}>
        <ReviewImg
          src='https://i.balaan.io/review/0b8cb96ad6e3bdc8e7ad05c021490f87-t.jpg'
          alt=''
        />
      </Review>{' '}
      <Review onClick={toDetail(1)}>
        <ReviewImg
          src='https://i.balaan.io/review/0b8cb96ad6e3bdc8e7ad05c021490f87-t.jpg'
          alt=''
        />
      </Review>{' '}
      <Review onClick={toDetail(1)}>
        <ReviewImg
          src='https://i.balaan.io/review/0b8cb96ad6e3bdc8e7ad05c021490f87-t.jpg'
          alt=''
        />
      </Review>
    </Container>
  );
};

export default GridList;

const Container = styled.section`
  width: 100%;

  margin-top: 3px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1px;
`;

const Review = styled.div`
  width: 100%;
  cursor: pointer;
  overflow: hidden;
`;

const ReviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
