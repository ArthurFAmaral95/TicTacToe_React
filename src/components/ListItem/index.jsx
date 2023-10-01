import './styles.css'

export function ListItem(state, key) {
  return (
    <>
      <li key={key}>
        <button>Go to game start</button>
      </li>
    </>
  )
}
