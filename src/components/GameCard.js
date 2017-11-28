import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const GameCard = ({ game }) => {

  return (
    <li className='ui card'>
      <div className='image'> 
        <img src={game.cover} alt="GAME COVER" />
      </div>
      <div className='content'>
        <div className='header'> { game.title } </div>
      </div>
      <div className='extra content'>
        <div className='ui two buttons'>
          <Link to={`/game/${game._id}`} className='ui basic button green'>Edit</Link>
          <div className='ui basic button red'>Delete</div>
        </div>
      </div>
    </li>
  )
}

GameCard.propTypes = {
  game: PropTypes.object.isRequired
}

export default GameCard;