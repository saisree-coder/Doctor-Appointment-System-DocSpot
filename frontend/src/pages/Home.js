import React, { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Home() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getDoctors = async () => {
    try {
      const res = await api.get("/doctors/get-all-approved");
      setDoctors(res.data.doctors || []);
    } catch (error) {
      console.log("Error fetching doctors:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDoctors();
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        Approved Doctors
      </h2>

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {loading ? (
          <p style={{ textAlign: "center" }}>Loading doctors...</p>
        ) : doctors.length === 0 ? (
          <p style={{ textAlign: "center" }}>No doctors available</p>
        ) : (
          doctors.map((doctor) => (
            <div
              key={doctor._id}
              style={{
                backgroundColor: "#fff",
                border: "1px solid #ddd",
                borderRadius: "6px",
                padding: "20px",
                marginBottom: "20px",
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>
                {doctor.fullname}
              </h3>

              <p>
                <b>Specialization:</b> {doctor.specialization}
              </p>
              <p>
                <b>Fees:</b> ₹{doctor.fees}
              </p>

              <button
                style={{
                  marginTop: "10px",
                  padding: "8px 14px",
                  cursor: "pointer",
                }}
                onClick={() =>
                  navigate("/book-appointment", { state: { doctor } })
                }
              >
                Book Appointment
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
