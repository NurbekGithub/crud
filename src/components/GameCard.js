import React from 'react';
import PropTypes from 'prop-types';

const GameCard = ({ game }) => {

  return (
    <li className='ui card'>
      <div className='image'> 
        <img src={game.cover} alt="GAME COVER" />
      </div>
      <div className='content'>
        <div className='header'> { game.title } </div>
      </div>
    </li>
  )
}

GameCard.propTypes = {
  game: PropTypes.object.isRequired
}

export default GameCard;