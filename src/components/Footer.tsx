import Slanted from "../partials/Slanted";
import { IoMailOutline } from "react-icons/io5";
import SocialIcons from "../partials/SocialIcons";

type SubFooterProps = {
  title: string;
  values: string[];
};

const SubFooter = ({ title, values }: SubFooterProps) => {
  return (
    <div className="p-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
      <h1 className="text-base font-semibold text-white mb-4 uppercase footer-b">
        {title}
      </h1>
      {values.map((value, index) => (
        <p
          key={index}
          className="text-[#ccc] text-sm tracking-wide leading-7"
        >
          {value}
        </p>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#111]">
      <div className="pb-24">
        <div className="max-w-[1200px] mx-auto">
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
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="w-10/12 py-2 bg-transparent border-b-2 border-[#eee]"
                  />
                  <IoMailOutline
                    size={30}
                    color={"#666"}
                    className="absolute right-16 top-4 cursor-pointer"
                  />
                </div>
              </div>
              <div className="bg-[#f6f6f6] p-8 absolute left-1/3 w-48"></div>
            </div>
          </div>

          {/* SubFooter Part */}
          <div className="flex flex-wrap justify-evenly mx-auto py-8">
            <div className="p-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
              <h1 className="text-base font-semibold text-white mb-4 uppercase footer-b">
                Auto dealer - Dream cars
              </h1>
              <p className="text-[#ccc] text-sm tracking-wide leading-7">
                we offer renting of various cars
                <br />
                PHONE: +91 996583438
                <br />
                EMAIL: info@example.com
              </p>
              <div className="flex gap-4 mt-4">
                <SocialIcons size={16} color={"#ccc"} />
              </div>
            </div>

            <SubFooter
              title="Quick Links"
              values={["Home", "About Us", "Services", "Contact Us"]}
            />
            <SubFooter
              title="Our terms"
              values={["Support", "Contacts", "Typography", "FAQ"]}
            />
            <SubFooter
              title="Showroom"
              values={["New York", "Los Angeles", "Chicago", "Houston"]}
            />
          </div>
        </div>
      </div>

      <div className="relative">
        <Slanted bg={"#f6f6f6"} />
        <div className="text-center text-sm text-[#666] tracking-wider pb-8 pt-4 bg-[#f6f6f6]">
          Copyright 2023. AlegraLabs x Dipankar
        </div>
      </div>
    </footer>
  );
};

export default Footer;
