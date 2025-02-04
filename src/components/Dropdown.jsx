import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.css'; // Import your CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";


function CustomDropdown({ options, title, onClick, value }) {
  const [isOpen, setIsOpen] = useState(true);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (val) => {
    onClick(val);
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option) => (
            <li
              key={option}
              className={`dropdown-item`}
              onClick={() => handleClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span className="selected-option">
        {value ? value : title}
        </span>
        <FontAwesomeIcon icon={faAngleDown} size="1x"/>
      </div>
    </div>
  );
}

export default CustomDropdown;