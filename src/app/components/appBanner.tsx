import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import {useRouter} from 'next/navigation'
import Image from 'next/image'
import backgroundImage from './BackgroundImage'

const navigation = {
    loginpage:{ href: './features/login' },
}

export default function AppBanner(){
    const router = useRouter()
    return(
        // <div className="relative isolate px-6 pt-14 sm:px-8">
        <div aria-label='appBanner' className="px-6 pt-14 sm:px-8">
            {/* {backgroundImage()} */}
            <div aria-label='myName' className="flex flex-col sm:flex-row mx-auto max-w-2xl py-5  sm:py-5 ">
                <div className="text-center sm:w-1/2 ">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-4xlsm:px-8 sm:mt-8">
                    石川 晋也
                    </h1>
                    <p className="mt-6 text-sm leading-8 text-gray-600">
                    WEBフロントエンジニア<br />
                    REACT/Next.js/Tailwindcss
                    </p>
                </div>
                {/* 画像の大きさを固定して、パディングの大きさを変える。 */}
                {/* 親コンポーネントの中で真ん中に配置する方法 */}
                <div className='flex w-full justify-center sm:flex-none sm:w-1/2'>
                    <div 
                    aria-label='fronend-engineer image' 
                    className='h-48 w-48 sm:h-full sm:w-full'
                    >
                        <img src='/web-apps-development.png' alt={''}/>
                    </div>

                </div>
            </div>
            <div
            aria-label='productImage'
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
            >
            <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            />
            </div>
        </div>
    )
}