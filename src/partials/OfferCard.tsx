import { BsSpeedometer2 } from "react-icons/bs";
import { TbAutomaticGearbox } from "react-icons/tb";
import { PiGasCan } from "react-icons/pi";
import carimg from '../assets/carimg.jpg'
import IconsWrapper from "./IconsWrapper";


const iconStyles= {
    size: 22,
    color: "#666"
}

const OfferCard = () => {
  return (
    <div className="bg-[#f6f6f6] w-full m-4 lg:max-w-[22%]">
        <img src={carimg} alt="car" className="w-full" loading="lazy"/>
        <div className='flex flex-col items-center'>
            <h1 className="text-[#222] text-center font-semibold text-md mt-4">Mazda CX 9</h1>
            
            <div className='h-[1px] bg-[#ecba00] w-8 mt-4'></div>
            <div className='h-[1px] bg-[#ecba00] w-8 mt-[2px] relative left-2'></div>

            <div className='flex gap-4 my-4'>

                <IconsWrapper>
                    <BsSpeedometer2 {...iconStyles} />
                    <p className="text-[#666] text-xs">4980</p>
                </IconsWrapper>

                <IconsWrapper>
                    <PiGasCan color={"#666"} size={22} />
                    <p className="text-[#666] text-xs">Petrol</p>
                </IconsWrapper>

                <IconsWrapper>
                    <TbAutomaticGearbox color={"#666"} size={22} />
                    <p className="text-[#666] text-xs">Manual</p>
                </IconsWrapper>

            </div>


                <div className=" price bg-[#ecba00] w-full text-center py-4  hover:bg-[#222] cursor-pointer">
                    <p className="text-white text-sm">$4,500</p>
                </div>
            
        </div>
        
    </div>
  )
}

export default OfferCard