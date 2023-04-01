import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import style from "../styles/Login.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContextProvider";

import { useContext } from "react";

const initState = { email: "", password: "" };

function Login() {
  const navigate = useNavigate();
  const { isAuth, Login, Logout } = useContext(AuthContext);
  const [formState, setFormset] = useState(initState);

  const UserLogin = (e) => {
    e.preventDefault();
    const data = formState;
    setFormset(initState);
    console.log(data);
  };

  const handleChange = (e) => {
    setFormset({ ...formState, [e.target.name]: e.target.value });
  };

  const { email, password } = formState;

  if (isAuth) {
    navigate("/");
  }

  return (
    <>
      <div className={style.empty_cont_login}></div>

      <div className={style.login_main}>
        <div className={style.login_image}>
          <img
            width="60%"
            src="https://russdigital.netlify.app/login.jpg"
            alt=""
          />
        </div>
        <div className={style.form_cont}>
          <h1>Sign to your Account</h1>
          <p>
            New to website? please{" "}
            <Link className={style.goto_signup} to="/signup">
              SignUp Here
            </Link>
          </p>
          <div>
            <form onSubmit={UserLogin}>
              <label>Email</label>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                value={email}
                placeholder="Enter your Email"
              />

              <br />
              <label>Password</label>
              <input
                onChange={handleChange}
                type="password"
                name="password"
                value={password}
                placeholder="Enter your Password"
              />
              <br />
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "13px",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <input className={style.remember_check} type="checkbox" />
                    </div>
                    <div>
                      <span>Remember me</span>
                    </div>
                  </div>
                  <p className={style.forgot_pass}>Forgot Password</p>
                </div>
              </div>
              <button className={style.login_BTN} type="submit" value="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
