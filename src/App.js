import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ToDo from './components/ToDo/ToDo';

function App() {
  return (
    <div className='app'>
      <Header />
      <ToDo />
    </div>
  );
}

export default App;
