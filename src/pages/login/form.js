import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "../../styles/login.css";
import Error from "../../error";

const Form = () => {
  const [error, setError] = useState({ error: false, message: "" });
  const [patient, setPatient] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    age: null,
    phoneNumber: null,
    email: "",
    nationality: "",
    city: "",
    address: "",
    symptoms: "None",
  });

  const [registered, setRegistered] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setPatient({ ...patient, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(patient);
    fetch("http://localhost:3000/patients/register", {
      method: "POST",
      body: JSON.stringify(patient),
      headers: { "Content-type": "application/json" },
    })
      .then((response) => setRegistered(true))
      .catch((err) => setError({ error: true, message: err.message }));
  };

  if (registered) {
    return <Redirect to="/patients" />;
  }

  if (error.error) {
    return <Error status={error.message} />;
  }

  return (
    <div className="registration-flex-outer">
      <h1 className="registration-title">
        Welcome to our registration page please enter your info
      </h1>
      <form className="flex-inner" onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name*"
            value={patient.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="lastName">
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name*"
            value={patient.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="gender">
          <input
            id="gender"
            name="gender"
            type="text"
            placeholder="Gender*"
            value={patient.gender}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="age">
          <input
            id="age"
            name="age"
            type="number"
            placeholder="Age*"
            value={patient.age}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="phoneNumber">
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="number"
            placeholder="Phone number*"
            style={{ width: "500px", height: "35px" }}
            value={patient.phoneNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email*"
            value={patient.email}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="nationality">
          <input
            id="nationality"
            name="nationality"
            type="text"
            placeholder="Nationality*"
            value={patient.nationality}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="city">
          <input
            id="city"
            name="city"
            type="text"
            value={patient.city}
            onChange={handleChange}
            placeholder="City*"
            required
          />
        </label>
        <label htmlFor="address">
          <input
            id="address"
            name="address"
            type="text"
            placeholder="Address*"
            value={patient.address}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="symptoms">
          <textarea
            id="symptoms"
            name="symptoms"
            value={patient.symptoms}
            onChange={handleChange}
            cols="70"
            rows="10"
            placeholder="What do you feel? Please enter your symptoms"
          ></textarea>
        </label>
        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
