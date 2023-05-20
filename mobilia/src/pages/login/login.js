import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";
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
        if(route==="admin"){
          navigate("/dashboard")
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
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <select defaultValue={route} onChange={(e) => setRoute(e.target.value)}>
          <option value={"admin"}>Admin</option>
          <option value={"owner"}>Owner</option>
        </select>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
