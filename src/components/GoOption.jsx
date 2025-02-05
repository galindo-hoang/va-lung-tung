import React, { useState, useRef, useEffect } from "react";
import "../components/GoOption.css";
import MyCustomButton from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const DinnerScreen = ({onClick, data, onContinue, value}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      console.log(`use Effect`)
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleContinue = (e) => {
    if(value == null) {
      alert("Đừng quên chọn đó nhaaaa")
      return
    }
    onContinue()
  }
  const handleClick = (val) => {
    console.log(val)
    // onClick(val)
    setIsOpen(!isOpen);
  }

  return (
    <div className="option-container">
      <h1 className="option-header">
        {data.title}
      </h1>
      
      <div className="option-body">
        {data.items.map((item, index) => {
          return <div className="menu-item" key={index}>
            <img src={require(`../resources/template.png`)} alt={item.name}/>
            <div className="menu-item-text">{item.name}</div>
          </div>
        })}
          {isOpen && (
            <ul className="dropdown-list" onClick={(e) => e.stopPropagation()}>
              {data.items.map((option, index) => (
                <li
                  key={option.name}
                  className="dropdown-item"
                  onClick={(event) => {

                    event.stopPropagation(); // Prevent unintended closing
                    handleClick(option.name)
                  }}
                >
                  {option.name}
                </li>))
              }
            </ul>
          )}
      </div>

      <div className="option-dropdown">
        <div className="custom-dropdown" ref={dropdownRef}>
          <div className="dropdown-header" onClick={toggleDropdown}>
            <span className="selected-option">
            {value ? value : "Chọn ở đây nha"}
            </span>
            <FontAwesomeIcon icon={faAngleDown} size="1x"/>
          </div>
        </div>
      </div>

      <div className="option-footer">
        <MyCustomButton onClick = {handleContinue}/>
      </div>
    </div>
  );
};

export default DinnerScreen;