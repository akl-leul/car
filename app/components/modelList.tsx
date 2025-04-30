'use client';

import { useEffect, useState } from 'react';

export default function ModelList() {
  const [products, setProducts] = useState<any[]>([]); // Declare state for products
  const [loading, setLoading] = useState<boolean>(true); // Loading state to show a loader until data is fetched
  const [error, setError] = useState<string | null>(null); // Error state to handle any fetch errors

  useEffect(() => {
    // Function to fetch product data from the API
    async function fetchProducts() {
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/cars?limit=8', {
          headers: {
            'X-Api-Key': 'L7mlI4WmMsF7RSdGJ0Il3w==aGD8dRAV0TGs2ckD',
          },
        });

        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await res.json();
        setProducts(data); // Set the fetched data into the state
      } catch (err: any) {
        setError('Error fetching products');
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    }

    fetchProducts(); // Call the fetch function
  }, []); // Empty dependency array ensures this runs once when the component is mounted

  if (loading) {
    return <div className="text-center py-12">Loading...</div>; // Show loading text while data is being fetched
  }

  if (error) {
    return <div className="text-center py-12 text-red-500">{error}</div>; // Show error message if any error occurs
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product: any, index: number) => (
            <div key={index} className="group relative">
              <img
                alt={`${product.make} ${product.model}`}
                src="/car-placeholder.jpg" // Use a placeholder image or dynamic image if available
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={`/cars/${product.make}-${product.model}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.make} {product.model}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.class || 'Luxury'}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{`$${product.price || 'N/A'}`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
