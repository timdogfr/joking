
import styled from "styled-components";

export const TeamContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding:20px;
    
    @media screen and (max-width: 960px) {
        flex-direction: column;
    }
  
`;

export const TeamMember = styled.div`
   display: block;

`;

export const TeamImage = styled.img`
    width:40%;
    height: auto;
    border-radius: 50%;
    display: block;
   margin: 0 auto;
    @media screen and (max-width: 960px) {
        width:100%;
    }
   
`;

export const TeamContent = styled.div`
    padding: 30px 26px;
`;

export const TeamName = styled.h3`
    font-size: 2.0rem;
    font-weight: 600;
    color: #fff;
    text-align: center;

`;

export const TeamDesignation = styled.h4`
    font-size: 1rem;
    font-weight: 400;
    color: #fff;
    text-align: center;
`;