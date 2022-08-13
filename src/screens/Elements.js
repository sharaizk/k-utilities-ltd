import styled from "styled-components";
export const PDFConatiner = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 10% 10% 5% 10%;
  overflow-x: hidden !important;

`;

export const Title = styled.h3``;
export const Description = styled.p`
  /* margin-bottom: 4vh; */
`;

export const ListContainer = styled.ul`
  list-style: disc;
  margin-top: 3vh;
`;

export const List = styled.li`
  margin-left: 2vw;
  font-weight: 600;
`;

export const ContactTitle = styled.label`
  color: ${props=>props.theme.primary};
`;
export const ContactEmail = styled.a`
  color: #7c9fda;
  color: ${props=>props.theme.primary};

`;

export const Gap=styled.div`
width: 100%;
margin-bottom: 4vh;
`

