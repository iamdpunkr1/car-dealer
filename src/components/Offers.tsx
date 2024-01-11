import OfferCard from "../partials/OfferCard"
import Slanted from "../partials/Slanted"
import Title from "../partials/Title"

const Offers = () => {
  return (
    <section className="bg-white relative h-screen">
        <Slanted bg={"#fff"}/>
        <Title title1="Latest" title2="Offers" description="SOME VEHICLES YOU WOULD LIKE TO BUY"/>
        <div className="max-w-[1200px] mx-auto flex justify-center  flex-wrap">
            <OfferCard/>
            <OfferCard/>
            <OfferCard/>
            <OfferCard/>
            <OfferCard/>
            <OfferCard/>
            <OfferCard/>
            <OfferCard/>
        </div>
    </section>
  )
}

export default Offers