import React, { useState } from "react";
import Thankyou from "./components/Thankyou"
import Result from "./components/Result"
import InputDateScreen from "./components/InputDateScreen"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import OptionScreen from "./components/GoOption";

import dataDiner from "./resources/dinner.json";
import dataDesert from "./resources/desert.json";
import dataPlaying from "./resources/playing.json";

const App = () => {
  const [dinner, setDinner] = useState(null);
  const [desert, setDesert] = useState(null);
  const [playing, setPlaying] = useState(null);

  return (
    <div className="testing">
      <InputDateScreen />

    </div>
    // <Router>
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={
    //         !dinner ? (
    //           <OptionScreen
    //             data={dataDiner}
    //             onClick={(val) => setDinner(val)}
    //             title="Choose Dinner" // Add a title prop
    //           />
    //         ) : (
    //           <Navigate to="/desert" replace /> // Redirect to /desert
    //         )
    //       }
    //     />
    //     <Route
    //       path="/desert"
    //       element={
    //         !desert ? (
    //           <OptionScreen
    //             data={dataDesert}
    //             onClick={(val) => setDesert(val)}
    //             title="Choose Desert" // Add a title prop
    //           />
    //         ) : (
    //           <Navigate to="/playing" replace /> // Redirect to /playing
    //         )
    //       }
    //     />
    //     <Route
    //       path="/playing"
    //       element={
    //         !playing ? (
    //           <OptionScreen
    //             data={dataPlaying}
    //             onClick={(val) => setPlaying(val)}
    //             title="Choose Activity" // Add a title prop
    //           />
    //         ) : (
    //           <div>
    //             {/* Display the choices or redirect to a summary page */}
    //             <p>Dinner: {dinner}</p>
    //             <p>Desert: {desert}</p>
    //             <p>Activity: {playing}</p>
    //             {/* You could add a button here to reset or go to a summary page */}
    //           </div>
    //         )
    //       }
    //     />
    //   </Routes>
    // </Router>
  );
};

export default App;
