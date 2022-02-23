import React from 'react'
import styled from 'styled-components'
import star from '../../src_assets/star.png'
import star_on from '../../src_assets/star_on.png'

export default function Rating({scoreBoolean,setScoreBoolean}) {

  const handleClick = (index)=>{
    setScoreBoolean((pre)=>{
      let newScore=pre.slice(0,index+1).map(item=>true);
      for (let i=0;i<4-index;i++){
        newScore.push(false);
      };
    return newScore;
    });
  };

  return (
    <StarWrapper>
      {scoreBoolean.map((eachscore,index)=> <Star key={index} clicked={eachscore}
      onClick={()=>handleClick(index)}/>)}
    </StarWrapper>
  );
};

const Star = styled.div`
  width: 50px;
  height: 50px;
  background-image : ${props => props.clicked ? `url(${star_on})` : `url(${star})`};
  background-size: cover;
  &:hover{
    cursor : pointer;
  };
`;

const StarWrapper = styled.div`
  display: flex;
  justify-content: center;
`;