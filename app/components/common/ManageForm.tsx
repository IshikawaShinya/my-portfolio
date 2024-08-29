'use client'
import { useState } from 'react'
import { useContext } from 'react'
import { LoginUserContext } from '../contexts/UserContexts'

export default function ManageForm(props: {}) {
    const [numberForm, setNumberForm] = useState([false])
    const[inputdisabled, setInputdisabled] = useState(false)
    const {stateUser, setUser} = useContext(LoginUserContext);

    let text = 'write member name'   
    const addForm = () =>{
        let copyNumberForm = [...numberForm]
        copyNumberForm.push(false)
        setNumberForm(copyNumberForm)
        console.log(stateUser)
    }
    const reduceForm = () =>{
        let copyNumberForm = [...numberForm]
        copyNumberForm.splice(-1,1)
        setNumberForm(copyNumberForm)
    }
    return(

        <div className='h-96 pt-16 w-full'>
            <button
                className='rounded bg-white h-5 w-5 text-black'
                onClick={()=>(addForm())}
            >
                +
            </button>
            <button
                className='rounded bg-white h-5 w-5 text-black'
                onClick={()=>(reduceForm())}
            >
                -
            </button>

            <ul>
                {numberForm.map((value,index)=>(
                    <li key = {index}>
                        <div>
                            <button
                            className = 'rounded bg-white h-5 w-10 text-black'
                            onClick={()=>{setInputdisabled(true)}}
                            >
                                完了
                            </button>
                            <button
                            className = 'rounded bg-white h-5 w-10 text-black'
                            onClick={()=>{setInputdisabled(false)}}
                            >
                                編集
                            </button>
                            <input
                            placeholder = 'write'
                            className = 'text-black bg-white'
                            disabled = {inputdisabled}
                            //   onChange = {}
                            //   value = {}
                            >
                            </input>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
