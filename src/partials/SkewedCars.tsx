type SkewedCarsProps = {
  img: string;
  title: string;
  offers: number;
  right: boolean;
};

const SkewedCars = ({ img, title, offers, right }: SkewedCarsProps) => {
  
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
  }

  return (
    <a href="" className="w-[90%] md:lg:w-full hid mx-auto" onClick={handleClick}>
      <div
        className={`bg-white py-4 test flex flex-col  justify-center gap-8 items-center ${right ? "md:lg:flex-row-reverse" : " md:lg:flex-row"} px-4`}
      >
        <div className="bottom-4">
          <img src={img} alt={title} className="w-[90%] md:w-44 lg:40 mx-auto" loading="lazy" />
        </div>

        <div className="">
          <h1 className="uppercase text-base font-semibold skewTitle inline-block mb-2">{title}</h1>
          <p className="text-[#666] para">{offers} offers starting from $42,000 </p>
        </div>
      </div>
    </a>
  );
};

export default SkewedCars;
