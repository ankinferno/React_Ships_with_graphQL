import React from "react";

function Ship({ name, home_port, image }) {
  /*
name: "GO Ms Tree"
home_port: "Port Canaveral"
image: "https://i.imgur.com/MtEgYbY.jpg"
*/

  return (
    <div className="ship">
      <img alt="ship" src={image} />
      <div className="shipText">
        <p name="shipname"> {name.toUpperCase()}</p>
        <p name="port">PORT: {home_port}</p>
      </div>
    </div>
  );
}

export default Ship;
