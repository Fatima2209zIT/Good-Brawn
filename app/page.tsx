"use client";

import Navbar from "../app/components/navbar";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import AboutTheTeam from "./components/team";

export default function Home() {

  const productImages = ["product1.jpg", "product2.jpg", "product3.jpg", "product4.jpg"];

  
  const [showProducts, setShowProducts] = useState(false);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowProducts(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }} 
      className="min-h-screen font-[Poppins] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg.jpg')" }} 
    >
      <Navbar />
      
     
      <motion.div 
        style={{ y }} 
        className="absolute inset-0 z-0"
      >
        <Image src="/bg.jpg" alt="Background" layout="fill" objectFit="cover" className="opacity-30" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Image Section with Floating Effect */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 1, type: "spring" }}
          className="w-full md:w-1/2"
        >
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <div className="border-8 border-orange-400 rounded-lg p-4 sm:p-6 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <Image src="/lingerie.jpg" alt="Vintage Shop" width={500} height={500} className="rounded-lg w-full h-auto hover:scale-105 transition-transform duration-300" />
            </div>
          </motion.div>
        </motion.div>

        {/* Text Section */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }} 
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <motion.h2 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-shadow-lg  transition-colors duration-300"
          >
            "Timeless elegance, delicate beauty embrace the charm of vintage lingerie."
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.7 }} 
            className="text-lg sm:text-xl font-bold mt-4 text-gray-200 hover:text-white transition-colors duration-300"
          >
            Open Daily: 9 a.m to 8 p.m
          </motion.p>

          {/* Button with Hover Animation */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.9 }}
            className="mt-6 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 sm:px-8 sm:py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-500 transition-all duration-300"
          >
            50% OFF
          </motion.button>
        </motion.div>
      </div>

      {/* OUR LATEST PRODUCTS Heading */}
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, type: "spring" }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-white my-8 sm:my-12 transition-colors duration-300"
      >
        OUR LATEST PRODUCTS
      </motion.h2>

      {/* Products Section */}
      <div className="m-[50px] relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {productImages.map((img, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={showProducts ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <Image src={`/${img}`} alt={ `${index + 1}`} width={300} height={300} className="rounded-lg w-full h-auto" />
            <p className="text-lg font-semibold text-center mt-2 hover:text-orange-500 transition-colors duration-300">Product {index + 1}</p>
          </motion.div>
        ))}
      </div>

      {/* About The Team Section */}
      <AboutTheTeam />
    </motion.div>
  );
}