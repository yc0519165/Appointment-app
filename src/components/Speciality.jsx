import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";
import { specialityData } from "../fileassets/asset";

export const Speciality = () => {
  return (
    <div id="speciality" className={`${styles.specialSection}`}>
      <div className={`${styles.cotent}`}>
        <h1>Find by Speciality </h1>
        <p>
          Simply browse through our extensive list of trusted doctors, schedule
          <br />
          your appointment hassle-free.
        </p>
      </div>
      <div className={`${styles.cards}`}>
        {specialityData.map((items, index) => (
          <Link
            onClick={() => scrollTo(0, 0)} //It is a javaScript function
            className={`${styles.card}`}
            key={index}
            to={`/doctors/${items.speciality}`}
          >
            <img src={items.image} alt="" />
            {items.speciality}
          </Link>
        ))}
      </div>
      <div className={`${styles.cards}`}></div>
    </div>
  );
};
