import { Board } from '../../components/Board'
import { Header } from '../../components/Header'
import './styles.css'

export function TicTacToe() {
  return(
    <div className='container'>
      <div>
      <Header/>
      <Board/>
      </div>
    </div>
  )
}


