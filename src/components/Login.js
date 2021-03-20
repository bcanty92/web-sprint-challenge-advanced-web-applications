import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axiosWithAuth from "../helpers/axiosWithAuth";
import axios from "axios";

const initialLogin = {
  login: {
    username: "",
    password: "",
  },
};
const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [loginForm, setLoginForm] = useState(initialLogin);
  const history = useHistory();
  const handleChange = (e) => {
    e.preventDefault();
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", loginForm)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        history.push("/bubbles");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      {/*<button onClick={(Link = "/bubbles")}>Bubbles Page</button>*/}
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          id="username"
          type="text"
          value={loginForm.username}
          onChange={handleChange}
          placeholder="username"
        />
        <input
          name="password"
          id="password"
          type="password"
          value={loginForm.password}
          onChange={handleChange}
          placeholder="password"
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.