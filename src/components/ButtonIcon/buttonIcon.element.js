import styled from "styled-components";
import {Link} from "react-router-dom";



export const ButtonWithIcon = styled.button`
    background-color: ${({ bg }) => (bg ? bg : "var(--secondary)")};
    color:#fff;
   
    font-family: 'cocogoose';
    font-size: 1em;
    padding: 10px;
    border-radius: 5px;
    border: none;
    display: flex;
    text-align: center;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    width: 100%;
    margin-top:1vw;
    text-decoration: none;

    @media screen and (max-width:768px){
        margin-bottom:1rem;
        width:100%;
       
        
    }   


`;

export const SocialIcon = styled.span`
margin-right: 0.5rem;
padding-top: 5px;
font-size: 1.5rem;
`;