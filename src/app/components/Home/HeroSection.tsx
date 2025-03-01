"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Wave1 from "../../../../public/assest/backgrounds/WaveLinesDesktop1.svg";
import Wave2 from "../../../../public/assest/backgrounds/WaveLinesDesktop2.svg";
import Wave3 from "../../../../public/assest/backgrounds/WaveLinesDesktop3.svg";
import Wave4 from "../../../../public/assest/backgrounds/WaveLinesDesktop4.svg";
import image from "../../../../public/assest/backgrounds/hero.avif";

const HeroSection = () => {
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLarge(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    setMousePos({ x: e.clientX / 50, y: e.clientY / 50 });
  };

  return (
    <div
      className="relative bg-gradient-to-r from-blue-800 via-blue-500 to-blue-900  overflow-visible w-full py-10"
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 73%, 0% 95%)" }}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="absolute inset-0 w-full h-full opacity-90"
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: "tween", stiffness: 100 }}
      >
        <Image src={Wave1} alt="Wave 1" className="absolute w-full h-full" />
        <Image src={Wave2} alt="Wave 2" className="absolute w-full h-full" />
        <Image src={Wave3} alt="Wave 3" className="absolute w-full h-full" />
        <Image src={Wave4} alt="Wave 4" className="absolute w-full h-full" />
      </motion.div>

      <div className="container mx-auto py-16 grid sm:grid-cols-2 gap-6 items-center relative z-10">
        <motion.div
          className="text-white px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl lg:text-7xl font-bold">
            Embrace the <span className="text-blue-200">future</span> of finance
          </h2>
          <p className="mt-4 text-lg lg:text-xl">
            Reimagine financial services with AnyTech’s open platform,
            distributed banking solution that powers transformation.
          </p>
          <motion.button
            className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-2 py-2 lg:px-4 lg:py-2 lg:w-80 w-full mx-auto rounded font-medium shadow-lg transition-all duration-300 text-sm lg:text-base"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="flex items-center justify-center space-x-2 px-16 lg:px-10"
            >
              <span>Reach Out to Us</span>
              <IoIosArrowForward size={18} />
            </Link>
          </motion.button>
        </motion.div>

        <motion.div
          className="relative w-full"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            clipPath: isLarge
              ? "polygon(69% 0, 100% 0, 100% 96%, 0% 100%)"
              : "polygon(0 17%, 100% 0, 100% 83%, 0% 100%)",
          }}
        >
          <div className="w-full ">
            <Image
              src={image}
              alt="Future of Finance"
              className="w-full h-auto mx-auto"
              layout="responsive"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default HeroSection;
