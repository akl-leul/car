'use client';

import { useState } from 'react';
import { Gauge, Package , Settings, Car, Search  } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Rolls-Royce Phantom',
    href: '#',
    price: '$460,000',
    imageSrc: './rolls royce.webp',
    imageAlt: 'Rolls-Royce Phantom luxury sedan in a silver finish, front angle view.',
    description: 'A true symbol of luxury with hand-crafted interiors and a V12 engine.',
    specs: {
      engineType: 'V12',
      engineLiter: '6.75L',
      horsepower: '563 hp',
      transmission: '8-speed automatic',
      drivetrain: 'RWD',
    },
  },
  {
    id: 2,
    name: 'Bentley Continental GT',
    href: '#',
    price: '$240,000',
    imageSrc: './bently.webp',
    imageAlt: 'Bentley Continental GT coupe in deep blue, side profile.',
    description: 'Performance and style in one package with a W12 engine.',
    specs: {
      engineType: 'W12',
      engineLiter: '6.0L',
      horsepower: '626 hp',
      transmission: '8-speed dual-clutch automatic',
      drivetrain: 'AWD',
    },
  },
  {
    id: 3,
    name: 'Mercedes-Maybach S680',
    href: '#',
    price: '$230,000',
    imageSrc: './mercedes maybach.avif',
    imageAlt: 'Mercedes-Maybach S680 luxury sedan in black and silver two-tone.',
    description: 'Executive-class comfort and advanced technology.',
    specs: {
      engineType: 'V12 Biturbo',
      engineLiter: '6.0L',
      horsepower: '621 hp',
      transmission: '9-speed automatic',
      drivetrain: 'AWD',
    },
  },
  {
    id: 4,
    name: 'Lamborghini Aventador SVJ',
    href: '#',
    price: '$517,000',
    imageSrc: './lamborghini_aventador_lamborghini-aventador-svj.avif',
    imageAlt: 'Lamborghini Aventador SVJ in bright green, rear side view.',
    description: 'Extreme aerodynamics and speed with a 770 hp V12.',
    specs: {
      engineType: 'V12',
      engineLiter: '6.5L',
      horsepower: '770 hp',
      transmission: '7-speed automated manual (ISR)',
      drivetrain: 'AWD',
    },
  },
  {
    id: 6,
    name: 'Aston Martin DB11',
    href: '#',
    price: '$205,600',
    imageSrc: 'https://images.dealer.com/ddc/vehicles/2023/Aston%20Martin/DB11/Coupe/color/Aluminite%20Silver-ALS-185,191,203-640-en_US.jpg',
    imageAlt: 'Aston Martin DB11 luxury coupe in silver, front left angle.',
    description: 'Aston Martin DB11 offers both performance and elegance with a V8 or V12 engine.',
    specs: {
      engineType: 'V8 or V12',
      engineLiter: '4.0L V8 / 5.2L V12',
      horsepower: '503 hp (V8) / 630 hp (V12)',
      transmission: '8-speed automatic',
      drivetrain: 'RWD',
    },
  },
  {
    id: 7,
    name: 'Ferrari 488 GTB',
    href: '#',
    price: '$330,000',
    imageSrc: 'https://www.amalgamcollection.com/cdn/shop/files/M5927-REDFerrari488GTB1-18marketingphoto_9_EDIT_grande.jpg?v=1723119738',
    imageAlt: 'Ferrari 488 GTB red sports car with a sleek design.',
    description: 'Ferrari 488 GTB is an exceptional sports car with a turbocharged V8 engine.',
    specs: {
      engineType: 'V8 Twin-Turbo',
      engineLiter: '3.9L',
      horsepower: '661 hp',
      transmission: '7-speed dual-clutch automatic',
      drivetrain: 'RWD',
    },
  },
  {
    id: 8,
    name: 'Porsche 911 Turbo S',
    href: '#',
    price: '$204,000',
    imageSrc: 'https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/porsche_newsroom/Produkte/911/911-Turbo-S-Exclusive-Series/Galerie-911-Turbo-S-Exclusive-Series/b-P17_0546_a4_rgb.jpg/jcr:content/b-P17_0546_a4_rgb.jpg',
    imageAlt: 'Porsche 911 Turbo S sports car in silver with a sleek aerodynamic design.',
    description: 'Porsche 911 Turbo S offers top-tier performance with a 640 hp engine.',
    specs: {
      engineType: 'Flat-6 Twin-Turbo',
      engineLiter: '3.8L',
      horsepower: '640 hp',
      transmission: '8-speed PDK automatic',
      drivetrain: 'AWD',
    },
  },
  {
    id: 9,
    name: 'Maserati Quattroporte Trofeo',
    href: '#',
    price: '$141,000',
    imageSrc: 'https://maserati.scene7.com/is/image/maserati/maserati/international/Models/my22/quattroporte-my22/trofeo/16_9/QP_profilo_2.jpg?$1400x2000$&fit=constrain',
    imageAlt: 'Maserati Quattroporte luxury sedan in white, front angle view.',
    description: 'A blend of power and luxury, with a 580 hp V8 engine in the Trofeo trim.',
    specs: {
      engineType: 'V8 Twin-Turbo',
      engineLiter: '3.8L',
      horsepower: '580 hp',
      transmission: '8-speed automatic',
      drivetrain: 'AWD',
    },
  },
  {
    id: 10,
    name: 'Bugatti Chiron',
    href: '#',
    price: '$3,000,000',
    imageSrc: 'https://cdn.sanity.io/images/vxy259ii/production/5cb386c3d69fedf34d1a328381db32689c22ed5a-1700x913.jpg?auto=format&crop=entropy&fit=crop&h=810&q=80&w=1440',
    imageAlt: 'Bugatti Chiron hypercar in a sleek blue color.',
    description: 'One of the fastest cars in the world with 1,479 hp and a quad-turbocharged W16 engine.',
    specs: {
      engineType: 'W16 Quad-Turbo',
      engineLiter: '8.0L',
      horsepower: '1,479 hp',
      transmission: '7-speed dual-clutch automatic',
      drivetrain: 'AWD',
    },
  },
  {
    id: 11,
    name: 'McLaren 720S',
    href: '#',
    price: '$300,000',
    imageSrc: 'https://car-images.bauersecure.com/wp-images/3250/ms0_720s_spider_050.jpg',
    imageAlt: 'McLaren 720S sports car with butterfly doors open, front side view.',
    description: 'McLaren 720S offers incredible performance with a 710 hp V8 engine.',
    specs: {
      engineType: 'V8 Twin-Turbo',
      engineLiter: '4.0L',
      horsepower: '710 hp',
      transmission: '7-speed dual-clutch automatic',
      drivetrain: 'RWD',
    },
  },
  {
    id: 12,
    name: 'Rolls-Royce Wraith',
    href: '#',
    price: '$343,350',
    imageSrc: 'https://imageio.forbes.com/blogs-images/dougnewcomb/files/2018/02/P90115741_highRes_rolls-royce-wraith.jpg?format=jpg&height=600&width=1200&fit=bounds',
    imageAlt: 'Rolls-Royce Wraith luxury coupe in black, front angle view.',
    description: 'A luxury coupe that embodies refinement with a V12 engine and stunning interiors.',
    specs: {
      engineType: 'V12',
      engineLiter: '6.6L',
      horsepower: '624 hp',
      transmission: '8-speed automatic',
      drivetrain: 'RWD',
    },
  },
  {
    id: 13,
    name: 'Jaguar F-Type SVR',
    href: '#',
    price: '$124,000',
    imageSrc: 'https://roa.h-cdn.co/assets/16/07/3200x1800/hd-aspect-1455663446-jaguar-f-type-svr-40-coupe-studio.jpg',
    imageAlt: 'Jaguar F-Type SVR coupe with an aggressive design in silver.',
    description: 'Jaguar F-Type SVR offers a thrilling performance with a supercharged V8 engine.',
    specs: {
      engineType: 'V8 Supercharged',
      engineLiter: '5.0L',
      horsepower: '575 hp',
      transmission: '8-speed automatic',
      drivetrain: 'AWD',
    },
  },
  {
    id: 14,
    name: 'Koenigsegg Jesko',
    href: '#',
    price: '$2,800,000',
    imageSrc: 'https://i0.wp.com/asphalt9.info/wp-content/uploads/2024/10/Asphalt-Legends-Unite-Koenigsegg-Jesko.jpg?fit=1928%2C1080&ssl=1',
    imageAlt: 'Koenigsegg Jesko hypercar with sharp aerodynamic features.',
    description: 'The Koenigsegg Jesko is a track-focused hypercar with a 1,600 hp engine.',
    specs: {
      engineType: 'V8 Twin-Turbo',
      engineLiter: '5.0L',
      horsepower: '1,600 hp',
      transmission: '9-speed automatic',
      drivetrain: 'RWD',
    },
  },
  {
    id: 15,
    name: 'Bentley Mulsanne',
    href: '#',
    price: '$330,800',
    imageSrc: 'https://imgcdn.zigwheels.ph/large/gallery/color/37/744/bentley-mulsanne-color-670548.jpg',
    imageAlt: 'Bentley Mulsanne luxury sedan in blue, side profile.',
    description: 'Bentley Mulsanne is a statement of luxury with a V8 engine and unmatched comfort.',
    specs: {
      engineType: 'V8 Twin-Turbo',
      engineLiter: '6.75L',
      horsepower: '505 hp',
      transmission: '8-speed automatic',
      drivetrain: 'RWD',
    },
  },{
  id: 16,
  name: 'Lamborghini Urus Performante',
  href: '#',
  price: '$260,000',
  imageSrc: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Lamborghini/Urus/10635/1724844423793/front-left-side-47.jpg',
  imageAlt: 'Lamborghini Urus Performante in matte black, front three-quarter view.',
  description: 'The Lamborghini Urus Performante is a high-performance luxury SUV that combines the practicality of an SUV with the soul of a super sports car. It features a powerful twin-turbo V8 engine and advanced driving dynamics.',
  specs: {
    engineType: 'V8 Twin-Turbo',
    engineLiter: '4.0L',
    horsepower: '657 hp',
    transmission: '8-speed automatic',
    drivetrain: 'AWD',
  },
},
{
  id: 17,
  name: 'Dodge Challenger SRT Hellcat Redeye',
  href: '#',
  price: '$86,000',
  imageSrc: 'https://vehicle-images.dealerinspire.com/4f99-110010562/thumbnails/large/2C3CDZL92PH102085/4c96c36c91e555313cbe410bf8c5ee9e.jpg',
  imageAlt: 'Dodge Challenger SRT Hellcat Redeye in red, front view on a racetrack.',
  description: 'The Dodge Challenger SRT Hellcat Redeye is a muscle car that boasts immense power and aggressive styling. Equipped with a supercharged V8 engine, it delivers exhilarating performance and a thrilling driving experience.',
  specs: {
    engineType: 'Supercharged V8',
    engineLiter: '6.2L',
    horsepower: '797 hp',
    transmission: '8-speed automatic',
    drivetrain: 'RWD',
  },
},
];


