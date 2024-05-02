import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Row, Col, message, Button } from "antd";
import img1 from "../../../assets/undraw_file_sync_ot38.svg";
import loginUser from "../../../firebase/auth.login";
import texts from "../../../mockData/texts";
import "./index.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email || !password) {
      message.error("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      await loginUser(email, password);
      navigate("/dashboard");
      message.success("Login is successful");
    } catch (error) {
      console.error("Login error:", error);
      message.error(error.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-container">
      <Row
        className="loginMainRow"
        align="middle"
        justify="center"
        gutter={[16, 16]}
      >
        <Col xs={24} md={24} xl={12} className="formContainer">
          <section>
            <header className="loginTextContainer">
              <h1 className="loginText">
                LogIn to <span className="loginSustraxApiTxt">SustraxAPI</span>
              </h1>
              <span className="loginDescription">
                {texts.login.loginDescription}
              </span>
            </header>
            <form className="formInputs" onSubmit={handleSubmit}>
              <input
                aria-label="Email"
                placeholder="email..."
                type="email"
                className="formInput"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                aria-label="Password"
                placeholder="password..."
                type="password"
                className="formInput"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button className="loginBtn" type="submit" onClick={handleSubmit}>
                {loading ? "Logging in..." : "LogIn"}
              </Button>
            </form>
            <div className="registerLink">
              <Link className="linkText " to="/register">
                {texts.login.linkTxt}
              </Link>
            </div>
          </section>
        </Col>
        <Col xs={24} md={24} xl={12} className="image-column">
          <figure>
            <img src={img1} alt="Login Visual" className="login-image" />
          </figure>
        </Col>
      </Row>
    </main>
  );
};

export default Login;
