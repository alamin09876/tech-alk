import Image from "next/image";
import imageOne from "../../../../public/assest/diagram.avif";

const Innovation = () => {
  return (
    <div className="container mx-auto mt-10">
      <div>
        <p className="text-base text-center text-[#1F80F0] font-bold">
          OUR PHILOSOPHY
        </p>
        <h2 className="text-6xl text-center text-[rgb(11,48,91)] mt-7">
          Human-centred innovation
        </h2>
      </div>
      <Image
        src={imageOne}
        alt="diagram"
        className="h-[400px] w-full mx-auto mt-10"
        width={1000}
        height={1000}
        priority
      />
    </div>
  );
};

export default Innovation;
