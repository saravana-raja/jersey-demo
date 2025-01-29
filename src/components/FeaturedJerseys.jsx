import { motion } from 'framer-motion'

export default function FeaturedJerseys() {
  const jerseys = [
    {
      name: "CSK Home Jersey",
      price: "₹799",
      image: "https://www.chennaisuperkings.com/shop/_next/image?url=https%3A%2F%2Fstore.chennaisuperkings.com%2F%2Fmedia%2Fcatalog%2Fproduct%2F%2Fc%2Fs%2Fcsk_half_sleeve_1.png&w=1920&q=75"
    },
    {
      name: "Mumbai Indians Jersey",
      price: "₹799",
      image: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/C_6_sbEQs-MI-Official-Mens-Custom-Match-jersey-2024.jpeg"
    },
    {
      name: "Indian Cricket Team Jersey",
      price: "₹799",
      image: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/f1e75aca52014a959017e46b94cbca39_9366/INDIA_CRICKET_TRI_COLOR_JERSEY_WITH_2_STARS_MEN_Blue_JC8812_22_model.jpg"
    },
    {
      name: "Manchester United Home Jersey",
      price: "₹799",
      image: "https://mufc-live.cdn.scayle.cloud/images/032465a23bed509d050589e6439809a2.jpg?brightness=1&width=1536&height=2048&quality=75&bg=ffffff"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#3f51b5] mb-16">Featured Jerseys</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {jerseys.map((jersey, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={jersey.image}
                  alt={jersey.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-0 right-0 bg-[#ffc107] text-white px-3 py-1 m-2 rounded-full text-sm">
                  New
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#3f51b5]">{jersey.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-[#3f51b5]">{jersey.price}</span>
                  <button className="bg-[#3f51b5] text-white px-4 py-2 rounded-full hover:bg-[#ffc107] transition duration-300">
                    Customize
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
