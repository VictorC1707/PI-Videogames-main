import React, { useState, useEffect } from "react";
import s from "./about.module.css";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getVideogames } from "../../redux/actions";
import Loading from "../loading/Loading";

export const About = () => {
  const dispatch = useDispatch();
  const [carga, setCarga] = useState(true);

  useEffect(() => {
    dispatch(getVideogames()).then(() => setCarga(false));
  }, [dispatch]);

  if (carga) {
    return (
      <div className={s.cargaDiv}>
        <Loading />
      </div>
    );
  }

  return (
    <div className={s.divContainer}>
      <div className={s.SegContainer}>
        <h1 className={s.title}>
          Proyecto individual bootcamp <b>Soy Henry</b>
        </h1>

        <section className={s.sectionAbout}>
          <div className={s.card2RM}>
              <div className={s.cardRM}>
                <div className={s.wrapper}>
                  <img
                    src="https://i.pinimg.com/originals/53/29/53/5329530842a095a6ad61f3f5dd668ace.jpg"
                    className={s.cover_image}
                  />
                </div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Super_Mario_Bros._Logo.svg/1200px-Super_Mario_Bros._Logo.svg.png"
                  className={s.titleRM}
                />
                <img
                  src="https://art.pixilart.com/29c01efd2a4882e.png"
                  className={s.character}
                />
              </div>
          </div>

          <div className={s.content}>
            <h2>About Us</h2>
            <p>
            La tematica de la pagina esta inspirada en el 8 bits de los juegos retro, esta hecha con css puro sin usar librerias siguiendo las restricciones del proyecto.
            </p>
          </div>
          
        </section>

        <div className={s.containerButton}>
          <NavLink className={s.detailButton} to={"/home"}>
            Volver al inicio
          </NavLink>
        </div>
      </div>
    </div>
  );
};
