import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Assets
import logo1 from "../../assets/img/comapnies/logo1.png";
import logo2 from "../../assets/img/comapnies/logo2.png";
import logo3 from "../../assets/img/comapnies/logo3.png";
import logo4 from "../../assets/img/comapnies/logo4.png";
import logo5 from "../../assets/img/comapnies/logo5.png";
import logo6 from "../../assets/img/comapnies/logo6.png";
import logo8 from "../../assets/img/comapnies/logo8.png";
import logo9 from "../../assets/img/comapnies/logo9.png";
import logo10 from "../../assets/img/comapnies/logo10.png";
import logo11 from "../../assets/img/comapnies/logo11.png";
import logo12 from "../../assets/img/comapnies/logo12.png";
import logo16 from "../../assets/img/comapnies/logo16.png";
import logo13 from "../../assets/img/comapnies/logo13.png";
import logo14 from "../../assets/img/comapnies/logo14.png";
import logo15 from "../../assets/img/comapnies/logo15.jpeg";

export default function ClientSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper >
          <ImgStyle src={logo1} $size={'60%'} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper >
          <ImgStyle src={logo2} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper >
          <ImgStyle src={logo3} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper >
          <ImgStyle src={logo4} $size={'60%'} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper >
          <ImgStyle src={logo5} $size={'40%'} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper >
          <ImgStyle src={logo6} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper >
          <ImgStyle src={logo8} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper >
          <ImgStyle src={logo9} $size={'70%'} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper >
          <ImgStyle src={logo10} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper >
          <ImgStyle src={logo11} $size={'40%'} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper >
          <ImgStyle src={logo12} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper >
          <ImgStyle src={logo13} $size={'70%'} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper >
          <ImgStyle src={logo14} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper >
          <ImgStyle src={logo15} $size={'60%'} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper >
          <ImgStyle src={logo16} alt="client logo" />
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 100%;
  height: 100px;
  cursor: pointer;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
`;
const ImgStyle = styled.img`
  width: auto;
  height: ${(props=>props.$size || '50%')};
  /* padding: 10%; */
`;
