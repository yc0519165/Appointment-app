import styles from "../styles/Footer.module.css";

export const Footer = () => {
  return (
    <>
      <div className="md:mx-10">
        <hr />
        <div className={`${styles.footerContainer}`}>
          <div>
            <p className={`${styles.logo}`}>.logo</p>
            <p
              className={`${styles.lorem} w-full md:w-2/3 text-gray-600 leading-6`}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus, iusto fuga. Et, repellendus numquam! Repellat libero
              labore illo eum doloremque nam nemo, quam, perferendis, est quae
              vitae quia sunt placeat?
            </p>
          </div>

          <div>
            <p className={`${styles.comapany}`}>Company</p>
            <ul className="gap-4">
              <li>Home</li>
              <li>About us</li>
              <li>Contact us</li>
              <li>Privacy</li>
            </ul>
          </div>

          <div>
            <h4 className={`${styles.comapany}`}>GET IN TOUCH</h4>
            <p>+1-212-456-7890</p>
            <p>servicemedico@gmail.com</p>
          </div>
        </div>
        <div>
          <hr />
          <p className="py-10 text-center">
            Copyright © 2024 GreatStack - All Right Reserved.
          </p>
        </div>
      </div>
    </>
  );
};
