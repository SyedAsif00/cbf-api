import React, { useState } from "react";
import { Row, Col, message } from "antd";
import { Helmet } from "react-helmet";
import texts from "../../mockData/texts";
import styles from "./ContactUs.module.css";
import { useResponsive } from "../../customHooks/responsive";
import { addContactMessage } from "../../firebase/contactMessage.firebase";

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
    event.preventDefault(); // Prevent the default form submission behavior
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
        setFormData({ name: "", email: "", message: "" }); // Reset form
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

  return (
    <main
      className={styles.contactUsContainer}
      style={{ padding: isMobile ? "0px" : "50px", width: "100%" }}
    >
      <Helmet>
        <title>Contact Us - SustraxAPI</title>
        <meta
          name="description"
          content="Contact SustraxAPI with any inquiries, feedback, or support requests you have. Our team is ready to assist you."
        />
      </Helmet>
      <Row
        justify="center"
        align="top"
        gutter={[60, 60]}
        style={{ width: "60%" }}
      >
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={24}
          className={styles.columnContainer}
        >
          <section>
            <header>
              <h2 className={styles.title}>{texts.contactUs.contactTitle}</h2>
              <p className={styles.description}>
                {texts.contactUs.contactDescription}
              </p>
            </header>
            <form onSubmit={handleSubmit}>
              <div style={{ display: "flex" }}>
                {[
                  { name: "name", label: "Name", type: "text" },
                  { name: "email", label: "Email", type: "email" }, // Changed type to 'email' for proper validation
                ].map((inputProps, index) => (
                  <div key={index} className={styles.inputContainer}>
                    <label className={styles.inputLabel}>
                      {inputProps.label}
                      <input
                        type={inputProps.type}
                        name={inputProps.name}
                        value={formData[inputProps.name]}
                        onChange={handleChange}
                        className={styles.input}
                      />
                    </label>
                  </div>
                ))}
              </div>
              <div className={styles.messageWrapper}>
                <label className={styles.messageLabel}>
                  Message
                  <textarea
                    className={styles.textArea}
                    maxLength={600}
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <button type="submit" className={styles.button}>
                {texts.contactUs.sendBtn}
              </button>
            </form>
          </section>
        </Col>
      </Row>
    </main>
  );
};

export default ContactUs;
