import { HiBuildingOffice2 } from "react-icons/hi2";
import { FaTrowelBricks } from "react-icons/fa6";
import { BsWindowDesktop } from "react-icons/bs";
import SaleCards from "../partials/SaleCards";

const items = [
    {
        title:"900+",
        description:"Vehicles we sale",
        icon: <HiBuildingOffice2 size={50} color={"#ecba00"} />
    },
    {
        title:"23400+",
        description:"Vehicle we sold",
        icon: <FaTrowelBricks size={50} color={"#ecba00"} />
    },
    {
        title:"50+",
        description:"Vehicles we sale every year",
        icon: <BsWindowDesktop size={50} color={"#ecba00"} />
    }
]

const Sale = () => {
  return (
    <section className="bg-black mt-24 py-32 ">
        <div className="max-w-[1200px] mx-4 md:lg:mx-auto flex justify-center flex-wrap md:lg:flex-nowrap gap-4 items-center">
        {
            items.map((item, index) => <SaleCards key={index}
                                                  title={item.title}
                                                  description={item.description}
                                                  icon={item.icon} /> )
         }
        </div>
    </section>
  )
}

export default Sale