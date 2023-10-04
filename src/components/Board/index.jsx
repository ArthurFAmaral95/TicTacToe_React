import './styles.css'

import { Square } from '../Square'

export function Board({
  xIsNext,
  squares,
  onPlay,
  calculateWinner,
  winnerSquares
}) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return
    }

    const nextSquares = squares.slice()
    if (xIsNext) {
      nextSquares[i] = '❌'
    } else {
      nextSquares[i] = '⭕️'
    }
    onPlay(nextSquares)
  }

  const renderBoard = []

  if (calculateWinner(squares)) {
    const [a, b, c] = winnerSquares[1]
    for (let i = 0; i < 9; i++) {
      if (i === a || i === b || i === c) {
        renderBoard.push(
          <Square
            value={squares[i]}
            onSquareClick={() => handleClick(i)}
            key={i}
            className="highlight"
          />
        )
      } else {
        renderBoard.push(
          <Square
            value={squares[i]}
            onSquareClick={() => handleClick(i)}
            key={i}
            className=""
          />
        )
      }
    }
  } else {
    for (let i = 0; i < 9; i++) {
      renderBoard.push(
        <Square
          value={squares[i]}
          onSquareClick={() => handleClick(i)}
          key={i}
          className=""
        />
      )
    }
  }

  return <div className="board">{renderBoard}</div>
}
