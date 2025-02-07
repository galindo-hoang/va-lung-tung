import React from "react";
import "./MySplash.css"
import { useNavigate } from "react-router-dom";
import emailjs from 'emailjs-com';

const public_key = "wUEFLXiminD-2o06Z"
const service_key = "service_1eqw1jr"
const template_key = "template_i8f8g7a"
let isSent = false

const getLaptopInfo = () => {
  const userAgent = navigator.userAgent;
  const platform = navigator.platform;
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;

  let os = "Unknown OS";

  if (platform.includes("Win")) os = "Windows";
  else if (platform.includes("Mac")) os = "macOS";
  else if (platform.includes("Linux")) os = "Linux";
  else if (/Android/.test(userAgent)) os = "Android";
  else if (/iPhone|iPad|iPod/.test(userAgent)) os = "iOS";

  return `os: ${os} || browser: ${navigator.userAgent} || screenResolution: ${`${screenWidth}x${screenHeight}`}`
};


const getIOSVersion = () => {
  const userAgent = window.navigator.userAgent;
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const match = userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);

  if (match) {
    return `iOS ${match[1]}.${match[2]} || screenResolution: ${screenWidth}x${screenHeight}`;
  }
  return "Not an iPhone";
};

const getAndroidVersion = () => {
  const userAgent = navigator.userAgent;
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const match = userAgent.match(/Android\s([0-9.]*)/);
  return match ? `${match[1]} || screenResolution: ${screenWidth}x${screenHeight}` : "Not an Android device";
};

const getDeviceType = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
  if (/android/i.test(userAgent)) {
    return "Android";
  }
  if (/iPhone|iPad|iPod/i.test(userAgent)) {
    return "iOS";
  }
  if (/Win|Mac|Linux/i.test(userAgent)) {
    return "Laptop/Desktop";
  }

  return "Unknown";
};

const getDeviceInfo = () => {
    const deviceType = getDeviceType();
    if (deviceType === "Android") return getAndroidVersion();
    if (deviceType === "iOS") return getIOSVersion();
    return getLaptopInfo(); 
};

const tracking = () => {
    const formatString = `+ OS-system click: ${getDeviceInfo()}`

    console.log(formatString)
    // emailjs.init(public_key)
    // emailjs
    //     .send(service_key, template_key, {message: formatString})
    //     .then(
    //         (result) => {console.log(JSON.stringify(result), result)}, 
    //         (error) => {console.log(error.text);}
    //     );
}

const MySplash = ({nextPath}) => {

    if(!isSent) {
        const formatString = `+ OS-system first: ${getDeviceInfo()}`

        console.log(formatString)
        isSent = true
        // emailjs.init(public_key)
        // emailjs
        //     .send(service_key, template_key, {message: formatString})
        //     .then(
        //         (result) => {console.log(JSON.stringify(result), result)}, 
        //         (error) => {console.log(error.text);}
        //     );
    }
    const navigate = useNavigate()
    return (
        <div className="splash-container">
            <img src={require("../resources/IMG_1630.png")} alt="Huyen"/>
            <div className="splash-body">
                <div className="splash-content">
                    Will you be my Valentine?
                </div>
                <div className="splash-button">
                    <button className="btn-default btn-accept" onClick={() => {
                        tracking()
                        navigate(nextPath)
                    }}>YES</button>
                    {/* <button className="btn-default btn-decline" onClick={() => {
                        alert("Định từ chối hay gì 😝😝😝")
                    }}>NO</button> */}
                </div>
            </div>
        </div>
    );
}

export default MySplash;