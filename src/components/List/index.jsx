import { ListItem } from '../ListItem'
import './styles.css'

export function List(history) {
  return (
    <ol>
      {history[1]}
      <ListItem />
    </ol>
  )
}
