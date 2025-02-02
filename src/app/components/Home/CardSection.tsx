"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import imageOne from "../../../../public/assest/backgrounds/card.svg";
import imageThree from "../../../../public/assest/backgrounds/card2.svg";
import imageTwo from "../../../../public/assest/backgrounds/cardOne.avif";

const cardData = [
  {
    id: 1,
    title: "Full-suite solutions",
    subtitle:
      "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
    image: imageOne,
  },
  {
    id: 2,
    title: "Simplify the complex",
    subtitle:
      "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
    image: imageTwo,
  },
  {
    id: 3,
    title: "Cutting-edge tech",
    subtitle:
      "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
    image: imageThree,
  },
];

const CardSection = () => {
  return (
    <div className="container mx-auto my-10">
      {/* Swiper for Small Devices */}
      <div className="md:hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop={true}
          className="w-full"
        >
          {cardData.map((card, index) => (
            <SwiperSlide key={card.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-start px-10 py-6 bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl shadow-lg"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  className="h-[50px] my-6 border rounded-full w-fit"
                  width={100}
                  height={100}
                  priority
                />
                <div>
                  <h2 className="text-3xl font-bold my-4">{card.title}</h2>
                  <p className="text-base text-gray-700">{card.subtitle}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grid for Larger Devices */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-start px-10 py-6 bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl shadow-lg"
          >
            <Image
              src={card.image}
              alt={card.title}
              className="h-[50px] my-6 border rounded-full w-fit"
              width={100}
              height={100}
              priority
            />
            <div>
              <h2 className="text-3xl font-bold my-4 text-[rgb(11,48,91)] mb-6">
                {card.title}
              </h2>
              <p className="text-base text-[rgb(22,67,119)]">{card.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
