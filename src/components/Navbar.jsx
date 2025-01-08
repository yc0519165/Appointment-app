import { useState } from "react";
import styles from "../styles/Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/prescripto_assets/assets/assets_frontend/assets";



export const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(true);

  return (
    <div>
      <div className={`${styles.header}`}>
        <h1 onClick={() => navigate("/")} className={`${styles.logo}`}>
          .logo
        </h1>
        <div className={`${styles.navlink}`}>
          <a href="/">Home</a>
          <a href="/doctors">All Doctors</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>

          {token ? (
            <div className={`${styles.profile} group`}>
              <img
                className={`${styles.profileImag}`}
                src={assets.profile_pic}
                alt=""
              />
              <img className="w-2.5" src={assets.user} alt="" />
              <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden transition-0.2s group-hover:block">
                <div className="min-w-48 bg-slate-200 rounded flex flex-col gap-4 p-4">
                  <p
                    onClick={() => navigate("/myprofile")}
                    className="hover:text-black cursor-pointer"
                  >
                    My Profile
                  </p>
                  <p
                    onClick={() => navigate("/myappointment")}
                    className="hover:text-black cursor-pointer"
                  >
                    My Appointments
                  </p>
                  <p
                    onClick={() => setToken(false)}
                    className="hover:text-black cursor-pointer"
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className={`${styles.btn}`}
            >
              create account
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
