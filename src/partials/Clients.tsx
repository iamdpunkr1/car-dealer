import client from "../assets/client.jpg"
import { FaQuoteRight } from "react-icons/fa";

const Clients = () => {
  return (
    <div className="w-80  bg-white p-12 flex flex-col justify-center items-center mx-auto">
        <img src={client} alt="client" className="w-16 h-16 rounded-full"/>
        <h1 className="text-sm font-medium text-center uppercase tracking-wider pt-4">Diogo Johnson</h1>
        <p className="text-[#222] font-light text-center text-sm uppercase tracking-wider">customer</p>
        <p className="text-[#777] text-center my-4 italic text-sm font-light">
            Wliquam sit amet urn sed vel nullam semper vestibulum fringilla orem ipsum dolor sit amet sectetur
         adipisicing elit sed eiusmod.
        </p>
        <FaQuoteRight size={30} color={"#ddd"} />
    </div>
  )
}

export default Clients