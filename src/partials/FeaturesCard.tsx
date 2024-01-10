type FeaturesCardProps = {
    title: string;
    icon: React.ReactNode;
    bg: string;
    ibg?: string;
}
const FeaturesCard = ({title, icon, bg, ibg}: FeaturesCardProps) => {
  return (
        <a href="#" className="box">
            <div className="single-box">
            <div className="box-content">
                <div
                className={`sides side-1 flex flex-col justify-center items-center p-8 bg-[${bg}] `}
                // style={{ backgroundImage: `url(${car2})`}}
                >
                <div className={` ${ibg? ibg: "bg-white"} p-4 rounded-full mb-8`}>
                    {icon}
                </div>
                <h2 className="text-xl font-semibold text-[#222] mb-4">{title}</h2>
                <p className="text-sm text-[#666]">AutoDrive is nisi aliquip ex consequat duis velit esse cillum dolore fugiat nulla
                     pariatur excepteur sint occaecat.</p>
                </div>
                <div className={`sides side-2 p-8 bg-[${bg}] `}>
                <div className="content">
                    <h2 className="text-xl font-semibold text-[#222] mb-4">{title}</h2>
                    <p className="text-sm text-[#666]">
                    An automobile is both a private and a public setting, a bubble of intimacy exposed to the rush and push of the outside world .
                    </p>
                    <button className="bg-white text-[#222] px-4 py-2  mx-auto mt-4 text-sm hover:underline">Read More</button>
                </div>
                </div>
            </div>
            </div>
        </a>
  )
}

export default FeaturesCard