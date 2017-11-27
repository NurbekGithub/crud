import { SET_GAMES } from './actions/action-types';

export function setGames(games) {
  return {
    type: SET_GAMES,
    games
  }
}

export function fetchGames() {
  return dispatch => {
    fetch('api/gamesreq')
      .then(res => res.json())
      .then(json => dispatch(setGames(json.games)));
  }
}