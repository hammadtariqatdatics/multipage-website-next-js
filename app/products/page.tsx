"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://dummyjson.com/products?sortBy=title&order=asc"
      );
      const data = await response.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-extrabold mb-4">Our Products</h1>
      <p className="text-lg mb-4">
        At ECart, we offer a diverse range of high-quality products designed to
        meet your needs. Our commitment ensures that you receive only the best.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            className="border border-gray-300 rounded-lg p-4 shadow-lg"
            key={product.id}
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <Link
              href={`/productsDetail/${product.id}`}
              className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700"
            >
              View Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
