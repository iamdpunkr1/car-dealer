type TitleProps = {
    title1: string;
    title2: string;
    description: string;
}

const Title = ({title1, title2, description}: TitleProps) => {
  return (
    <div className="text-center py-4">
        <h1 className="text-5xl font-semibold text-white text-center">
            {title1} <span className="text-[#ecba00]">{title2}</span>
        </h1>
        
        <div className="flex justify-center h-5 mt-8 relative">
            <span className="relative h-[2px] bg-[#ecba00] w-8 md:w-12 lg:w-16" style={{top:"50%"}}></span>
            <h4 className="text-sm font-semibold mx-1">{description}</h4>
            <span className="relative h-[2px] bg-[#ecba00] w-8 md:w-12 lg:w-16" style={{top:"50%"}}></span>
        </div>

        <div className="flex flex-col items-center mt-4">
        <div className=" h-[2px] bg-[#666] w-[50px]" ></div>
        <div className=" h-[3px] bg-[#666] w-[50px] my-1 translate-x-1/3" ></div>
        <div className=" h-[2px] bg-[#666] w-[50px] translate-x-2/3" ></div>
        </div>
    </div>
  )
}

export default Title