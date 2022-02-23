import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { updatePage } from '../../reducers/reviewReducer';

const Container = styled.div`
  height: 3rem;
`;

const InfiniteScroll = () => {
  const [target, setTarget] = useState(null);

  const dispatch = useDispatch();
  const page = useSelector((state) => state.reviews.page);

  useEffect(() => {
    const onIntersect = ([entry], observer) => {
      // console.log(entry, observer);
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        dispatch(updatePage(page + 1));
        observer.observe(entry.target);
      }
    };
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.3,
      });
      observer.observe(target);
    }

    return () => observer && observer.disconnect();
  }, [dispatch, page, target]);

  return <Container ref={setTarget}></Container>;
};

export default InfiniteScroll;
