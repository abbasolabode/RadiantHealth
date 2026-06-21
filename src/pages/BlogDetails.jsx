import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { useGetBlogDetailsById } from "../hooks/useGetBlogDetailsById";
import Spinner from "../ui/Spinner";



export default function BlogDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { blogDetails = {}, isLoading } = useGetBlogDetailsById(id);

  if (isLoading) return <Spinner />

  return (
    <main className="min-h-screen w-full px-4 py-6">
      <header className="w-full min-h-100 flex flex-col gap-6 space-y-8 ">
        {/* Flex container */}
        <div className="w-full flex flex-col justify-center gap-4">
          <button className="flex items-center text-blue-600" onClick={() => navigate("/blog")}>
            < IoIosArrowRoundForward size={20} />
            <p className="font-medium text-[12px] ">Back to News</p>
          </button>

          {/* Flex container for field + date + read time */}
          <div className="flex items-center space-x-4  text-[12px]">
            <p className="px-2 py-0.5 rounded-full font-medium tracking-wider text-white bg-indigo-500/30">{blogDetails.field}</p>
            <p className="text-gray-500">{blogDetails?.datePublished}</p>
            <p className="text-gray-500">{blogDetails?.readTime}</p>
          </div>
        </div>
        <h1 className="text-3xl font-medium leading-relaxed">{blogDetails?.header}</h1>
        {/* Image */}
        <figure className="min-h-58 rounded-xl">
          <img className="min-h-58 " src={blogDetails?.image} alt={blogDetails?.research} />
        </figure>
      </header>

      {/* Body */}
      <section className="flex flex-col pt-4 space-y-3 leading-relaxed text-gray-500">
        <p>{blogDetails.paragraph1}</p>
        <br />
        <p>{blogDetails.paragraph2}</p>
        <br />
        <p>{blogDetails.paragraph3}</p>
        <br />
        <p>{blogDetails.paragraph4}</p>
      </section>
    </main>
  )
}
