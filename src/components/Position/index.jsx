import './styles.css'

import { useState } from 'react'

export function Position(){
  
  const [check, setCheck] = useState()

 function handleClick(){
  setCheck('❌')
 }

  return (
    <div 
    className='position'
    onClick={handleClick}
    >
      <div>{check}</div>
    </div>
  )
}