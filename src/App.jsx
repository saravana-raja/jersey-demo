import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Catalog from "./components/Catalog";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedJerseys from "./components/FeaturedJerseys";
import Customizer from "./components/Customizer";
import Footer from "./components/Footer";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon from react-icons

function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedJerseys />
      <Customizer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
        <Footer />

        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/919940668221"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 z-50 flex items-center justify-center p-3 bg-green-500 rounded-full shadow-lg"
        >
          <FaWhatsapp size={30} color="white" />
        </a>
      </div>
    </Router>
  );
}

export default App;
