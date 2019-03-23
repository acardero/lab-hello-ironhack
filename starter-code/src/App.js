import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Hero">
          <div className="Left-hero">
            <img className="logo" src="/images/ironhack-logo.svg" />
            <h1>
              Say Hello to <br />
              ReactJS
            </h1>
            <div className="hero-text">
              You will learn Frontend frameworkfrom scratch, to become a Ninja
              Developer.
            </div>
            <button className="hero-button">Awesome!</button>
          </div>
          <div className="Right-hero">
            <img className="menu" src="/images/menu-top.svg" />
            <br />
            <img src="/images/react-logo.svg" />
          </div>
        </div>
        <div className="Footer">
          <div className="Footer-icon">
            <img src="/images/icon1.png" />
            <h2> Declarative</h2>
            <p>React Makes it Painless to create interactive UIs.</p>
          </div>
          <div className="Footer-icon">
            <img src="/images/icon2.png" />
            <h2> Components</h2>
            <p>Build Encapzulated components that manage their state.</p>
          </div>
          <div className="Footer-icon">
            <img src="/images/icon3.png" />
            <h2> Single-way</h2>
            <p>A set of immutable values are passed to the components's.</p>
          </div>
          <div className="Footer-icon">
            <img src="/images/icon4.png" />
            <h2> Declarative</h2>
            <p>Statically types designed to run on modern browsers.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
