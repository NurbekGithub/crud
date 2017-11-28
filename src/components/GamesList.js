import React from 'react';
import PropTypes from 'prop-types';
import GameCard from './GameCard';

const GamesList = ({ games }) => {

  const emptyMessage = (
    <p> Your game collection is empty </p>
  )

  const renderGames = (game, idx) => {
    return (
      <GameCard key={idx} game={game}/>
    )
  }
  
  const gameList = (
    <ul className='ui four cards'> {games.map(renderGames)} </ul>
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