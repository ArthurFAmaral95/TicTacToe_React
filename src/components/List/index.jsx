import { ListItem } from '../ListItem'
import './styles.css'

export function List({ history, handleTime, play }) {
  const renderStates = history.map(state => (
    <ListItem
      key={history.indexOf(state)}
      playN={history.indexOf(state)}
      move={handleTime}
    />
  ))
  return (
    <ol>
      {renderStates}
      <p>You are at move #{play}</p>
    </ol>
  )
}
