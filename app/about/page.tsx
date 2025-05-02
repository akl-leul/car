'use client'

import Image from "next/image";
import { TrophyIcon, FireIcon, SparklesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const stats = [
  { name: 'Cars Admired', value: '500+' },
  { name: 'Engine Hours Spent', value: '1,000+' },
  { name: 'Favorite Brand', value: 'Lamborghini' },
  { name: 'Dream Project', value: 'Lamborghini Urus' },
];

const testimonials = [
  {
    quote: "The passion and attention to detail is unmatched. Every car story inspires me to dream bigger.",
    name: "Alex P.",
    car: "Lamborghini Aventador"
  },
  {
    quote: "A true car enthusiast who brings the automotive world to life. Can't wait to see the next build!",
    name: "Maria L.",
    car: "Bentley Continental GT"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 px-0 py-0">
      {/* Parallax Hero */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <Image
          alt=""
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          fill
          className="absolute inset-0 -z-10 object-cover object-center opacity-70"
          style={{ backgroundAttachment: 'fixed' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-0" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Join Me</h2>
            <p className="mt-8 text-lg font-medium text-gray-300 sm:text-xl">
              I'm always exploring new car builds, learning about engine performance, and following the latest trends in car culture. Whether it's classic muscle, JDM legends, or modern supercars, I find beauty in every machine built with passion.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse gap-1">
                  <dt className="text-base text-gray-300">{stat.name}</dt>
                  <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Personal Section */}
      <div className="max-w-3xl mx-auto text-center px-6 py-16">
        <div className="flex justify-center mb-8">
          <Image
            src="/me.png"
            alt="Me"
            width={320}
            height={240}
            className="rounded-xl shadow-lg"
            priority
          />
        </div>
        <p className="text-lg text-gray-700">
          Hey! I'm a car enthusiast who lives and breathes everything automotive.
          Whether it's tuning engines, exploring car designs, or just cruising around - cars are more than just machines to me, they're a way of life.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          My dream is to one day own a custom-built garage and turn my passion into something bigger.
          Until then, I'm learning, exploring, and pushing the limits of what I can do around cars.
        </p>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-16">
        <h3 className="text-2xl font-semibold text-center text-gray-900 mb-8">What Friends & Followers Say</h3>
        <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-2 px-4">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center">
              <p className="italic text-gray-700 mb-4">"{t.quote}"</p>
              <div className="font-bold text-indigo-600">{t.name}</div>
              <div className="text-sm text-gray-500">{t.car}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="flex justify-center py-12">
        <a
          href="/cars"
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-indigo-700 transition"
        >
          <SparklesIcon className="h-6 w-6" />
          Discover Your Dream Car
        </a>
      </div>
    </div>
  );
}
