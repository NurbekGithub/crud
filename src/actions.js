import { SET_GAMES, ADD_GAME, GAME_FETCHED, GAME_UPDATED, GAME_DELETED } from './actions/action-types';

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

export function gameUpdated(game) {
  return {
    type: GAME_UPDATED,
    game
  }
}

export function gameDeleted(id) {
  return {
    type: GAME_DELETED,
    id
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

export function updateGame(data) {
  return dispatch => {
    return fetch(`/api/gamesreq/${data._id}`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
      .then(data => dispatch(gameUpdated(data.game)));
  }
}

export function deleteGame(id) {
  return dispatch => {
    return fetch(`/api/gamesreq/${id}`, {
      method: 'delete',
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
      .then(data => dispatch(gameDeleted(id)));
  }
}
