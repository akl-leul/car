'use client';

import React, { useState, useEffect } from 'react'; 
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert'; 

import { Gauge, Package, Settings, Car, Search, Filter, ChevronDown, ChevronUp, RefreshCw, Zap, Clock, Award } from 'lucide-react';


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
{
  id: 18,
  name: 'Rolls-Royce Spectre',
  href: '#',
  price: '$450,000',
  imageSrc: 'https://cdn.motor1.com/images/mgl/1ZE36K/s3/rolls-royce-spectre-black-badge-2025.webp',
  imageAlt: 'Rolls-Royce Spectre electric grand tourer in silver, side profile.',
  description: 'The first all-electric Rolls-Royce offering seamless luxury and silent power.',
  specs: {
    engineType: 'Dual Electric Motor',
    engineLiter: 'N/A',
    horsepower: '584 hp',
    transmission: 'Single-speed',
    drivetrain: 'AWD',
  },
},
{
  id: 19,
  name: 'Ferrari 296 GTB Speciale',
  href: '#',
  price: '$420,000',
  imageSrc: 'https://daily-motor.ru/wp-content/uploads/2024/11/ferrari299speciale-1731672024-1-1536x865.jpg',
  imageAlt: 'Ferrari 296 GTB Speciale camouflaged prototype on track.',
  description: 'Lightweight and track-focused version of Ferrari’s hybrid V6 supercar.',
  specs: {
    engineType: 'V6 Plug-in Hybrid',
    engineLiter: '3.0L + eMotor',
    horsepower: '700 hp',
    transmission: '8-speed dual-clutch',
    drivetrain: 'RWD',
  },
},
{
  id: 20,
  name: 'Aston Martin Vanquish',
  href: '#',
  price: '$320,000',
  imageSrc: 'https://daily-motor.ru/wp-content/uploads/2023/06/aston-martin-vanquish-vision-render-by-autocar-2022.jpg',
  imageAlt: 'Aston Martin Vanquish concept render with bold lines.',
  description: 'A reborn icon, the Vanquish combines stunning design and V12 power.',
  specs: {
    engineType: 'V12 Twin-Turbo',
    engineLiter: '5.2L',
    horsepower: '823 hp',
    transmission: '8-speed automatic',
    drivetrain: 'RWD',
  },
},
{
  id: 21,
  name: 'Ducati Panigale V4 R',
  href: '#',
  price: '$45,000',
  imageSrc: 'https://i.pinimg.com/736x/a3/2f/cc/a32fcc3f3de4886f571883464ba187c4.jpg',
  imageAlt: 'Ducati Panigale V4 R superbike leaning on a racetrack.',
  description: 'Track-ready superbike with MotoGP-inspired performance and electronics.',
  specs: {
    engineType: 'V4',
    engineLiter: '998cc',
    horsepower: '230+ hp',
    transmission: '6-speed manual',
    drivetrain: 'Chain drive',
  },
},
{
  id: 22,
  name: 'Harley-Davidson LiveWire One',
  href: '#',
  price: '$22,800',
  imageSrc: 'https://i.pinimg.com/736x/52/22/83/522283e4db1cdf611dfefde669956192.jpg',
  imageAlt: 'Harley-Davidson LiveWire One electric motorcycle in orange.',
  description: 'A powerful electric cruiser with instant torque and aggressive styling.',
  specs: {
    engineType: 'Electric Motor',
    engineLiter: 'N/A',
    horsepower: '105 hp',
    transmission: 'Single-speed',
    drivetrain: 'Belt drive',
  },
},
{
  id: 23,
  name: 'BMW M 1000 RR',
  href: '#',
  price: '$36,995',
  imageSrc: 'https://i.pinimg.com/736x/2c/04/81/2c04811683d6f864b5cf43c04a5a5c97.jpg',
  imageAlt: 'BMW M 1000 RR superbike on track with aerodynamic winglets.',
  description: 'BMW’s ultimate superbike built for speed, precision, and performance.',
  specs: {
    engineType: 'Inline-4',
    engineLiter: '999cc',
    horsepower: '212 hp',
    transmission: '6-speed manual',
    drivetrain: 'Chain drive',
  },
},
{
  id: 24,
  name: 'Kawasaki Ninja H2 SX SE+',
  href: '#',
  price: '$28,000',
  imageSrc: 'https://i.pinimg.com/736x/10/73/b7/1073b7e4b34a68de40d8de9348ee085c.jpg',
  imageAlt: 'Kawasaki Ninja H2 SX SE+ sport touring motorcycle in green.',
  description: 'Supercharged touring with luxury, technology, and insane speed.',
  specs: {
    engineType: 'Inline-4 Supercharged',
    engineLiter: '998cc',
    horsepower: '200+ hp',
    transmission: '6-speed manual',
    drivetrain: 'Chain drive',
  },
},
];

