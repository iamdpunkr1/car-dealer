type SaleCardsProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
}


const SaleCards = ({icon, title, description}: SaleCardsProps) => {
  return (
    <div className="w-full md:w-1/2 lg:1/3 h-30 bg-white  sale-card ">
       <div className="contentA px-4 py-6 " >
                            <div className="flex items-center ">
                                <div className=" p-2 rounded-full mr-4">
                                    {icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">{title}</h3>
                                    <p className="text-sm text-[#666]">{description}</p>
                                </div>
                            </div>
        </div> 
        
        <div  className="contentB text-white bg-[#222] w-full h-full text-sm ">
            <div className=" px-6 py-6">
            An automobile is both a private and a public setting, a bubble of
            intimacy exposed to the rush and push .
            </div>
        </div>
        
    </div>
  )
}

export default SaleCards