import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import GameComponent from './components/GameComponent';
import GameForm from './components/GameForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className='ui three item menu'>
          <NavLink className='item' activeClassName='active' exact to='/'>Home</NavLink>
          <NavLink className='item' activeClassName='active' exact to='/games'>Games</NavLink>
          <NavLink className='item' activeClassName='active' exact to='/games/new'>Add New Game</NavLink>
        </div>

        <Route exact path='/games' component={GameComponent} />
        <Route exact path='/games/new' component={GameForm} />
        <Route exact path='/game/:_id' component={GameForm} />
      </div>
    );
  }
}

export default App;
