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
              Complaints Handling Procedure
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
          <LinksContainer style={{ opacity: "50%" }}>
            <p className="whiteColor animate pointer font13">
              Tel: 02920140217
            </p>
            <a
              className="whiteColor animate pointer font13"
              href="mailto:info@kutilitiesltd.com"
            >
              Email: info@kutilitiesltd.com
            </a>
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(auto, 1fr);
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(auto, 1fr);
  }
`;