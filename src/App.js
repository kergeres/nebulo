import logo from './logo.svg';
import './App.css';
import React from 'react';
import Contact from './components/contact/contact';
import Header from './components/header/header';
import Home from './components/home/home';

function App() {
  return (
    <div className="App">

      <Header />
      <Home />
      {/* <Contact /> */}

    </div>
  );
}

export default App;
