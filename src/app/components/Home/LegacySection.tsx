"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Wave1 from "../../../../public/assest/backgrounds/WaveLinesDesktop1.svg";
import Wave2 from "../../../../public/assest/backgrounds/WaveLinesDesktop2.svg";
import Wave3 from "../../../../public/assest/backgrounds/WaveLinesDesktop3.svg";
import Wave4 from "../../../../public/assest/backgrounds/WaveLinesDesktop4.svg";

const LegacySection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    setMousePos({ x: e.clientX / 50, y: e.clientY / 50 });
  };

  return (
    <div
      className="relative bg-gradient-to-r from-blue-600 via-blue-400 to-blue-300 overflow-hidden w-full text-white mt-10"
      style={{ clipPath: "polygon(0 0, 100% 35%, 100% 100%, 0% 100%)" }}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="absolute inset-0 w-full h-full overflow-hidden"
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <Image src={Wave1} alt="Wave 1" className="absolute w-full h-full" />
        <Image src={Wave2} alt="Wave 2" className="absolute w-full h-full" />
        <Image src={Wave3} alt="Wave 3" className="absolute w-full h-full" />
        <Image src={Wave4} alt="Wave 4" className="absolute w-full h-full" />
      </motion.div>

      <div className="container mx-auto py-16 px-6 flex flex-col lg:flex-row items-center relative z-10">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl lg:text-7xl font-bold mt-20 lg:text-start text-center">
            Legacy no longer
          </h2>
          <p className="mt-4 text-lg lg:text-start text-center">
            Talk to us to find out how we can transform your organisation for
            the future.
          </p>
          <motion.button
            className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 lg:w-44 w-full mx-auto rounded-lg font-medium shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="flex items-center justify-center space-x-2"
            >
              <span>Contact Us</span>
              <IoIosArrowForward size={20} />
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default LegacySection;
