import { useNavigate, useParams } from "react-router-dom";
import { AppContex } from "../contex/AppContext";
import styles from "../styles/Doctors.module.css";
import { useContext, useEffect, useState } from "react";


export const Doctors = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContex);
  const navigate = useNavigate();
  const [filterDoc, setFilterDoc] = useState([]);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };
  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);
  return (
    <div className={`${styles.doctorsContainer}`}>
      <p className={`${styles.head}`}>Browse through the doctors specialist.</p>
      {/* <div className="flex flex-col sm:flex-row items-start gap-5 mt-5"> */}
      <div className={`${styles.seciality}`}>
        <p
          onClick={() =>
            speciality === "General physician"
              ? navigate("/doctors")
              : navigate("/doctors/General physician")
          }
          className={`${styles.specialButn}`}
        >
          General physician
        </p>
        <p
          onClick={() =>
            speciality === "Gynecologist"
              ? navigate("/doctors")
              : navigate("/doctors/Gynecologist")
          }
          className={`${styles.specialButn}`}
        >
          Gynecologist
        </p>
        <p
          onClick={() =>
            speciality === "Dermatologist"
              ? navigate("/doctors")
              : navigate("/doctors/Dermatologist")
          }
          className={`${styles.specialButn}`}
        >
          Dermatologist
        </p>
        <p
          onClick={() =>
            speciality === "Pediatricians"
              ? navigate("/doctors")
              : navigate("/doctors/Pediatricians")
          }
          className={`${styles.specialButn}`}
        >
          Pediatricians
        </p>
        <p
          onClick={() =>
            speciality === "Neurologist"
              ? navigate("/doctors")
              : navigate("/doctors/Neurologist")
          }
          className={`${styles.specialButn}`}
        >
          Neurologist
        </p>
        <p
          onClick={() =>
            speciality === "Gastroenterologist"
              ? navigate("/doctors")
              : navigate("/doctors/Gastroenterologist")
          }
          className={`${styles.specialButn}`}
        >
          Gastroenterologist
        </p>
      </div>
      <div className={`${styles.docCards}`}>
        {filterDoc.map((item, index) => (
          <div key={index} className={`${styles.docCard}`}>
            <div className={`${styles.doctbg}`}>
              <img src={item.image} alt="" width={"250px"} />
            </div>
            <p>Available</p>
            <h3>{item.name}</h3>
            <span>{item.speciality}</span>
            <div>
              <button
                onClick={() => navigate(`/appointment/${item._id}`)}
                className={`${styles.btn}`}
              >
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    // </div>
  );
};
