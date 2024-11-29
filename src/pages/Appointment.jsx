import { useContext, useEffect, useState } from "react";
import styles from "../styles/Appointment.module.css";
import { AppContex } from "../contex/AppContext";
import { useParams } from "react-router-dom";
// import { assets } from "../fileassets/asset";
import { RelatedDoctors } from "../components/RelatedDoctors";
import { assets } from "../assets/prescripto_assets/assets/assets_frontend/assets";

const daysOfWeak = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const Appointment = () => {
  const { docId } = useParams();
  const { doctors, curruncySymblo } = useContext(AppContex);
  const [docInfo, setDocInfo] = useState({});

  //Booking Slot
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlot = async () => {
    setDocSlots([]);
    // getting current date
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      // getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // Setting end time of the date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      // Setting Hourse
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        // add Slot to timeSlot array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        // increment time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlot();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return (
    <>
      <div className={`${styles.appContainer}`}>
        <div className={`${styles.appImg}`}>
          <img className="w-full max-w-72" src={docInfo.image} alt="" />
        </div>
        <div className={`${styles.details}`}>
          <h2>
            {docInfo.name}
            <img src={assets.verified_img} alt="" />
          </h2>
          <div className={`${styles.profession}`}>
            <p>{docInfo.degree}</p>-<p>{docInfo.speciality}</p>
            <button>{docInfo.experience}</button>
          </div>
          <p className={`${styles.about}`}>
            About <img src={assets.info_img} alt="" />
          </p>
          <p className={`${styles.text}`}>{docInfo.about}</p>
          <span>
            Appointment fee:{" "}
            <b>
              {curruncySymblo}
              {docInfo.fees}
            </b>{" "}
          </span>
        </div>
      </div>
      {/* Booking slots */}

      <div className={`${styles.bookingSlot}`}>
        <h4>Booking Slot</h4>
        <div className={`${styles.days}`}>
          {docSlots.length &&
            docSlots.map((itemes, ind) => (
              <div
                onClick={() => setSlotIndex(ind)}
                className={`${styles.btns} ${
                  slotIndex === ind
                    ? "bg-[#5f6fff] text-white shadow-lg"
                    : "border-gray-500"
                }`}
                key={ind}
              >
                <p>{itemes[0] && daysOfWeak[itemes[0].datetime.getDay()]}</p>
                <p>{itemes[0] && itemes[0].datetime.getDate()}</p>
              </div>
            ))}
        </div>
        <div className={`${styles.times}`}>
          {docSlots.length &&
            docSlots[slotIndex].map((item, index) => (
              <p
                onClick={() => setSlotTime(item.time)}
                className={`${styles.timebtn} ${
                  item.time === slotTime
                    ? "bg-[#5f6fff] text-white shadow-lg"
                    : "border-gray-500"
                }`}
                key={index}
              >
                {item.time.toLowerCase()}
              </p>
            ))}
        </div>
        <button className={`${styles.book}`}>Book an Appointment</button>
      </div>
      {/* <BookingSolt /> */}
      <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
    </>
  );
};
