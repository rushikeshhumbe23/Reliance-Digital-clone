import React, { useState } from "react";
import styles from "../styles/SignUp.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const initState = {
  name: "",
  email: "",
  mobile_no: "",
  city: "",
  pin: "",
  password: "",
};

export default function SignUp() {
  const [signupform, setSignupForm] = useState(initState);

  const registerUser = (e) => {
    e.preventDefault();
    const data = signupform;
    // setSignupForm(initState);

    // axios
    //   .post(`https://infinite-digitals.onrender.com/register`, {
    //     ...data,
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    //   fetch("https://infinite-digitals.onrender.com/user/register", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization:
    //         "Bearer  ",
    //     },
    //     body: JSON.stringify(data),
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log("Success:", data);
    //     });
    // };

    fetch("http://localhost:9999/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "john.smith",
        password: "john.smith",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      });
  };
  const handleChange = (e) => {
    setSignupForm({ ...signupform, [e.target.name]: e.target.value });
  };

  const { name, email, mobile_no, city, pin, password } = signupform;

  return (
    <>
      <div className={styles.signup_empty}></div>
      <div className={styles.signup_main}>
        <p className={styles.signup_heading}>Sign Up</p>
        <div className={styles.form_cont}>
          <form onSubmit={registerUser}>
            <label>
              Full Name <span className={styles.mandetory_fileds}>*</span>
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
            <label>
              Email <span className={styles.mandetory_fileds}>*</span>
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            <label>
              Mobile Number <span className={styles.mandetory_fileds}>*</span>
            </label>
            <input
              type="number"
              name="mobile_no"
              value={mobile_no}
              onChange={handleChange}
              placeholder="Enter your Mobile Number"
            />
            <label>
              Address <span className={styles.mandetory_fileds}>*</span>
            </label>
            <div className={styles.address_cont}>
              <input
                type="text"
                onChange={handleChange}
                name="city"
                value={city}
                placeholder="City"
              />
              <input
                type="number"
                name="pin"
                value={pin}
                onChange={handleChange}
                placeholder="PIN"
              />
            </div>

            <label>
              Password <span className={styles.mandetory_fileds}>*</span>
            </label>

            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password must be 8 digits"
            />
            <i>
              <p className={styles.passAuth}>
                Passwor must be 8 characters
                <span className={styles.mandetory_fileds}>*</span>
              </p>
            </i>
            <button
              className={styles.register_BTN}
              type="submit"
              value="submit"
            >
              Sign Up
            </button>
          </form>
          <p style={{ textAlign: "center" }}>
            Already a user?
            <Link className={styles.link_to_login} to="/login">
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
