import React, { useState } from 'react';
import Square from '../components/Square';
import { winner } from '../services/helpers';

const Game = () => {
  const [squares, setSquares] = useState(new Array(9).fill(null));
  const [playerOne, setPlayerOne] = useState(true);

  console.log('%c Built by Brendan Meachen - brendan.meachen@gmail.com', 'background: #222; color: #7bd3ed');

  const turn = playerOne ? 'X' : 'O';

  const win = winner(squares);
  const draw = squares.every(sq => sq !== null);

  const playerInput = (i) => {
    const sq = squares.slice();
    if (sq[i]) {
      return;
    }
    sq[i] = turn;
    setSquares(sq);
    setPlayerOne(!playerOne);
  }

  const gameOver = () => {
    if (win) {
      return <h2 className={`status success fg${win.winner}`}>Winner: Player {win.winner}</h2>;
    } else if (draw) {
      return <h2 className="status">The game was a tie</h2>;
    } else {
      return <h2 className={`status fg${turn}`}>Player {turn} to play</h2>
    }
  }

  const reset = (e) => {
    e.preventDefault();
    setSquares(new Array(9).fill(null));
    setPlayerOne(true);
  }

  return (
    <div className="arena">
      <h1>Tic Tac Toe</h1>
      {gameOver()}
      <div className="board">
        {squares.map((v, i) => {return <Square key={i} num={i} value={squares[i]} turn={turn} win={win?.result} playerInput={playerInput} />})}
      </div>
      {win || draw ? <button className="reset" onClick={(e) => {reset(e)}} type="button">Play again?</button> : null}
    </div>
  );
}

export default Game;