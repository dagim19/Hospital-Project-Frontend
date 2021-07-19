import React from "react";
import Doctor from "../../images/Doctors.jpg";
import Bed from "../../images/Bed.jpg";
import Reception from "../../images/Reception.jpg";
import Card from "./card";
import "../../styles/homepage.css";
import { Link, useRouteMatch } from "react-router-dom";

const Body = () => {
  const { url } = useRouteMatch();
  return (
    <div className="body">
      <h1 syle={{ margin: "auto" }}>Information Mangament System</h1>
      <br />
      <div className="card-container">
        <div className="card-container-top">
          <Link to="/patients" style={{ textDecoration: "none" }}>
            <Card Card img={Bed} name={Bed} title="Patients" />
          </Link>
          <Link to="/doctors" style={{ textDecoration: "none" }}>
            <Card img={Doctor} name={Doctor} title="Doctors" />
          </Link>
          <Link to="/staffs" style={{ textDecoration: "none" }}>
            <Card img={Reception} name={Reception} title="Staff" />
          </Link>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Body;
