import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GamesList from './GamesList';
import { fetchGames, deleteGame } from '../actions'

class GameComponent extends React.Component {
 
  componentDidMount() {
    this.props.fetchGames();
  }

  render() {

    return (
      <div className='GameComponent'>
        <h1> Game List </h1>

        <GamesList games={this.props.games} deleteGame={this.props.deleteGame}/>
      </div>
    )
  }
}

GameComponent.propTypes = {
  games: PropTypes.array.isRequired,
  fetchGames: PropTypes.func.isRequired,
  deleteGame: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    games: state.games
  }
}

export default connect(mapStateToProps, { fetchGames, deleteGame })(GameComponent);