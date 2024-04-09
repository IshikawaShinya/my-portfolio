import {Fragment,useState} from 'react';
import Image from 'next/image';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const Header:React.FC = () =>{
    return (
        <div></div>

        // headerを車輪の発明をしていた。
        // <header className="container h-20 max-w-fit bg-sky-600 flex flex-row ">
        //     {/* headerのサイズを決めるのよ。高さは80px、横は100%。 */}
        //     {/* 画像は高さは親と同じ。幅は最大80pix */}
        //     {/* 幅はshrinkあり。高さは親に合わせる。右寄せ。小要素のmaxを決定しておく。*/}
        //     <Image className="" alt="" src={'/respect.png'} width={80} height={80} />
        //     {/* ここで横にメニューを並べたい */}
        //     {/* headerの中で右端に表示されるようにしたい。 */}
        //     {/* カーソルが動いた時にクリックしていることがわかるようにする。影をつける*/}
        //     {/* 縦並びはまだあまり考慮しなくて良い。再整備の時で良い。 */}
        //     <div className='container shrink-1 px-96'></div>
        //     <nav className='flex container ml-96 h-20 max-w-fit'>
        //         <ul className="flex flex-row justfy-end">
        //             <li className="px-2 py-4 text-gray-600 hover:text-gray-100 ">Home</li>
        //             <li className="px-2 py-4 text-gray-600 hover:text-gray-100 ">About</li>
        //             <li className="px-2 py-4 text-gray-600 hover:text-gray-100 ">Contact</li>
        //         </ul>
        //     </nav>
        // </header>
    );
};

export default Header;