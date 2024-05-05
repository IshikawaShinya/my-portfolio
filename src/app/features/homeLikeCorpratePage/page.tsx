'use client'
import { useState } from 'react'
import header from '@/app/components/header'
import appBanner from '@/app/components/appBanner'
import backgroundImage from '@/app/components/backgroundImage'
import skillgrid from '@/app/components/skillgrid'
import Product from '@/app/components/product'

const navigation = [
  { name: 'Product', href: '/features/product' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
  { name: 'Not me', href: 'https://taikis-blog.vercel.app/about' },
  ]
export default function HomeLikeCorpratePage(){

  return (
    <div className="bg-white isolate">
      {header()}
      {backgroundImage()}
      {appBanner()}
      {skillgrid()}
      {Product()}
    </div>
  )
}