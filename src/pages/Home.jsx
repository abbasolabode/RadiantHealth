import BookNowCard from "../ui/BookNowCard";
import Cards from "../ui/Cards";
import Herosection from "../ui/Herosection";
import HomeBlog from "../ui/HomeBlog";
import Modal from "../ui/Modal";
import NumCards from "../ui/NumCards"


export default function Home() {
  return (
    <div className="w-full z-0 flex flex-col gap-12 space-y-8">
      <Herosection />
      <NumCards/>
      <Cards/>
      <HomeBlog/>
      <BookNowCard/>
      <Modal/>                           
    </div>
  )
}
