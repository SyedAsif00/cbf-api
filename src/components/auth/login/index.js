import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form, Input, Button, Checkbox, Row, Col, message } from "antd";
import "./index.css";
import img1 from "../../../assets/undraw_file_sync_ot38.svg";
import loginUser from "../../../firebase/auth.login";
import texts from "../../../mockData/texts";
const Login = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    console.log("Success:", values);
    setLoading(true);
    try {
      const user = await loginUser(values.email, values.password);
      console.log("User logged in successfully:", user);
      navigate("/dashboard");
      message.success(texts.login.onFinishSuccess);
    } catch (error) {
      console.error("Login failed:", error);
      message.error(`Login failed: ${error.message}`);
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error(texts.login.onFinishFailed);
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
          <Row gutter={24}>
            <Col xs={24} md={12} className="form-column">
              <h2 className="login-title">{texts.login.loginTitle}</h2>
              <p className="login-description">
                {texts.login.loginDescription}
              </p>
              <Form
                form={form}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className="login-form"
              >
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: texts.login.userNameValidation },
                  ]}
                >
                  <Input placeholder="Email" className="login-input" />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: texts.login.userPasswordValidation,
                    },
                  ]}
                >
                  <Input.Password
                    placeholder="Password"
                    className="login-input"
                  />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked"></Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    loading={loading}
                  >
                    {texts.login.logInBtnTxt}
                  </Button>
                </Form.Item>
              </Form>
            </Col>
            <Col xs={24} md={12} className="image-column">
              <img src={img1} alt="Login Visual" className="login-image" />
            </Col>

            <Link to="/register">or register with us</Link>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
