import Form from "./Form";
import Landing from "./Landing";

const Home = () => {
  return (
    <div className="relative">
      <div className="grid xl:grid-cols-2">
        <Landing />
        <Form />
      </div>
      <div className="absolute top-0 right-[50%] translate-x-[50%] w-12 h-full bg-[#a1abb8] hidden xl:block"></div>
      <div className="absolute top-0 right-[50%] translate-x-[50%] w-10 h-full border border-[#f8edc0] hidden xl:block"></div>
      <div className="absolute top-0 right-[50%] translate-x-[50%] h-full border border-[#ffffff] border-dashed hidden xl:block"></div>
    </div>
  );
};

export default Home;
