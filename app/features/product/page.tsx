'use client';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { Translate } from '../../components/common/Video'
import Header from '@/app/components/common/Header';
const features = [
  {
    name: '測定-状況判断のための視線動作とそれに伴う頭部回転、並進運動',
    // description:'xxxxxxx',
      // 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: '装置作製-バスケットボールVRシミュレーション',
    // description: 'xxxxxxx',
    icon: LockClosedIcon,
  },
  // {
  //   name: '分析-指標に基づく状況判断能力の評価',
  //   description: 'xxxxxxx',
  //   icon: ServerIcon,
  // },
]

export default function Features() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <Header/>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">大学院研究</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">状況判断能力のためのバスケットボールVRシミュレーション</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                本研究では、バスケットボールVRシミュレーションを用いて、視線動作とそれに伴う頭部回転、並進運動を測定し、状況判断能力を評価する。
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">
                      
                      {/* {feature.description} */}
                      </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <Translate></Translate>
        </div>
      </div>
    </div>
  )
}
