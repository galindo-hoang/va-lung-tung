import React, { useState } from "react";
import "../components/GoOption.css";
import MyDropdown from './Dropdown'
import MyCustomButton from "./Button";

// import Dropdown from "./Dropdown"

const DinnerScreen = ({onClick, data}) => {
  console.log(JSON.stringify(data))
  const [value, setValue] = useState(null)
  const handleContinue = (e) => {
    onClick(value)
  }
  const handleClick = (val) => {
    setValue(val)
  }
  return (
    <div>
      <h1 className="menu-header">
        {data.title}
      </h1>
      
    <div className="menu-container">
      {data.items.map((item, index) => {
        return <div className="menu-item" key={index}>
          <img src={require(`../resources/template.png`)} alt={item.name}/>
          <div class="menu-item-text">{item.name}</div>
        </div>
      })}
    </div>

    <div className="menu-options">
      <MyDropdown 
      name="food" 
      title="Chọn ở đây nha" 
      value={value}
      options = {data.items.map((item, index)=>{ return item.name})} 
      onClick = {handleClick}
      />
    </div>

    <div className="menu-continue">
      <MyCustomButton onClick = {handleContinue}/>
    </div>
    </div>
  );
};

export default DinnerScreen;
