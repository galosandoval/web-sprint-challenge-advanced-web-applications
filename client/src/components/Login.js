import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {axiosWithAuth} from '../utils/axiosWithAuth'

const initialState = {
  username: "",
  password: "",
};

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [creds, setCreds] = useState(initialState);
  const history = useHistory();

  const handleChange = (e) => {
    setCreds({
      ...creds,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("api/login", creds)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        history.push("/bubble-page");
      })
      .catch((err) => console.log(err, "lol"));
    setCreds(creds);
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={login}>
      <input
        name="username"
        type="text"
        placeholder="Username"
        value={creds.username}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={creds.password}
        onChange={handleChange}
      />
      <button>Log In</button>
    </form>
    </>
  );
};

export default Login;
