import React from "react";
import style from "./MainItem.module.css";
import styleContainer from "../../style/Common/Container.module.css";

export const MainItem = () => {
  return (
    <div className={`${styleContainer.container} ${style.mainItem}`}>
      <div className={style.mainItem__item}>
        <div>Рассматриваю варианты удалённой работы</div>
        <div> Нанять меня</div>
      </div>
    </div>
  );
};
