import React, { useState, useEffect } from "react";
import { Form, Input, Button, Card, Row, Col } from "antd";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Loader from "../../components/common/antdSpin";
import "./index.css";

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

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
          <Form
            name="profile"
            onFinish={onFinish}
            layout="vertical"
            initialValues={{
              firstName: user.displayName, // Replace with user's actual first name
              lastName: "", // Replace with user's actual last name
              email: user.email, // Replace with user's actual email
              password: user.password, // You might not want to show the actual password
            }}
          >
            <Form.Item name="email" label="Email">
              <Input />
            </Form.Item>

            <Form.Item name="password" label="Password">
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Update
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default UserProfile;
