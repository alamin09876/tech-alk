"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import imageOne from "../../../../public/assest/backgrounds/imageOver.svg";
import imageTwo from "../../../../public/assest/backgrounds/imageOver2.svg";
import imageThree from "../../../../public/assest/backgrounds/imageOver3.svg";
import image from "../../../../public/assest/backgrounds/second.avif";

const ImageAndText = () => {
  return (
    <div className="relative container mx-auto grid sm:grid-cols-2 gap-8 mt-10 px-6 lg:px-0">
      {/* Left Section - Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h3 className="text-base text-blue-600 font-semibold tracking-wide">
          POWERING THE FUTURE OF FINANCE
        </h3>
        <h2 className="text-4xl lg:text-6xl font-bold mt-2 leading-tight">
          Uncovering new ways to delight customers
        </h2>
        <p className="text-lg text-gray-700 mt-4">
          AnyTech is revolutionizing financial technology by introducing
          innovative and real-time transaction account processing capabilities,
          specifically designed for retail financial services.
        </p>
        <p className="text-lg text-gray-700 mt-2">
          Our modern approach surpasses traditional banking and card processing
          systems, empowering you with the most advanced technology for lasting
          success.
        </p>
      </motion.div>

      {/* Right Section - Animated Image Stack */}
      <motion.div
        className="relative h-[500px] mx-10 overflow-hidden group"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Background wave animation */}
        <motion.div
          className="absolute inset-0 bg-[url('/assest/backgrounds/ctaMobileWaveLines.svg')] bg-cover"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        ></motion.div>

        {/* Main Image */}
        <motion.div className="relative z-10 flex justify-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src={image}
              alt="Finance Future"
              className="h-[450px] w-[350px] mx-auto mt-10"
              width={1000}
              height={1000}
              priority
            />
          </motion.div>

          {/* Floating Icons */}
          <motion.div
            className="absolute top-20 left-20 w-14"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <Image
              src={imageOne}
              alt="Floating Icon"
              width={1000}
              height={1000}
              priority
            />
          </motion.div>

          <motion.div
            className="absolute top-48 left-40 transform -translate-x-1/2 w-16"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          >
            <Image
              src={imageTwo}
              alt="Floating Icon"
              width={1000}
              height={1000}
              priority
            />
          </motion.div>

          <motion.div
            className="absolute top-20 right-16 w-20"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <Image
              src={imageThree}
              alt="Floating Icon"
              width={1000}
              height={1000}
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ImageAndText;
