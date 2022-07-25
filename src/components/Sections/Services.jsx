import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";

export default function Services() {
  return (
    <Wrapper id="services">
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">What We Offer?</h1>
            <p className="font13">
              We offer you all the business tools you need to build and keep a
              profitable business.
              <br />
              Our services will help you manage your energy deals, broadband and
              card machine services.
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="roller"
                title="SME"
                subtitle="In a highly competitive market place, we understand the importance of SME customers being afforded a choice of supplier
                and product with competitive gas & electricity pricing. We are committed to quality customer service and ensure each customer a smooth and seamless journey when embarking on supplier change."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="Electricity & Gas"
                subtitle="In an ever volatile energy market driving rising costs of electricity and gas, We are continually market aware seeking preferred
                contractual terms with fixed electricity and gas tariffs, thus eliminating the insecurity of fluctuating electricity and gas costs, giving our customers peace of mind."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="Bespoke"
                subtitle="We offer bespoke pricing from leading UK suppliers to an ever increasing portfolio of large SME gas and electricity
                consumers and corporate customers. Through risk management strategies the package can be tailored according to customer needs ranging from billing platforms and energy management to buying and selling power."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="printer"
                title="Card Machine"
                subtitle="Flexible payment solutions for small businesses
                We offer a complete range of fast, reliable, and secure solutions, so you can give your business. the best payment experience possible.
                "
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="tel"
                title="Telecommunication"
                subtitle="Communication solution for all kind of businesses,
                We offer a complete range of broadband and landline solutions, so you can give your customers the best communication experience for your business needs.
                "
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
          <p className="font18 extraBold">
            We may receive a commission from the supplier once the sale is
            completed and on supply. This is built in via an uplift added to
            your final unit price and paid to us by the supplier.
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;