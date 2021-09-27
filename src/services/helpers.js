export const winner = (squares) => {
  const rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < rows.length; i++) {
    const [a, b, c] = rows[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      console.log(squares[a]);
      console.log(a, b, c);
      return {winner: squares[a], result: [a, b, c]};
    }
  }
  return null;
}