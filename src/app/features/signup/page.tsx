'use client'
import { useState } from 'react'
import { useRouter } from "next/navigation"
const navigation = {
    login:{href:'./login'},
  }
export default function Signup() {
    const [mail,setMail] = useState('')
    const [password,setPassword] = useState('')
    const [alertMessage,setAlertMessage] = useState<string>('')
    const router = useRouter();

    const signup =()=>{
        const body ={
            email:mail,
            password:password
        }
        fetch('http://localhost:8000/signup',{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify(body)
          })
        //   signinのように条件分岐が必要。
        //   signup成功⇨loginページに遷移
        //     signup失敗⇨alertMessageにエラーメッセージを表示
        //      空文字がメールかパスワードに入力された場合⇨alertMessageにエラーメッセージを表示
        //      同じemailが使われている場合⇨
    }

      const get =()=>{
        fetch('http://localhost:8000/users/',{
            method:"GET",
            headers:{
              "Content-Type":"application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
    }

    return(
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              SignUp
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    // type="email"
                    placeholder='mail'
                    // autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e)=>setMail(e.target.value)}
                    value={mail}
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  {/* <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div> */}
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    // autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}

                  />
                </div>
              </div>
  
              <div>
                <button
                //   type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={signup}
                >
                  Sign Up
                </button>
                <p className='p-4 text-black'>signupロジック未実装ができてないため</p>
                <button
                //   type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={()=>router.push(navigation.login.href)}
                >
                  loginページへ
                </button>
                <p className='p-4 text-red-600'>{alertMessage}</p>
              </div>
            </form>
            <button
            onClick={get}
            >
            get
            </button>
          </div>
        </div>


    )
}