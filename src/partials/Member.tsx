import memberImg from "../assets/memberImg.jpg"
import SocialIcons from "./SocialIcons"

const Member = () => {
  return (
    <div className="h-[383px] cursor-move  " style={{width:"95%"}}>
      <div className="m-box">
        <img src={memberImg} alt="memberImg" className="max-w-full mx-auto" loading="lazy"/>
        
        <div className="m-overlay">
          <div className="m-content text-center py-4 flex flex-col justify-end">
            <h1 className="text-lg font-semibold">
                Diogo Johnson
            </h1>
            <p className="uppercase text-slate-50 ">Partner</p>
            <div className="flex justify-center gap-2 mt-4">
            <SocialIcons color="#fff" size={18}/>
            </div>
           
          </div>
        </div>
      </div>

        <div className="m-content2">
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