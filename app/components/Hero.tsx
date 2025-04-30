'use client'

import { useState } from 'react'; 
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon,   TrophyIcon,
  FireIcon,
  SparklesIcon,
  ShieldCheckIcon,} from '@heroicons/react/24/outline';
 

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]
const features = [
  {
    name: 'Rolls-Royce Phantom',
    description:
      'An icon of ultimate luxury, offering unmatched comfort, handcrafted detail, and whisper-quiet performance.',
    icon: TrophyIcon, // Replace with a more car-relevant icon if needed
  },
  {
    name: 'Lamborghini Aventador',
    description:
      'A bold, high-performance supercar with aggressive design and a powerful V12 engine built for adrenaline.',
    icon: FireIcon,
  },
  {
    name: 'Bentley Continental GT',
    description:
      'Combines power with refinement, featuring a handcrafted interior and a smooth, commanding drive.',
    icon: SparklesIcon,
  },
  {
    name: 'Mercedes-Maybach S-Class',
    description:
      'Where innovation meets opulence. The Maybach redefines comfort with cutting-edge technology and elite craftsmanship.',
    icon: ShieldCheckIcon,
  },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white"> 

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Introducing the Future of Luxury Driving. {' '}
              <a href="/cars" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Check cars <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Luxury Car Models with Details
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Experience unmatched luxury with high-performance engineering, innovative technology, and timeless craftsmanship.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/cars"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="/about" className="text-sm/6 font-semibold text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
            Explore the Finest Luxury cars. Start Your Journey Today.
            </h2>
            <p className="mt-6 text-lg/8 text-pretty text-gray-300">
            Experience seamless elegance and performance. Our collection blends precision engineering with timeless design.
             </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="/cars"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
              <a href="/about" className="text-sm/6 font-semibold text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              alt="App screenshot"
              src="./car.png"
              width={100}
              height={100}
              className="absolute top-0 left-0 w-[40rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
      <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Hit the Road Faster</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
          Everything You Need to Discover Your Dream Car
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
          Discover refined performance and elegant design. From dynamic handling to sophisticated comfort, each model is crafted to elevate every drive.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </div>
    
  )
}
