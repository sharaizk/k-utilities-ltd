import React from "react";
import styled from "styled-components";
// Components

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">
              Complaints Handling Procedure & Policy
            </h1>
            <p className="font13">
              We are committed to providing the highest levels of service to all
              our customers.
              <br />
              If you are in any way dissatisfied with our
              [product(s)/service(s)], then please let us know as soon as
              possible. This will help us to continually improve our service to
              you.
            </p>
            <br />
            What to do if you have a complaint
            <br />
            Email: <a href="mailto:info@kutilities.com">info@kutilities.com</a>
          </HeaderInfo>
          <ButtonContainer>
            <Button1>COMPLAINT HANDLING PROCEDURE</Button1>
            <Button2>COMPLAINT HANDLING POLICY</Button2>
          </ButtonContainer>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 20px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Button1 = styled.button`
  border: 1px solid ${(props) => (props.border ? "#707070" : "#7620ff")};
  background-color: ${(props) => (props.border ? "transparent" : "#7620ff")};
  padding: 15px;
  cursor: pointer;
  margin-right: 1vw;
  outline: none;
  border-radius: 10px;
  color: ${(props) => (props.border ? "#707070" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#580cd2")};
    border: 1px solid #7620ff;
    color: ${(props) => (props.border ? "#7620ff" : "#fff")};
  }
  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 2vh;
  }
`;
const Button2 = styled.button`
  border: 1px solid ${(props) => (props.border ? "#707070" : "#7620ff")};
  background-color: ${(props) => (props.border ? "transparent" : "#7620ff")};
  padding: 15px;
  outline: none;
  border-radius: 10px;
  cursor: pointer;
  color: ${(props) => (props.border ? "#707070" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#580cd2")};
    border: 1px solid #7620ff;
    color: ${(props) => (props.border ? "#7620ff" : "#fff")};
  }
`;
