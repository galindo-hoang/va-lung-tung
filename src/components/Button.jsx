import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import "./Button.css"

function MyCustomButton ({onClick}) {
    return (      
        <button className="custom-button" onClick={onClick}>
            <FontAwesomeIcon icon={faPaw} size="1x"/>
            Tiếp theo
        </button>
    );
}

export default MyCustomButton;