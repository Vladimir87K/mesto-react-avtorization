import React from "react";

const PopupCard = (props) => {

  return (
    <fieldset className="popup__form-content">
      <input id="popup__form-name-image" type="text" className="popup__form popup__form-name-image" name="imageName" defaultValue placeholder="Название" minLength={2} maxLength={30} required />
      <span className="popup__form-error popup__form-name-image-error" />
      <input id="popup__form-url-image" type="url" className="popup__form popup__form-url-image" name="urlName" defaultValue placeholder="Ссылка на место" required />
      <span className="popup__form-error popup__form-url-image-error" />
      <button type="submit" className="popup__form-save" value="Сохранить">Сохранить</button>
  </fieldset>
  )
}

export default PopupCard;