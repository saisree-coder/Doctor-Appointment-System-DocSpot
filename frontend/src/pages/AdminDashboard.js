import React, { useEffect, useState } from "react";
import api from "../services/api";

function AdminDashboard() {
  const [pendingDoctors, setPendingDoctors] = useState([]);

  const getPendingDoctors = async () => {
    try {
      const res = await api.get("/doctors/get-pending");
      setPendingDoctors(res.data.doctors);
    } catch (error) {
      console.log(error);
    }
  };

  const approveDoctor = async (doctorId) => {
    try {
      await api.post("/doctors/approve-doctor", { doctorId });
      alert("Doctor approved successfully");
      getPendingDoctors(); // refresh list
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPendingDoctors();
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h2>Admin Dashboard</h2>

      {pendingDoctors.length === 0 ? (
        <p>No pending doctor requests</p>
      ) : (
        pendingDoctors.map((doctor) => (
          <div
            key={doctor._id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginBottom: "15px",
            }}
          >
            <h3>{doctor.fullname}</h3>
            <p>Email: {doctor.email}</p>
            <p>Specialization: {doctor.specialization}</p>
            <p>Experience: {doctor.experience} years</p>

            <button onClick={() => approveDoctor(doctor._id)}>
              Approve
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default AdminDashboard;
