import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Row, Col, message } from "antd";
import "./index.css";
import img1 from "../../../assets/undraw_file_sync_ot38.svg";
import createUser from "../../../firebase/auth.register"; // Adjust the path as necessary
import texts from "../../../mockData/texts";

const SignUp = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    console.log("Registration data:", values);
    setLoading(true);
    try {
      const user = await createUser(
        values.email,
        values.password,
        values.username
      );
      console.log("User registered successfully:", user);
      message.success(texts.signup.onFinishSuccess);
      navigate("/dashboard");
    } catch (error) {
      console.error("Registration failed:", error);
      message.error(`Registration failed: ${error.message}`);
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error(texts.signup.onFinishFailed);
  };

  return (
    <div className="login-container">
      <Row align="middle" justify="center" style={{ minHeight: "100vh" }}>
        <Col
          xs={22}
          sm={20}
          md={18}
          lg={16}
          xl={14}
          xxl={12}
          style={{ margin: "0 auto" }}
        >
          <Row gutter={100}>
            <Col xs={24} md={12} className="image-column">
              <img src={img1} alt="Sign Up Visual" className="login-image" />
            </Col>
            <Col xs={24} md={12} className="form-column">
              <h2 className="login-title">{texts.signup.signupTitle}</h2>
              <p className="login-description">
                {texts.signup.signupDescription}
              </p>
              <Form
                form={form}
                name="signup"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className="login-form"
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: texts.signup.userNameValidation,
                    },
                  ]}
                >
                  <Input placeholder="Username" className="login-input" />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: texts.signup.userEmailValidation,
                    },
                  ]}
                >
                  <Input
                    type="email"
                    placeholder="Email"
                    className="login-input"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: texts.signup.userPasswordValidation,
                    },
                  ]}
                >
                  <Input.Password
                    placeholder="Password"
                    className="login-input"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    loading={loading}
                  >
                    {texts.signup.signupBtnTxt}
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default SignUp;
