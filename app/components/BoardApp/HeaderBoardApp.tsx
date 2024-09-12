'use client'
import React, { useContext } from 'react'
import { LoginUserContext } from '../contexts/UserContexts'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Avater from '../common/Avater'


export default function HeaderBoardApp(){
  const {stateUser, setUser, logout} = useContext(LoginUserContext); 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter();
  const navigation = {
    login: { name: 'login', href: '..' },
  }
  
  const navigateToLoginPage = () => {
    return(
      router.push(navigation.login.href)
    )
  }

  return(
      <header className="absolute inset-x-0 top-0 z-50 border-b-2 border-gray-300">
        <nav className="relative p-6 sm:px-8" aria-label="Global">
          <div aria-label = "rootpagelink" className="flex ">
            <a href="#" className="-m-1.5 p-1.5">
            </a>
          </div>
          <div className="absolute inset-y-0 right-0">
            <button
              type="button"
              className="-m-2.5 inline-flex rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Avater user = {stateUser}/>
            </button>
          </div>
        </nav>
        <Dialog as="div" className=" absolute inset-y-0 right-0 max-w-64 " open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between pb-2">
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
              <div className="-my-6 ">
                <div className='flex flex-row relative items-center h-8 w-full'>
                  <Avater user = {stateUser}/>
                  <div className='p-2'></div>
                  <div className='flex items-end h-8'>
                    <p>{stateUser?.username}</p>
                  </div>
                </div>
                <div className='flex flex-row relative'>
                  <button 
                    className='flex relative items-center h-8' 
                    onClick = {logout}
                  >
                    <div className='pl-10'></div>
                    <div className='p-2'></div>
                    <p className=''>logout</p>
                  </button>
                  <div className='flex items-center left-0 h-8 p-2 '>
                    <p className=''>/</p>
                  </div>
                  <button 
                    className = 'flex relative items-center h-8' 
                    onClick = {navigateToLoginPage}
                  >
                    <p className=''>login</p>
                  </button>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    
  )
}
