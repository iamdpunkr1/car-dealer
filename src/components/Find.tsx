import Dropdown from "../partials/Dropdown"

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
    <div className="h-screen bg-slate-100 relative ">
        {/* slanted object */}
        <div className="section_curve hidden md:block" >
            <svg width="100%" data-height={70} height="70px" style={{ height: 70 }} className="">
            <defs>
                <pattern
                id="pix-decor-shape-145885930"
                preserveAspectRatio="none"
                patternUnits="userSpaceOnUse"
                x={0}
                y={0}
                width="100%"
                data-height={70}
                height={700}
                viewBox="0 0 100 1000"
                >
                <polygon
                    fill="#f6f6f6"
                    points="0,100 0,100 10,100 15,40 85,40 90,100 100,100  100,100 "
                />
                </pattern>
            </defs>
            <rect
                x={0}
                y={0}
                width="100%"
                data-height={70}
                height={70}
                fill="url(#pix-decor-shape-145885930)"
            />
            <style
                dangerouslySetInnerHTML={{
                __html:
                    "\n\t\t\t\t\t#pix-decor-shape-145885930 > polygon {\n\t\t\t\t\t    fill: #f6f6f6!important;\n\t\t\t\t\t}\n\t\t\t    "
                }}
            />
            </svg>
        </div>

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