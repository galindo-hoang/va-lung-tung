import React from 'react';
import './Result.css'; // Import your CSS file

const MyScreen = ({data}) => {
    return (
        <div className="screen">
            <div className="header">
                <span>Vậy là chúng ta sẽ...</span> {/* Main text */}
            </div>
            <div className="container">
                <div className="label">hẹn nhau vào ngày</div>
                <div className="colon">:</div>
                <div className="value date-input">
                    <span id="date-value">14/02/2025</span>
                    <span className="calendar-icon">
                        <img src={require("../resources/calendar.png")} alt="Calendar" /> 
                    </span> 
                </div>


                <div className="label">cùng ăn món</div>
                <div className="colon">:</div>
                <div className="value">Nướng</div>

                <div className="label">tráng miệng với</div>
                <div className="colon">:</div>
                <div className="value">Sinh tố</div>

                <div className="label">sau đó đi</div>
                <div className="colon">:</div>
                <div className="value">Bi-a</div>

                <div className="label">và sau đó...</div>
                <div className="colon">:</div>
                <div className="value">Về nhà 😈</div>
            </div>
        </div>
    );
};

export default MyScreen;