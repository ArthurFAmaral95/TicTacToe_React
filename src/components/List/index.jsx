import { ListItem } from '../ListItem'
import { ToggleBtn } from '../ToggleBtn'
import './styles.css'

export function List({ history, handleTime, play, toggleOrder, descending }) {
  const renderStates = history.map(state => (
    <ListItem
      key={history.indexOf(state)}
      playN={history.indexOf(state)}
      move={handleTime}
    />
  ))

  if (descending) {
    renderStates.sort((a, b) => b.key - a.key)
  } else {
    renderStates
  }

  return (
    <>
      <ToggleBtn onClick={toggleOrder} />
      <ol>
        {renderStates}
        <p>You are at move #{play}</p>
      </ol>
    </>
  )
}
