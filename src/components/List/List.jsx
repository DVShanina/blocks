import React from "react";
import "./List.scss";


export default function List() {
    return (
<div className="list">
  
  <p className="list__p">
    <span className="list__span">Фамилия</span>
    <span className="list__span1">Мамай</span>
    </p>
  <p className="list__p">
    <span className="list__span">Имя и отчество</span>
    <span className="list__span1">Станиславаленина Владимировна</span>
    </p>
  <p className="list__p">
    <span className="list__span">Номер полиса выдан заведомо ложный</span>
    <span className="list__span1">01354879</span>
    </p>
  <p className="list__p">
    <span className="list__span">Дата рождения</span>
    <span className="list__span1">01.12.1976</span>
    </p>
  <p className="list__p">
    <span className="list__span">Телефон</span>
    <span className="list__span1">+79254218069</span>
    </p>
</div>
    )
}