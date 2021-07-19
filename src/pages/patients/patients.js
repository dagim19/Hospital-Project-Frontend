import React, { useEffect, useState } from "react";
import { Link, useRouteMatch, /*Route*/ } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faProcedures, faUserInjured } from "@fortawesome/free-solid-svg-icons";
// import Form from "../login/form";
// import SinglePatient from "./singlePatient";

import "./style.css";

const Patients = () => {
  const { url } = useRouteMatch();
  console.log("url: " + url);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/patients")
      .then((response) => {
        return response.json();
      })
      .then((data) => setData(data));
  }, []);

  const bedCount = 50 - data.length;

  return (
    <div className="patient-page-container">
      <div className="btn-container">
        <div
          className="info"
          style={{
            display: "flex",
            justifyContent: "center",
            borderRadius: "16px",
            width: "300px",
            color: bedCount > 10 ? "green" : "red",
          }}
        >
          <FontAwesomeIcon
            icon={faProcedures}
            style={{ display: "flex", alignSelf: "center" }}
          />
          <p>{`There are ${bedCount} free beds`}</p>
        </div>
        <Link
          to={`${url}/register`}
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <Button message="Register Patient" />
        </Link>
      </div>

      <div className="vertical-line"></div>
      <div style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
        {data.map((patient) => {
          return (
            <Link
              to={`${url}/${patient._id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <PatientLine key={patient._id} {...patient} />
            </Link>
          );
        })}
      </div>
      {/* <div className="vertical-line"></div> */}
    </div>
  );
};

/*

*/

const PatientLine = ({ firstName, lastName, age }) => {
  return (
    <div className="patientLine">
      <FontAwesomeIcon
        icon={faUserInjured}
        style={{ display: "flex", alignSelf: "center" }}
      />
      <h5>{`${firstName} ${lastName}`}</h5>
      <h5>{age}</h5>
    </div>
  );
};

export const Button = ({ message }) => {
  return (
    <div className="btn-fa">
      <FontAwesomeIcon
        icon={faUserInjured}
        style={{ display: "flex", alignSelf: "center" }}
      />
      <h5>{message}</h5>
    </div>
  );
};

export default Patients;

