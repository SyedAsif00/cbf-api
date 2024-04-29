import React, { useState } from "react";
import { Row, Col, message } from "antd";
import texts from "../../mockData/texts";
import styles from "./ContactUs.module.css";
import { useResponsive } from "../../customHooks/responsive";
import { addContactMessage } from "../../firebase/contactMessage.firebase";

const ContactUs = () => {
  const { isMobile } = useResponsive();

  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Update state with form changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      message.error("Please fill all fields");
      return;
    }
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
  };

  return (
    <div
      className={styles.contactUsContainer}
      style={{
        padding: isMobile ? "0px" : "50px",
      }}
    >
      <Row justify="center" align="top" gutter={[60, 60]}>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={24}
          className={styles.columnContainer}
        >
          <h2 className={styles.title}>{texts.contactUs.contactTitle}</h2>
          <p className={styles.description}>
            {texts.contactUs.contactDescription}
          </p>
          <div
            className={`${styles.inputContainer} ${
              isMobile ? styles.column : ""
            }`}
          >
            {[
              { name: "name", label: "Name", type: "text" },
              { name: "email", label: "Email", type: "text" },
            ].map((inputProps, index) => (
              <div key={index} style={{ flex: 1 }}>
                <span className={styles.inputLabel}>{inputProps.label}</span>
                <input
                  type={inputProps.type}
                  name={inputProps.name}
                  value={formData[inputProps.name]}
                  onChange={handleChange}
                  className={styles.input}
                  onFocus={(e) => (e.target.style.outline = "thin solid green")}
                  onBlur={(e) => (e.target.style.outline = "none")}
                />
              </div>
            ))}
          </div>
          <div className={styles.messageWrapper}>
            <span className={styles.messageLabel}>Message</span>
            <textarea
              className={styles.textArea}
              maxLength={600}
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={(e) => (e.target.style.outline = "thin solid green")}
            />
          </div>
          <button onClick={handleSubmit} className={styles.button}>
            Send Message
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default ContactUs;
