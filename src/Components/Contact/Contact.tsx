import React from "react";
import style from "./Contact.module.css";
import styleContainer from "../../style/Common/Container.module.css";

export const Contact = () => {
  return (
    <div className={`${styleContainer.container} ${style.contact}`}>
      <div className={style.contact__item}>
        <div className={style.contact__item__text}>Контакты</div>
        <div className={style.contact__item__form}>
          <form>
            <input type="text" />
            <input type="text" />
            <textarea></textarea>
          </form>
        </div>
        <div className={style.contact__item__button}>Отправить</div>
      </div>
    </div>
  );
};
