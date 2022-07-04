import React from "react";
import PopupWithForm from "./PopupWithForm";
import error from '../image/Error.svg';
import goodinput from '../image/Goodinput.svg'

function InfoTooltip(props) {
  return (
    <PopupWithForm isOpen={props.isOpen} onClose={props.onClose} >
      <img src={props.login ? goodinput : error} alt="" className="log-in__image" />
      <h2 className="log-in__paragraph">{props.login ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}</h2>
    </PopupWithForm>
  )
}

export default InfoTooltip;