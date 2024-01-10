import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from 'react';
import price1 from '../assets/price1.png';
import hero from '../assets/hero.jpg';
import car2 from '../assets/cars2.jpg';
import car3 from '../assets/cars3.jpg';

const images = [hero, car2, car3];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [hoveredNext, setHoveredNext] = useState(false);
  const [hoveredPrev, setHoveredPrev] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [zoomClass, setZoomClass] = useState('');

  useEffect(() => {
      setZoomClass('zoomed');
  }, [index]);



  const handleNext = () => {
    setZoomClass('');
    setIndex((index + 1) % images.length);
  };

  const handlePrev = () => {
    setZoomClass('');
    setIndex((index - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className={`relative  `} style={{height:"100vh"}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
      >
        {
          isHovered && (
            <>
                <button
                className='absolute top-1/2 p-4 rounded-full bg-slate-950 left-4  z-50'
                onClick={handleNext}
                onMouseEnter={() => setHoveredNext(true)}
                onMouseLeave={() => setHoveredNext(false)}
                style={{
                  backgroundImage: hoveredNext ? `url(${images[(index + 1) % images.length]})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transform: hoveredNext ? 'scale(1.1)' : 'scale(1)',
                  transition: 'transform 0.3s ease',
                  opacity: 0.5,
                }}
              >
                <IoIosArrowBack className=' text-3xl text-white opacity-100' />
              </button>
              
              <button
                className='absolute top-1/2 p-4  z-50 right-4 rounded-full bg-slate-950'
                onClick={handlePrev}
                onMouseEnter={() => setHoveredPrev(true)}
                onMouseLeave={() => setHoveredPrev(false)}
                style={{
                  backgroundImage: hoveredPrev ? `url(${images[(index - 1 + images.length) % images.length]})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transform: hoveredPrev ? 'scale(1.1)' : 'scale(1)',
                  transition: 'transform 0.3s ease',
                  opacity: 0.5,
                
                }}
              >
                <IoIosArrowForward className='text-3xl text-white opacity-100' />
              </button>
            </>
          )
        }

        <div className='image-container  '>
          {images.map((image, i) => (
            <div
              key={i}
              style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center',
              backgroundAttachment:"fixed" }}
              
              className={`h-screen w-screen  absolute transition-opacity duration-1000 ease-in-out ${
                i === index ? 'opacity-100' : 'opacity-0'
              } ${"zoomClass"}`}
            >
              
              <div className="absolute flex justify-center md:justify-end lg:justify-end" style={{top:"20%"}}>
                  <div style={{width:"73%"}}>
                  <p className="text-white text-md font-bold">DRIVE YOUR DREAM CAR</p>
                  <h1 className="text-5xl text-white font-bold ">{i%2==0? "LEXUS NX 300 2018":"WANT TO BUY YOUR FAVOURITE SUV?"}</h1>
                  <h2 className="text-3xl text-white font-light mt-4">
                    REFRESHED STYLE, HIGH PERFORMANCE  & OUTSTANDING TECHNOLOGY
                  </h2>
                  <img src={price1} alt="" className="mt-4"/>
                  </div>
              </div>

            </div>
            
          ))}
        </div>

      </div>

    </>
  );
};

export default Hero;
