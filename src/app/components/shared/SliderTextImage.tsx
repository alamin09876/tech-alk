"use client";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, FreeMode, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./SliderStyles.css";

const SliderTextImage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const slides = [
    {
      title: "Customer focused",
      heading: "Put customers first",
      description:
        "Transform your customer experience with flexible and diversified solutions powered by cutting-edge technology.",
      image: "https://swiperjs.com/demos/images/nature-1.jpg",
    },
    {
      title: "Agile and adaptable",
      heading: "Stay agile in change",
      description:
        "Adapt quickly to market changes with our flexible platform that evolves with your needs.",
      image: "https://swiperjs.com/demos/images/nature-2.jpg",
    },
    {
      title: "Compliance ready",
      heading: "Manage compliance with ease",
      description:
        "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
      image: "https://swiperjs.com/demos/images/nature-3.jpg",
    },
    {
      title: "Secure and safe",
      heading: "Keep data protected",
      description:
        "Ensure the highest levels of security with our advanced protection systems and protocols.",
      image: "https://swiperjs.com/demos/images/nature-4.jpg",
    },
  ];
  return (
    <div className="slider-container">
      {/* Text thumbnails at top */}
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
        className="content-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={`content-${index}`}>
            <div className="content-slide">
              <div className="text-content">
                <div className="category">{slide.title.toUpperCase()}</div>
                <h2>{slide.heading}</h2>
                <p>{slide.description}</p>
              </div>
              <div className="image-content">
                <img
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderTextImage;
