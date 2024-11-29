// import { assets } from "/src/fileassets/asset.js";
import { assets } from "../assets/prescripto_assets/assets/assets_frontend/assets";
import styles from "../styles/About.module.css";
export const About = () => {
  return (
    <>
      <div className={`${styles.aboutContainer}`}>
        <div className={`${styles.aboutUs}`}>
          <p>
            About <span>Us</span>
          </p>
        </div>

        <div className={`${styles.about} `}>
          <img src={assets.about_pic} alt="" />

          <div className={`${styles.content}`}>
            <p>
              Welcome to Prescripto, your trusted partner in managing your
              healthcare needs conveniently and efficiently. At Prescripto, we
              understand the challenges individuals face when it comes to
              scheduling doctor appointments and managing their health records.
            </p>
            <p>
              Prescripto is committed to excellence in healthcare technology. We
              continuously strive to enhance our platform, integrating the
              latest advancements to improve user experience and deliver
              superior service. Whether you are booking your first appointment
              or managing ongoing care, Prescripto is here to support you every
              step of the way.
            </p>
            <span>Our Vision</span>
            <p>
              Our vision at Prescripto is to create a seamless healthcare
              experience for every user. We aim to bridge the gap between
              patients and healthcare providers, making it easier for you to
              access the care you need, when you need it.
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.chooseCont}`}>
        <div className={`${styles.aboutUs}`}>
          <p>
            Why <span>Choose Us</span>
          </p>
          <div className={`${styles.cards}`}>
            <div className={`${styles.card}`}>
              <p>Efficiency:</p>
              <span>
                Streamlined appointment scheduling that fits into your busy
                lifestyle.
              </span>
            </div>
            <div className={`${styles.card}`}>
              <p>Convenience:</p>
              <span>
                Access to a network of trusted healthcare professionals in your
                area.
              </span>
            </div>
            <div className={`${styles.card}`}>
              <p>Personalization:</p>
              <span>
                Tailored recommendations and reminders to help you stay on top
                of your health.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
