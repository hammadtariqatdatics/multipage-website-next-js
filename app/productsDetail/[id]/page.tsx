"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ProductsDetail = () => {
  const router = useParams();
  const { id } = router;
  const [product, setProduct] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        try {
          const response = await fetch(`https://dummyjson.com/products/${id}`);
          if (!response.ok) {
            throw new Error("Failed to fetch product details");
          }
          const data = await response.json();
          setProduct(data);
        } catch (error) {
          setErrorMessage(error.message);
        }
      }
    };
    fetchProduct();
  }, [id]);

  if (errorMessage) {
    return <p className="text-red-500">{errorMessage}</p>;
  }

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex justify-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-96 object-cover rounded"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-extrabold mb-4">{product.title}</h1>
        <p className="text-lg mb-4">{product.description}</p>
        <p className="text-xl font-bold mb-4">Price: ${product.price}</p>
      </div>
    </div>
  );
};

export default ProductsDetail;
