import React from "react";
import style from "./Header.module.css";

export const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.header__nav}>
        <div className={style.header__nav__item}>Главная</div>
        <div className={style.header__nav__item}>Ссылки</div>
        <div className={style.header__nav__item}>Работы</div>
        <div className={style.header__nav__item}>Контакты</div>
      </div>
    </div>
  );
};
