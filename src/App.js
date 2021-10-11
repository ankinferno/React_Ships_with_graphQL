import React, { useEffect, useState } from "react";
import "./styles.css";
import gql from "graphql-tag";
import request from "./utils/request";
import Ships from "./Components/Ships";
import { useSelector, useDispatch } from "react-redux";
import { insertShipData } from "./Utilities/shipDataSlice";

export default function App() {
  const [searchText, SetSearchText] = useState("");

  useEffect(() => {
    //fetchShips();
    fetchReduxShips();
  }, []);

  /// Redux data methods:
  const shipList = useSelector((state) => state.ship.value);
  const dispatch = useDispatch();

  // USing state variable to stop , a server call when user clears
  // ship Name he is searching:
  const [filteredData, setFilteredData] = useState({});

  const fetchReduxShips = async () => {
    const response = await request(gql`
      {
        ships {
          name
          home_port
          image
        }
      }
    `);
    dispatch(insertShipData(response));
    setFilteredData(response.data);
  };

  function inputReduxChange(event) {
    SetSearchText(event.target.value);
    // -- now filtering the data list
    if (event.target.value !== "") {
      let nList = filteredData.ships.filter((item) => {
        if (
          item.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !=
          -1
        ) {
          return item;
        }
      });
      setFilteredData({ ships: nList });
    } else {
      setFilteredData(shipList);
    }
  }

  ///--

  return (
    <div className="App container">
      <div>
        <img className="spacex" alt="spaceLOGO" src={require("./logo.jpg")} />
      </div>

      <div>
        <input
          type="text"
          onChange={inputReduxChange}
          name="name"
          value={searchText}
          placeholder="Search Ships"
        />
      </div>

      <h3>
        TOTAL COUNT :
        {filteredData && filteredData.ships ? (
          <span> {filteredData.ships.length}</span>
        ) : (
          <p>0</p>
        )}
      </h3>

      <div>
        {filteredData != null && filteredData.ships ? (
          <div className="shipList">
            <Ships data={filteredData} className="container" />
          </div>
        ) : (
          <p>No ships Found</p>
        )}
      </div>
    </div>
  );
}
