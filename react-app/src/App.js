import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';

import HomePage from './pages/HomePage.js'
import Navigation from './components/Navigation.js';
import Board from './components/Board.js'

import "./App.css"
function App() {
    return (
    <div className="App">
        <Router>
            <header className="App-header">
                <h1>Q-LESS</h1>
            </header>
        <Navigation />
            <main>
            <Board />
            </main>
            <footer>
                <p id="footer">All rights reserved &copy; 2022 Tyler Dennis</p>
            </footer>
            
        </Router>
    </div>
  );
}

export default App;
