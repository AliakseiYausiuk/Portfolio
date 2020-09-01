import React from "react";
import style from "./CardMain.module.css";

export const CardMain = () => {
  return (
    <div className={style.cardMain}>
      <div className={style.cardMain__icons}></div>
      <div className={style.cardMain__text}></div>
    </div>
  );
};
