import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox, Row, Col, message } from "antd";
import "./index.css";
import img1 from "../../../assets/undraw_file_sync_ot38.svg";
import loginUser from "../../../firebase/auth.firebase";

const Login = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    console.log("Success:", values);
    setLoading(true);
    try {
      const user = await loginUser(values.username, values.password);
      console.log("User logged in successfully:", user);
      navigate("/dashboard");
      message.success("login success");
    } catch (error) {
      console.error("Login failed:", error);
      message.error(`Login failed: ${error.message}`);
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Please complete all required fields.");
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
              <h2 className="login-title">Login to sustraxAPI</h2>
              <p className="login-description">
                Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                consectetur adipisicing.
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
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input placeholder="Username" className="login-input" />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password
                    placeholder="Password"
                    className="login-input"
                  />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    loading={loading}
                  >
                    Log In
                  </Button>
                </Form.Item>
              </Form>
            </Col>
            <Col xs={24} md={12} className="image-column">
              <img src={img1} alt="Login Visual" className="login-image" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
