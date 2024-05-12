'use client'
import BackgroundImage from '@/app/components/common/BackgroundImage'
import AppBanner from '@/app/components/common/AppBanner'
import Header from '@/app/components/common/Header'
import Skillgrid from '@/app/components/common/SkillGrid'

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
    </div>
  )
}