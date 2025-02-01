import Image from "next/image";
import imageOne from "../../../../public/assest/backgrounds/card.svg";
import imageThree from "../../../../public/assest/backgrounds/card2.svg";
import imageTwo from "../../../../public/assest/backgrounds/cardOne.avif";

const CardSection = () => {
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

  return (
    <div className="container mx-auto my-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="flex flex-col items-start px-10 py-6 bg-gradient-to-b from-blue-50 to-blue-50 rounded-xl"
        >
          <Image
            src={card.image} // Now dynamically assigning the image
            alt="diagram"
            className="h-[50px]  my-6 border rounded-full w-fit"
            width={1000}
            height={1000}
            priority
          />
          <div>
            <h2 className="text-4xl my-6">{card.title}</h2>
            <p className="text-base my-6">{card.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
