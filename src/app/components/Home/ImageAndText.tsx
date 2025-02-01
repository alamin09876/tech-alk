"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import imageOne from "../../../../public/assest/backgrounds/imageOver.svg";
import imageTwo from "../../../../public/assest/backgrounds/imageOver2.svg";
import imageThree from "../../../../public/assest/backgrounds/imageOver3.svg";
import image from "../../../../public/assest/backgrounds/second.avif";

const ImageAndText = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    const x = (clientX - left - width / 2) / 10;
    const y = (clientY - top - height / 2) / 10;

    setMousePos({ x, y });
  };

  return (
    <div className="relative container mx-auto grid sm:grid-cols-2 gap-8 mt-10 px-6 lg:px-0">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h3
          className="text-base font-semibold tracking-wide"
          style={{ color: "rgb(31, 128, 240)" }}
        >
          POWERING THE FUTURE OF FINANCE
        </h3>
        <h2 className="text-4xl lg:text-6xl font-bold mt-2 leading-tight text-[rgb(11,48,91)]">
          Uncovering new ways to delight customers
        </h2>
        <p className="text-lg text-[rgb(22,67,119)] font-medium mt-4">
          AnyTech is revolutionizing financial technology by introducing
          innovative and real-time transaction account processing capabilities,
          specifically designed for retail financial services.
        </p>
        <p className="text-base text-[rgb(22,67,119)] font-extralight mt-2">
          Our modern approach surpasses traditional banking and card processing
          systems, empowering you with the most advanced technology for lasting
          success.
        </p>
      </motion.div>

      <motion.div
        className="relative h-[500px] mx-10 overflow-hidden group"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className="absolute inset-0 bg-[url('/assest/backgrounds/ctaMobileWaveLines.svg')] bg-cover"
          animate={{
            x: mousePos.x,
            y: mousePos.y,
          }}
          transition={{ type: "tween", stiffness: 50 }}
        ></motion.div>

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

          <motion.div
            className="absolute lg:top-20 top-20 lg:left-20 left-0 w-14"
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
            className="absolute lg:top-48 top-48 lg:left-40 left-12 transform -translate-x-1/2 w-16"
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
            className="absolute lg:top-20 top-20 lg:right-16 -right-4 w-20"
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
