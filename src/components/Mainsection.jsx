import { assets } from "../assets/prescripto_assets/assets/assets_frontend/assets";
import styles from "../styles/Home.module.css";
export const Mainsection = () => {
  return (
    <div className={`${styles.home}`}>
      <div className={`${styles.heading}`}>
        <h1 className="text-3xl">
          Book Appointment <br />
          With trusted Doctors
        </h1>
        <div className={`${styles.group}`}>
          <img src={assets.group_profiles} alt="" />
          <p>
            Simply browse through our extensive list of trusted doctors, <br />
            schedule your appointment hassle-free.
          </p>
        </div>
        <a href="#speciality" className={`${styles.buts}`}>
          Book Appointment
        </a>
      </div>
    </div>
  );
};
