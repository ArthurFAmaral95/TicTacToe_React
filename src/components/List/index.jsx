import { ListItem } from '../ListItem'
import { ToggleBtn } from '../ToggleBtn'
import './styles.css'

export function List({
  history,
  handleTime,
  play,
  toggleOrder,
  descending,
  winner
}) {
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

  let message = ''
  if (winner) {
    message = `Congratulations ${winner[0]}! You won!`
  } else if (!winner && play === 10) {
    message = `Game over! Draw...`
  } else {
    message = `You are at move #${play}`
  }

  return (
    <>
      <ToggleBtn onClick={toggleOrder} />
      <ol>
        {renderStates}
        <p>{message}</p>
      </ol>
    </>
  )
}
