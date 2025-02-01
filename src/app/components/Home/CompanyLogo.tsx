"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import imageSeven from "../../../../public/assest/company/eight.webp";
import imageThreeten from "../../../../public/assest/company/fifteen.webp";
import imageFour from "../../../../public/assest/company/five.webp";
import imageThree from "../../../../public/assest/company/four.webp";
import imageEight from "../../../../public/assest/company/nine.webp";
import image from "../../../../public/assest/company/one.webp";
import imageSix from "../../../../public/assest/company/seven.webp";
import imageFive from "../../../../public/assest/company/six.webp";
import imageFourteen from "../../../../public/assest/company/sixteen.webp";
import imageNine from "../../../../public/assest/company/ten.webp";
import imageTwo from "../../../../public/assest/company/three.webp";
import imageTwelve from "../../../../public/assest/company/threeten.webp";
import imageOne from "../../../../public/assest/company/two.webp";

const companyLogos = [
  image,
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  imageFive,
  imageSix,
  imageSeven,
  imageEight,
  imageNine,
  imageTwelve,
  imageThreeten,
  imageFourteen,
  image,
  imageOne,
];

const CompanyLogo = () => {
  return (
    <div className="container mx-auto">
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-4">
        {companyLogos.map((logo, index) => (
          <div key={index} className="rounded-lg">
            <Image
              src={logo}
              alt={`Company logo ${index + 1}`}
              className="lg:h-[50px] h-[30px] w-[170px] mx-auto mt-10"
              width={1000}
              height={1000}
              priority
            />
          </div>
        ))}
      </div>

      <div className="block md:hidden">
        <Swiper
          spaceBetween={10}
          slidesPerView={1.5}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          {companyLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <Image
                  src={logo}
                  alt={`Company logo ${index + 1}`}
                  className="h-[50px] w-[170px] mx-auto"
                  width={1000}
                  height={1000}
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CompanyLogo;
