import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import video from '../assets/testimonial.mp4';
import Title from '../partials/Title';
import Clients from '../partials/Clients';


const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay:true,
    autoplaySpeed: 4000,
    arrows:false,
    draggable:true,
    responsive: [
        {
          breakpoint: 1240,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 820,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };



const Testimonials = () => {
  return (
    <section className=" relative overflow-hidden h-screen">
      <video className="w-full h-full object-cover" autoPlay loop muted>
        <source src={video} type="video/mp4"/>
     </video>
      <div
        className="absolute inset-0 w-full h-full bg-black opacity-75"
        style={{ mixBlendMode: 'multiply' }}
      >

      </div>
      <div className="absolute inset-0 w-full h-full py-32">
                  <Title title1="Clients" title2="Testimonials"
                    description="SATISFIED CLIENTS EVERYWHERE"
                    bg="dark"
                    />
                <div className="py-24 max-w-[1200px] mx-auto ">
                    <Slider {...settings} className=" w-11/12 mx-auto">
                        <Clients/>
                        <Clients/>
                        <Clients/>
                        <Clients/>
                        <Clients/>
                    </Slider>
                </div>
       </div>
    </section>
  );
};

export default Testimonials;
