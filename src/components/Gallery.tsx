import Slanted from "../partials/Slanted";
import Title from "../partials/Title";
import galleryImg from "../assets/galleryImg.jpg";

const Gallery = () => {

  const galleryImages = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    path: galleryImg,
  }));

  return (
    <section className="bg-white relative py-14">
      <Slanted bg={"#fff"} />
      <Title
        title1="Photo"
        title2="Gallery"
        description="IMAGES OF VEHICLES WE HAVE"
        bg="light"
      />

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {galleryImages.map((image) => (
      
          <div key={image.id} className="g-box">
            <img src={image.path} alt={`gallery-${image.id}`} className="w-full" loading="lazy"/>
            <div className="g-overlay">
              <div className="g-content flex flex-col justify-end p-1  md:p-2 lg:p-4">
                <h3 className="font-semibold text-lg">Aston Martin</h3>
                <p className="text-[#666]">Diago Johnson  --&gt; </p>
              </div>
            </div>
            
        </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
