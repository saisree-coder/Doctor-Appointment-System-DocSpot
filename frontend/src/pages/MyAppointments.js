import React, { useEffect, useState } from "react";
import api from "../services/api";

function MyAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const email = localStorage.getItem("userEmail");
      const res = await api.post("/appointments/user-appointments", { email });
      setAppointments(res.data.appointments);
    };
    fetchAppointments();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Appointments</h2>

      {appointments.length === 0 ? (
        <p>No appointments found</p>
      ) : (
        appointments.map((a) => (
          <div key={a._id} style={{ border: "1px solid #ccc", marginBottom: "10px", padding: "10px" }}>
            <p><b>Doctor:</b> {a.doctorInfo.fullname}</p>
            <p><b>Date:</b> {a.date}</p>
            <p><b>Status:</b> {a.status}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default MyAppointments;
