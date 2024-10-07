import { useState } from "react";
import styles from "../styles/Login.module.css";

export const LoginPage = () => {
  const [state, setState] = useState("Sing Up");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <form className={`${styles.form}`}>
        <div className={`${styles.logSing} `}>
          <p className={`${styles.topHeading}`}>
            {state === "Sing Up" ? "Create Account" : "Login"}
          </p>
          <p className={`${styles.topMessage}`}>
            Please {state === "Sing Up" ? "sing up" : "login"} to book
            appointment
          </p>
          {state === "Sing Up" && (
            <div className={`${styles.input}`}>
              <p>Full Name</p>
              <input
                className={`${styles.allInputs}`}
                type="text"
                onClick={(e) => setName(e.target.name)}
                value={name}
                required
              />
            </div>
          )}
          <div className={`${styles.input}`}>
            <p>Email</p>
            <input
              className={`${styles.allInputs}`}
              type="email"
              onClick={(e) => setEmail(e.target.name)}
              value={email}
              required
            />
          </div>
          <div className={`${styles.input}`}>
            <p>Password</p>
            <input
              className={`${styles.allInputs}`}
              type="password"
              onClick={(e) => setPassword(e.target.name)}
              value={password}
              required
            />
          </div>
          <button className={`${styles.book}`}>
            {state === "Sing Up" ? "Create Account" : "Login"}
          </button>
          {state === "Sing Up" ? (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => setState("Login")}
                className={`${styles.link}`}
              >
                Login here
              </span>
            </p>
          ) : (
            <p>
              Create an new account?
              <span
                onClick={() => setState("Sing Up")}
                className={`${styles.link} `}
              >
                Click here
              </span>
            </p>
          )}
        </div>
      </form>
    </>
  );
};
