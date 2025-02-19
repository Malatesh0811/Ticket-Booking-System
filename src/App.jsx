import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Events from "./Pages/Events.jsx";
import BookingForm from "./components/BookingForm.jsx";
import AdminPanel from "./Pages/AdminPanel";
import MyBookings from "./Pages/MyBookings.jsx";
import AdminLogin from "./components/AdminLogin";
import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container" style={{ marginTop: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          {/* <Route path="/booking/:eventId" element={<Booking />} /> */}
          <Route path="/booking/:eventId" element={<BookingForm />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/mybookings" element={<MyBookings />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
