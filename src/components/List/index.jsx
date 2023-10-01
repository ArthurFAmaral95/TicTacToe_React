import { ListItem } from '../ListItem'
import './styles.css'

export function List({ history }) {
  const renderStates = history.map(state => (
    <ListItem state={state} key={history.indexOf(state)} />
  ))
  return <ol>{renderStates}</ol>
}
