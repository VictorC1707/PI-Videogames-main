import React from "react";
import s from "./GameCardCss.module.css";

export const VideoGameCard = ({
  name,
  image,
  genres,
  released,
  platforms,
  id,
  createdInDb,
  rating,
}) => {
  return (
    <div id={id} key={id} className={s.card}>
        <div className={s.cardimg}>
        <img className={s.image} src={image} alt="Imagen del juego"></img> </div>
        <div className={s.cardinfo}>
          <p className={s.title}>{name}</p>
          <p className={s.subtitle}>Genres: {genres}</p>
        </div>
      </div>
  );
};
