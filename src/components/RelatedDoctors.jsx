import styles from "../styles/Home.module.css";

import { useContext, useEffect, useState } from "react";
import { AppContex } from "../contex/AppContext";
import { useNavigate } from "react-router-dom";

export const RelatedDoctors = ({ docId, speciality }) => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContex);

  const [relatedDoc, setRelatedDoc] = useState([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelatedDoc(doctorsData);
    }
  }, [docId, doctors, speciality]);
  return (
    <>
      <div className={`${styles.doctors}`}>
        <div className={`${styles.cotent}`}>
          <h1>Book Related Doctors</h1>
          <p>Simply browse through our extensive list of trusted doctors.</p>
        </div>
        <div className={`${styles.docCards}`}>
          {relatedDoc.slice(0, 5).map((item, index) => (
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
