import { useContext } from "react";
import styles from "../styles/MyAppointment.module.css";
import { AppContex } from "../contex/AppContext";
export const MyAppointment = () => {
  const { doctors } = useContext(AppContex);
  return (
    <>
      <div className={`${styles.myAppoinContainer}`}>
        <p className={`${styles.myAppointHeaing}`}>My Appointmanets</p>

        <div>
          {doctors.slice(0, 4).map((item, index) => (
            <div
              className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"
              key={index}
            >
              <div>
                <img
                  className={`${styles.myAppointImages}`}
                  src={item.image}
                  alt=""
                />
              </div>
              <div className={`${styles.myAppointAllInfo}`}>
                <p className={`${styles.myAppointDocName}`}>{item.name}</p>
                <p>{item.speciality}</p>
                <p className={`${styles.myAppointAddressName}`}>Address:</p>
                <p className={`${styles.myAppointAddressLins}`}>
                  {item.address.line1}
                </p>
                <p className={`${styles.myAppointAddressLins}`}>
                  {item.address.line2}
                </p>
                <p className={`${styles.myAppoinDateTime}`}>
                  <span className={`${styles.myAppointSatedTime}`}>
                    Date & Time:{" "}
                  </span>
                  25, July, 2024 | 8:30 PM
                </p>
              </div>
              <div></div>
              <div className={`${styles.myAppointAllBtns}`}>
                <button className={`${styles.cancel}`}>
                  Cancel Appointment
                </button>
                <button className={`${styles.pay}`}>Pay Online</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
