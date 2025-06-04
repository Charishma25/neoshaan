import React, { useState } from 'react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const dummyProducts = [
    {
      id: 1,
      title: 'Fresh Apples',
      price: '₹120/kg',
      img: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce',
      category: 'Fruits',
    },
    {
      id: 2,
      title: 'Almonds (Badam)',
      price: '₹850/kg',
      img: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2',
      category: 'Dry Fruits',
    },
    {
      id: 3,
      title: 'Basmati Rice',
      price: '₹90/kg',
      img: 'https://images.unsplash.com/photo-1586201375761-83865001e17b',
      category: 'Grains',
    },
    {
      id: 4,
      title: 'Sweets Box',
      price: '₹500/box',
      img: 'https://images.unsplash.com/photo-1604908177520-6c2984f482f7',
      category: 'Sweets',
    },
    {
      id: 5,
      title: 'Fresh Vegetables',
      price: '₹40/kg',
      img: 'https://images.unsplash.com/photo-1506801310323-534be5e7bb62',
      category: 'Vegetables',
    },
    {
      id: 6,
      title: 'Smartphone',
      price: '₹12000',
      img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
      category: 'Electronics',
    },
  ];

  const filteredProducts =
    selectedCategory === 'All'
      ? dummyProducts
      : dummyProducts.filter((p) => p.category === selectedCategory);

  return (
    <main className="px-4 max-w-7xl mx-auto">
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-12 rounded-2xl mt-6">
        <h1 className="text-4xl font-bold mb-4">Welcome to NeoKart+</h1>
        <p className="text-lg mb-6">
          Shop fresh groceries, dry fruits, grains, sweets, vegetables, and
          electronics at your doorstep.
        </p>
        <button className="bg-white text-indigo-600 px-6 py-3 font-semibold rounded-full hover:bg-gray-100">
          Start Shopping
        </button>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">🆕 New Arrivals</h2>

        <div className="mb-4 flex gap-2 flex-wrap">
          {['All', 'Fruits', 'Dry Fruits', 'Grains', 'Sweets', 'Vegetables', 'Electronics'].map(
            (category) => (
              <button
                key={category}
                className={`px-4 py-1 rounded-full border ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-white'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            )
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-xl p-4 hover:shadow-lg dark:bg-gray-800 relative"
            >
              <button className="absolute top-3 right-3 text-xl">🤍</button>
              <img
                src={product.img + '?auto=format&fit=crop&w=400&q=80'}
                alt={product.title}
                className="rounded-xl mb-2 h-48 w-full object-cover"
              />
              <h3 className="text-lg font-medium">{product.title}</h3>
              <p className="text-indigo-600 font-bold">{product.price}</p>
              <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
