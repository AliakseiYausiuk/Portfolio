import React from "react";
import style from "./Footer.module.css";
import { CardFooter } from "./CardFooter/CardFooter";

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer__item}>
        <div className={style.footer__item__text}>Явсюк Алексей Николаевич</div>
        <div className={style.footer__item__icons}>
          <CardFooter />
          <CardFooter />
          <CardFooter />
          <CardFooter />
        </div>
        <div className={style.footer__item__text}>@2020 Все права защищены</div>
      </div>
    </div>
  );
};
