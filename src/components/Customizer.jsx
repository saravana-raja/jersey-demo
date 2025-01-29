import { useState } from "react";

export default function Customizer() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [style, setStyle] = useState("");

  // Format the message to send via WhatsApp
  const getWhatsAppMessage = () => {
    return `I'm%20interested%20in%20ordering%20a%20jersey%20with%20the%20following%20details%3A%0A%0AName%3A%20${name}%0A%0AJersey%20Number%3A%20${number}%0A%0AStyle%3A%20${style}`;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-start">

          {/* Left Side: Customization Form */}
          <div className="w-full md:w-1/2 px-4 mb-12 md:mb-0">
            <h2 className="text-4xl font-bold mb-6 text-[#3f51b5]">Customize Your Jersey</h2>
            <p className="text-gray-600 mb-8">
              Customize your jersey by adding your name, number, and style. Once you're done, you can contact us via WhatsApp to complete your order.
            </p>
            <div className="space-y-6">
              <div>
                <label className="block text-[#3f51b5] text-sm font-bold mb-2">
                  Name on Jersey (Optional)
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#3f51b5]"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-[#3f51b5] text-sm font-bold mb-2">
                  Jersey Number (Optional)
                </label>
                <input
                  type="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#3f51b5]"
                  placeholder="Choose your number"
                />
              </div>
              <div>
                <label className="block text-[#3f51b5] text-sm font-bold mb-2">
                  Style Name (Optional)
                </label>
                <input
                  type="text"
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#3f51b5]"
                  placeholder="Enter jersey style"
                />
              </div>
              <p className="text-gray-600 text-sm">
                Note: You can select your jersey from the catalog along with your preferred size.
              </p>
            </div>
          </div>

          {/* Right Side: Contact Information */}
          <div className="w-full md:w-1/2 px-4">
            <h3 className="text-2xl font-semibold mb-4 text-[#3f51b5]">How to Order</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <p className="text-gray-700">
                  <strong>Step 1:</strong> Browse our catalog and choose the jersey you'd like, along with your preferred size.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-gray-700">
                  <strong>Step 2:</strong> Customize your jersey by entering your name, number, and style (if you'd like).
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-gray-700">
                  <strong>Step 3:</strong> Contact us via WhatsApp to place your order. We'll confirm your selection and size.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-gray-700">
                  <strong>Step 4:</strong> Our team will handle your order, and you'll receive updates through WhatsApp.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <a
                href={`https://wa.me/919787518289?text=${getWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#ffc107] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#ff9800] transition duration-300"
              >
                Contact Us on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
