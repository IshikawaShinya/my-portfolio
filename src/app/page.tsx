'use client'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import login from './features/login/page'
import MyPage from './features/MyPage/page'

export default function Home() {
  return (
    <MyPage />
  )
}
