import React from "react";
import styled from "styled-components";
// Assets
import "./styles.css";
import { useFormik, Form, FormikProvider } from "formik";
import * as Yup from "yup";
export default function Contact() {
  const ContactSchema = Yup.object().shape({
    fullName: Yup.string().required("*What is your Full Name?"),
    email: Yup.string()
      .email("*Email must be a valid email address")
      .required("*What's your email?"),
    telephone: Yup.string().required("*Please enter your telephone number"),
    subject: Yup.string().required("*Subject is required"),
    message: Yup.string().required("*What's your message"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      telephone: "",
      subject: "",
      message: "",
    },
    validationSchema: ContactSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const { errors, touched, values, handleSubmit, getFieldProps } = formik;
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 flex">
              <Box>
                <Card $color={"hsl(180, 62%, 55%)"}>
                  <CardTitle>Registered Address</CardTitle>
                  <CardPara>
                    100 Wentloog Road, Rumney, Cardiff, Wales, CF3 3EA
                  </CardPara>
                  <CardImg
                    src="https://freesvg.org/img/SagarShastry-PlaceMark.png"
                    alt=""
                    $width={"20%"}
                  />
                </Card>
                <Card $color={"hsl(34, 97%, 64%)"}>
                  <CardTitle>Email</CardTitle>
                  <CardPara>
                    <a href="mailto:info@kutilitiesltd.com">
                      info@kutilitiesltd.com
                    </a>
                  </CardPara>
                  <CardImg
                    src="https://freesvg.org/img/1489440856.png"
                    alt=""
                    $width={"40%"}
                  />
                </Card>
                <Card $color={"hsl(212, 86%, 64%)"}>
                  <CardTitle>Telephone</CardTitle>
                  <CardPara>02920140217</CardPara>
                  <CardImg
                    src="https://freesvg.org/img/OldFashionedPhone2.png"
                    alt=""
                    $width={"20%"}
                  />
                </Card>
              </Box>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <HeaderInfo>
                <h1 className="font40 extraBold">Let's get in touch</h1>
                <p className="font13">
                  If you want to speak to us over the phone, please leave your
                  details and one of our experts will get in touch with you.
                </p>
              </HeaderInfo>
              <FormikProvider value={formik}>
                <StyledForm
                  autoComplete="off"
                  noValidate
                  onSubmit={handleSubmit}
                >
                  <label className="font13">Full Name:</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="font20"
                    value={values.fullName}
                    {...getFieldProps("fullName")}
                  />
                  {touched.fullName && errors.fullName && (
                    <ErrorText>{errors?.fullName}</ErrorText>
                  )}
                  <label className="font13">Email:</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="font20"
                    value={values.email}
                    {...getFieldProps("email")}
                  />
                  {touched.email && errors.email && (
                    <ErrorText>{errors?.email}</ErrorText>
                  )}
                  <label className="font13">Telephone:</label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    className="font20 extraBold"
                    value={values.telephone}
                    {...getFieldProps("telephone")}
                  />
                  {touched.telephone && errors.telephone && (
                    <ErrorText>{errors?.telephone}</ErrorText>
                  )}
                  <label className="font13">Subject:</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="font20 extraBold"
                    value={values.subject}
                    {...getFieldProps("subject")}
                  />
                  {touched.subject && errors.subject && (
                    <ErrorText>{errors?.subject}</ErrorText>
                  )}
                  <label className="font13">Message:</label>
                  <textarea
                    rows="4"
                    cols="50"
                    type="text"
                    id="message"
                    name="message"
                    className="font20 extraBold"
                    value={values.message}
                    {...getFieldProps("message")}
                  />
                  {touched.message && errors.message && (
                    <ErrorText>{errors?.message}</ErrorText>
                  )}
                  <SumbitWrapper className="flex">
                    <ButtonInput
                      type="submit"
                      className="pointer animate radius8"
                      style={{ maxWidth: "220px" }}
                    >
                      Submit
                    </ButtonInput>
                  </SumbitWrapper>
                </StyledForm>
              </FormikProvider>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const StyledForm = styled(Form)`
  padding: 70px 0 30px 0;
  height: auto;
  transition: all 0.2s ease-in;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.button`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  margin-top: 30px;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;

const Box = styled.div`
  padding: 70px 0 30px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  flex: 0.3;
  height: 100%;
  border-radius: 5px;
  box-shadow: -1px 7px 5px -3px rgba(0, 0, 0, 0.22);
  -webkit-box-shadow: -1px 7px 5px -3px rgba(0, 0, 0, 0.22);
  -moz-box-shadow: -1px 7px 5px -3px rgba(0, 0, 0, 0.22);
  padding: 30px;
  font-family: "Poppins", sans-serif;
  border-top: ${(props) => `3px solid ${props.$color}`};
  @media screen and (max-width: 768px) {
    margin-top: 2vh;
  }
`;

const CardTitle = styled.h2`
  color: hsl(234, 12%, 34%);
  font-weight: 600;
  font-size: 1rem;
`;

const CardPara = styled.p`
  color: hsl(234, 12%, 34%);
  margin: 0 auto;
`;

const CardImg = styled.img`
  float: right;
  width: ${(props) => props.$width};
`;

const ErrorText = styled.p`
  font-size: 0.8rem;
  color: #ff3333;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
`;
