import { FaMinusSquare } from "react-icons/fa";

const ServicesCard = () => {
  return (
    <div className="ser-card  mx-auto">
        <div className="ser-content ">
            <div className="ser-front flex flex-col justify-center">
                <h3 className="ser-title">
                    <FaMinusSquare size={50} color={"#222"} />
                </h3>

                <h3 className="ser-title text-lg font-semibold">
                    Vehicle
                </h3>

                <h1 className="ser-title text-2xl font-bold ser-b pb-2">
                    INSPECTION
                </h1>
            </div>

            <div className="ser-back">
            <div className="ser-description">
                <h1 className="text-md font-semibold">About Service</h1>
                <p className="text-sm my-2">
                    An automobile is both a private and a public setting,
                    a bubble of intimacy exposed .
                </p>
                <button className="bg-[#222] text-white px-4 py-2 mt-4 text-sm hover:underline">Read More</button>
            </div>
            </div>
        </div>
    </div>

  )
}

export default ServicesCard