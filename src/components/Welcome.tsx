import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { RiSteering2Line } from "react-icons/ri"
import { SlSpeedometer } from "react-icons/sl";
import { MdGpsNotFixed } from "react-icons/md";
import FeaturesCard from "../partials/FeaturesCard";

const Welcome = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["AUTODEALER"],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true,
            startDelay: 500,
            cursorChar: "", 
           
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
    <section className="text-center py-28">
        <span className="text-5xl font-bold">WELCOME TO </span>
        <span ref={el}  className="text-5xl font-bold text-[#ecba00]"></span>
        <span ref={el}  className="text-5xl font-bold text-[#ecba00]"></span>
        <span className="text-5xl font-bold text-[#ecba00] cursor-animate">|</span>
        
        <div className="flex justify-center h-5 mt-8 relative">
            <span className="relative h-[2px] bg-[#ecba00] w-8 md:w-12 lg:w-16" style={{top:"50%"}}></span>
            <h4 className="text-sm font-semibold mx-1">Search Thousands of Cars from our Dealers Network</h4>
            <span className="relative h-[2px] bg-[#ecba00] w-8 md:w-12 lg:w-16" style={{top:"50%"}}></span>
        </div>

        <div className="flex flex-col items-center mt-4">
          <div className=" h-[2px] bg-[#666] w-[50px]" ></div>
          <div className=" h-[3px] bg-[#666] w-[50px] my-1 translate-x-1/3" ></div>
          <div className=" h-[2px] bg-[#666] w-[50px] translate-x-2/3" ></div>
        </div>

        <div className="wrapper mt-20">
            <FeaturesCard title="Largest Dealership of Cars"
                          icon={ <RiSteering2Line size={60} color={"#222"} />}
                          bg="#f6f6f6" />
            <FeaturesCard title="Offers Lower Car Prices"
                          icon={ <MdGpsNotFixed size={50} color={"white"} />}
                          bg="#fcfcfc" ibg="bg-[#ecba00]"/>
            <FeaturesCard title="Multipoint Safety Checks"
                          icon={ <SlSpeedometer size={50} color={"#222"} />}
                          bg="#f6f6f6" />
        </div>

    </section>
  )
}

export default Welcome