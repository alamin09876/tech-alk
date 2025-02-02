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
      title: "CUSTOMER FOCUSED",
      heading: "Purpose-built financial services",
      description:
        "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
      description2:
        "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
      image: img1,
    },
    {
      title: "Agile and adaptable",
      heading: "Agile and adaptable for growth",
      description:
        "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
      description2:
        "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
      image: img2,
    },
    {
      title: "Compliance ready",
      heading: "Manage compliance with ease",
      description:
        "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
      description2:
        "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
      image: img3,
    },
    {
      title: "Secure and safe",
      heading: "Highly secure and safe",
      description:
        "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
      description2:
        "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
      image: img4,
    },
  ];

  return (
    <div className="slider-container">
      <div className="space-y-4 mb-14">
        <h1 className="text-blue-500 font-bold text-lg text-center mt-10 uppercase">
          Technology Built for you
        </h1>
        <h2 className="text-5xl text-center font-semibold text-[rgb(11,48,91)]">
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
                <h2 className="text-[#0B305B]">{slide.heading}</h2>
                <p className="font-medium text-[rgb(11,48,91)]">
                  {slide.description}
                </p>
                <p className="text-[rgb(11,48,91)]">{slide.description2}</p>
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
