import React from "react";
import pdf from "../assets/Complaints-Handling-Procedure-Updated.pdf";
import styled from "styled-components";
const Complain = () => {
  return (
    <PDFContainer>
      <object
        data={pdf}
        type="application/pdf"
        width="100%"
        height="100%"
        style={{
          height:'100vh',
          width:'100vw'
        }}
      >

      </object>
    </PDFContainer>
  );
};

const PDFContainer = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export default Complain;
