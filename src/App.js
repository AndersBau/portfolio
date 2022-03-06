import React from 'react';
import Navbar from './components/Navabar';
import Routes from './routes'
import './App.css';
import './sass/main.scss'
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
