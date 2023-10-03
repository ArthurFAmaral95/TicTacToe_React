import './styles.css'

import { Square } from '../Square'

export function Board({ xIsNext, squares, onPlay, calculateWinner }) {
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

  const boardPositions = []
  for (let i = 0; i < 9; i++) {
    boardPositions.push(i)
  }

  const renderBoard = boardPositions.map(position => (
    <Square
      value={squares[position]}
      onSquareClick={() => handleClick(position)}
      key={position}
    />
  ))

  return <div className="board">{renderBoard}</div>
}
