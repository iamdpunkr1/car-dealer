type TitleProps = {
    title1: string;
    title2: string;
    description: string;
    bg: string;
}

const Title = ({title1, title2, description, bg}: TitleProps) => {
  return (
    <div className="text-center py-4">
        <h1 className={`text-5xl font-semibold ${bg=="dark"? "text-white" : "text-[#222]"} text-center`}>
            {title1} <span className="text-[#ecba00]">{title2}</span>
        </h1>
        
        <div className="flex justify-center h-5 mt-4 relative">
            <span className="relative h-[2px] bg-[#ecba00] w-8 md:w-12 lg:w-16" style={{top:"50%"}}></span>
            <h4 className={`text-sm font-semibold mx-1 ${bg=="dark"? "text-white" : "text-[#222]"}`}>{description}</h4>
            <span className="relative h-[2px] bg-[#ecba00] w-8 md:w-12 lg:w-16" style={{top:"50%"}}></span>
        </div>

        {
            bg==="light" && (
                <div className="flex flex-col items-center mt-8">
                    <div className=" h-[2px] bg-[#666] w-[50px] lines" ></div>
                    <div className=" h-[2px] bg-[#666] w-[50px] my-1 translate-x-2.5 lines" ></div>
                    <div className=" h-[2px] bg-[#666] w-[50px] translate-x-5 lines" ></div>
                </div>
            )

        }
        
    </div>
  )
}

export default Title