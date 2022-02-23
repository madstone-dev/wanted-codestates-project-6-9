import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const InfiniteScroll = () => {
  const [target, setTarget] = useState(null);
  useEffect(() => {
    const onIntersect = ([entry], observer) => {
      console.log(entry, observer);
      if (entry.isIntersecting) {
        observer.unoberve(entry.target);
        console.log('안녕');
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
  }, [target]);

  return <Container ref={setTarget}></Container>;
};

export default InfiniteScroll;

const Container = styled.div`
  height: 3rem;
`;
