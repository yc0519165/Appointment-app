import { useNavigate } from "react-router-dom";
import styles from "../styles/Home.module.css";
import { useContext } from "react";
import { AppContex } from "../contex/AppContext";

export const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContex);

  return (
    <>
      <div className={`${styles.doctors}`}>
        <div className={`${styles.cotent}`}>
          <h1>Top Doctors to Book</h1>
          <p>Simply browse through our extensive list of trusted doctors.</p>
        </div>
        <div className={`${styles.docCards}`}>
          {doctors.slice(0, 8).map((item, index) => (
            <div className={`${styles.docCard}`} key={index}>
              <div className={`${styles.doctbg}`}>
                <img src={item.image} alt="" width={"250px"} />
              </div>
              <p>Available</p>
              <h3>{item.name}</h3>
              <span>{item.speciality}</span>
              <div>
                <button
                  onClick={() => {
                    navigate(`/appointment/${item._id}`);
                    scrollTo(0, 0);
                  }}
                  className={`${styles.btn}`}
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            navigate("/doctors");
            scrollTo(0, 0);
          }}
          className={`${styles.btn} mt-10`}
        >
          more
        </button>
      </div>
    </>
  );
};
