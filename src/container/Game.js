import React, { useState, useEffect } from 'react';
import Square from '../components/Square';
import { winner } from '../services/helpers';

const Game = () => {
  const [squares, setSquares] = useState(new Array(9).fill(null));
  const [playerOne, setPlayerOne] = useState(true);
  const [status, setStatus] = useState('');

  let turn = playerOne ? 'X' : 'O';

  const win = winner(squares);
  const draw = squares.every(sq => sq !== null);

  const gameOver = () => {
    if (win) {
      setStatus('win');
      turn = null;
    } else if (draw) {
      setStatus('draw');
      turn = null;
    } else {
      setStatus('');
    }
  };

  useEffect(() => {
    gameOver();
  }, [ squares ]);

  const playerInput = (i) => {
    const sq = squares.slice();
    if (sq[i]) {
      return;
    } else if ( status === 'win' || status === 'draw') {
      return;
    }
    sq[i] = turn;
    setSquares(sq);
    setPlayerOne(!playerOne);
  }

  const reset = (e) => {
    e.preventDefault();
    setSquares(new Array(9).fill(null));
    setPlayerOne(true);
    setStatus('');
  }

  return (
    <div className="arena">
      <h1>Tic Tac Toe</h1>
      {status === '' ? <h2 className={`status fg${turn}`}>Player {turn} to play</h2> : null}
      {status === 'win' ? <h2 className={`status success fg${win.winner}`}>Winner: Player {win.winner}</h2> : null}
      {status === 'draw' ? <h2 className="status">The game was a tie</h2> : null}
      <div className="board">
        {squares.map((v, i) => {return <Square key={i} num={i} value={squares[i]} turn={turn} win={win?.result} playerInput={playerInput} />})}
      </div>
      {win || draw ? <button className="reset" onClick={(e) => {reset(e)}} type="button">Play again?</button> : null}
    </div>
  );
}

export default Game;