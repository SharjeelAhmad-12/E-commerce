import { FiSearch, FiShoppingCart } from "react-icons/fi";
import Button from "./Button";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Shop", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

const Navbar = () => {
  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between fixed w-full z-10">
      <h1 className="text-2xl font-bold">MyStore</h1>
      
      <nav>
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-blue-500">{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="flex items-center space-x-4">
        <form className="relative hidden md:block">
          <input 
            type="search" 
            placeholder="Search..." 
            className="border rounded-full px-4 py-1 focus:outline-none"
          />
          <FiSearch className="absolute right-3 top-2 text-gray-500" />
        </form>
        
        <button className="relative" aria-label="Shopping Cart">
          <FiShoppingCart size={24} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">3</span>
        </button>
        
        <Button text="Login" className="bg-green-500 hover:bg-green-600" />
      </div>
    </header>
  );
};

export default Navbar;