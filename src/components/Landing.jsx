import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Landing = () => {
  return (
    <div className="font-quicksand text-primary bg-[url('/texture.jpeg')] h-[100vh] md:h-auto md:pb-28 xl:h-[100vh] bg-cover flex flex-col items-center relative">
      <div className="mt-10 text-2xl md:text-5xl xl:text-2xl font-black">OUR NEW RESTAURANT</div>
      <div className="my-4 md:my-10 xl:my-4">
        <img src="/logo.png" alt="logo" className="md:h-80 xl:h-48" />
      </div>
      <div className="text-2xl md:text-5xl xl:text-2xl font-black text-center">
        COMING SOON TO YOUR NEIGHBOURHOOD
      </div>
      <div className="flex gap-10 mt-4 md:mt-10 xl:mt-4">
      <FaWhatsapp className="bg-[#50A7B0] text-[#ffffff] rounded-full h-16 w-16 p-2" size={20}/>
      <FaInstagram className="bg-[#50A7B0] text-[#ffffff] rounded-full h-16 w-16 p-2" size={20}/>
      </div>
      <div className="font-black text-center mt-8 hidden xl:block">
        <p className="md:text-3xl xl:text-xl">CONTACT US AT</p>
        <p className="text-base font-normal">+919876543210</p>
        <p className="text-base font-normal">+919876543210</p>
      </div>
      <div className="text-xl md:text-4xl font-black text-center mt-8 md:mt-12 xl:hidden">
        CONTACT US AT
        <p className="text-base md:text-3xl font-normal md:font-semibold md:mt-4">+919876543210 | +919876543210</p>
      </div>
      <div className="text-sm text-[#555555] absolute bottom-0 hidden xl:block">
        © Copyrights Bhukkad Dhaba, 2024 | All Rights Reserved
      </div>
      <div className="absolute bottom-0 right-0 translate-y-[50%] h-12 w-full bg-[#a1abb8]  xl:hidden"></div>
      <div className="absolute bottom-0 right-0 translate-y-[50%] h-10 w-full border border-[#f8edc0]  xl:hidden"></div>
      <div className="absolute bottom-0 right-0 translate-y-[50%] w-full border border-[#ffffff] border-dashed  xl:hidden"></div>
    </div>
  );
};

export default Landing;
