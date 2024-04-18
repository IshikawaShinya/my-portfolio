'use client'
import { useState } from 'react'
import header from '@/app/components/header'
import appBanner from '@/app/components/appBanner'

const navigation = [
  { name: 'Product', href: '/features/product' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
  { name: 'Not me', href: 'https://taikis-blog.vercel.app/about' },
  ]
export default function HomeLikeCorpratePage(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      {header()}
      {appBanner()}
    </div>
  )
}