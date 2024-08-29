'use client'
import { useContext } from 'react'
import { LoginUserContext } from '../contexts/UserContexts'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import Avater from '../common/Avater'
const navigation = [
  { name: 'Product', href: '/features/product' },
]

export default function HeaderBoardApp(){
  const {stateUser, setUser, logout} = useContext(LoginUserContext); 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return(
      <header className="absolute inset-x-0 top-0 z-50 border-b-2 border-gray-300">
        <nav className="relative p-6 sm:px-8" aria-label="Global">
          <div aria-label = "rootpagelink" className="flex ">
            <a href="#" className="-m-1.5 p-1.5">
              {/* ブログページ作ってから用意しよう */}
              {/* <span className="sr-only">Your Company</span>
              <p className='font-serif text-sm md:text-xl'>Shinya&apos;s Blog</p> */}
            </a>
          </div>
          <div className="absolute inset-y-0 right-0">
            <button
              type="button"
              className="-m-2.5 inline-flex rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
              <Avater user = {stateUser}/>
            </button>
          </div>
          {/* <div className="flex gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div> */}
          {/* <div className="hidden sm:flex sm:flex-1 sm:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              
            </a>
          </div> */}
        </nav>
        <Dialog as="div" className=" absolute inset-y-0 right-0 max-w-64 " open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
              <div>{stateUser?.id}</div>デバッグ用
              <Avater user = {stateUser}/>
              <button onClick={logout}>logout</button>
              <button onClick={() => console.log(stateUser)}>  console.log</button>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    
  )
}
