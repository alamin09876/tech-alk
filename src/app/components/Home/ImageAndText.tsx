import Image from "next/image";
import imageOne from "../../../../public/assest/backgrounds/imageOver.svg";
import imageTwo from "../../../../public/assest/backgrounds/imageOver2.svg";
import imageThree from "../../../../public/assest/backgrounds/imageOver3.svg";
import image from "../../../../public/assest/backgrounds/second.avif";

const ImageAndText = () => {
  return (
    <div className="relative container mx-auto grid sm:grid-cols-2 gap-2 mt-10">
      <div>
        <h3 className="text-base">POWERING THE FUTURE OF FINANCE</h3>
        <h2 className="text-7xl">Uncovering new ways to delight customers</h2>
        <p className="text-base">
          AnyTech is revolutionising financial technology by introducing
          innovative and real-time transaction account processing capabilities,
          specifically designed for retail financial services.
        </p>
        <p className="text-base">
          Our modern approach surpasses traditional banking and card processing
          systems, empowering you with the most advanced technology for lasting
          success.
        </p>
      </div>

      <div className="relative h-[500px] mx-10 overflow-hidden group">
        <div className="absolute inset-0 bg-[url('/assest/backgrounds/ctaMobileWaveLines.svg')] bg-cover transition-transform duration-500 group-hover:translate-x-5 group-hover:translate-y-5"></div>

        <div className="relative z-10 flex justify-center">
          <Image
            src={image}
            alt="director"
            className="h-[450px] w-[350px] mx-auto mt-10 relative"
            width={1000}
            height={1000}
            priority
          />

          <Image
            src={imageOne}
            alt="director"
            className="absolute top-20 left-20 w-14 slow-bounce"
            width={1000}
            height={1000}
            priority
          />
          <Image
            src={imageTwo}
            alt="director"
            className="absolute top-48 left-40 transform -translate-x-1/2 w-16 slow-bounce"
            width={1000}
            height={1000}
            priority
          />
          <Image
            src={imageThree}
            alt="director"
            className="absolute top-20 right-16 w-20 slow-bounce"
            width={1000}
            height={1000}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default ImageAndText;
