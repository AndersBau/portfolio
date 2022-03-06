import React from 'react';
import Navbar from './components/Navabar';
import Routes from './routes'
import './App.css';
import './sass/main.scss'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
