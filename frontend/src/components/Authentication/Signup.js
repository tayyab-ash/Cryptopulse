import React from "react";
import "./Signup.css";
// import axios from "axios";
// import { Link} from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import googlepng from "./google.png";
import { useState } from "react";

export default function Signup(props) {
  const [credentials, setcredentials] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!credentials.fname.trim()) {
      newErrors.fname = "First name is required";
    }

    if (!credentials.lname.trim()) {
      newErrors.lname = "Last name is required";
    }

    if (!credentials.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(credentials.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!credentials.password) {
      newErrors.password = "Password is required";
    } else if (credentials.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!credentials.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (credentials.password !== credentials.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname: credentials.fname,
          lname: credentials.lname,
          email: credentials.email,
          password: credentials.password,
          confirmPassword: credentials.confirmPassword,
        }),
      });
      const json = await response.json();
      console.log(json);

      if (json.data.token) {
        localStorage.setItem("token", json.data.token);
        navigate("/crypto");
      } else {
        console.error("No auth token received");
      }
    } catch (error) {
      console.error("There was an error with the fetch operation:", error);
    }
  };

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  return (
    <div className="lgn-container">
      <div
        className="main-signup"
        style={{
          backgroundColor:
            props.theme === "light" ? "aliceblue" : "rgb(46, 45, 45)",
        }}
      >
        <div className="lgn-png">
          <FontAwesomeIcon
            className="fs-1"
            style={{ color: "#ffc011" }}
            icon={faUser}
          />
          <span
            className="fs-2"
            style={{ color: props.theme === "light" ? "black" : "white" }}
          >
            SIGNUP
          </span>
        </div>

        <form onSubmit={handleSubmit}>
          <FloatingLabel controlId="floatingFirstName" label="First Name">
            <Form.Control
              type="text"
              placeholder="Firstname"
              name="fname"
              value={credentials.fname}
              onChange={onChange}
              isInvalid={!!errors.fname}
            />
            <Form.Control.Feedback type="invalid">
              {errors.fname}
            </Form.Control.Feedback>
          </FloatingLabel>

          <FloatingLabel controlId="floatingLastName" label="Last Name">
            <Form.Control
              type="text"
              placeholder="Lastname"
              name="lname"
              value={credentials.lname}
              onChange={onChange}
              isInvalid={!!errors.lname}
            />
            <Form.Control.Feedback type="invalid">
              {errors.lname}
            </Form.Control.Feedback>
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Email address">
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="email"
              value={credentials.email}
              onChange={onChange}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </FloatingLabel>

          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={onChange}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingConfirmPassword"
            label="Confirm Password"
          >
            <Form.Control
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={credentials.confirmPassword}
              onChange={onChange}
              isInvalid={!!errors.confirmPassword}
            />
            <Form.Control.Feedback type="invalid">
              {errors.confirmPassword}
            </Form.Control.Feedback>
          </FloatingLabel>

          <button className="btn" style={{ backgroundColor: "#ffc011" }}>
            Signup
          </button>
        </form>
        <span
          className="no-account"
          style={{ color: props.theme === "light" ? "black" : "white" }}
        >
          {" "}
          Continue with{" "}
          <Link>
            <img src={googlepng} alt="" />
          </Link>{" "}
        </span>
      </div>
    </div>
  );
}
