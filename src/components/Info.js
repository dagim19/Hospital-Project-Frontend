import React from "react";

const Info = ({ value }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        width: "400px",
        boxShadow: `rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, 
        rgba(0, 0, 0, 0.2) 0px -3px 0px inset`,
        borderRadius: "16px",
      }}
    >
      {/* <h5>{message}</h5> */}
      <h5>{value}</h5>
    </div>
  );
};

export default Info;
