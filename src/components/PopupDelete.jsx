import React from "react";

const PopupDelete = () => {
  return (
    <div className="popup popup-delete">
      <div className="popup__container">
        <button className="popup__container-btn  btn-cursor" type="button" aria-label="закрытие окна" />
        <h2 className="popup__title popup-delete__title">Вы уверены?</h2>
        <form name="deleteCard" className="popup-information popap-delete-form" noValidate>
          <button type="submit" className="popup__form-save popup__form-save-delete" value="Да">Да</button>
        </form>
      </div>
    </div>
  ); 
}

export default PopupDelete;