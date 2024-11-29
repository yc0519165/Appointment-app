import { assets } from "../assets/prescripto_assets/assets/assets_frontend/assets";
import styles from "../styles/Cntact.module.css";
// import { assets } from "../fileassets/asset";

export const Contact = () => {
  return (
    <>
      <div className={`${styles.aboutContainer}`}>
        <div className={`${styles.aboutUs}`}>
          <p>
            Contact <span>Us</span>
          </p>
        </div>

        <div className={`${styles.about} `}>
          <img src={assets.about_image} alt="" />

          <div className={`${styles.content}`}>
            <span>Our OFFICE</span>
            <p>
              3rd floor index techpark <br />
              Hadpsar, Pune, Maharashtra
            </p>
            <p>
              Tel: 415 555 0132 <br />
              Email: yuvraj12345@gmail.com
            </p>
            <span>Careers at PRESCRIPTO</span>
            <p>Learn more about our teams and job openings.</p>
            <div>
              <button className={`${styles.explore}`}>Explore Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
