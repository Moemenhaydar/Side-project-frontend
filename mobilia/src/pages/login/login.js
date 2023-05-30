import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";
import  "../login/login.css";
const LoginPage = () => {
  const signIn = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [route, setRoute] = useState("owner");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/${route}/login`,
        { email, password }
      );
      if (response.status === 200) {
        alert("Logged In Successly");
        signIn({
          token: response.data.token,
          expiresIn: 180,
          tokenType: "Bearer",
          authState: response.data.user,
        });
        if (route === "admin") {
          navigate("/dashboard");
        } else if (route === "owner") {
          navigate("/dashboard/product");
        }
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
    // Perform authentication logic here with email and password
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="container-login">
      <div className="login-form-wrapper">
        
      <form onSubmit={handleSubmit} className="form-login">
      <h1>Login</h1>
        <select
          defaultValue={route}
          onChange={(e) => setRoute(e.target.value)}
          className="select-login "
          >
          <option value={"admin"} className="option-login">
            Admin
          </option>
          <option value={"owner"} className="option-login">
            Owner
          </option>
        </select>
        <div className="contain-login">
          <label htmlFor="email" className="label-login">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="input-login"
            value={email}
            onChange={handleEmailChange}
            />
        </div>
        <div className="contain-login">
          <label htmlFor="password" className="label-login">
            Password:
          </label>
          <input
            className="input-login"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            />
        </div>
        <button type="submit" className="button-login">
          Login
        </button>
      </form>
            </div>
    </div>
  );
};

export default LoginPage;
