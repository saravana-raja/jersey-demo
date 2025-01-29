import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
      <div className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1649771543037-916e2702008a?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        }}>
        <span className="w-full h-full absolute opacity-50 bg-black"></span>
      </div>

      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >

              <p className="mt-4 text-lg text-gray-300">
                Customize your favorite team's jersey with your name and number.
                Premium quality jerseys from IPL, Team India, and football teams.
              </p>
              <button className="mt-8 bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300">
                Start Customizing
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}