import { NavLink } from "react-router-dom";
import s from "./notfound.module.css";

export const NotFound = () => {
  return (
    <div>
      <div className={s.body}>
        <ul className={s.ule}>
          <li className={s.lie}>
            <input type="checkbox" />
            <div className={s.err}>4</div>
          </li>
          <li className={s.lie}>
            <input type="checkbox" />
            <div className={s.err}>0</div>
          </li>
          <li className={s.lie}>
            <input type="checkbox" />
            <div className={s.err}>4</div>
          </li>
        </ul>
      </div>
      <NavLink className={s.nfbutton} to="/home">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          HOME
      </NavLink>

      <div className={s.contens}>
        <div className={s.spinner}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
