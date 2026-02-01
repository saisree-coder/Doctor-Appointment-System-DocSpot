import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>Book A Doctor</h2>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/register" style={styles.link}>Register</Link>

        {/* ✅ Admin Button */}
        <Link to="/admin" style={{ ...styles.link, ...styles.admin }}>
          Admin
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#1976d2",
    color: "white",
  },
  links: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
  },
  admin: {
    background: "#ff9800",
    padding: "6px 12px",
    borderRadius: "5px",
  },
};

export default Navbar;
