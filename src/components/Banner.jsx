import { useNavigate } from "react-router-dom";
import styles from "../styles/Home.module.css";

export const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className={`${styles.appointSeaction}`}>
      <img src="src/assets/appointment-doc.png" alt="" />
      <div className="text">
        <h1>
          Book Appointment With 100+ <br /> Trusted Doctors
        </h1>
        <div>
          <button
            onClick={() => navigate("/login")}
            className={`${styles.buts}`}
          >
            Create account
          </button>
        </div>
      </div>
    </div>
  );
};
