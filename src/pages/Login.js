import React from "react";

import { Link } from "react-router-dom";
import styles from "../pages/LoginReg.module.css";
export default function Login() {
  return (
    <div className={styles["container"]}>
      <div className={styles["forms"]}>
        <div className={styles["form-content"]}>
          <header>Login</header>
          <form action="#">
            <div className={styles["input-field"]}>
              <input
                type="email"
                placeholder="Email"
                className={styles["input"]}
              />
            </div>

            <div className={styles["input-field"]}>
              <input
                type="password"
                placeholder="Password"
                className={styles["password"]}
              />
            </div>

            <div className={styles["form-link"]}>
              <Link to="/forgot-password" className={styles["forgot-pass"]}>
                Forgot password?
              </Link>
            </div>

            <div className={styles["button-field-login"]}>
              <button className={styles["login-btn"]}>Login</button>
            </div>
          </form>

          <div className={styles["form-link"]}>
            <span>
              Don't have an account?{" "}
              <Link to="/register" className={styles["link signup-link"]}>
                Signup
              </Link>
            </span>
          </div>
          <div className={styles["form-link"]}>
            <span>
              <Link to="/" className={styles["login-link"]}>
                Back to Home
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
