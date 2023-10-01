import { ListItem } from '../ListItem'
import './styles.css'

export function List({ history, handleTime }) {
  const renderStates = history.map(state => (
    <ListItem
      key={history.indexOf(state)}
      playN={history.indexOf(state)}
      move={handleTime}
    />
  ))
  return <ol>{renderStates}</ol>
}
