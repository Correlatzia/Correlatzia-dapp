import React from 'react';
import { Link } from 'react-router-dom';
import Button from './components/button';
import Header from './components/header';
import Footer from './components/footer';
import './App.css';

function App() {
  function handleRedStoneClick() {
    console.log("am jereeeeeeee");
  }

  return (
    <div className="App">
      <Header className="header"/>
      <main className='main'>
        <button className="button" onClick={handleRedStoneClick}>
          Deposit
        </button>
        <button className="button" onClick={handleRedStoneClick}>
          Buy
        </button>
        <button className="button" onClick={handleRedStoneClick}>
          RedStone
        </button>
      </main>
      <Footer />
    </div>
  );
}

export default App;
