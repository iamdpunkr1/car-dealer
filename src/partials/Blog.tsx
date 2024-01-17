import blog from '../assets/blog.jpg'
import { FaUser, FaRegCalendarAlt } from "react-icons/fa";

const Blog = () => {
  return (
    <div className="bg-white w-80 border border-solid border-[#eee] overflow-hidden">
      
        <img src={blog} alt="blog" className=" slide " style={{minWidth:"120%"}}  loading="lazy"/>
      
      <div className='p-2'>
          <h1 className="text-[#222] text-md font-semibold  py-2 tracking-widest border-b border-solid border-[#eee]">Bout Avez was main jet</h1>
          <p className='text-[#222] text-xs font-light tracking-wide leading-5 py-4 border-b border-solid border-[#eee]'>
			Bout avez was main jet. There are suivit bourse depuis. Them longues republique paraissents
             i people young evidemment reprende tristement the people g
		   </p>
           
           <div className='flex justify-between text-[#222] font-light pt-2'>
                <p className='text-xs flex gap-1 items-center'>
                  <FaUser />  By admin
                </p>

                <p className='text-xs flex gap-1 items-center'>
                    <FaRegCalendarAlt />
                    October 19, 2023
                </p>
           </div>
      </div>
    </div>
  )
}

export default Blog