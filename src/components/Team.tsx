import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "../partials/Title"
import Member from "../partials/Member";
import brand from "../assets/brand.jpg";

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
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 5
          }
        }
      ]
  };

  const brandImages = Array.from({ length: 6 }, (_, index) => ({
    id: index,
    path: brand,
  }));

const Team = () => {
  return (
    <section className="bg-white relative mt-16 ">
    <Title
      title1="Team"
      title2="Members"
      description="WORKED OF AUTODEALER"
      bg="light"
    />
    
    <div className="py-24 max-w-[1200px] mx-auto">
                <Slider {...settings} className="mx-auto w-11/12">
                    <Member/>
                    <Member/>
                    <Member/>
                    <Member/>
                    <Member/>
                </Slider>
    </div>

    <div className="py-8 bg-[#f6f6f6]">
    <div className=" max-w-[1200px] mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-4 ">
    {
        brandImages.map((image) => (
            <div key={image.id}>
                <img src={image.path} alt={`gallery-${image.id}`} className="max-w-11/12 mx-auto" loading="lazy"/>
            </div>
        ))
    }
    </div>
    </div>

    </section>
  )
}

export default Team