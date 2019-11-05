import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFavorite, deleteFavorite } from '../actions/index';
import '../assets/styles/components/CarouselItems.scss';
import playIcon  from '../assets/static//play-icon.png'
import plusIcon from '../assets/static/plus-icon.png'
import removeIcon from '../assets/static/remove-icon.png';

const CarouselItems = (props) => {
  const { id, cover, title, year, contentRating, duration} = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      id,
      cover,
      title,
      year,
      contentRating,
      duration
    })
  };
  //manejar accion
  const handleDeleteFavorite = (itemsId) => {
    props.deleteFavorite(itemsId)
  }

  return(
    <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt={title}  />
        <div className="carousel-item__details">
          <div>
            <img className="carousel-item__details--img" src={playIcon} alt="Play Icon"/> 
            <img 
            className="carousel-item__details--img" 
            src={plusIcon} 
            alt="Plus Icon"
            onClick={handleSetFavorite}
            /> 
            <img 
              className="carousel-item__details--img" 
              src={removeIcon} 
              alt="Plus Icon"
              onClick={() => handleDeleteFavorite(id)} 
            />
          </div>
          <p className="carousel-item__details--title">{title}</p>
          <p className="carousel-item__details--subtitle">
              {`${year} ${contentRating} ${duration}`}
          </p>
        </div>
      </div>
  );
};

CarouselItems.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number
};

const mapDispatchToProps = {
  //action
  setFavorite,
  deleteFavorite
}
//enviar valores a nuestros actions o disponer del estado 
export default connect(null, mapDispatchToProps)(CarouselItems);