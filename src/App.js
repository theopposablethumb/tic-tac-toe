import React, { useEffect } from 'react';
import Game from './container/Game';

const App = () => {
  useEffect(() => {
    console.log('%c Built by Brendan Meachen - brendan.meachen@gmail.com', 'background: #222; color: #7bd3ed');
  }, []);
  
  return (
    <Game />
  )
}

export default App;