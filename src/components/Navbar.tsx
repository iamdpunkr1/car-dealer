import { FaFacebookF, FaTwitter, FaInstagram, FaSearch } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { IoCall, IoEarthOutline } from "react-icons/io5";
import { MdOutlineAccessTime, MdOutlineEmail } from "react-icons/md";
import logo from '../assets/logo.png'
import Helement from "../partials/Helement";

const Navbar = () => {
  return (
    <header className="border-t-[6px] border-[#ecba00]">
       {/* 1st part */}
        <nav className="max-w-[1200px] mx-auto flex justify-between items-center py-[15px] border-b-[1px] border-[#eee]">
            <h1 className="">Welcome to Autodealer Car Service</h1>
            <div className="flex gap-4 items-center">
             <FaFacebookF size={22}/>
             <FaTwitter size={22}/>
             <TfiYoutube size={22}/>
             <FaInstagram size={22}/>

             <div className="flex ml-8 relative">
                <div className="flex items-center bg-[#222] py-4 px-6 hbtn relative left-3">
                    <IoCall size={16} color={"#ecba00"}/>
                    <span className="ml-2 text-white font-bold"> +1 (623) 475 9820</span>
                </div>
                <div className="py-4 px-8 pl-10 bg-[#ecba00] text-white font-bold hbtns ">
                    Sell your car
                </div>
             </div>
            </div>
        </nav>

        {/* 2nd part */}
        <nav className="max-w-[1200px] mx-auto flex justify-between items-center py-[25px]">
            <img src={logo} alt="logo" className="w-[200px]"/>
            <div className="flex gap-12">

                <Helement title="Headoffice"
                          description="20 Bill street, New York"
                          logo={<IoEarthOutline size={50} color={"#ecba00"} />} />

                <Helement title="Working"
                          description="Service Available 24/7"
                          logo={<MdOutlineAccessTime size={50} color={"#ecba00"} />} />
                
                <Helement title="Email Us"
                          description="info@example.com"
                          logo={<MdOutlineEmail size={50} color={"#ecba00"} />} />

            </div>
        </nav>

        {/* 3rd nav */}
        <nav className="bg-[#222] p-6 w-10/12 navlinks">
            <div className="max-w-[1200px] ml-auto flex justify-between items-center pr-12" >
                <ul className="font-semibold text-white flex gap-8">
                    <li className="cursor-pointer hover:text-[#ecba00]">HOME</li>
                    <li>AUTO LISTINGS</li>
                    <li>OUR NEWS</li>
                    <li>SHOP</li>
                    <li>CONTACT US</li>
                </ul>
                <FaSearch color="#fff" size={18}/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar