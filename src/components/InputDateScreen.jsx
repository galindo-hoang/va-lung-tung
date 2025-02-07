import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./InputDateScreen.css";
import { FiCalendar } from "react-icons/fi"; // Calendar icon
import MyCustomButton from "./Button";
import { useNavigate } from "react-router-dom";

const InputDateScreen = ({timestamp, onClick, nextPath}) => {
  const navigate = useNavigate();
  const onContinue = (e) => {
    if(timestamp == null) {
      alert("Chọn ngày đi nè bạn iu...")
      return 
    }
    navigate(nextPath)
  }
  return (
    <div className="container">
      <h1 className="content-title">Chọn ngày đi bạn iu...</h1>
      <div className="content-container">
        <div className="content-body">
        <h3 className="content-body-header">Hum nào cậu rãnh nhỉ?</h3>
        <div className="datepicker-container">
          <DatePicker
            selected={timestamp}
            onChange={onClick}
            dateFormat="dd/MM/yyyy"
            className="custom-input"
            placeholderText="Chọn 1 ngày đi"
          />
          <FiCalendar className="calendar-icon" />
        </div>
        <div className="content-button">
          <MyCustomButton onClick={onContinue}/>
        </div>
        </div>
      </div> 
    </div>
  );
};

export default InputDateScreen;
