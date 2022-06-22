import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
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
   
    const [currentUser, setCurrentUser] = useState({});
    const [cardForPopup, setCardForPopup] = useState(null); 
    const [isPopupProfilOpen, setIsPopupProfilOpen] = useState(false);
    const [isPopupCardOpen, setIsPopupCardOpen] = useState(false);
    const [isPopupAvatarOpen, setIsPopupAvatarOpen] = useState(false);
    const [isPopupDelete, setIsPopupDelete] = useState(false);
    const [isDeleteCard, setIsDeleteCard] = useState({});
    const [cards, setCards] = useState([]);

    useEffect(() => {
         api.getInitialProfil().then((data) => {
            setCurrentUser(data);
            })
            .catch((err) => console.log(err));

        api.getInitialCards().then((data) => {
            setCards(data);
            })
            .catch(err => console.log(err));
    }, []);
    
    const handleCardLike = (card) => {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        
        api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
          setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
        })
        .catch((err) => console.log(err));
    }

    const handlePopupDelete = (card) => {
        setIsPopupDelete(true);
        setIsDeleteCard(card);
    }

    const deleteCard = () => {
        handleCardDelete();
        setIsPopupDelete(false)
    }

    const handleCardDelete = () => {
        api.deleteCard(isDeleteCard._id).then(() => {
            setCards((cards) => cards.filter((c) => c._id !== isDeleteCard._id));
            setIsPopupDelete(false);
        })
        .catch((err) => console.log(err))          
    }

    const onUpdateUser = (e) => {
        api.correctUserInfo(e).then((data) => {
            setCurrentUser(data);
            setIsPopupProfilOpen(false);
        })
        .catch((err) => console.log(err));
    }

    const onUpdateAvatar = (e) => {
        api.correctUserAvatar(e).then((data) => {
            setCurrentUser(data);
            setIsPopupAvatarOpen(false);
        })
        .catch((err) => console.log(err))
    }

    const addNewCard = (e) => {
        api.addNewCards(e).then((data) => {
            setCards((cards) => {
                return [data, ...cards];
            });
            setIsPopupCardOpen(false);
        })
        .catch((err) => console.log(err))
    }

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
        setIsPopupDelete(false);
        setIsDeleteCard([]);
    }

    const handleCardClick = (card) => {
        setCardForPopup(card);
    }

    const onCardClick = () => {
        setCardForPopup(null);
    }

    return ( 
    <div className="page">
            <CurrentUserContext.Provider value={currentUser} >
                    <Header />
                    <Main onEditProfile={onProfilPopupOpen} 
                        onAddPlace={onPopupCarOpen} 
                        onEditAvatar={onAvatarPopupOpen}                         
                        handleCardClick={handleCardClick}
                        cards={cards}
                        handleCardLike={handleCardLike}
                        handleDeleteClick={handlePopupDelete}
                        />
                    <ImagePopup card={cardForPopup} onCardClick={onCardClick} />
                    <Footer />
                    <PopupAvatar isOpen={isPopupAvatarOpen} onClose={closeAllPopups} onUpdateAvatar={onUpdateAvatar} />
                    <PopupProfil isOpen={isPopupProfilOpen} onClose={closeAllPopups} onUpdateUser={onUpdateUser} />
                    <PopupCard isOpen={isPopupCardOpen} onClose={closeAllPopups} handleNewCard={addNewCard} />
                    <PopupDelete isOpen={isPopupDelete} onClose={closeAllPopups} deleteCard={deleteCard} />
            </CurrentUserContext.Provider>
    </div>
    );
}

export default App;