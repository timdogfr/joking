import styled from "styled-components";


export const BenefitsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
`;

export const IconImage = styled.img`
    width: 150px;
    justify-self:flex-start;
  transition: width 0.5s;
  transition: height 0.5s;
  margin-bottom:2vh;
  border:1px solid #fff;
  padding:10px;
  border-radius: 50%;
  
`;

export const IconText = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0 auto;
    text-align: center;
     color: #fff; 

     @media screen and (max-width: 960px) {
         margin-bottom:5vh;
         align-items: center;
    justify-content: center;

     }
`;