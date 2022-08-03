import React from "react";
import styled from "styled-components";
import { useModal, Modal } from "react-morphing-modal";
import complainBg from "../../assets/img/complainbg.jpg";

export default function Blog() {
  const { modalProps, getTriggerProps } = useModal({
    background: "#B8C6E3",
  });

  const complainPolicy = [
    {
      id: 1,
      title: "K Utilities Complaints Handling Procedure",
      description:
        "K Utilities Ltd is committed to providing the highest levels of service to all our customers. If you are in any way dissatisfied with our services or have any concerns, then please let us know as this will help us to continually improve our service to you.Our aim is to ensure that any issues you may raise are properly addressed and appropriate actions are taken where necessary, as we thrive for customer excellence.",
    },
    {
      id: 2,
      title: "Stage One – Raising a complaint",
      description:
        "We take all complaints seriously and aim to address your concerns thoroughly, promptly, and politely. In the event of a complaint, you should contact us immediately via one of the channelsbelow. Pleaseensureyouincludeyourcontactinformation,businessnameand address as well as an outline of your dispute.",
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
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">
              Complaints Handling Procedure
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
            Email:{" "}
            <a href="mailto:info@kutilitiesltd.com">info@kutilitiesltd.com</a>
            <br />
            Telephone: 02920140217
          </HeaderInfo>
          <ButtonContainer>
            <Button1 {...getTriggerProps({ id: "first" })}>
              COMPLAINT HANDLING PROCEDURE
            </Button1>
            <Modal {...modalProps} padding={false}>
              <ModalContainer>
                <ModalDetail>
                  {complainPolicy?.map((policy) => {
                    return (
                      <PolicyContainer key={policy.id}>
                        <Title>{policy?.title}</Title>
                        <Description>{policy?.description}</Description>

                        {policy?.hasList && (
                          <ModalListContainer>
                            {policy?.list?.map((li) => {
                              return (
                                <ModalList key={li.id}>{li?.list}</ModalList>
                              );
                            })}
                          </ModalListContainer>
                        )}

                        {policy?.contact?.map((cont) => {
                          const baseHref =
                            cont?.title === "Email" ? "mailto:" : "";
                          const onlineTitle = cont?.isTitleHidden
                            ? ""
                            : `${cont?.title} : `;
                          return (
                            <React.Fragment key={cont.id}>
                              {cont?.title !== "Email" &&
                              cont?.title !== "Online" ? (
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
                      </PolicyContainer>
                    );
                  })}
                </ModalDetail>
              </ModalContainer>
            </Modal>
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

const ModalDetail = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 20px;
  padding: 3rem 5rem;
  overflow: scroll;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  background-color: #fff;
  &::before {
    content: "";
    background-image: url(${complainBg});
    background-size:80%;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    filter: blur(2px);
    top: 0px;
    right: 0px;
    opacity: 10%;
    bottom: 0px;
    left: 0px;
    overflow: hidden;
    z-index: 0;
  }
  @media screen and (max-width:768px){
      width:80%;
      height: 80%;
  }
  @media screen and (max-width:480px){
    height: 100%;
    width: 100%;
  padding: 1rem 1rem;

  }
`;
const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: transparent;
  padding: 2rem;
  @media screen and (max-width:768px){
      padding: 0rem;
      display: flex;
      justify-content: center;
      align-items: center;
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: #424242;
  font-weight: 700;
`;
const Description = styled.p`
  /* margin-bottom: 2vh; */
  text-align: justify;

`;
const ContactTitle = styled.label`
  color: #7c9fda;
`;

const ModalListContainer = styled.ul`
  list-style: disc;
  margin-top: 3vh;
`;
const ModalList = styled.li`
  margin-left: 2vw;
  font-weight: 600;
`;

const ContactEmail = styled.a`
  color: #7c9fda;
`;

const PolicyContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 5rem;
`;
