import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HeaderNav } from "../components/HeaderNav";
import UserPageBanner from "../components/UserPageBanner";
import VehicleInfoComp from "../components/VehicleInfoComp";
import axios from "axios";

function UserPage() {
  let { id } = useParams();
  const [user, setuser] = useState({});

  //Cleaning up useEffect
  useEffect(() => {
    axios.get(`http://localhost:3001/usersLog`).then((response) => {
      setuser(response.data);
    });
  }, []);

  return (
    <div>
      <HeaderNav />
      <div className="DivVehicle">
        <h1
          style={{ color: "white", fontFamily: "Montressa", fontWeight: "700" }}
        >
          {user.length === 0 ? (
            <h1>No Vehicle Registered Yet</h1>
          ) : (
            <h1>Vehicle Details </h1>
          )}
        </h1>
        {/* {Array.isArray(user)
          ? user.map((ele) => {
              return <VehicleInfoComp info={ele} />;
            })
          : null} */}
        <VehicleInfoComp />
      </div>

      <div className="UserPageBanner" val={id}>
        <UserPageBanner />
      </div>
    </div>
  );
}

export default UserPage;

/*
      <div className="DivMiddleInfo">
        <h1>Basic Contents</h1>
      </div>

      <div className="DivMiddleSecondInfo">
        <h1>Middle Contents</h1>
      </div>

      <div className="UserFooter">
        <h1>Footer Contents</h1>
      </div>
 */
