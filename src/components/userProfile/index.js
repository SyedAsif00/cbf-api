import React, { useState, useEffect } from "react";
import { Form, Input, Button, Card, Row, Col, Tabs } from "antd";
import { getAuth, onAuthStateChanged, updatePassword } from "firebase/auth";
import Loader from "../../components/common/antdSpin";
import { useAuth } from "../../context/AuthContext";

import "./index.css";

const { TabPane } = Tabs;

const UserProfile = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("user");
  const [form] = Form.useForm();
  const [isFormEdited, setIsFormEdited] = useState(false);

  const onFormChange = (changedValues, allValues) => {
    setIsFormEdited(true);
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  if (!user) {
    return <Loader />;
  }
  return (
    <Row>
      <Col xs={24} md={24}>
        <Card className="profile-card">
          <h1 className="profile-title">Profile</h1>
          <Tabs defaultActiveKey="user" onChange={(key) => setActiveTab(key)}>
            <TabPane tab="User" key="user">
              <Form
                form={form}
                name="profile"
                onFinish={onFinish}
                layout="vertical"
                onValuesChange={onFormChange}
                initialValues={{
                  firstName: user.displayName || "", // Assuming this is the first name
                  email: user.email,
                }}
              >
                <Form.Item name="firstName" label="First Name">
                  <Input placeholder="eg. John" />
                </Form.Item>
                <Form.Item name="email" label="Email">
                  <Input />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    disabled={!isFormEdited}
                  >
                    Update Profile
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>
            <TabPane tab="Password" key="password">
              <h1 className="profile-title">Change Password</h1>
              <Form
                name="password"
                onFinish={onFinish}
                layout="vertical"
                onValuesChange={onFormChange}
              >
                <Form.Item
                  name="newPassword"
                  label="New Password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your new password!",
                    },
                    {
                      min: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  ]}
                >
                  <Input.Password placeholder="New Password" />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    disabled={!isFormEdited}
                  >
                    Update Password
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>
          </Tabs>
        </Card>
      </Col>
    </Row>
  );
};

export default UserProfile;
