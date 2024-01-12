import memberImg from "../assets/memberImg.jpg"


const Member = () => {
  return (
    <div className="h-[383px] w-full bg-white cursor-move">
        <img src={memberImg} alt="memberImg" className="w-[8/12]"/>
        <div className="text-center py-4">
        <h1 className="text-lg font-semibold">
            Diogo Johnson
        </h1>
        <p className="uppercase text-[#666]">Partner</p>
        </div>
    </div>
  )
}

export default Member