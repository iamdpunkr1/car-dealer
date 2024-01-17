import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "../partials/Title"
import ServicesCard from "../partials/ServicesCard";
// import Carousel from "../partials/Carousel";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay:true,
    autoplaySpeed: 2000,
    arrows:false,
    draggable:true,
    responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
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

  const items = [
    <ServicesCard key={1}/>,
    <ServicesCard key={2}/>,
    <ServicesCard key={3}/>,
    <ServicesCard key={4}/>,
    <ServicesCard key={5}/>,
    <ServicesCard key={6}/>
    // Add more items as needed
  ];
const Services = () => {
  return (
    <section className="bg-[#222]">
        <div className="services h-full py-24">
            <div className="max-w-[1200px] mx-auto">
                <Title title1="Our" title2="Services"
                    description="WE OFFER SOME BEST VEHICLE SERVICES"
                    bg="dark"
                    />

                <div className="py-24 ">
                <Slider {...settings} className="mx-auto w-11/12">
                    {items.map((item) => item)}
                </Slider>
                </div>
            </div>         
        </div>
    </section>
  )
}

export default Services