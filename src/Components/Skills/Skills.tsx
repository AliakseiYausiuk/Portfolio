import React from "react";
import style from "./Skills.module.css";
import { Card } from "./Card/Card";
import styleContainer from "../../style/Common/Container.module.css";

export const Skills = () => {
  return (
    <div className={`${styleContainer.container} ${style.skills}`}>
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
