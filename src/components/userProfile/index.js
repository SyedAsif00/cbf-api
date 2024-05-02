import React, { useState, useEffect } from "react";
import { Card, Row, Col, Tabs, Input, Button } from "antd";
import { useAuth } from "../../context/AuthContext";
import Loader from "../../components/common/antdSpin";
import { useResponsive } from "../../customHooks/responsive";
import "./index.css";
import { Helmet } from "react-helmet";
import texts from "../../mockData/texts";
const { TabPane } = Tabs;

const UserProfile = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("user");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [isFormEdited, setIsFormEdited] = useState(false);
  const { isMobile } = useResponsive();

  useEffect(() => {
    if (user) {
      setFirstName(user.displayName || "");
      setEmail(user.email || "");
    }
  }, [user]);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "email") {
      setEmail(value);
    }
    setIsFormEdited(true);
  };

  if (!user) {
    return <Loader />;
  }

  return (
    <article className="profileMainContainer">
      <Helmet>
        <title>Profile - {firstName || "User"}</title>
        <meta
          name="description"
          content={`View and edit profile for ${
            firstName || "user"
          }. Update your details like name, email, and password.`}
        />
      </Helmet>
      <Row>
        <Col xs={24} md={24}>
          <header>
            {" "}
            {/* // Using header tag for headings */}
            <h1 className="profile-title">{texts.profile.profileTitle}</h1>
          </header>
          <Tabs defaultActiveKey="user" onChange={(key) => setActiveTab(key)}>
            <TabPane tab="User" key="user">
              <section>
                {" "}
                {/* // Using section for each tab pane content */}
                <div className="profile-input">
                  <div style={{ paddingBottom: "20px" }}>
                    <div style={{ display: "flex" }}>
                      <h4 id="responsive">
                        {texts.profile.userName.nameTitle}
                      </h4>
                      <Input
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={onInputChange}
                        style={{ width: "400px" }}
                      />
                    </div>
                    <p>{texts.profile.userName.exampleName}</p>
                  </div>
                  <div label="Email">
                    <div className="email" style={{ display: "flex" }}>
                      <h4 id="responsive">
                        {texts.profile.userEmail.emailTitle}
                      </h4>
                      <Input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onInputChange}
                        style={{ width: "400px" }}
                      />
                    </div>
                    <p>{texts.profile.userEmail.exampleEmail}</p>
                  </div>
                </div>
                <footer>
                  {" "}
                  {/* Using footer for form actions */}
                  <Button type="primary" disabled={!isFormEdited}>
                    {texts.profile.updateBtnTxt}
                  </Button>
                </footer>
              </section>
            </TabPane>
            <TabPane tab="Password" key="password">
              <section>
                <div className="password-input">
                  <div style={{ paddingBottom: "20px" }}>
                    <h4 id="responsive">{texts.profile.newPassword}</h4>
                    <Input.Password style={{ width: "400px" }} />
                  </div>
                  <div label="Confirm New Password">
                    <h4 id="responsive">{texts.profile.confirmNewPassword}</h4>
                    <Input.Password style={{ width: "400px" }} />
                  </div>
                </div>
                <footer>
                  <Button type="primary">{texts.profile.updateBtnTxt}</Button>
                </footer>
              </section>
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </article>
  );
};

export default UserProfile;
