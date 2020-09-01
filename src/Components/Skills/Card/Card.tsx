import React from "react";
import style from "./Card.module.css";

export const Card = () => {
  return (
    <div className={style.card}>
      <div className={style.card__icons}></div>
      <div className={style.card__title}>React</div>
      <div className={style.card__text}>Подробное описание навыка</div>
    </div>
  );
};
