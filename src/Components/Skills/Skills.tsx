import React from "react";
import style from "./Skills.module.css";
import { Card } from "./Card/Card";

export const Skills = () => {
  return (
    <div className={style.skills}>
      <div className={style.skills__item}>
        <div className={style.skills__item__text}>My skills</div>
        <div className={style.skills__item__content}>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};
