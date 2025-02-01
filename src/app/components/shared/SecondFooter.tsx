import Image from "next/image";
import image from "../../../../public/assest/navLogo/logo.webp";
const SecondFooter = () => {
  return (
    <footer className="bg-[#002045] p-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src={image}
            alt="Finance Future"
            className="h-[50px] w-[150px] mx-auto"
            width={1000}
            height={1000}
            priority
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-6 text-cyan-400 text-sm font-semibold">
          <span className="cursor-pointer hover:text-white">Our Solutions</span>
          <div className="h-5 border-l border-cyan-400"></div>
          <span className="cursor-pointer hover:text-white">AnyCaaS</span>
          <span className="cursor-pointer hover:text-white">AnyBaaS</span>
          <span className="cursor-pointer hover:text-white">AnyPaaS</span>
        </nav>
      </div>
    </footer>
  );
};

export default SecondFooter;
