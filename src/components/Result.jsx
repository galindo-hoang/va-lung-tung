import React, { useEffect } from 'react';
import './Result.css'; // Import your CSS file
import emailjs from 'emailjs-com';

const public_key = "wUEFLXiminD-2o06Z"
const service_key = "service_1eqw1jr"
const template_key = "template_i8f8g7a"
let isSent = false

const MyScreen = ({data}) => {
    useEffect(() => {
        if(!isSent) {
            const formatString = `+ ngày: ${data?.time?.toLocaleDateString('en-GB')}\n+ ăn: ${data.dinner}\n+ Tráng miệng: ${data.desert}\n+ đi chơi: ${data.playing}\n`
            isSent = true
            emailjs.init(public_key)

            // emailjs
            // .send(service_key, template_key, {message: formatString})
            // .then(
            //     (result) => {console.log(JSON.stringify(result), result)}, 
            //     (error) => {console.log(error.text);}
            // );
        }
    },[data])

    return (        
        <div className="screen">
            <div className="header">
                <span>Vậy là chúng ta sẽ...</span> {/* Main text */}
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