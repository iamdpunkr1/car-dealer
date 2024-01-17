import memberImg from "../assets/memberImg.jpg"


const Member = () => {
  return (
    <div className="h-[383px]  bg-transparent cursor-move m-box " style={{width:"95%"}}>
        <img src={memberImg} alt="memberImg" className="max-w-[8/12] mx-auto" loading="lazy"/>
        
        <div className="m-content">
          <div className="text-center py-4 ">
            <h1 className="text-lg font-semibold">
                Diogo Johnson
            </h1>
            <p className="uppercase text-[#666]">Partner</p>
          </div>
        </div>
    </div>
  )
}

export default Member