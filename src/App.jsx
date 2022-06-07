import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import PopupProfil from './components/PopupProfil';
import PopupCard from './components/PopupCard';
import PopupAvatar from './components/PopupAvatar';
import PopupImage from './components/PopupImage';
import PopupDelete from './components/PopupDelete';
import PopupWithForm from './components/PopupWithForm';
import './index.css';


const App = () => {
    const [isOpen, setOpenPopup] = useState(false);
  
    const [child, setChild] = useState()


    const isEditProfilePopupOpen = () => {
        setOpenPopup(true);
        setChild(PopupProfil);
    }

    const isAddPlacePopupOpen = () => {
        setOpenPopup(true);
        setChild(PopupCard);

    }

    const isEditAvatarPopupOpen = () => {
        setOpenPopup(true);
        setChild(PopupAvatar);
    }

    const closeAllPopups = () => {
        setOpenPopup(false)
    }

    return ( 
    <div className="page">
        <Header />
        <Main onEditProfile={isEditProfilePopupOpen} onAddPlace={isAddPlacePopupOpen} onEditAvatar={isEditAvatarPopupOpen} />
        <Footer />
        <PopupWithForm isOpen={isOpen} onClose={closeAllPopups} children={child} />
        {/* <PopupProfil open={isOpen.onEditProfile} setOpen={setOpenPopup} onClose={closeAllPopups} />  */}

        {/* 
        <template className="card-template">
        <article className="card">
        <img className="card__img" src="#" alt="#">
        <div className="card__content content-overflow">
            <h2 className="card__title content-overflow"></h2>
            <div className="card__like">
                <button className="card__like-img btn-cursor" type="button" aria-label="сердечко"></button>
                <p className="card__like-number">0</p>
            </div>
        </div>
        <button className="card__delete btn-cursor" type="button" aria-label="корзина"></button>
        </article>
    </template> */}

</div>
    );
}

export default App;