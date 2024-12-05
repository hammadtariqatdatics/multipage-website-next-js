import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white text-black p-6 shadow-lg rounded-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-extrabold">ECart</div>
        <div className="flex space-x-8">
          <Link
            href="/"
            className="hover:underline transition duration-300 transform hover:scale-105"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:underline transition duration-300 transform hover:scale-105"
          >
            About
          </Link>
          <Link
            href="/products"
            className="hover:underline transition duration-300 transform hover:scale-105"
          >
            Products
          </Link>
          <Link
            href="/addProduct"
            className="hover:underline transition duration-300 transform hover:scale-105"
          >
            Add Products
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
