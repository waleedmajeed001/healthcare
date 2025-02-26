import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section (Left Side) */}
        <Link href="/">
          <Image src="/logo.png" alt="HealthCare Plus Logo" width={150} height={50} />
        </Link>

        {/* Navigation (Centered) */}
        <nav className="flex-1 flex justify-center">
          <ul className="flex space-x-8">
            <li className="transition-transform duration-300 ease-in-out text-primary text-xl font-bold hover:scale-105">
              <Link href="/" className="block">
                Home
              </Link>
            </li>
            <li className="transition-transform duration-300 ease-in-out text-primary text-xl font-bold hover:scale-105">
              <Link href="/services" className="block">
                Services
              </Link>
            </li>
            <li className="transition-transform duration-300 ease-in-out text-primary text-xl font-bold hover:scale-105">
              <Link href="/about" className="block">
                About Us
              </Link>
            </li>
            <li className="transition-transform duration-300 ease-in-out text-primary text-xl font-bold hover:scale-105">
              <Link href="/contact" className="block">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Buttons (Right Side) */}
        <div className="flex space-x-4">
          <Link href="/signup">
            <button className="bg-white text-primary px-4 py-2 font-bold rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              Sign Up
            </button>
          </Link>
          <Link href="/login">
            <button className="bg-white text-primary px-4 py-2 font-bold rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              Login
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
