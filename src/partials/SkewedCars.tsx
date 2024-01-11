type SkewedCarsProps = {
    img: string;
    title: string;
    offers: number;
    right: boolean;
}
const SkewedCars = ({img, title, offers, right}:SkewedCarsProps) => {
  return (
    <div className="w-[90%] md:lg:w-full hid mx-auto">
    <div className={`bg-white py-4 test flex flex-col  md:lg:flex-row justify-center gap-8 items-center ${right? "md:lg:flex-row-reverse":""} px-4`}>
        
            <div className="bottom-4">
                <img src={img} alt={title} className="w-[150px]"/>
            </div>
            <div>
                
                 <h1 className="uppercase text-base font-semibold skewTitle inline-block mb-2">{title}</h1>
               
                <p className="text-[#666]">{offers} offers starting from $42,000 </p>
            </div>
        
    </div>
  </div>
  )
}

export default SkewedCars