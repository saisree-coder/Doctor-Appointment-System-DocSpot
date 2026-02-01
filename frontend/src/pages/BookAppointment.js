import React, { useState } from "react";
import api from "../services/api";
import { useLocation, useNavigate } from "react-router-dom";

function BookAppointment() {
  const navigate = useNavigate();
  const location = useLocation();

  // doctor data passed from Home page
  const { doctor } = location.state || {};

  const [date, setDate] = useState("");
  const [document, setDocument] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!doctor) {
      alert("Doctor data not found");
      return;
    }

    try {
      const userEmail = localStorage.getItem("userEmail");

      const res = await api.post("/appointments/book", {
        doctorInfo: {
          userID: doctor.userID,
          fullname: doctor.fullname,
          specialization: doctor.specialization,
        },
        userInfo: {
          email: userEmail,
        },
        date,
        document,
      });

      alert(res.data.message);
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Failed to book appointment");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Book Appointment</h2>

      {doctor && (
        <div style={{ marginBottom: "15px" }}>
          <h3>{doctor.fullname}</h3>
          <p>Specialization: {doctor.specialization}</p>
          <p>Fees: ₹{doctor.fees}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Select Date:</label>
          <br />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Document (file name or note):</label>
          <br />
          <input
            type="text"
            placeholder="medical-report.pdf"
            value={document}
            onChange={(e) => setDocument(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default BookAppointment;
