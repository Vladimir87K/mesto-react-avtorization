import { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupProfil from './PopupProfil';
import PopupCard from './PopupCard';
import PopupAvatar from './PopupAvatar';
import ImagePopup from './ImagePopup';
import PopupDelete from './PopupDelete';
import PopupWithForm from './PopupWithForm';
import api from '../utils/api';
import '../index.css';


const App = () => {
    const [cardList, setCardList] = useState([]);
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cardForPopup, setCardForPopup] = useState(null); 
    const [isPopupProfilOpen, setIsPopupProfilOpen] = useState(false);
    const [isPopupCardOpen, setIsPopupCardOpen] = useState(false);
    const [isPopupAvatarOpen, setIsPopupAvatarOpen] = useState(false);

    useEffect(() => {
      api.getInitialProfil().then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
        })
        .catch(err => console.log(err));

      api.getInitialCards().then((data) => {
        setCardList(data);
        })
        .catch(err => console.log(err));
    }, []);

    const onProfilPopupOpen = () => {
        setIsPopupProfilOpen(true)
    }

    const onAvatarPopupOpen = () => {
        setIsPopupAvatarOpen(true);
    }

    const onPopupCarOpen = () => {
        setIsPopupCardOpen(true)
    }

    const closeAllPopups = () => {
        setIsPopupProfilOpen(false);
        setIsPopupCardOpen(false);
        setIsPopupAvatarOpen(false);
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
        <Main onEditProfile={onProfilPopupOpen} 
            onAddPlace={onPopupCarOpen} 
            onEditAvatar={onAvatarPopupOpen} 
            cards={cardList} 
            userName={userName}
            userAvatar={userAvatar}
            userDescription={userDescription}
            handleCardClick={handleCardClick}
            />
        <ImagePopup card={cardForPopup} onCardClick={onCardClick} />
        <Footer />
        <PopupWithForm isOpen={isPopupAvatarOpen} title='Обновить аватар' name='avatar' onClose={closeAllPopups}>
            <PopupAvatar />
        </PopupWithForm>
        <PopupWithForm isOpen={isPopupProfilOpen} title='Редактировать профиль' name='profil' onClose={closeAllPopups}>
            <PopupProfil />
        </PopupWithForm>
        <PopupWithForm isOpen={isPopupCardOpen} title='Обновить аватар' name='avatar' onClose={closeAllPopups}>
            <PopupCard />
        </PopupWithForm>
    </div>
    );
}

export default App;