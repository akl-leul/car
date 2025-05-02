'use client'

import { useState } from 'react'
import {
  TrophyIcon,
  FireIcon,
  SparklesIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Rolls-Royce Phantom',
    description:
      'An icon of ultimate luxury, offering unmatched comfort, handcrafted detail, and whisper-quiet performance.',
    icon: TrophyIcon,
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
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Parallax Car Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/car.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Parallax effect
          filter: 'brightness(0.6)',
          minHeight: '700px',
        }}
        aria-hidden="true"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/30 to-transparent" aria-hidden="true" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-[800px] px-6 pt-24 text-center">
        <span className="mb-6 inline-block rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-gray-800 shadow ring-1 ring-gray-900/10">
          Introducing the Future of Luxury Driving.
          <a href="/cars" className="ml-2 font-semibold text-indigo-600 hover:underline">
            Check cars &rarr;
          </a>
        </span>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white drop-shadow-lg">
          Luxury Car Models with Details
        </h1>
        <p className="mt-8 max-w-xl mx-auto text-lg sm:text-xl text-gray-200 font-medium drop-shadow">
          Experience unmatched luxury with high-performance engineering, innovative technology, and timeless craftsmanship.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/cars"
            className="rounded-md bg-indigo-600 px-6 py-2 text-base font-semibold text-white shadow hover:bg-indigo-500 transition"
          >
            Get started
          </a>
          <a href="/about" className="text-base font-semibold text-white hover:underline">
            Learn more &rarr;
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-20 bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold text-indigo-600">Hit the Road Faster</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Everything You Need to Discover Your Dream Car
            </p>
            <p className="mt-6 text-lg text-gray-600">
              Discover refined performance and elegant design. From dynamic handling to sophisticated comfort, each model is crafted to elevate every drive.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold text-gray-900">
                    <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        
      </div>
      <div className="relative z-20 bg-gray-50 py-12">
  <h3 className="text-2xl font-semibold text-center mb-8">Featured Luxury Cars</h3>
  <div className="flex overflow-x-auto gap-8 px-4"> 
    <div className="min-w-[300px] bg-white shadow-xl rounded-lg p-4">
      <img src="/rolls royce.webp" alt="Car 1" className="w-full h-40 object-cover rounded" />
      <div className="mt-4 font-bold text-lg">Rolls-Royce Phantom</div>
      <div className="text-gray-500">Ultimate luxury and comfort</div>
    </div>
    <div className="min-w-[300px] bg-white shadow-xl rounded-lg p-4">
      <img src="/mercedes maybach.avif" alt="Car 2" className="w-full h-40 object-cover rounded" />
      <div className="mt-4 font-bold text-lg">Mercedes-Maybach S680</div>
      <div className="text-gray-500">Executive-class comfort and advanced technology.</div>
    </div>
    <div className="min-w-[300px] bg-white shadow-xl rounded-lg p-4">
      <img src="/lamborghini_aventador_lamborghini-aventador-svj.avif" alt="Car 3" className="w-full h-40 object-cover rounded" />
      <div className="mt-4 font-bold text-lg">Lamborghini Aventador SVJ</div>
      <div className="text-gray-500">Extreme aerodynamics and speed with a 770 hp V12.</div>
    </div>
    <div className="min-w-[300px] bg-white shadow-xl rounded-lg p-4">
      <img src="/bently.webp" alt="Car 3" className="w-full h-40 object-cover rounded" />
      <div className="mt-4 font-bold text-lg">Bentley Continental GT</div>
      <div className="text-gray-500">Performance and style in one package with a W12 engine.</div>
    </div>
  </div>
  <div className="flex justify-center mt-12 ">
  <a
    href="/cars"  
    className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-indigo-700 transition"
  >
    <SparklesIcon className="h-6 w-6" />
    Discover Your Dream Car
  </a>
</div>
</div>
    </div>
  )
}
