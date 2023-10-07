// import "../src/App.css";  
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import React from "react";
// import Contentpage from "../src/components/Contentpage";
// import Login from "../src/components/Login";
// import SignUp from "../src/components/SignUp";
// import UserPage from "../src/components/UserPage";
// import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   return (
//     <div className="App">

//       {/* <Contentpage />
//       <SignUp /> */}
//       <Router>
//         <Routes>
//           <Route exact path= "/" element = {<Contentpage/>}></Route>
//           <Route exact path="/login" element={<Login />} />
//           <Route exact path="/SignUp" element={<SignUp />} />
//         </Routes>
      
//       </Router>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contentpage from "./components/Contentpage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserPage from "./components/UserPage";
import { VehicleForm } from "./components/VehicleForm";
import AddMoney from "./components/AddMoney";


import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/source" element={<Contentpage />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route exact path="/user/:id" element={<UserPage />} />
          <Route exact path="/user/:id/vehicleForm" element={<VehicleForm />} />
          <Route exact path="/user/:id/AddMoney" element={<AddMoney />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
