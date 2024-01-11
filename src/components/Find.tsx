import Dropdown from "../partials/Dropdown"
import Slanted from "../partials/Slanted"

const dropdownValues = [
    {
        id:1,
        title:"Makers of vehicle",
        values:[
            "Audi",
            "BMW",
            "Chevrolet",
            "Ford",
            "Honda",
            "Hyundai",
            "Mercedes-Benz",
            "Nissan",
            "Toyota",
            "Volkswagen",
            "Volvo"
        ]
        
    },

    {
        id:2,
        title:"Model of the vehicle",
        values:[
            "All Models",
        ]
        
    },

    {
        id:3,
        title:"Condition",
        values:[
            "Vehicle Status",
            "New",
            "Used",
        ]
    },

    {
        id:4,
        title:"Fuel Type",
        values:[
            "All Fuel Types",
            "Diesel",
            "Electric",
            "Gasoline",
            "Hybrid",
        ]
    }
]

const Find = () => {
  return (
    <div className="h-full  relative ">
        {/* slanted object */}
        <Slanted bg="#f6f6f6"/>

        <div className="bg-[#f6f6f6]">
            <div className="flex flex-col gap-4 flex-nowrap md:flex-wrap  lg:flex-nowrap lg:flex-row md:flex-row justify-center max-w-[1200px] pt-8 pb-16 px-2 mx-auto">
                    {
                        dropdownValues.map((item) => (
                            <Dropdown key={item.id} title={item.title} values={item.values} />
                        ))
                    }

                    <button className=" bg-[#ecba00] w-[95%] mt-4 md:w-[95%]  md:mt-0 lg:w-[20%] lg:mt-0 text-white font-semibold text-sm  py-2 mx-auto">
                        FIND IT NOW
                    </button>
            </div>
        </div>
    </div>
  )
}

export default Find