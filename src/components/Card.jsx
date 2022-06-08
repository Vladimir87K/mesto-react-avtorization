import React from "react";
  
const Card = (props) =>   {
  return (
    <article className="card">
      <div>
        <img onClick={() => props.handleCardClick(props.card)} className="card__img" src={props.card.link} alt={props.card.name} />
        <div className="card__content content-overflow">
          <h2 className="card__title content-overflow">{props.card.name}</h2>
          <div className="card__like">
            <button onClick={props.likeCard} className="card__like-img btn-cursor" type="button" aria-label="сердечко" />
            <p className="card__like-number">{props.card.likes.length}</p>
          </div>
        </div>
        <button onClick={props.deleteCard} className="card__delete btn-cursor" type="button" aria-label="корзина" />
      </div>
    </article>
  )
}

export default Card;