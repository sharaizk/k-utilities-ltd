import React from "react";
import styled from "styled-components";
import Faq from "react-faq-component";
// Components

const data = {
  rows: [
    {
      title: "When does my contract finish?",
      content:
        "The time remaining on your contract can be obtained from your supplier or alternatively by giving authority to us in a form of a letter of authority (LOA) and we will do the rest",
    },
    {
      title: "What is a supply number?",
      content:
        "Supply numbers is a specific piece of information that relates to you site which identifies address’, meter type and helps to get accurate quotations. This can be obtained from your current supplier or alternatively it is generally located on a bill",
    },
    {
      title: "Can I get gas & electricity from the same supplier?",
      content:
        "Yes, Most suppliers provide both gas and electricity to their customers. This is normally referred as dual fuel tariffs, some supplier offer special deals or discounts for the switching of gas & electricity supply",
    },
    {
      title: "Can I get cheaper prices?",
      content:
        "Out of contract prices and deemed rates are notoriously high and large savings are easily made should you be coming to the end of your contract the constantly changing market can benefit you when looking for a cheaper supplier.",
    },
    {
      title: "What is Climate Change Levy (CCL)?",
      content:
        "CCL is a tax on the taxable supply of specified energy products (taxable commodities) for use as fuels that is for lighting, heating and power, by business consumers including consumers in: industry, commerce, agriculture, public administration and other services",
    },
    {
      title: "How long does it take to transfer?",
      content:
        "For customers out of contract, an application generally takes between 4-6 weeks as per the standard transfer process. Please be advised that further delays may occur if your supplier objects to the transfer. If you are still in a contract, supply will commence a day after your contract expires.",
    },
    {
      title: "What if my transfer is objected?",
      content:
        "An objection is highly likely as suppliers reserve the right to object therefore it is not a major concern. In the event of an objection, we will notify you as will your supplier. However due to customer confidentiality, we will not be privy to the reason for objection. You will need to contact your supplier or provide us the authority to contact them for you to identify and resolve the objection so that we can apply to take over your site.  ",
    },
    {
      title: "What are your fees?",
      content:
        "K Utilities charge no fees to our customers as our payments/commissions are recovered from the supplier.",
    },
    {
      title: "What is an LOA?",
      content:
        "A letter of authority (LOA) is a legal documentation that hands over authority to us so that we can deal with your current supplier when transferring you leaving you with minimal hassle.",
    },
  ],
};

const data1 = {
  rows: [
    {
      title: "Do I need to sign an LOA?",
      content:
        "It is not mandatory to sign an LOA as you do reserve the right to deal with matters independently, however it is advisable as it may ensure a swift transfer. An LOA is available on request and we will forward it to your supplier once you have signed it.",
    },
    {
      title: "Does an LOA hand over full rights to you?",
      content:
        "There are various levels to an LOA which will be highlighted on the document itself. The level you sign is at your discretion and will solely be used for the transfer of your utilities once you have agreed. Once transfer is completed, the LOA is void and disregarded.",
    },
    {
      title: "What if my business has a domestic meter?",
      content:
        "Many businesses do often have a domestic meter. This can easily be identified by the supply number on your bill as it will begin either 01 or 02. If you have a domestic meter and you are a business, we can still transfer you onto a business contract subject to proof of business being provided.",
    },
    {
      title: "What proof of business is acceptable?",
      content:
        "The current proof of business we accept as per suppliers criteria are either business rates documents or a recent bill (dated within 3 months) which show your address, supply number and VAT at 20% on the total.",
    },
    {
      title: "What if I have multi sites?",
      content:
        "We can arrange for more than one site on the basis that each meter is either out of contract or within the 120 day tolerance window prior to the end of a contract.",
    },
    {
      title: "What if I have more than one meter on site?",
      content:
        "Typically all meters are contracted simultaneously therefore they can be taken over together. If not, we will take over any meters within tolerance.",
    },
    {
      title: "Will my tariff be effected?",
      content:
        "Your tariff is linked to your meter and will remain the same regardless of supplier.",
    },
    {
      title: "Can I change my tariff?",
      content:
        "As your tariff is linked to your meter, in order to change your tariff, you will need to change your meter. K Utilites cannot arrange this as we are not responsible for your meter. This is something you are required to discuss with your supplier once supply is live as they may be able to switch your meter. Typically most tariffs are allocated to best suit you financially therefore it is rarely beneficial to change.",
    },
    {
      title: "How much notice do I have to give my current supplier?",
      content:
        "As per legislation suppliers can nominate the cancellation period of their choosing however most companies work within a 90 – 120 day window at the end of your contractual term.",
    },
  ],
};
export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">FAQs</h1>
          </HeaderInfo>
          <FAQContainer>
            <Faq data={data} />
            <hr />
            <Faq data={data1} />
          </FAQContainer>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const FAQContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
