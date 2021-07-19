import React from "react";
import "../../styles/homepage.css";

const card = ({ img, name, title }) => {
  return (
    <div className="card" >
      <img src={img} alt={name} className="img-card" />
      <h1>{title}</h1>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        cupiditate omnis soluta dolores. Beatae, earum? Eius ipsum illum nulla
        ab aliquam, omnis enim, blanditiis quasi quibusdam, aspernatur
        consequuntur odio possimus?
      </p>
    </div>
  );
};

export default card;
