import React, { useRef, useState } from "react";
import { Link, useHistory, useNavigate } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";
import { UserAuth } from "../Context/AuthContext";
import "./auth.css"

export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erorr, setError] = useState("");
  const { login } = UserAuth();
  const navigate = useNavigate("");
  const formAHandler = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };
  return (
    <div className="log">
      <div className="card">
        <div className="card-body">
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={formAHandler}>
            <Form.Group id="email"> 
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                placeholder="@gmail.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                placeholder="password"
                type="password"
                ref={passwordRef}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            {/* <Link to="/"> */}
              <Button type="submit" className="w-100 mt-2">
                Login
              </Button>
            {/* </Link> */}
          </Form>
        </div>
      </div>
      <div className="text-center w-100 mt-2">
        Need An Acount! <Link to="/signup">SignUp</Link>
      </div>
    </div>
  );
};
