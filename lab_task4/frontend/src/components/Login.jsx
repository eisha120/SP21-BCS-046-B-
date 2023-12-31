import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // API Call
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      // save the auth-token in l.s and redirect
      localStorage.setItem("token", json.authToken);
      props.showAlert("Logged In Successfully", "success");
      navigate("/");
    } else {
      props.showAlert("Invalid details", "danger");
    }
  };

  const onChange = (event) => {
    event.preventDefault();
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div id="loginform">
        <h2 id="headerTitle">Login </h2>

        <form onSubmit={handleSubmit}>
          <div>
            <div className="rowForm">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control"
                id="email"
                name="email"
                value={credentials.email}
                onChange={onChange}
              />
            </div>
            <div className="rowForm">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="form-control"
                id="password"
                name="password"
                value={credentials.password}
                onChange={onChange}
              />
            </div>
            <div id="button" className="rowForm">
              <button type="submit">Login</button>
            </div>
          </div>
        </form>
      </div>
 
    </>
  );
};

export default Login;
