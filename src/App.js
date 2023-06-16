import React, { useState } from 'react';
import PlainGame from './components/PlainGame';
import GameHeader from './components/GameHeader';

import './App.css';

const App = () => {

  const [advancedMode, setAdvancedMode] = useState(false)

  const changeMode = (event) => {
    event.preventDefault();
    setAdvancedMode(!advancedMode)
  }

  return (
    <div className="app_main">
      <GameHeader />
      <PlainGame />
      <footer className='app_main-footer'>
        <div onClick={changeMode} className='app_main-footer-choose-mode'>
          {advancedMode ? "Advanced" : "Normal"} Mode
        </div>
        <div className='app_main-footer-rules'>Rules</div>
      </footer>
    </div>
  );
}

export default App;
