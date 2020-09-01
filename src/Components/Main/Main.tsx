import React from "react";
import style from "./Main.module.css";
import { CardMain } from "./CardMain/CardMain";

export const Main = () => {
  return (
    <div className={style.main}>
      <div className={style.main__item}>
        <div className={style.main__item__text}>My work</div>
        <div className={style.main__item__content}>
          <CardMain />
          <CardMain />
        </div>
      </div>
    </div>
  );
};
