import React from "react";
import s from "../landingpage/landingPageCss.module.css";
import { NavLink } from "react-router-dom";
import card from "../../imagenes/2 (360).gif";

const LandingPage = (props) => {
  return (
    <div className={s.landingContainer}>
      <div className={s.text}>Videogames</div>
      <span className={s.textS}>by VC</span>
      <div className={s.carDiv}>
        <img className={s.img} src={card} alt="loading " />
      </div>
      <div className={s.buttonDiv}>
        <NavLink className={s.button} to="/home">
          <span className={s.span}>PLAY NOW</span>
        </NavLink>
        <div className={s.sociallinks}>
        <ul className={s.wrapper}>

          <a href="https://www.linkedin.com/in/victor-canchis-0055b91b0/" className={s.icon} >
            <span className={s.tooltip}>Linkedin</span>
            <span>
              <i className={s.fab}></i>
            </span>
          </a>
          <a href="https://github.com/VictorC1707" className={s.icon}>
            <span className={s.tooltip}>Github</span>
            <span>
              <i className={s.fab}></i>
            </span>
          </a>
        </ul>
      </div>
      </div>
      
    </div>
  );
};

export default LandingPage;
