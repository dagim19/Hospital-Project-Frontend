import React, { useEffect, useState } from "react";
import { Link, useRouteMatch, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faProcedures, faUserInjured } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const List = ({ route }) => {
  const { url } = useRouteMatch();

  const [datas, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/${route}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => setData(data));
  }, []);

  return (
    <div className="list-page-container">
      <div className="btn-container">
        <div
          className="info"
          style={{
            display: "flex",
            justifyContent: "center",
            borderRadius: "16px",
            width: "300px"
          }}
        >

        </div>
        <Link
          to={`${url}/register`}
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <Button message={`Register ${route}`} />
        </Link>
      </div>

      <div className="vertical-line"></div>
      <div style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
        {datas.map((data) => {
          return (
            <Link
              to={`${url}/${data._id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Line key={data._id} {...data} />
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

const Line = ({ firstName, lastName, age }) => {
  return (
    <div className="line">
      <h5>{`${firstName} ${lastName}`}</h5>
      <h5>{age}</h5>
    </div>
  );
};

export const Button = ({ message }) => {
  return (
    <div className="btn-fa">
      <h5>{message}</h5>
    </div>
  );
};

export default List;

