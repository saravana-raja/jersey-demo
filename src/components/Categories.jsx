export default function Categories() {
  const categories = [
    {
      title: "IPL Teams",
      image: "https://www.chennaisuperkings.com/shop/_next/image?url=https%3A%2F%2Fstore.chennaisuperkings.com%2F%2Fmedia%2Fcatalog%2Fproduct%2F%2F1%2F_%2F1_12_8.jpg&w=1920&q=75",
      description: "Customize jerseys from your favorite IPL teams"
    },
    {
      title: "Team India",
      image: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/f1e75aca52014a959017e46b94cbca39_9366/INDIA_CRICKET_TRI_COLOR_JERSEY_WITH_2_STARS_MEN_Blue_JC8812_22_model.jpg",
      description: "Show your support for Team India"
    },
    {
      title: "Football Clubs",
      image: "https://shop.realmadrid.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F7nqb12anqb19%2F4nmogMFXSVuRoxPjUW5Aht%2Fced5af3469f0cf064adacf7b92b90f71%2Fmbappe_-_desktop_-_v2.jpg&w=384&q=75",
      description: "Football club jerseys with your personal touch"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#3f51b5] mb-16">
          Choose Your Category
        </h2>
        <div className="flex flex-wrap">
          {categories.map((category, index) => (
            <div key={index} className="lg:w-1/3 md:w-1/2 w-full px-4 mb-8">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
                <div className="w-full h-64 flex justify-center items-center">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="h-full object-contain"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-200 mb-4">{category.description}</p>
                  <button className="bg-[#ffc107] text-[#3f51b5] px-6 py-2 rounded-full hover:bg-[#3f51b5] hover:text-white transition duration-300">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
