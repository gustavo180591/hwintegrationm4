import {useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {useState, useEffect} from "react";
import {addFavorite, removeFavorite} from "../../redux/actions";

import "./card.styles.css";

function Card(props) {
  const navigate = useNavigate();
  const {character, onClose, addFavorite, removeFavorite, favorites} = props;
  const [closeBtn, setCloseBtn] = useState(true);
  const [fav, setFav] = useState(false);

  useEffect(() => {
    if (!onClose) {
      setCloseBtn(false);
    }
  }, []);

  useEffect(() => {
    favorites.forEach((fav) => {
      if (fav.id === character.id) {
        setFav(true);
      }
    });
  }, [favorites]);

  function navigateHandler() {
    navigate(`/detail/${character.id}`);
  }

  function favoriteHandler(character) {
    if (!fav) {
      addFavorite(character);
      setFav(true);
    } else {
      removeFavorite(character);
      setFav(false);
    }
  }
  return (
    <div className="card-container">
      <div className="image-container">
        <img
          className="character-image"
          onClick={navigateHandler}
          src={character.image}
          alt={character.name}
        />
        <h2 className="name">{character.name}</h2>
        {fav ? (
          <button onClick={() => favoriteHandler(character.id)}>❤️</button>
        ) : (
          <button onClick={() => favoriteHandler(character)}>🤍</button>
        )}
        {closeBtn ? (
          <button
            className="close-button"
            onClick={() => onClose(character.id)}
          >
            X
          </button>
        ) : null}
      </div>
      <div className="atributes">
        <h2>{character.species}</h2>
        <h2>{character.gender}</h2>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => dispatch(addFavorite(character)),

    removeFavorite: (id) => dispatch(removeFavorite(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    favorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
