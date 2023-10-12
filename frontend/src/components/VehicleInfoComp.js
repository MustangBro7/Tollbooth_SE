// import React, { useState } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const [vehicleData , setVehicleData] = useState(null)
// const [licensePlate, setLicensePlate] = useState('')

// const styleText = {
//   fontFamily: "Montressa",
//   fontWeight: "600",
//   boxShadow: "0 1px 8px rgba(0, 0, 0, 0.5)",
//   backgroundColor: "#a0d2eb",
//   borderRadius: "5px",
//   width: "250px",
//   height: "60px",
// };

// const getVehicleData = async () => {
//   try {
//     const response = await axios.get(`http://localhost:3001/vehicleRegisters`);
//     setVehicleData(response.data);
//     console.log(response.data);
//   } catch (error) {
//     console.error('Error fetching vehicle data:', error);
//     setVehicleData(null);
//   }
// };

// function VehicleInfoComp(props) {
//   return (
//     <div>
//       <div className="vehicleInfoLayout">
//         <h5>{props.info.vehicleType}</h5>

//         <h2 style={styleText}>{props.info.vehicleUniqueId}</h2>

//         <h5>{props.info.LicensePlate}</h5>
//         <button onClick={getVehicleData}>Get Data</button>
//         <br></br>
//         <br></br>
//       </div>
//     </div>
//   );
// }

// export default VehicleInfoComp;

import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
const VehicleInfoComp = () => {
  console.log("suup")
  const [licensePlate, setLicensePlate] = useState('');
  const [vehicleData, setVehicleData] = useState(null);
  const {id} = useParams();
  useEffect(() => {
    getVehicleData();
  }, []);

  const getVehicleData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/vehicleRegister`);
      const filteredData = response.data.filter(item => item.vehicleUniqueId === id);
      for(let i =0 ; i < filteredData.length ; i++){
        console.log(filteredData[i].LicensePlate)
        setVehicleData(filteredData[i].LicensePlate)
      }

    } catch (error) {
      console.error('Error fetching vehicle data:', error);
      setVehicleData(null);
    }
  };
  // const getuserData = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:3001/usersReg`);
  //     console.log(response.data)
  //   } catch (error) {
  //     console.error('Error fetching user data:', error);
  //     setVehicleData(null);
  //   }
  // };

  return (
    <div>
      {/* Render vehicleData and userData here */}
      <h3>{(vehicleData)}</h3>
      
    </div>

  );
};

export default VehicleInfoComp;