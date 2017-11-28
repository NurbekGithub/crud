import { SET_GAMES, ADD_GAME, GAME_FETCHED } from './actions/action-types';

export function setGames(games) {
  return {
    type: SET_GAMES,
    games
  }
}

export function gameFetched(game) {
  return {
    type: GAME_FETCHED,
    game
  }
}

function handleResponse(response) {
  if(response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function fetchGames() {
  return dispatch => {
    fetch('api/gamesreq')
    .then(res => res.json())
    .then(json => dispatch(setGames(json.games)));
  }
}

export function fetchGame(id) {
  return dispatch => {
    fetch(`/api/gamesreq/${id}`)
      .then(res => res.json())
      .then(data => dispatch(gameFetched(data.game)));
  }
}

export function addGame(game) {
  return {
    type: ADD_GAME,
    game
  }
}

export function saveGame(data) {
  return dispatch => {
    return fetch('/api/gamesreq', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
      .then(data => dispatch(addGame(data.game)));
  }
}