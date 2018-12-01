import React, { Component } from 'react';
import logo from './logo.svg';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Home  from './Component/Home';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  </main>
)

const Menu = () => (
  <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-primary fixed-top">
    <div className="container">
      <a className="navbar-brand" href="index.html">
        Vijaykarthik n
    </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul className="navbar-nav ml-auto mr-sm-2 mt-2 mt-lg-0">
          <li className="nav-item active mr-3">
            <Link to='/' className='nav-link'>Home</Link>
          </li>
          <li className="nav-item mr-3">
            <a className="nav-link" href="#">resume</a>
          </li>
          <li className="nav-item mr-3">
            <a className="nav-link" href="#">blog</a>
          </li>
          <li className="nav-item mr-3">
            <a className="nav-link" href="#">Contacts</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)


class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Menu />
        </header>
        <main>
          <Main />
        </main>
      </div>
    );
  }
}

export default App;
