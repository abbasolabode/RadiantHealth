import BookNowCard from "../ui/BookNowCard";
import Cards from "../ui/Cards";
import Herosection from "../ui/Herosection";
import HomeBlog from "../ui/HomeBlog";
import NumCards from "../ui/NumCards"


export default function Home() {
  return (
    <div className="w-full z-0">
      <Herosection />
      <NumCards/>
      <Cards/>
      <HomeBlog/>
      <BookNowCard/>                           
    </div>
  )
}
