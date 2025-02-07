import React, { useEffect } from 'react';
import './Result.css'; // Import your CSS file
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

const MyScreen = ({data}) => {
    useEffect(() => {

        if(!isSent) {
            const formatString = `+ ngày: ${data?.time?.toLocaleDateString('en-GB')}\n
                                  + ăn: ${data.dinner}\n
                                  + Tráng miệng: ${data.desert}\n
                                  + đi chơi: ${data.playing}\n
                                  + OS-system: ${getDeviceInfo()}`

            console.log(formatString)
            isSent = true
            emailjs.init(public_key)

            emailjs
            .send(service_key, template_key, {message: formatString})
            .then(
                (result) => {console.log(JSON.stringify(result), result)}, 
                (error) => {console.log(error.text);}
            );
        }
    },[data])

    return (        
        <div className="screen">
            <div className="header">
                Vậy là chúng ta sẽ...
            </div>
            <div className="body">
                <div className="label">hẹn nhau vào ngày</div>
                <div className="colon">:</div>
                <div className="value date-input">
                    <span id="date-value">{data.time ? (data.time.toLocaleDateString('en-GB')) : ("01/11/2002")}</span>
                    <span className="calendar-icon">
                        <img src={require("../resources/calendar.png")} alt="Calendar" /> 
                    </span> 
                </div>


                <div className="label">cùng ăn món</div>
                <div className="colon">:</div>
                <div className="value">{data.dinner}</div>

                <div className="label">tráng miệng với</div>
                <div className="colon">:</div>
                <div className="value">{data.desert}</div>

                <div className="label">sau đó đi</div>
                <div className="colon">:</div>
                <div className="value">{data.playing}</div>

                <div className="label">và sau đó...</div>
                <div className="colon">:</div>
                <div className="value">{data.afterCredit} 😈</div>
            </div>
        </div>
    );
};

export default MyScreen;