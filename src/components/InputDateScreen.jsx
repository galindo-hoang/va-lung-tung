import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./InputDateScreen.css";
import { FiCalendar } from "react-icons/fi"; // Calendar icon
import MyCustomButton from "./Button";

const InputDateScreen = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date); // Ensure it's a Date object
  };

  return (
    <div>
      <h1>Chọn ngày đi bạn iu...</h1>
      <div>
        <h3>Hum nào cậu rãnh nhỉ?</h3>

        <div className="datepicker-container">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            className="custom-input"
            placeholderText="Chọn 1 ngày đi"
          />
          <FiCalendar className="calendar-icon" />
        </div>
      </div>
      <MyCustomButton />
    </div>
  );
};

export default InputDateScreen;