export default function ModelList() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [quickViewCar, setQuickViewCar] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  
  const [filters, setFilters] = useState({
    priceRange: [0, 5000000],
    engineTypes: [],
    drivetrain: [],
    sortBy: 'default'
  });
  
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const carId = urlParams.get('carId');
    if (carId) {
      const car = products.find(p => p.id === Number(carId));
      if (car) setSelectedCar(car);
    }
  }, []);
  const handleShareClick = () => {
    const url = new URL(window.location);
    url.searchParams.set('carId', selectedCar.id);
    window.history.replaceState({}, '', url);
    navigator.clipboard.writeText(url.toString());
    setSnackbarOpen(true);
  };
const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  setSnackbarOpen(false);
};
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
  
  // Apply filters and search
  const filteredProducts = products.filter((product) => {
    // Search filter
    const searchMatch = (
      product.name +
      product.description +
      product.specs.engineType +
      product.specs.horsepower +
      product.specs.drivetrain
    ).toLowerCase().includes(searchTerm.toLowerCase());
    
    // Price filter
    const priceMatch = parseInt(product.price.replace(/[^0-9]/g, '')) >= filters.priceRange[0] && 
                      parseInt(product.price.replace(/[^0-9]/g, '')) <= filters.priceRange[1];
    
    // Engine type filter
    const engineMatch = filters.engineTypes.length === 0 || 
                       filters.engineTypes.some(type => product.specs.engineType.toLowerCase().includes(type.toLowerCase()));
    
    // Drivetrain filter
    const drivetrainMatch = filters.drivetrain.length === 0 || 
                           filters.drivetrain.includes(product.specs.drivetrain);
    
    return searchMatch && priceMatch && engineMatch && drivetrainMatch;
  });
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(filters.sortBy) {
      case 'price-low':
        return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
      case 'price-high':
        return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''));
      case 'horsepower':
        return parseInt(b.specs.horsepower) - parseInt(a.specs.horsepower);
      default:
        return 0;
    }
  });
  
  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  
  // Get badge for product
  const getBadge = (product) => {
    if (product.specs.engineType.toLowerCase().includes('electric')) return { text: 'Electric', icon: <Zap className="w-3 h-3" />, color: 'bg-green-100 text-green-800' };
    if (product.id > 17) return { text: 'New', icon: null, color: 'bg-blue-100 text-blue-800' };
    if (product.price.replace(/[^0-9]/g, '') > 1000000) return { text: 'Premium', icon: <Award className="w-3 h-3" />, color: 'bg-purple-100 text-purple-800' };
    if (product.id === 3 || product.id === 8 || product.id === 13) return { text: 'Best Value', icon: null, color: 'bg-yellow-100 text-yellow-800' };
    return null;
  };
  
  return (
    <div className="bg-white mt-3">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="font-bold text-3xl mb-6">Luxury Cars</h2>
        
        {/* Search and filter section */}
        <div className="mb-8">
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
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="pr-4 text-gray-500 hover:text-gray-700"
              >
                <Filter className="w-5 h-5" />
              </button>
            </div>
            
            {searchTerm && filteredProducts.length > 0 && (
              <div className="absolute z-20 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                {filteredProducts.slice(0, 5).map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      setSelectedCar(product);
                      setSearchTerm('');
                    }}
                    className="px-4 py-3 hover:bg-blue-50 cursor-pointer transition"
                  >
                    <div className="font-semibold text-gray-800"><Car className="w-4 h-4 inline mr-2" />{product.name}</div>
                    <div className="text-sm text-gray-500">{product.price}</div>
                  </div>
                ))}
              </div>
            )}

            {searchTerm && filteredProducts.length === 0 && (
              <div className="absolute z-20 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg p-4 text-gray-500">
                No cars found matching your search.
              </div>
            )}
          </div>
          
          {/* Filter panel */}
          {showFilters && (
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-6 transition-all">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                  <select 
                    className="w-full p-2 border border-gray-300 rounded-md"
                    onChange={(e) => {
                      const [min, max] = e.target.value.split('-').map(Number);
                      setFilters({...filters, priceRange: [min, max]});
                    }}
                  >
                    <option value="0-5000000">All Prices</option>
                    <option value="0-100000">Under $100,000</option>
                    <option value="100000-300000">$100,000 - $300,000</option>
                    <option value="300000-1000000">$300,000 - $1,000,000</option>
                    <option value="1000000-5000000">$1,000,000+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Engine Type</label>
                  <select 
                    className="w-full p-2 border border-gray-300 rounded-md"
                    onChange={(e) => {
                      const value = e.target.value;
                      setFilters({...filters, engineTypes: value ? [value] : []});
                    }}
                  >
                    <option value="">All Types</option>
                    <option value="V8">V8</option>
                    <option value="V12">V12</option>
                    <option value="Electric">Electric</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Turbo">Turbo</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
                  <select 
                    className="w-full p-2 border border-gray-300 rounded-md"
                    onChange={(e) => setFilters({...filters, sortBy: e.target.value})}
                  >
                    <option value="default">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="horsepower">Horsepower</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Product grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {currentItems.map((product) => {
            const badge = getBadge(product);
            return (
              <div
                key={product.id}
                className="group cursor-pointer rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-left relative overflow-hidden"
              >
                {/* Badge */}
                {badge && (
                  <span className={`absolute top-2 right-2 z-10 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badge.color}`}>
                    {badge.icon && <span className="mr-1">{badge.icon}</span>}
                    {badge.text}
                  </span>
                )}
                
                {/* Image with hover zoom effect */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="aspect-square w-full rounded-t-lg bg-gray-200 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Quick view button */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setQuickViewCar(product);
                      }}
                      className="bg-white text-gray-800 px-4 py-2 rounded-md font-medium text-sm hover:bg-gray-100 transition-colors"
                    >
                      Quick View
                    </button>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-sm text-gray-700 font-medium">{product.name}</h3>
                  <p className="mt-1 text-lg font-bold text-gray-900">{product.price}</p>
                  <div className="mt-2 flex items-center text-xs text-gray-500">
                    <Gauge className="w-3 h-3 mr-1" />
                    <span>{product.specs.horsepower}</span>
                    <span className="mx-2">•</span>
                    <Car className="w-3 h-3 mr-1" />
                    <span>{product.specs.drivetrain}</span>
                  </div>
                  <button 
                    onClick={() => setSelectedCar(product)}
                    className="mt-3 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors text-sm"
                  >
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-10">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="px-3 py-1 rounded-md bg-gray-100 text-gray-800 disabled:opacity-50"
            >
              Previous
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded-md ${
                  currentPage === page ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="px-3 py-1 rounded-md bg-gray-100 text-gray-800 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
        
        {/* Quick View Modal */}
        {quickViewCar && (
          <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-30" onClick={() => setQuickViewCar(null)}>
            <div className="bg-white p-4 rounded-lg shadow-xl max-w-md w-full relative" onClick={e => e.stopPropagation()}>
              <button
                onClick={() => setQuickViewCar(null)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl cursor-pointer"
              >
                ×
              </button>
              <div className="flex space-x-4">
                <img
                  src={quickViewCar.imageSrc}
                  alt={quickViewCar.imageAlt}
                  className="w-40 h-40 object-cover rounded"
                />
                <div>
                  <h2 className="text-xl font-semibold">{quickViewCar.name}</h2>
                  <p className="text-lg font-bold mt-1">{quickViewCar.price}</p>
                  <div className="mt-2 space-y-1 text-sm">
                    <div className="flex items-center">
                      <Gauge className="w-4 h-4 text-gray-500 mr-1" />
                      <span>{quickViewCar.specs.horsepower}</span>
                    </div>
                    <div className="flex items-center">
                      <Package className="w-4 h-4 text-gray-500 mr-1" />
                      <span>{quickViewCar.specs.engineType}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      setSelectedCar(quickViewCar);
                      setQuickViewCar(null);
                    }}
                    className="mt-3 bg-gray-800 text-white px-4 py-2 rounded text-sm hover:bg-gray-700"
                  >
                    View Full Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Full Details Modal */}
        {selectedCar && (
          <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-30">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full relative">
              <button
                onClick={() => setSelectedCar(null)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl cursor-pointer"
              >
                ×
              </button>
              <img
                src={selectedCar.imageSrc}
                alt={selectedCar.imageAlt}
                className="w-full h-48 object-cover rounded mb-4 shadow-md"
              />
              <h2 className="text-2xl font-semibold">{selectedCar.name}</h2>
              <p className="text-gray-600 mt-2">{selectedCar.description}</p>
              <p className="text-xl font-bold mt-4">{selectedCar.price}</p>

              <div className="mt-4 space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-gray-500" />
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
                <button
onClick={handleShareClick}
className="mt-4 flex items-center justify-center w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
>
Share this car
</button>
        
    <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Link copied to clipboard!
          </Alert>
        </Snackbar>

              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
