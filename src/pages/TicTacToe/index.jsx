import { Board } from '../../components/Board'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'

import './styles.css'

export function TicTacToe() {
  return(
    <div className='container'>
      <div>
      <Header/>
      <Board/>
      </div>
      <ol>
        <li>
          <Button/>
        </li>
        <li>
          <Button/>
        </li>
        <li>
          <Button/>
        </li>
        <li>
          <Button/>
        </li>
      </ol>
    </div>
  )
}


