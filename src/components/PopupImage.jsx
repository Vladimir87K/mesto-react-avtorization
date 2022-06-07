import React from "react";

const PopupImage = () => {
  return (
    <div className="popup popup-image">
    <div className="popup-image__container">
        <img className="popup-image__img" src="#" alt="#" />
        <button className="popup__container-btn  btn-cursor" type="button" aria-label="закрытие окна" />
        <h2 className="popup-image__title" />
    </div>
 </div>
  );
}

export default PopupImage;