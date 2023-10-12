import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";



export const VehicleForm = () => {
  const [message, setmessage] = useState("");
  let navigate = useNavigate();
  const {id} = useParams();
  // Initial Values
  const initialValues = {
    firstname: "",
    lastname: "",
    vehicleType: "",
    LicensePlate: "",
    dlno: "",
  };

  //Validation Schema
  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("*"),
    lastname: Yup.string().required("*"),
    vehicleType: Yup.string().required("*"),
    LicensePlate: Yup.string().required("*"),
    dlno: Yup.string().required("*"),
  });

  
  const onSubmit = async (data) => {
    const userdata = await axios.get("http://localhost:3001/usersReg")
    console.log(userdata.data);
    console.log(id)
    data.vehicleUniqueId = id;
    console.log(data);
    
    axios.post("http://localhost:3001/vehicleRegister", data).then((response) => {
      // What am i sending
      console.log("It worked")
      setmessage(response.data);
    });
  };

  return (
    <div>
      <div className="VehicleForm">
        <div className="FormTitle">VEHICLE REGISTRATION</div>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="FormContainer-VehicleReg">
            
              <label className="LableLogin">FirstName</label>
              <ErrorMessage
                name="firstname"
                component="span"
                className="ErrorMsg"
              />
              <Field
                id="inputLogin"
                name="firstname"
                placeholder="Enter firstname"
                className="ExtrasField"
              />
            
              <label className="LableLogin">LastName </label>
              <ErrorMessage
                name="lastname"
                component="span"
                className="ErrorMsg"
              />
              <Field
                id="inputLogin"
                name="lastname"
                placeholder="Enter Lastname"
                className="ExtrasField"
              />
            
              <label className="LableLogin">Vehicle Type</label>
              <ErrorMessage
                name="vehicleType"
                component="span"
                className="ErrorMsg"
              />
              <Field name="vehicleType" as="select" className="vehicleSelect">
                <option value="Two Wheeler">Two Wheeler</option>
                <option value="Four Wheeler">Four Wheeler</option>
                <option value="Multi Axle">Multi Axle</option>
              </Field>
            

            
              <label className="LableLogin">Vehicle LicensePlate Number </label>
              <ErrorMessage
                name="LicensePlate"
                component="span"
                className="ErrorMsg"
              />
              <Field
                id="inputLogin"
                name="LicensePlate"
                placeholder="Enter LicensePlate"
                className="ExtrasField"
              />
            
              <label className="LableLogin">DL Number </label>
              <ErrorMessage name="dlno" component="span" className="ErrorMsg" />
              <Field
                id="inputLogin"
                name="dlno"
                placeholder="Enter Driver License"
                className="ExtrasField"
              />
            

            <button type="submit" className="VRegButton">
              LogIn
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};


