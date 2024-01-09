import { FaFacebookF, FaTwitter, FaInstagram, FaSearch } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { IoCall, IoEarthOutline } from "react-icons/io5";
import { MdOutlineAccessTime, MdOutlineEmail } from "react-icons/md";
import { Divide as Hamburger } from 'hamburger-react'
import logo from '../assets/logo.png'
import Helement from "../partials/Helement";
import { useState } from "react";

const iconStyles= {
    size: 22,
    color: "#666"
}

const navStyles = "cursor-pointer hover:text-[#ecba00]";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);


  return (
    <header className="border-t-[6px] border-[#ecba00]">
       {/* 1st part */}
        <nav className="max-w-[1200px]  mx-auto  hidden lg:flex justify-between items-center py-[18px] border-b-[1px] border-[#eee]">
            <h1 className="text-md">Welcome to Autodealer Car Service</h1>
            <div className="flex gap-4 items-center">
             <FaFacebookF {...iconStyles} />
             <FaTwitter {...iconStyles}/>
             <TfiYoutube {...iconStyles}/>
             <FaInstagram {...iconStyles}/>

             <div className="flex ml-8 relative flex-wrap">
                <div className="flex items-center bg-[#222] py-4 px-5 hbtn relative left-3">
                    <IoCall size={16} color={"#ecba00"}/>
                    <span className="ml-2 text-white text-md font-bold"> +1 (623) 475 9820</span>
                </div>
                <div className="py-4 px-6 pl-10 bg-[#ecba00] text-white font-bold hbtns ">
                    Sell your car
                </div>
             </div>
            </div>
        </nav>

        {/* 2nd part */}
        <nav className="max-w-[1200px] mx-auto flex justify-between items-center py-[30px] pb-12 px-6">
            <img src={logo} alt="logo" className="max-w-[228px]"/>
            <div className="lg:hidden">
                 <Hamburger toggled={isOpen} toggle={setOpen} size={30} color={"#222"}  />
            </div>
            <div className="hidden lg:flex gap-12 ">

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
        <nav className="bg-[#222] p-6 w-10/12 navlinks  hidden lg:block">
            <div className="max-w-[1200px] ml-auto flex justify-between items-center pr-12" >
                <ul className="font-semibold flex text-white gap-8">
                    <li className={navStyles}>HOME</li>
                    <li className={navStyles}>AUTO LISTINGS</li>
                    <li className={navStyles}>OUR NEWS</li>
                    <li className={navStyles}>SHOP</li>
                    <li className={navStyles}>CONTACT US</li>
                </ul>
                <FaSearch color="#fff" size={18}/>
            </div>
        </nav>

        {/* Side menu */}

                <div className={`absolute  sidenav ${isOpen? "show": ""}`}>
                   
                    <ul className="font-semibold flex flex-col text-white gap-8 px-8 mt-28">
                        <li className={navStyles}>HOME</li>
                        <li className={navStyles}>AUTO LISTINGS</li>
                        <li className={navStyles}>OUR NEWS</li>
                        <li className={navStyles}>SHOP</li>
                        <li className={navStyles}>CONTACT US</li>
                    </ul>
                </div>
               
    </header>
  )
}

export default Navbar