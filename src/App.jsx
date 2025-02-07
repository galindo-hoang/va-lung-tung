import React, { useState } from "react";
import Thankyou from "./components/Thankyou"
import Result from "./components/Result"
import InputDateScreen from "./components/InputDateScreen"
import MySplash from "./components/MySplash"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import "./App.css";
import GoOption from "./components/GoOption";

import dataDiner from "./resources/dinner.json";
import dataDesert from "./resources/desert.json";
import dataPlaying from "./resources/activity.json";
import dataAfterCredit from "./resources/afterCredit.json";

const App = () => {
  const [time, setTime] = useState(null)
  const [dinner, setDinner] = useState(null);
  const [desert, setDesert] = useState(null);
  const [playing, setPlaying] = useState(null);
  const [afterCredit, setAfterCredit] = useState(null);

  return (
    <div className="App-Container">
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<MySplash nextPath="/time"/>} />

            <Route path="/time" element={
              <InputDateScreen 
                timestamp={time} 
                onClick={(val) => {
                  setTime(val)
                }} 
                nextPath="/dinner"/>
            }/>

            <Route path="/dinner" element={
              <GoOption
                data={dataDiner}
                value={dinner}
                onClick={(val) => setDinner(val)}
                nextPath="/desert"
                title="dinner"
              /> 
            }/>

            <Route path="/desert" element={ 
              <GoOption
                data={dataDesert}
                value={desert}
                onClick={(val) => setDesert(val)}
                nextPath="/activity"
                title="desert" // Add a title prop
              /> 
            }/>

            <Route path="/activity" element={
              <GoOption
                data={dataPlaying}
                value={playing}
                onClick={(val) => setPlaying(val)}
                nextPath="/afterCredit"
                title="activity" // Add a title prop
              />
            }/>

            <Route path="/afterCredit" element={
              <GoOption
                data={dataAfterCredit}
                value={afterCredit}
                onClick={(val) => setAfterCredit(val)}
                nextPath="/thankyou"
                title="afterCredit" // Add a title prop
              />
            }/>

            <Route path="/thankyou" element={<Thankyou nextPath="/result"/>}/>

            <Route path="/result" element={<Result data={{time, dinner, desert, playing, afterCredit}}/>}/>
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
