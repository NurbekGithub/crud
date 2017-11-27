import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GamesList from './GamesList';
import { fetchGames } from '../actions'

class GameComponent extends React.Component {
 
  componentDidMount() {
    this.props.fetchGames();
  }

  render() {

    return (
      <div className='GameComponent'>
        <h1> Game List </h1>

        <GamesList games={this.props.games} />
      </div>
    )
  }
}

GameComponent.propTypes = {
  games: PropTypes.array.isRequired,
  fetchGames: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    games: state.games
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//      fetchGames: fetchGames
//   }
// }

export default connect(mapStateToProps, { fetchGames })(GameComponent);