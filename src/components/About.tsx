import { HiBuildingOffice2 } from "react-icons/hi2";
import { FaTrowelBricks } from "react-icons/fa6";
import { BsWindowDesktop } from "react-icons/bs";
import aboutImg from "../assets/aboutImg.png"
import aboutImg2 from "../assets/aboutImg2.png"
import Title from "../partials/Title"

const items = [
    {
        title:"Affordable Auto Prices",
        description:"AutoDrive is nisi aliquip cibsequat duis velit esse",
        icon: <HiBuildingOffice2 size={30} color={"#222"} />
    },
    {
        title:"10 Years in Business",
        description:"AutoDrive is nisi aliquip cibsequat duis velit esse",
        icon: <FaTrowelBricks size={30} color={"#222"} />
    },
    {
        title:"Affordable Auto Prices",
        description:"AutoDrive is nisi aliquip cibsequat duis velit esse",
        icon: <BsWindowDesktop size={30} color={"#222"} />
    }
]

const About = () => {
  return (
    <section className=" py-20 max-w-[1200px] mx-auto ">
        <Title title1="About" title2="Autodrive" description="SOMETHING ABOUT COMPANY" bg="light"/>
        
        <div className="flex flex-col lg:flex-row pt-24">
            <div className="text-[#222] w-11/12 lg:w-6/12 my-4 mx-auto pl-2">
                <h3 className="text-md font-bold">We are a Trusted Name in Auto Industry</h3>
                <h1 className="text-xl font-bold py-2">Visited by Million of Car Buyers Every Month!</h1>
                <p className="text-sm text-[#666] pt-4 pb-12">Autodealer is nisi aliquip consequat duis velit esse cillum dolore
                     fugiat nulla pariatur excepteur sint occaecat. Lorem ipsum dolor 
                     sit amet consectetur adipisicing elit sed eiusmod tempor incididuntu
                      labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation
                       ullamco laboris nisi aliquip. Duis aute irure dolor in reprehenderit in
                        voluptate velit ese cillum dolore fugiat nulla pariatur excepteur sint
                         occaecat cupidatat non proident.
                </p>

                {
                    items.map((item, index) => (
                        <div key={index}>
                            <div className="flex items-center py-4">
                                <div className=" p-2 rounded-full mr-4">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-md font-semibold">{item.title}</h3>
                                    <p className="text-sm text-[#666]">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            

            <div className="w-11/12  lg:w-6/12 px-4 relative ">
                <div className="relative about md:h-[700px] lg:h-auto">
                <img src={aboutImg} alt="about" className=" absolute  top-8 w-full" loading="lazy"/>
                <img src={aboutImg2} alt="about2" className="absolute left-8  w-full" loading="lazy"/>
            </div>
                
            </div>
        </div>
    </section>
  )
}

export default About