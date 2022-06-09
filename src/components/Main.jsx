import React, { useState } from "react";
import avatar from "../image/image.jpg";
import Card from './Card';
import api from "../utils/api";

const Main = (props) => {

  return (
    <div className="main">
      <section className="profil">
        <button onClick={props.onEditAvatar} className="profil__btn-avatar"><img src={props.userAvatar ? props.userAvatar : avatar} className="profil__avatar" alt="аватарка пользователь" /></button>
        <div className="profil-content">
          <div className="profil-content__information">
            <h1 className="profil-content__name content-overflow">{props.userName ? props.userName : 'Жак-Ив Кусто'}</h1>
            <button onClick={props.onEditProfile} className="profil-content__btn btn-cursor" type="button" aria-label="изменение данных профиля" />
          </div>
          <p className="profil-content__profethional content-overflow">{props.userDescription ? props.userDescription : 'Исследователь океана'}</p>
        </div>
        <button onClick={props.onAddPlace} className="profil__btn btn-cursor" type="button" aria-label="добавление картинки" />
      </section>
      <section className="cards">
      {props.cards.map((card, i) => <Card handleCardClick={props.handleCardClick} onCardClick={props.onCardClick} key={card._id} card={card}  />)}
      </section>
    </div>
  )
}

export default Main;