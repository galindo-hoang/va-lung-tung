import React, { useEffect, useState } from "react";
import Thankyou from "./components/Thankyou"
import Result from "./components/Result"
import InputDateScreen from "./components/InputDateScreen"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import "./App.css";
import OptionScreen from "./components/GoOption";

import dataDiner from "./resources/dinner.json";
import dataDesert from "./resources/desert.json";
import dataPlaying from "./resources/playing.json";
import dataAfterCredit from "./resources/afterCredit.json";

const App = () => {
  const [time, setTime] = useState(null)
  const [dinner, setDinner] = useState(null);
  const [desert, setDesert] = useState(null);
  const [playing, setPlaying] = useState(null);
  const [afterCredit, setAfterCredit] = useState(null);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
            <InputDateScreen 
              timestamp={time} 
              onClick={(val) => {
                setTime(val)
              }} 
              nextPath="/dinner"/>
          }/>

          <Route path="/dinner" element={
            <OptionScreen
              data={dataDiner}
              value={dinner}
              onClick={(val) => setDinner(val)}
              nextPath="/desert"
              title="Choose Dinner"
            /> 
          }/>

          <Route path="/desert" element={ 
            <OptionScreen
              data={dataDesert}
              value={desert}
              onClick={(val) => setDesert(val)}
              nextPath="/activity"
              title="Choose Desert" // Add a title prop
            /> 
          }/>

          <Route path="/activity" element={
            <OptionScreen
              data={dataPlaying}
              value={playing}
              onClick={(val) => setPlaying(val)}
              nextPath="/thankyou"
              title="Choose Activity" // Add a title prop
            />
          }/>

          {/* <Route path="/afterCredit" element={
            <OptionScreen
              data={dataAfterCredit}
              value={afterCredit}
              onClick={(val) => setAfterCredit(val)}
              nextPath="/thankyou"
              title="Choose after-credit" // Add a title prop
            />
          }/> */}

          <Route path="/thankyou" element={<Thankyou nextPath="/result"/>}/>

          <Route path="/result" element={<Result data={{time, dinner, desert, playing, afterCredit}}/>}/>
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
