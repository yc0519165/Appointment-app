import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Doctors } from "./pages/Doctors";
import { About } from "./pages/About";
import { MyProfile } from "./pages/MyProfile";
import { Appointment } from "./pages/Appointment";
import { LoginPage } from "./pages/LoginPage";
import { Contact } from "./pages/Contact";
import { MyAppointment } from "./pages/MyAppointment";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/about" element={<About />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/myappointment" element={<MyAppointment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
