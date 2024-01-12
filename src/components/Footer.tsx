
import Slanted from "../partials/Slanted"
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  return (

    <footer className="bg-[#111]  ">
        <div  className="pb-24">
            <div className="max-w-[1200px] mx-auto ">
                {/* Subscribe Part */}
                <div className="hidden md:lg:block">
                    <div className="flex relative ">
                        <div className="w-5/12 bg-[#ecba00] p-4 subscribe">
                            <h1 className="text-center text-2xl font-medium text-white">
                                Subscribe to Newsletter
                            </h1>
                        </div>
                        <div className="w-7/12 bg-[#f6f6f6]  mail">
                            <div className="text-md text-[#666] p-2 flex justify-center relative">
                                <input type="email" placeholder="Enter email"
                                       className="w-10/12 py-2 bg-transparent border-b-2 border-[#eee]"/>
                                <IoMailOutline size={30} color={"#666"}
                                               className="absolute right-16 top-4 cursor-pointer"/>
                            </div>
                        </div>
                        <div className="bg-[#f6f6f6] p-8 absolute left-1/3 w-48"></div>
                    </div>
                </div>

                {/* Footer Part */}
                <div className="flex flex-col gap-2 md:lg:flex-row py-8">
                    <div className="w-full md:lg:w-1/4">
                        <h1 className="text-xl font-semibold text-white mb-4">About Auto deater</h1>
                        <p className="text-[#666] text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>

                    </div>
                </div>
            </div>
        </div>
        
        <div className="relative">
            <Slanted bg={"#f6f6f6"}/>
            <div className="text-center text-sm text-[#666] tracking-wider pb-8 bg-[#f6f6f6] ">
                Copyright 2023. Dipankar Prasad
            </div>
        </div>
    </footer>

  )
}

export default Footer