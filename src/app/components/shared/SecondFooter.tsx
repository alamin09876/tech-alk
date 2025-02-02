import Image from "next/image";
import { FaEnvelope, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import image from "../../../../public/assest/navLogo/logo.webp";

const SecondFooter = () => {
  return (
    <footer className="bg-[#002045] p-10">
      <div className="container mx-auto flex flex-row lg:flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src={image}
            alt="Finance Future"
            className="h-[50px] w-[150px]"
            width={1000}
            height={1000}
            priority
          />
        </div>

        {/* Navigation for large screens */}
        <nav className="hidden lg:flex items-center space-x-6 text-cyan-400 text-sm font-semibold">
          <span className="cursor-pointer hover:text-white">Our Solutions</span>
          <div className="h-5 border-l border-cyan-400"></div>
          <span className="cursor-pointer hover:text-white">AnyCaaS</span>
          <span className="cursor-pointer hover:text-white">AnyBaaS</span>
          <span className="cursor-pointer hover:text-white">AnyPaaS</span>
        </nav>

        {/* Navigation for small screens */}
        <div className="lg:hidden flex flex-row items-center space-x-4 text-cyan-400 text-2xl mt-4">
          <FaLinkedin className="cursor-pointer hover:text-white" />
          <FaPhoneAlt className="cursor-pointer hover:text-white" />
          <FaEnvelope className="cursor-pointer hover:text-white" />
        </div>
      </div>
    </footer>
  );
};

export default SecondFooter;
