import React from "react";

const PopupProfil = (props) => {
  return (
    <fieldset className="popup__form-content">
      <input id="popup__form-name" type="text" className="popup__form popup__form-name" name="userName" defaultValue="Жак-Ив Кусто" minLength={2} maxLength={40} required />
      <span className="popup__form-error popup__form-name-error" />
      <input id="popup__form-profetional" type="text" className="popup__form popup__form-profetional" name="userJob" defaultValue="Исследователь океана" minLength={2} maxLength={200} required />
      <span className="popup__form-error popup__form-profetional-error" />
      <button type="submit" className="popup__form-save" value="Сохранить">Сохранить</button>
  </fieldset>
  )
}

export default PopupProfil;