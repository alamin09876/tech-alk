"use client";
import Image from "next/image";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../../public/assest/textImage/four.avif";
import img4 from "../../../../public/assest/textImage/one.avif";
import img2 from "../../../../public/assest/textImage/three.avif";
import img3 from "../../../../public/assest/textImage/two.avif";
import "./SliderStyles.css";

const SliderTextImage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      title: "Customer focused",
      heading: "Purpose-built financial services",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      description2:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: img1,
    },
    {
      title: "Agile and adaptable",
      heading: "Agile and adaptable for growth",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      description2:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: img2,
    },
    {
      title: "Compliance ready",
      heading: "Manage compliance with ease",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      description2:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: img3,
    },
    {
      title: "Secure and safe",
      heading: "Highly secure and safe",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      description2:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: img4,
    },
  ];

  return (
    <div className="slider-container">
      {/* Text thumbnails at top */}
      <div className="space-y-4 mb-14">
        <h1 className="text-blue-500 font-medium text-lg text-center mt-10 uppercase">
          Technology Built for you
        </h1>
        <h2 className="text-5xl font-medium text-center">
          The Future of finance
        </h2>
      </div>
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="text-thumbs-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={`thumb-${index}`}>
            <div className="text-thumb">{slide.title}</div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Main content slider */}
      <Swiper
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="content-swiper rounded-xl shadow-xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={`content-${index}`}>
            <div className="content-slide">
              <div className="text-content">
                <div className="category">{slide.title.toUpperCase()}</div>
                <h2>{slide.heading}</h2>
                <p className="font-medium">{slide.description}</p>
                <p>{slide.description2}</p>
              </div>
              <div className="image-content">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination outside of Swiper (only for small devices) */}
      <div className="custom-pagination">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`pagination-bullet ${
              index === activeIndex ? "active" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderTextImage;
