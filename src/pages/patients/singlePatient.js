import React, { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router";
import Info from "./Info";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCheckCircle, faRemoveFormat } from "@fortawesome/free-solid-svg-icons";

const SinglePatient = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [changed, setChanged] = useState(false);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/patients/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPatient(data);
      });
  }, []);

  const turnOnEditMode = () => {
    setEditMode(!editMode);
  };

  const updateInputOnChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setPatient({ ...patient, [name]: value });
    setChanged(true);
  }

  const handleSubmit = () => {
    if (changed) {
      fetch(`http://localhost:3000/patients/${id}`, {
        method: "PUT",
        body: JSON.stringify(patient),
        headers: { "Content-type": "application/json" },
      })
        .then((response) => console.log(response.status))
        .catch((err) => console.log(err));
      setEditMode(false);
      setChanged(false);
    } else {
      setEditMode(false);
    }
  }

  const deletePatient = () => {
    fetch(`http://localhost:3000/patients/${id}`, {
      method: "DELETE"
    })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
    setDeleted(true);
  }

  if (deleted) {
    return <Redirect to="/patients" />
  }

  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
      <div id="left" style={{ display: "flex", flexDirection: "column", rowGap: "20px", alignSelf: "center", flexGrow: 1 }}>
        <button className="btn-fa" onClick={deletePatient}>
          <h3 style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>Delete </h3>
          <FontAwesomeIcon icon={faRemoveFormat} style={{ display: "flex", alignSelf: "center" }} />
        </button>
        {
          !editMode ? (
            <button className="btn-fa" onClick={turnOnEditMode}>
              <h3 style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>Edit</h3>
              <FontAwesomeIcon icon={faEdit} style={{ display: "flex", alignSelf: "center" }} />
            </button>
          ) : (
            <button className="btn-fa" /*style={{ justifyContent: "center" }}*/ onClick={handleSubmit}>
              <h3 style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>Done</h3>
              <FontAwesomeIcon icon={faCheckCircle} style={{ display: "flex", alignSelf: "center" }} />
            </button>
          )
        }
      </div>
      <div
        id="right"
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
          alignItems: "center",
          flexGrow: 5
        }}
      >
        <h3>Full Patient Information</h3>
        <div style={{ display: "flex", columnGap: "130px" }}>
          First Name:
        </div>
        {editMode ? (
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={patient.firstName}
            onChange={updateInputOnChange}
            style={{
              width: "400px"
            }}
          />
        ) : (
          <Info value={patient.firstName} />
        )}
        <div style={{ display: "flex", columnGap: "130px" }}>Last Name:

        </div>
        {editMode ? (
          <div style={{ display: "flex" }}>
            <input
              type='text'
              id='lastName'
              name='lastName'
              value={patient.lastName}
              onChange={updateInputOnChange}
              style={{ width: "400px" }}
            />


          </div>
        ) : (
          <Info value={`${patient.lastName}`} />
        )}
        <div style={{ display: "flex", columnGap: "130px" }}>
          Gender:

        </div>
        {editMode ? (
          <div style={{ display: "flex" }}>
            <input
              type='text'
              id='gender'
              name='gender'
              value={patient.gender}
              onChange={updateInputOnChange}
              style={{ width: "400px" }}
            />
          </div>
        ) : (
          <Info value={`${patient.gender}`} />
        )}
        <div style={{ display: "flex", columnGap: "130px" }}>
          Age:
        </div>
        {editMode ? (
          <div style={{ display: "flex" }}>
            <input
              type='text'
              id='age'
              name='age'
              value={patient.age}
              onChange={updateInputOnChange}
              style={{ width: "400px" }}
            />
          </div>
        ) : (
          <Info value={`${patient.age}`} />
        )}
        <div style={{ display: "flex", columnGap: "130px" }}>
          Phone:
        </div>
        {editMode ? (
          <div style={{ display: "flex" }}>
            <input
              type='text'
              id='phoneNumber'
              name='phoneNumber'
              value={patient.phoneNumber}
              onChange={updateInputOnChange}
              style={{ width: "400px" }}
            />

          </div>
        ) : (
          <Info value={`${patient.phoneNumber}`} />
        )}
        <div style={{ display: "flex", columnGap: "130px" }}>
          Email:
        </div>
        {editMode ? (
          <div style={{ display: "flex" }}>
            <input
              type='text'
              id='email'
              name='email'
              value={patient.email}
              onChange={updateInputOnChange}
              style={{ width: "400px" }}
            />
          </div>
        ) : (
          <Info value={`${patient.email} `} />
        )}
        <div style={{ display: "flex", columnGap: "130px" }}>
          Nationality:
        </div>
        {editMode ? (
          <div style={{ display: "flex" }}>
            <input
              type='text'
              id='nationality'
              name='nationality'
              value={patient.nationality}
              onChange={updateInputOnChange}
              style={{ width: "400px" }}
            />
          </div>
        ) : (
          <Info value={`${patient.nationality}`} />
        )}
        <div style={{ display: "flex", columnGap: "130px" }}>
          City:
        </div>
        {editMode ? (
          <div style={{ display: "flex" }}>
            <input
              type='text'
              id='city'
              name='city'
              value={patient.city}
              onChange={updateInputOnChange}
              style={{ width: "400px" }}
            />
          </div>
        ) : (
          <Info value={`${patient.city} `} />
        )}
        <div style={{ display: "flex", columnGap: "130px" }}>
          Address:
        </div>
        {editMode ? (
          <div style={{ display: "flex" }}>
            <input
              type='text'
              id='address'
              name='address'
              value={patient.address}
              onChange={updateInputOnChange}
              style={{ width: "400px" }}
            />
          </div>
        ) : (
          <Info value={`${patient.address}  `} />
        )}
      </div>
    </div >
  );
};



export default SinglePatient;
