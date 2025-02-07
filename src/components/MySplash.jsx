import React from "react";
import "./MySplash.css"
import { useNavigate } from "react-router-dom";

const MySplash = ({nextPath}) => {
    const navigate = useNavigate()
    return (
        <div className="splash-container">
            <img src={require("../resources/IMG_1630.png")} alt="Huyen"/>
            <div className="splash-body">
                <div className="splash-content">
                    Will you be my Valentine?
                </div>
                <div className="splash-button">
                    <button className="btn-default btn-accept" onClick={() => {
                        navigate(nextPath)
                    }}>YES</button>
                    <button className="btn-default btn-decline" onClick={() => {
                        alert("Định từ chối hay gì 😝😝😝")
                    }}>NO</button>
                </div>
            </div>
        </div>
    );
}

export default MySplash;