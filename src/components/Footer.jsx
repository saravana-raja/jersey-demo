import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"; // Importing relevant icons

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#3f51b5] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4 text-white">Champion Jerseys</h3>
            <p className="text-gray-300">
              Customized sports jerseys for the true fans.
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#footer" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Size Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Returns</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <FaEnvelope className="mr-2" /> {/* Email Icon */}
                support@championjerseys.com
              </li>
              <li className="flex items-center text-gray-300">
                <FaPhoneAlt className="mr-2" /> {/* Phone Icon */}
                +91 9940668221
              </li>
              <li className="flex items-center text-gray-300">
                <FaMapMarkerAlt className="mr-2 text-3xl" /> {/* Address Icon */}
                Champion Jerseys, 123, 2nd Floor, Greams Road, Thousand Lights, Chennai - 600006, Tamil Nadu
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
            <div className="flex space-x-4 justify-start">
              <a href="#" className="text-gray-300 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Champion Jerseys. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
