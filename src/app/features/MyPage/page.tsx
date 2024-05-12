'use client'
import BackgroundImage from '@/app/components/common/BackgroundImage'
import AppBanner from '@/app/components/common/AppBanner'
import Header from '@/app/components/common/Header'
import Skillgrid from '@/app/components/common/SkillGrid'
import Product from '@/app/components/common/Product'
import History from '@/app/components/common/History'

const navigation = [
  { name: 'Product', href: '/features/product' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
  { name: 'Not me', href: 'https://taikis-blog.vercel.app/about' },
  ]
export default function MyPage(){

  return (
    <div className="bg-white isolate">
      <Header />
      <BackgroundImage />
      <AppBanner />
      <Skillgrid />
      <Product />
      <History />
    </div>
  )
}