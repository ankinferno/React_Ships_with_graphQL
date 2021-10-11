import React from "react";
import Ship from "./ShipComponent";

function Ships(props) {
  let data = props.data;

  return (
    <>
      <div>
        {data &&
          data.ships &&
          data.ships.map((element, index) => {
            return (
              <>
                <Ship
                  key={index}
                  name={element.name}
                  home_port={element.home_port}
                  image={element.image}
                />
                <br />
              </>
            );
          })}
      </div>
    </>
  );
}
export default Ships;
