import styled from "styled-components";

// Used for wrapping a page component
export const Body = styled.div`
  background-color: ${({theme}) => theme.colors.body};
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

// Used for providing space between components
export const SpacerXSmall = styled.div`
  height: 8px;
  width: 8px;
`;

// Used for providing space between components
export const SpacerSmall = styled.div`
  height: 16px;
  width: 16px;
`;

// Used for providing space between components
export const SpacerMedium = styled.div`
  height: 24px;
  width: 24px;
`;

// Used for providing space between components
export const SpacerLarge = styled.div`
  height: 32px;
  width: 32px;
`;

// Used for providing a wrapper around a component
export const Container = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  width: ${({ wid }) => (wid ? wid+"%" : "100%")};


  @media screen and (max-width: 768px) {
    flex-wrap:wrap;
  }
  
`;

export const TextTitle = styled.p`
  color: ${({color}) => color ? color : "#fff"};
  font-size: 2.2rem;
  font-weight: 500;
  line-height: 1.6;
  font-family: 'wonder';
`;

export const TextSubTitle = styled.p`
  color: ${({color}) => color ? color : "#fff"};
  font-size: ${({size}) => size ? size+"rem" : "1.5rem"};
  font-family: 'wonder';
  text-align:${({align}) => align ? align : "center"};
`;

export const TextDescription = styled.p`
  color: ${({color}) => color ? color : "#fff"};
  font-size: ${({size}) => size ? size : "1.5rem"};
  line-height: 1.6;
  font-family: 'wonder';
  text-align:center;
  width:90%;
  display:block;
  margin:0 auto;

  @media screen and (min-width: 768px) {
    margin-top: 0 ;
  }
`;

export const StyledClickable = styled.div`
  :active {
    opacity: 0.6;
  }
`;

export const line = styled.hr`
width:100%;
color:#e0e0e0;
`;

export const row = styled.div`
display:grid;
grid-template-columns: ${({ col }) => (col ? col+"%" + col+"%" : "50% 50%")};
width = ${({ wid }) => (wid ? wid+"%" : "100%")};
justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
align-items: ${({ ai }) => (ai ? ai : "flex-start")};
column-gap:${({ gap }) => (gap ? gap+"%" : "20%")};

@media screen and (max-width: 768px) {
  grid-template-columns: ${({ col }) => (col ? col+"%" + col+"%" : "100%")};s
}
`;

export const Mint = styled.div`
  padding:40px 60px;
  background-color: rgba(0, 0, 0, 0.5);
  border:1px solid #4b4b4b;
  border-radius:25px;

`;

export const CatDiv = styled.div`
  display:block;

`;

export const Image = styled.img`
  width: ${({ wid }) => (wid ? wid+"%" : "100%")};
  transition: width 0.5s;
  transition: height 0.5s;
  margin-top:20px;
  display:block;
  margin:0 auto;
  @media (max-width: 767px) {
    width: 100%;
    margin-top:0;

  }
`;  

export const Line = styled.hr`
  width:100%;
  border:1px solid #dbac36;
`;

export const FlexContainer = styled.div`
  display:flex;
  flex-direction:${({ fd }) => (fd ? fd : "column")};
  justify-content:${({ jc }) => (jc ? jc : "flex-start")};
  align-item :${({ ai }) => (ai ? ai : "flex-start")};
  flex-wrap:wrap;

`;

export const connectButton = styled.button`
  width:100%;
  padding:10px;
  background-color: transparent;
  color: #dbac36;
  font-family: 'wonder';
  text-align:center;
  font-size:1.5rem;
  border:1px solid #dbac36;
  border-radius:10px;
`;

export const maxButton = styled.button`
  width:30%;
  background : #dbac36;
  height:50px;
  border-radius:10px;
  font-family: 'wonder';
  font-size:1.5rem;


`;