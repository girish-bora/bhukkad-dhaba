const FormComponent = () => {
  return (
    <>
      <form className="m-10 w-[70%] md:w-[60%] xl:w-[70%] flex flex-col">
        <div className="grid lg:grid-cols-2 gap-x-10 gap-y-5 mb-10">
          <input
            type="text"
            className="border border-primary h-8 md:h-12 xl:h-8 shadow-[-4px_4px] shadow-primary p-2 outline-none uppercase"
            placeholder="Full Name"
            required
          />
          <input
            type="text"
            className="border border-primary h-8 md:h-12 xl:h-8 shadow-[-4px_4px] shadow-primary p-2 outline-none uppercase"
            placeholder="Email"
            required
          />
          <input
            type="text"
            className="border border-primary h-8 md:h-12 xl:h-8 shadow-[-4px_4px] shadow-primary p-2 outline-none uppercase"
            placeholder="Phone"
            required
          />
          <input
            type="text"
            className="border border-primary h-8 md:h-12 xl:h-8 shadow-[-4px_4px] shadow-primary p-2 outline-none uppercase"
            placeholder="Town/City"
            required
          />
          <input
            type="text"
            className="border border-primary h-8 md:h-12 xl:h-8 shadow-[-4px_4px] shadow-primary p-2 outline-none uppercase"
            placeholder="No. of Bhukkads"
            required
          />
          <input
            type="text"
            className="border border-primary h-8 md:h-12 xl:h-8 shadow-[-4px_4px] shadow-primary p-2 outline-none uppercase"
            placeholder="No. of Young Bhukkads(6-15yrs)"
            required
          />
          <input
            type="text"
            className="border border-primary h-8 md:h-12 xl:h-8 shadow-[-4px_4px] shadow-primary p-2 outline-none uppercase"
            placeholder="Date and Time"
            required
          />
          <input
            type="text"
            className="border border-primary h-8 md:h-12 xl:h-8 shadow-[-4px_4px] shadow-primary p-2 outline-none uppercase"
            placeholder="Whats the Occasion?"
            required
          />
        </div>
        <div className="uppercase text-xl mb-10 font-semibold">
          Delivery Method
          <div className="font-normal flex gap-10">
            <div>
              <input
                type="radio"
                id="pick-up"
                name="delivery-method"
                value="pick-up"
              />
              <label htmlFor="pick-up">PICK-UP</label>
            </div>
            <div>
              <input
                type="radio"
                id="delivery"
                name="delivery-method"
                value="delivery"
              />
              <label htmlFor="delivery">DELIVERY</label>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="border border-primary h-8 md:h-12 xl:h-8 xl:hover:-translate-x-1 xl:hover:translate-y-1 xl:hover:shadow-none shadow-[-4px_4px] shadow-primary outline-none uppercase bg-[#ffffff] text-[#0b5360] font-semibold w-24 self-center"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default FormComponent;
