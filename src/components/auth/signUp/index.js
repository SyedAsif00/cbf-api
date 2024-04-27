import React from "react";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import img1 from "../../../assets/undraw_file_sync_ot38.svg"; // Your image file path
import "./index.css";
const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-container">
      <Row align="middle" justify="center" style={{ minHeight: "100vh" }}>
        <Col xs={24} md={12} className="image-column">
          <img src={img1} alt="Login Visual" className="login-image" />
        </Col>
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
                  className="login-form-item"
                >
                  <Input placeholder="Username" className="login-input" />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                  className="login-form-item"
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
                  >
                    Log In
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

export default Login;
