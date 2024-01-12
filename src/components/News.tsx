import Blog from "../partials/Blog"
import Slanted from "../partials/Slanted"
import Title from "../partials/Title"

const News = () => {
  return (
    <section className="bg-white relative pb-14">
        <Slanted bg={"#fff"} />
        <Title
        title1="Latest"
        title2="News"
        description="READ FROM OUR BLOG"
        bg="light"
        />

        <div className="max-w-[1200px] mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            <Blog/>
            <Blog/>
            <Blog/>
        </div>
    </section>
  )
}

export default News