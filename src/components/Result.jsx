import React from 'react';
import './Result.css'; // Import your CSS file

const MyScreen = ({data}) => {
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

                {/* <div className="label">và sau đó...</div>
                <div className="colon">:</div>
                <div className="value">{data.afterCredit} 😈</div> */}
            </div>
        </div>
    );
};

export default MyScreen;