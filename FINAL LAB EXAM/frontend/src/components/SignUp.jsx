import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const navigate = useNavigate();

  // Component Destructuring
  const { name, email, password } = credentials;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // API Call
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    
    const json = await response.json();
    console.log(json);

    if (json.success) {
      // save the auth-token and redirect
      localStorage.setItem("token", json.authToken);
      navigate("/");
      props.showAlert("Account Created Successfully", "success");
    } else {
      props.showAlert("Invalid Credentials", "danger");
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div id="loginform">
        <h2 id="headerTitle">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="rowForm">
              <label htmlFor="email" className="form-label">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="form-control"
                id="name"
                name="name"
                onChange={onChange}
                required
                aria-describedby="nameHelp"
              />
            </div>
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
                onChange={onChange}
                required
                aria-describedby="emailHelp"
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
                onChange={onChange}
                minLength={5}
                required
              />
            </div>
            <div className="rowForm">
              <label htmlFor="password" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Re-enter your password"
                className="form-control"
                id="cpassword"
                name="cpassword"
                onChange={onChange}
                minLength={5}
                required
              />
            </div>
            <div id="button" className="rowForm">
              <button type="submit">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
