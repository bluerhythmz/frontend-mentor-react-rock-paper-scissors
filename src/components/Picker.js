/* import { useState, useEffect } from "react"; */
import triangle from "../images/bg-triangle.svg";
import { rpsData } from "../data/Data";
import Choice from "./Choice";

const Picker = ({ handleResult, house, handleClick, pick, route, handleRestart }) => {

  return (
        <main className="picker">
          <div className="picker__img-wrapper">
            <img src={triangle} alt="" className="picker__img" />
          </div>
          <div className="picker__choices">
            {rpsData.map((choice) => (
              <Choice
                key={choice.name}
                name={choice.name}
                img={choice.img}
                background={choice.background}
                handleClick={handleClick}
              />
            ))}
          </div>
        </main>
      )
};

export default Picker;
