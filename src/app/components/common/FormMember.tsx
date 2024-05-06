import { useState } from 'react'


export default function FormMember(props: {}) {
    const [numberForm,setNumberForm] =useState(0)
    let text = 'write member'   
    return(
        // TODO：プラスボタンを押したらフォームが増え,削除ボタンを押すとフォームが消える.
        // TODO：フォームの右側に完了するボタンをつける.その右に編集ボタンをつける.
        <div>
            <button
                className='rounded bg-white h-3 w-3 text-black'
                onClick={()=>(setNumberForm(numberForm+1))}
                >
                </button>
            <input
              placeholder = 'write money'
              className = 'text-black bg-white'
            >
            </input>
            <button
              className = 'rounded bg-white h-5 w-10 text-black'
              >
                完了
            </button>
            <button
              className = 'rounded bg-white h-5 w-10 text-black'
              >
                編集
            </button>
        </div>
    )
}
