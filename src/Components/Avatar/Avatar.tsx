import React from "react";
import style from "./Avatar.module.css";
import styleContainer from "../../style/Common/Container.module.css";

export const Avatar = () => {
  return (
    <div className={`${styleContainer.container} ${style.avatar}`}>
      <div className={style.avatar__item}>
        <div className={style.avatar__item__text}></div>
        <div className={style.avatar__item__icons}></div>
      </div>
    </div>
  );
};
