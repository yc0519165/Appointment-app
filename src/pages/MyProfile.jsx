import { useState } from "react";
import styles from "../styles/MyProfile.module.css";

export const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Sakshi Marathe",
    image: "/src/assets/profile.jpg",
    emali: "yuvraj1234@gmail.com",
    mobile: "4545-4565-7898",
    address: {
      line1: "5th floor YC appartment",
      line2: "Viman Nagar Pune, Maharashtra",
    },
    gender: "Male",
    dob: "2002-07-21",
  });

  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className={`${styles.prfileContainer}`}>
      <img src={userData.image} alt="" />
      {isEdit ? (
        <input
          className={`${styles.userName}`}
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className={`${styles.setUserName}`}>{userData.name}</p>
      )}
      <hr className={`${styles.line}`} />
      <div>
        <p className={`${styles.contact}`}>CONTACT INFORMATION</p>
        <div className={`${styles.contactDiv}`}>
          <p className={`${styles.allName}`}>email</p>
          <p className={`${styles.userEmail}`}>{userData.emali}</p>
          <p className={`${styles.allName}`}>phone:</p>
          {isEdit ? (
            <input
              className={`${styles.userPhoneSet}`}
              type="text"
              value={userData.mobile}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, mobile: e.target.value }))
              }
            />
          ) : (
            <p className={`${styles.userPhone}`}>{userData.mobile}</p>
          )}
          <p className={`${styles.allName}`}>Address</p>
          {isEdit ? (
            <p>
              <input
                className={`${styles.userAddressLinesSet}`}
                value={userData.address.line1}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                type="text"
              />
              <br />
              <input
                className={`${styles.userAddressLinesSet}`}
                value={userData.address.line2}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                type="text"
              />
            </p>
          ) : (
            <p className={`${styles.userAddress}`}>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p className={`${styles.basicInfoName}`}>BASIC INFORMATION</p>
        <div className={`${styles.basicInfoContainer}`}>
          <p className={`${styles.allName}`}>Gender:</p>
          {isEdit ? (
            <select
              className={`${styles.selectGender}`}
              value={userData.gender}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className={`${styles.selecteGender}`}>{userData.gender}</p>
          )}
          <p className={`${styles.allName}`}>Birth Of Date:</p>
          {isEdit ? (
            <input
              className={`${styles.setDob}`}
              value={userData.dob}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              type="date"
            />
          ) : (
            <p className={`${styles.dob}`}>{userData.dob}</p>
          )}
        </div>
      </div>
      <div>
        {isEdit ? (
          <button
            className={`${styles.saveInfoBtn}`}
            onClick={() => setIsEdit(false)}
          >
            Save Information
          </button>
        ) : (
          <button
            className={`${styles.editBtn}`}
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};
