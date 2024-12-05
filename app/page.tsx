import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col text-white">
      <main className="flex-grow flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl font-extrabold mb-4">Welcome to Our ECart</h1>
        <p className="text-lg mb-8">
          Explore our products and learn more about us.
        </p>
        <Link
          href="/products"
          className="bg-gray-700 text-white font-semibold py-2 px-4 rounded shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Get Started
        </Link>
      </main>
    </div>
  );
}