export default function ModelList() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const filteredResults = products.filter((product) =>
    (
      product.name +
      product.description +
      product.specs.engineType +
      product.specs.horsepower +
      product.specs.drivetrain
    ).toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    
    <div className="bg-white mt-3">
     

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="font-bold text-3xl mb-6">Luxury Cars </h2>
        <div className="relative max-w-2xl mx-auto mb-5">
  <div className="flex items-center border border-gray-300 rounded-full bg-white shadow-sm focus-within:ring-2 focus-within:ring-gray-500 transition-all">
    <span className="pl-4 text-gray-500">
      <Search className="w-5 h-5" />
    </span>
    <input
      type="text"
      placeholder="Search for cars, models, brands..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full px-4 py-2 rounded-full focus:outline-none text-gray-800 placeholder-gray-400"
    />
  </div>

  {searchTerm && filteredResults.length > 0 && (
    <div className="absolute z-20 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
      {filteredResults.map((product) => (
      
        <div
          key={product.id}
          onClick={() => {
            setSelectedCar(product);
            setSearchTerm('');
          }}
          className="px-4 py-3 hover:bg-blue-50 cursor-pointer transition"
        >
          <div className="font-semibold text-gray-800"> <Car className="w-4 h-4" />{product.name}</div>
          <div className="text-sm text-gray-500">{product.price}</div>
        </div>
      ))}
    </div>
  )}

  {searchTerm && filteredResults.length === 0 && (
    <div className="absolute z-20 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg p-4 text-gray-500">
      No cars found matching your search.
    </div>
  )}
</div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => setSelectedCar(product)}
              className="group  cursor-pointer rounded-lg shadow-2xl text-left"
            >
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 ml-1 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 ml-1 text-lg font-medium text-gray-900">{product.price}</p>
            </button>
          ))}
        </div>

        {/* Modal */}
        {selectedCar && (
          <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs">
            <div className="bg-[#eee] p-6 rounded-lg shadow-xl max-w-md w-full relative">
              <button
                onClick={() => setSelectedCar(null)}
                className="absolute   top-2 right-2 text-gray-400 hover:text-gray-600 text-xl cursor-pointer"
              >
                ×
              </button>
              <img
                src={selectedCar.imageSrc}
                alt={selectedCar.imageAlt}
                className="w-full h-48 object-cover rounded mb-4 shadow-2xl"
              />
              <h2 className="text-2xl font-semibold">{selectedCar.name}</h2>
              <p className="text-gray-600 mt-2">{selectedCar.description}</p>
              <p className="text-xl font-bold mt-4">{selectedCar.price}</p>

              <div className="mt-4 space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <Package  className="w-4 h-4 text-gray-500" />
                  <span><strong>Engine:</strong> {selectedCar.specs.engineType} ({selectedCar.specs.engineLiter})</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-gray-500" />
                  <span><strong>Horsepower:</strong> {selectedCar.specs.horsepower}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Settings className="w-4 h-4 text-gray-500" />
                  <span><strong>Transmission:</strong> {selectedCar.specs.transmission}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-gray-500" />
                  <span><strong>Drivetrain:</strong> {selectedCar.specs.drivetrain}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
