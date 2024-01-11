import OfferCard from "../partials/OfferCard"
import Slanted from "../partials/Slanted"
import Title from "../partials/Title"

const Offers = () => {
  return (
    <section className="bg-white relative pb-14">
        <Slanted bg={"#fff"}/>
        <Title title1="Latest" title2="Offers"
               description="SOME VEHICLES YOU WOULD LIKE TO BUY"
               bg="light"/>
        <div className="max-w-[1200px] mx-auto flex justify-center  flex-wrap mt-10">
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