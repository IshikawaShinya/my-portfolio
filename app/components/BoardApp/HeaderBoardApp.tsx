'use client'
import { useContext } from 'react'
import { userContext } from '../contexts/Usercontexts'

export default function HeaderBoardApp(){
  const {stateUser, setUser, logout} = useContext(userContext); 

  return(
    <div className='h-20 w-full'>
      <header className="absolute inset-x-0 top-0 z-50">
        <div>{stateUser?.id}</div>
        <button onClick={logout}>logout</button>
        <button onClick={() => console.log(stateUser)}>  console.log</button>
      </header>
    </div>
  )
}
