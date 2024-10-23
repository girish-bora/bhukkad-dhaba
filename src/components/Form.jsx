import FormComponent from "./FormComponent";

const Form = () => {
  return (
    <div className="font-quicksand xl:h-[100vh] bg-gradient-to-b from-[#f7db82] to-[#f9cd42] flex flex-col items-center">
      <div className="text-primary uppercase text-2xl md:text-4xl xl:text-2xl font-extrabold text-center px-10 mt-10 md:mt-20 xl:mt-10">
        In the meanwhile, we have started Catering! Afterall, we do not want the
        "Bhukkad" in you go hungry
      </div>
      <div className="text-[#0B5360] text-base md: mt-4 font-semibold">Get a quote for your event</div>
      <FormComponent />
      <div className="text-sm md:text-xl text-[#ffffff] bg-[#50A7B0] w-full xl:hidden p-2 flex flex-col items-center md:mt-10">
        <p>© Copyrights Bhukkad Dhaba, 2024</p>
        <p>All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Form;
