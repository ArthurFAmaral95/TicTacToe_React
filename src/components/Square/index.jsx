import './styles.css'


export function Square({value, onSquareClick}){
  return(
    <div 
      className="square"
      onClick={onSquareClick} 
    >
      {value}
    </div>
  )
}