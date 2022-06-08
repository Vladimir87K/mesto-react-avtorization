import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import PopupProfil from './components/PopupProfil';
import PopupCard from './components/PopupCard';
import PopupAvatar from './components/PopupAvatar';
import PopupImage from './components/PopupImage';
import PopupDelete from './components/PopupDelete';
import PopupWithForm from './components/PopupWithForm';

import api from './utils/api';
import './index.css';


const App = () => {
    const [isOpen, setOpenPopup] = useState(false);
    const [child, setChild] = useState();
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [cardList, setCardList] = useState([]);
    const [userName, setUserName] = useState();
    const [userDescription, setUserDescription] = useState();
    const [userAvatar, setUserAvatar] = useState();
    const [cardForPopup, setCardForPopup] = useState(null)
  
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
        <PopupImage card={cardForPopup} onCardClick={onCardClick} />
        <Footer />
        <PopupWithForm isOpen={isOpen} onClose={closeAllPopups} children={child} title={title} name={name} />



</div>
    );
}

export default App;