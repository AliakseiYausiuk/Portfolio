import React from "react";
import style from "./MainItem.module.css";

export const MainItem = () => {
  return (
    <div className={style.mainItem}>
      <div className={style.mainItem__item}>
        <div>Рассматриваю варианты удалённой работы</div>
        <div> Нанять меня</div>
      </div>
    </div>
  );
};
