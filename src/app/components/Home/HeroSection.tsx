"use client";
import Image from "next/image";
import { useState } from "react";
import Wave1 from "../../../../public/assest/backgrounds/WaveLinesDesktop1.svg";
import Wave2 from "../../../../public/assest/backgrounds/WaveLinesDesktop2.svg";
import Wave3 from "../../../../public/assest/backgrounds/WaveLinesDesktop3.svg";
import Wave4 from "../../../../public/assest/backgrounds/WaveLinesDesktop4.svg";
import image from "../../../../public/assest/backgrounds/hero.avif";

const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    setMousePos({ x: e.clientX / 50, y: e.clientY / 50 });
  };

  return (
    <div
      className="relative bg-gradient-to-r from-blue-600 via-blue-400 to-blue-100 overflow-hidden w-full"
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 77%, 0% 95%)" }}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 w-full h-full overflow-visible">
        <div
          className="absolute inset-0 w-full h-full opacity-90 transition-transform duration-500"
          style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
        >
          <Image src={Wave1} alt="Wave 1" className="absolute w-full h-full" />
          <Image src={Wave2} alt="Wave 2" className="absolute w-full h-full" />
          <Image src={Wave3} alt="Wave 3" className="absolute w-full h-full" />
          <Image src={Wave4} alt="Wave 4" className="absolute w-full h-full" />
        </div>
      </div>

      <div className="container mx-auto py-16 grid sm:grid-cols-2 gap-6 items-center relative z-10">
        <div className="text-white px-6">
          <h2 className="text-5xl lg:text-7xl font-bold">
            Embrace the <span className="text-blue-200">future</span> of finance
          </h2>
          <p className="mt-4 text-lg lg:text-xl">
            Reimagine financial services with AnyTech’s open platform,
            distributed banking solution that powers transformation.
          </p>
          <button
            type="button"
            className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg"
          >
            Reach Out to Us
          </button>
        </div>

        <div
          className="relative "
          style={{ clipPath: "polygon(69% 0, 100% 0, 100% 89%, 0 100%)" }}
        >
          <Image
            src={image}
            alt="Future of Finance"
            className=" h-[400px] w-[350px] mx-auto"
            layout="responsive"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
