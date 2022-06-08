import React, { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupProfil from './PopupProfil';
import PopupCard from './PopupCard';
import PopupAvatar from './PopupAvatar';
import ImagePopup from './ImagePopup';
import PopupDelete from './PopupDelete';
import PopupWithForm from './PopupWithForm';
import Api from '../utils/api';
import '../index.css';


const App = () => {
    const [isOpen, setOpenPopup] = useState(false);
    const [child, setChild] = useState();
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [cardList, setCardList] = useState([]);
    const [userName, setUserName] = useState();
    const [userDescription, setUserDescription] = useState();
    const [userAvatar, setUserAvatar] = useState();
    const [cardForPopup, setCardForPopup] = useState(null); 

    const api = new Api({
        urlBase: 'https://mesto.nomoreparties.co/v1/cohort-41',
        headers: {
            authorization: 'd2b53e42-b171-4a97-abd9-e550272a84f9',
            'Content-Type': 'application/json'
        }
      });
  
    useEffect(() => {
      api.getInitialProfil().then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
    })

    useEffect(() => {
        api.getInitialCards().then((data) => {
            setCardList(data);
        })
    })
    

    const isEditProfilePopupOpen = () => {
        setOpenPopup(true);
        setChild(PopupProfil);
        setName('profil');
        setTitle('Редактировать профиль');
    }

    const isAddPlacePopupOpen = () => {
        setOpenPopup(true);
        setChild(PopupCard);
        setName('card');
        setTitle('Новое место');
    }

    const isEditAvatarPopupOpen = () => {
        setOpenPopup(true);
        setChild(PopupAvatar);
        setName('avatar');
        setTitle('Обновить аватар');
    }

    const isDeletePopupOpen = () => {
        setOpenPopup(true);
        setChild(PopupDelete);
    }

    const closeAllPopups = () => {
        setOpenPopup(false);
    }

    const handleCardClick = (card) => {
        setCardForPopup(card);
    }

    const onCardClick = () => {
        setCardForPopup(null);
    }

    return ( 
    <div className="page">
        <Header />
        <Main onEditProfile={isEditProfilePopupOpen} 
            onAddPlace={isAddPlacePopupOpen} 
            onEditAvatar={isEditAvatarPopupOpen} 
            cards={cardList} 
            userName={userName}
            userAvatar={userAvatar}
            userDescription={userDescription}
            handleCardClick={handleCardClick}
            />
        <ImagePopup card={cardForPopup} onCardClick={onCardClick} />
        <Footer />
        <PopupWithForm isOpen={isOpen} 
            onClose={closeAllPopups} 
            children={child} 
            title={title} 
            name={name} 
            />
    </div>
    );
}

export default App;