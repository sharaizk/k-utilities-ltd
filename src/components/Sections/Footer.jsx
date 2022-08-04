import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import logo from "../../assets/img/logo.png";

const StyledLogo = styled.img`
  height: auto;
  width: 20%;
`;

export default function Contact() {
  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper
            className="flexSpaceCenter"
            style={{ padding: "1rem 0" }}
          >
            <Link
              className="flexCenter animate pointer"
              to="home"
              smooth={true}
              offset={-80}
            >
              <StyledLogo src={logo} alt="logo" />
              <h1
                className="font15 extraBold whiteColor"
                style={{ marginLeft: "15px" }}
              >
                K Utilities Ltd
              </h1>
            </Link>

            <Link
              className="whiteColor animate pointer font13"
              to="home"
              smooth={true}
              offset={-80}
            >
              Back to top
            </Link>
          </InnerWrapper>
          <LinksContainer
            className="flexSpaceCenter"
            style={{ padding: "1rem 0", opacity: "50%" }}
          >
            <Link
              className="whiteColor animate pointer font13"
              to="home"
              smooth={true}
              offset={-80}
            >
              Home
            </Link>
            <Link
              className="whiteColor animate pointer font13"
              to="services"
              smooth={true}
              offset={-80}
            >
              Services
            </Link>
            <Link
              className="whiteColor animate pointer font13"
              to="contact"
              smooth={true}
              offset={-80}
            >
              Get a Qoute
            </Link>
            <Link
              className="whiteColor animate pointer font13"
              to="projects"
              smooth={true}
              offset={-80}
            >
              FAQs
            </Link>
            <Link
              className="whiteColor animate pointer font13"
              to="blog"
              smooth={true}
              offset={-80}
            >
              Complaints
            </Link>
            <Link
              className="whiteColor animate pointer font13"
              to="contact"
              smooth={true}
              offset={-80}
            >
              Contact
            </Link>
          </LinksContainer>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div``;

const LinksContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;