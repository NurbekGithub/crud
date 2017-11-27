import React from 'react';
import PropTypes from 'prop-types';

const GamesList = ({ games }) => {

  const emptyMessage = (
    <p> Your game collection is empty </p>
  )

  const renderGames = (game, idx) => {
    return (
      <li key={idx}>
        {game.title} 
      </li>
    )
  }
  
  const gameList = (
    <p> {games.map(renderGames)} </p>
  )


  return (
    <div className='GamesList'>
      { games.length === 0 ? emptyMessage : gameList }
    </div>
  )
}

GamesList.propTypes = {
  games: PropTypes.array.isRequired
}

export default GamesList;