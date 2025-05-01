import Image from "next/image"; 
 
  const stats = [ 
        { name: 'Cars Admired', value: '500+' },
        { name: 'Engine Hours Spent', value: '1,000+' },
        { name: 'Favorite Brand', value: 'Lamborghini' }, // or any brand you prefer
        { name: 'Dream Project', value: 'Lamborghini Urus' }, // customize this
     
      
  ]
export default function About() {
  return (
          
      
    <div className="min-h-screen bg-gray-100 px-6 py-10 md:px-20 mt-20">
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
              className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
            />
            <div
              aria-hidden="true"
              className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Join me</h2>
                <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
                I'm always exploring new car builds, learning about engine performance, and following the latest trends in car culture. Whether it's classic muscle, JDM legends, or modern supercars, I find beauty in every machine built with passion.

                </p>
              </div>
              <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                 
                <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                  {stats.map((stat) => (
                    <div key={stat.name} className="flex flex-col-reverse gap-1">
                      <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                      <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div> 
      <div className="max-w-3xl mx-auto text-center"> 
        <div className="flex justify-center mb-6 mt-3">
          <Image
            src="/me.png"  
            alt="Me "
            width={400}
            height={300}
            className="rounded-xl shadow-md"
          />
        </div>
        <p className="text-lg text-gray-700">
          Hey! I'm a car enthusiast who lives and breathes everything automotive. 
          Whether it's tuning engines, exploring car designs, or just cruising around — 
          cars are more than just machines to me, they're a way of life.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          My dream is to one day own a custom-built garage and turn my passion into something bigger. 
          Until then, I'm learning, exploring, and pushing the limits of what I can do around cars.
        </p>
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
    </div> 
  );
}
