# Doctor-Appointment-System-DocSpot
A full-stack web application that allows users to view approved doctors and book appointments seamlessly.  
Built using the **MERN stack** with a clean and modular architecture.

---

## Features

### 👨User
- View list of **approved doctors**
- See doctor details (specialization, fees)
- Book appointments with doctors
- View own appointments

### Admin
- Approve or reject doctor applications
- Manage doctors and users

### 👩Doctor
- Apply for doctor account
- View appointments once approved

---

## Tech Stack

### Frontend
- React.js
- React Router
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

---

## Project Structure
DOC SPOT
backend/
│
├── config/
│   └── db.js - Handles MongoDB Atlas connection using Mongoose.
│
├── controllers/
│   ├── appointmentController.js - Appointment booking & management
│   ├── doctorController.js - Doctor-related operations
│   └── userController.js - Appointment booking & management
│
├── models/
│   ├── appointmentModel.js - Appointment data with references
│   ├── doctorModel.js - Doctor details & availability
│   └── User.js - User schema (Patient / Doctor / Admin)
│
├── routes/
│   ├── appointmentRoutes.js
│   ├── doctorRoutes.js
│   └── userRoutes.js
│
├── node_modules/
│
├── .env
├── package.json
├── package-lock.json
└── server.js
frontend/
│
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── services/
│   │
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md


## GitHub Link: 
