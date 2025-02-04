import React from 'react';
import './Thankyou.css'; // Import your CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const MyScreen = ({onClick}) => {
  return (
    <div className="screen-container"> {/* Main container */}
      <div className="text-content"> {/* Container for text and flowers */}
        <div className="text-container">
          <h1>Thank u for being my bae!</h1>
        </div>
        <div className="flower"> 
          <div class="flower">
            <div class="f-wrapper">
                <div class="flower__line"></div>
                <div class="f">
                    <div class="flower__leaf flower__leaf--1"></div>
                    <div class="flower__leaf flower__leaf--2"></div>
                    <div class="flower__leaf flower__leaf--3"></div>
                    <div class="flower__leaf flower__leaf--4"></div>
                    <div class="flower__leaf flower__leaf--5"></div>
                    <div class="flower__leaf flower__leaf--6"></div>
                    <div class="flower__leaf flower__leaf--7"></div>
                    <div class="flower__leaf flower__leaf--8 flower__fall-down--yellow"></div>
                </div>
            </div>
            <div class="f-wrapper f-wrapper--2">
                <div class="flower__line"></div>
                <div class="f">
                    <div class="flower__leaf flower__leaf--1"></div>
                    <div class="flower__leaf flower__leaf--2"></div>
                    <div class="flower__leaf flower__leaf--3"></div>
                    <div class="flower__leaf flower__leaf--4"></div>
                    <div class="flower__leaf flower__leaf--5"></div>
                    <div class="flower__leaf flower__leaf--6"></div>
                    <div class="flower__leaf flower__leaf--7"></div>
                    <div class="flower__leaf flower__leaf--8 flower__fall-down--pink"></div>
                </div>
            </div>
            <div class="f-wrapper f-wrapper--3">
                <div class="flower__line"></div>
                <div class="f">
                    <div class="flower__leaf flower__leaf--1"></div>
                    <div class="flower__leaf flower__leaf--2"></div>
                    <div class="flower__leaf flower__leaf--3"></div>
                    <div class="flower__leaf flower__leaf--4"></div>
                    <div class="flower__leaf flower__leaf--5"></div>
                    <div class="flower__leaf flower__leaf--6"></div>
                    <div class="flower__leaf flower__leaf--7"></div>
                    <div class="flower__leaf flower__leaf--8 flower__fall-down--purple"></div>
                </div>
            </div>
            <div class="flower__glass"></div>
          </div>
        </div>
      </div> 
        <button className="custom-button" onClick={onClick}>
            <FontAwesomeIcon icon={faEye} size="1x"/>
            Cùng xem lại nhé
        </button>
      <div className="bottom-bubble"></div>
    </div>
  );
};

export default MyScreen;