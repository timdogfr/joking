import styled from "styled-components";

export const TimeLine = styled.div`
    position: relative;
    max-width: 1200px;
     margin: 0 auto;  

     &:after{
        content: '';
        position: absolute;
        width: 6px;
        background-color: white;
        top: 0;
        bottom: 0;
        left: 50%;
        margin-left: -3px;
     } 

     @media screen and (max-width: 600px) {
         &:after{
        left: -21px;
         }
     }
`;


export const TimeLineContainerLeft = styled.div`
     padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;
    left: 0;
    &:after {
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        right: -17px;
        background-color: white;
        border: 4px solid #FF9F55;
        top: 15px;
        border-radius: 50%;
        z-index: 1;
    }

    &:before {
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        z-index: 1;
        right: 30px;
        border: medium solid white;
        border-width: 10px 0 10px 10px;
        border-color: transparent transparent transparent white;
}

@media screen and (max-width: 600px) {
    width: 100%;
    padding-left: 0px;
    padding-right: 0px;
    left:9%;

    &:before{
        left: -10px;
        border: medium solid white;
        border-width: 10px 10px 10px 0;
        border-color: transparent white transparent transparent;
    }
    &:after {
        left: -16vw;
    }
    }
}
`;


export const TimeLineContainerRight = styled.div`
     padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;
    left: 50%;
    &:after {
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        right: -17px;
        background-color: white;
        border: 4px solid #FF9F55;
        top: 15px;
        border-radius: 50%;
        z-index: 1;
    }

    &:after{
        left: -16px;
    }

    &:before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}

@media screen and (max-width: 600px) {
    width: 100%;
    padding-left: 0px;
    padding-right: 0px;
    left:9%;

    &:before{
        left: -10px;
        border: medium solid white;
        border-width: 10px 10px 10px 0;
        border-color: transparent white transparent transparent;
    }
    &:after {
        left: -16vw;
    }
    }

}
`;

export const TimeLineContent = styled.div`
    padding: 20px 30px;
    background-color: white;
    position: relative;
    border-radius: 6px;
`;

export const Title = styled.h2`
    font-size: 2rem;
    padding-bottom: 10px;
`;

export const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style:circle ;
`;

export const ListItem = styled.li`
    padding: 0;
    margin: 0;
    font-size: 1.1rem;
    line-height: 2rem;
    padding-bottom: 10px;

`;  


