import React from "react";
import style from "./Avatar.module.css";

export const Avatar = () => {
  return (
    <div className={style.avatar}>
      <div className={style.avatar__item}>
        <div className={style.avatar__item__text}></div>
        <div className={style.avatar__item__icons}></div>
      </div>
    </div>
  );
};
