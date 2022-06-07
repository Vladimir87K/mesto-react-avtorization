import React from 'react';

const PopupAvatar = () => {
  return (
    <fieldset className="popup__form-content">
      <input id="popup__form-url-avatar" type="url" className="popup__form popup__form-url-avatar" name="urlAvatar" defaultValue placeholder="Ссылка на аватарку" required />
      <span className="popup__form-error popup__form-url-avatar-error" />
      <button type="submit" className="popup__form-save" value="Сохранить">Сохранить</button>
    </fieldset>
  );
}

export default PopupAvatar;