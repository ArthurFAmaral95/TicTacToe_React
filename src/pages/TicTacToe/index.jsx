import { Board } from '../../components/Board'
import { Button } from '../../components/Button'

import './styles.css'

export function TicTacToe() {
  return (
    <div className="container">
      <div>
        <Board />
      </div>
      <ol>
        <li>
          <Button />
        </li>
      </ol>
    </div>
  )
}
