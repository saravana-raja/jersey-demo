import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaPhoneAlt } from "react-icons/fa"; // Importing phone icon

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const scrollToFooter = (e) => {
    e.preventDefault(); // Prevent navigation
    document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-[#ffc107] shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            {/* Wrap Champion Jerseys with a Link to make it clickable */}
            <Link to="/" className="text-2xl font-bold text-primary">
              Champion Jerseys
            </Link>
          </div>

          {/* Navbar Links (Aligned Right) */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            <a href="/" onClick={scrollToTop} className="text-gray-700 hover:text-primary">
              Home
            </a>
            <Link to="/catalog" onClick={scrollToTop} className="text-gray-700 hover:text-primary">
              Catalog
            </Link>
            <a href="#footer" onClick={scrollToFooter} className="text-gray-700 hover:text-primary">
              About Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Toggle */}
            <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
              <FaBars className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Toggle State: isOpen) */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" onClick={scrollToTop} className="block px-3 py-2 text-gray-700 hover:text-primary">
              Home
            </a>
            <Link to="/catalog" onClick={scrollToTop} className="block px-3 py-2 text-gray-700 hover:text-primary">
              Catalog
            </Link>
            <a href="#footer" onClick={scrollToFooter} className="block px-3 py-2 text-gray-700 hover:text-primary">
              About Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
