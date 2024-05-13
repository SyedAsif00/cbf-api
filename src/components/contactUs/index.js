import React, { useState } from "react";
import { Row, Col, message, Input, Button } from "antd";
import { Helmet } from "react-helmet";
import texts from "../../mockData/texts";
import "./index.css";
import { useResponsive } from "../../customHooks/responsive";
import { addContactMessage } from "../../firebase/contactMessage.firebase";
import { CustomInput } from "../common/formInputs/formInput";
const ContactUs = () => {
  const { isMobile } = useResponsive();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      message.error("Please fill all fields");
      return;
    }

    try {
      const result = await addContactMessage(
        formData.name,
        formData.email,
        formData.message
      );
      if (result) {
        message.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        message.error("Failed to send message");
      }
    } catch (error) {
      console.error("Submission error:", error);
      message.error(
        error.message || "Failed to send message. Please try again."
      );
    }
  };

  const contactInputs = [
    {
      label: "Username",
      placeholder: "username...",
    },
    {
      label: "Email",
      placeholder: "email...",
    },
  ];

  const { TextArea } = Input;
  return (
    <main style={{ padding: isMobile ? "0px" : "50px", width: "100%" }}>
      <Helmet>
        <title>Contact Us - SustraxAPI</title>
        <meta
          name="description"
          content="Contact SustraxAPI with any inquiries, feedback, or support requests you have. Our team is ready to assist you."
        />
      </Helmet>
      <Row justify="" align="top" gutter={[50, 50]}>
        <Col xs={24} sm={24} md={14} lg={14} xl={14}>
          <section className="contactMainContainer">
            <header className="contactFormTitle">
              {texts.contactUs.contactForm.title}
            </header>
            <p className="contactFormDescription">
              {texts.contactUs.contactForm.description}
            </p>

            <form className="contactFormContainer">
              <div className="inputWrapper">
                {contactInputs.map((inpt, index) => (
                  <div>
                    <label className="inputLabels">{inpt.label}</label>
                    <CustomInput
                      className="input"
                      placeholder={inpt.placeholder}
                    />
                  </div>
                ))}
              </div>
              <div className="messageWrapper">
                <div>
                  <label className="inputLabels">Message</label>
                  <TextArea
                    className="contactFormTextArea"
                    rows={10}
                  ></TextArea>
                </div>
              </div>
              <Button className="sendBtn">
                {texts.contactUs.contactForm.btn}
              </Button>
            </form>
          </section>
        </Col>

        <Col xs={24} sm={24} md={10} lg={10} xl={10}>
          <section>
            <header>
              <h2 className="">{texts.contactUs.AddressBox.title}</h2>
            </header>
            <div className="addressBoxLists">
              {texts.contactUs.AddressBox.listItems.map((listItm, index) => (
                <ul className="addressLists">
                  <li className="addressList">{listItm}</li>
                </ul>
              ))}
            </div>
          </section>
        </Col>
      </Row>
    </main>
  );
};

export default ContactUs;
