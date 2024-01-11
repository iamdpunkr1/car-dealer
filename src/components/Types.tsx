import SkewedCars from "../partials/SkewedCars"
import sedan from "../assets/sedan.png"
import sedan2 from "../assets/sedan2.png"
import supercar from "../assets/supercar1.png"
import luxurycar from "../assets/luxury1.png"


const Types = () => {
  return (
    <section className="bg-black py-16">
        <h1 className="text-5xl font-semibold text-white text-center">
            Types of <span className="text-[#ecba00]">Vehicles</span>
        </h1>
        
        <div className="max-w-[1200px] flex flex-col gap-4  md:lg:grid md:lg:grid-cols-2 md:lg:grid-rows-2 md:lg:gap-4 mx-auto mt-24 relative box-border px-2">
            
            <SkewedCars  img={sedan} title="sedan" offers={8} right={false}/>
            <SkewedCars  img={sedan2} title="sedan" offers={8} right={true}/>
            <SkewedCars  img={supercar} title="sedan" offers={5} right={false}/>
            <SkewedCars  img={luxurycar} title="sedan" offers={6} right={true}/>
           
        </div>
    </section>
  )
}

export default Types