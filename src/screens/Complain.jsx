import React from "react";
import {
  PDFConatiner,
  Title,
  Description,
  ListContainer,
  List,
  ContactEmail,
  ContactTitle,
  Gap,
} from "./Elements";
import ReactHTMLParser from "react-html-parser";
const Complaints = () => {
  const complainPolicy = [
    {
      id: 1,
      title: "Complaints Handling Procedure",
      description:
        "K Utilities is committed to providing the highest levels of service to all our customers. If you are in any way dissatisfied with our services or have any concerns, then please let us know as this will help us to continually improve our service to you.Our aim is to ensure that any issues you may raise are properly addressed and appropriate actions are taken where necessary, as we thrive for customer excellence.",
    },
    {
      id: 2,
      title: "Stage One – Raising a complaint",
      description:
        "We take all complaints seriously and aim to address your concerns thoroughly, promptly, and politely. In the event of a complaint, you should contact us immediately via one of the channels below. Please ensure you include your contact information, business name and address as well as an outline of your dispute.",
      contact: [
        {
          id: 201,
          title: "Phone",
          detail: "02920140217",
        },
        {
          id: 202,
          title: "Email",
          detail: "info@kutilitiesltd.com",
        },
        {
          id: 203,
          title: "Post",
          detail:
            "K Utilities Limited, 100 Wentloog Rd, Rumney, Cardiff, CF3 3EA",
        },
      ],
    },
    {
      id: 3,
      title: "Stage Two – Acknowledgement",
      description:
        "We will consider your complaint as quickly as possible and will acknowledge receipt of your complaint within 3 working days. The complaint will be logged, and we will provide you a reference number which you can quote to check on the status of a dispute.",
    },
    {
      id: 4,
      title: "Stage Three – Investigations",
      description:
        "For any miss-selling or contract related disputes we check all presales calls or methods of communication made to that particular contract in order for us to investigate the matter. We may, where applicable, request additional information or documentation from you, in order ensure all checks are thorough.",
    },
    {
      id: 5,
      title: "Stage Four – Resolution",
      description:
        "Once all checks are completed, we will contact you with details of our findings.We take a firm stance against miss-selling and misrepresentation, should this occur, we will instruct the supplier of our findings and ask them to remove the contract and return you to your former supplier.Should the evidence refute the complaint, we will provide you with our findings and evidence to confirm that no further action will be taken as a result. If you disagree with this, the complaint will go to ‘deadlock’.",
    },
    {
      id: 6,
      title: "Stage Five – In the event of a deadlock",
      description:
        "A complaint will be moved to deadlock where you are not in agreement with our findings/resolution. In this case, you should wait the allocated time to refer to the Ombudsman for an impartial and independent free review of your dispute.",
    },
    {
      id: 7,
      title: "Stage Six – Contacting the Ombudsman",
      description:
        "The Ombudsman, Ofgem, will review your case for you. This is a completely free service, and they offer an independent and impartial review. You should only contact the Ombudsman in the event of the below.",
      list: [
        {
          id: 101,
          list: "The complaint has been raised and 8 weeks has passed without any resolution.",
        },
        {
          id: 102,
          list: "You have received a deadlock letter from us and have deemed this unreasonable.",
        },
      ],
      hasList: true,
    },
    {
      id: 8,
      description:
        "You can contact the Ombudsman either by post, email, letter or complete the form online.",
      contact: [
        {
          id: 204,
          title: "Telephone",
          detail: "0330 440 1624",
        },
        {
          id: 205,
          title: "Email",
          detail: "consumeraffairs@ofgem.gov.uk",
        },
        {
          id: 206,
          title: "Post",
          detail: "Ombudsman Services Energy, PO Box, Warrington, WA4 9DF",
        },
        {
          id: 207,
          title: "Online",
          detail: "https://www.ombudsman-services.org/complain-now",
        },
      ],
    },
    {
      id: 9,
      description:
        "Further information on the Ombudsman process can be found online at",
      contact: [
        {
          id: 210,
          title: "Online",
          detail:
            "https://partners.ombudsman-services.org/our-services/our-process",
          isTitleHidden: true,
        },
      ],
    },
  ];
  return (
    <>
      <PDFConatiner>
        {complainPolicy.map((pdf) => {
          return (
            <React.Fragment key={pdf.id}>
              <Title>{pdf.title}</Title>
              <Description>{ReactHTMLParser(pdf.description)}</Description>
              {pdf?.hasList && (
                <ListContainer>
                  {pdf?.list?.map((list) => (
                    <List key={list.id}>{list.list}</List>
                  ))}
                </ListContainer>
              )}
              {pdf?.contact?.map((cont) => {
                const baseHref = cont?.title === "Email" ? "mailto://" : "";
                const onlineTitle = cont?.isTitleHidden
                  ? ""
                  : `${cont?.title} : `;
                return (
                  <React.Fragment key={cont.id}>
                    {cont?.title !== "Email" && cont?.title !== "Online" ? (
                      <ContactTitle for={cont.title}>
                        {cont.title} : {cont.detail}
                      </ContactTitle>
                    ) : (
                      <ContactEmail
                        href={`${baseHref}${cont?.detail}`}
                        target="_blank"
                      >
                        {onlineTitle}
                        {cont?.detail}
                      </ContactEmail>
                    )}
                  </React.Fragment>
                );
              })}
              <Gap />
            </React.Fragment>
          );
        })}
      </PDFConatiner>
    </>
  );
};

export default Complaints;
