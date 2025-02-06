import React from 'react';
import './Thankyou.css'; // Import your CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const MyScreen = ({nextPath}) => {
  const navigate = useNavigate();
  return (
    <div className="screen-container"> {/* Main container */}
      <div className="text-content"> {/* Container for text and flowers */}
        <div className="text-container">
          Thank u for being my bae!
        </div>
        <div className="flower"> 
          <div className="flower">
            <div className="f-wrapper">
                <div className="flower__line"></div>
                <div className="f">
                    <div className="flower__leaf flower__leaf--1"></div>
                    <div className="flower__leaf flower__leaf--2"></div>
                    <div className="flower__leaf flower__leaf--3"></div>
                    <div className="flower__leaf flower__leaf--4"></div>
                    <div className="flower__leaf flower__leaf--5"></div>
                    <div className="flower__leaf flower__leaf--6"></div>
                    <div className="flower__leaf flower__leaf--7"></div>
                    <div className="flower__leaf flower__leaf--8 flower__fall-down--yellow"></div>
                </div>
            </div>
            <div className="f-wrapper f-wrapper--2">
                <div className="flower__line"></div>
                <div className="f">
                    <div className="flower__leaf flower__leaf--1"></div>
                    <div className="flower__leaf flower__leaf--2"></div>
                    <div className="flower__leaf flower__leaf--3"></div>
                    <div className="flower__leaf flower__leaf--4"></div>
                    <div className="flower__leaf flower__leaf--5"></div>
                    <div className="flower__leaf flower__leaf--6"></div>
                    <div className="flower__leaf flower__leaf--7"></div>
                    <div className="flower__leaf flower__leaf--8 flower__fall-down--pink"></div>
                </div>
            </div>
            <div className="f-wrapper f-wrapper--3">
                <div className="flower__line"></div>
                <div className="f">
                    <div className="flower__leaf flower__leaf--1"></div>
                    <div className="flower__leaf flower__leaf--2"></div>
                    <div className="flower__leaf flower__leaf--3"></div>
                    <div className="flower__leaf flower__leaf--4"></div>
                    <div className="flower__leaf flower__leaf--5"></div>
                    <div className="flower__leaf flower__leaf--6"></div>
                    <div className="flower__leaf flower__leaf--7"></div>
                    <div className="flower__leaf flower__leaf--8 flower__fall-down--purple"></div>
                </div>
            </div>
            <div className="flower__glass"></div>
          </div>
        </div>
      </div> 
        <button className="custom-button" onClick={() => navigate(nextPath)}>
            <FontAwesomeIcon icon={faEye} size="1x"/>
            Cùng xem lại nhé
        </button>
      <div className="bottom-bubble"></div>
    </div>
  );
};

export default MyScreen;