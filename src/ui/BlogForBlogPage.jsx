import { useEffect, useState } from "react";
import { CiShoppingTag } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CiTimer } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useGetBlog } from "../hooks/useGetBlog";
import Spinner from "./Spinner";
import Button from "../reuseables/Button";




export default function BlogForBlogPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [inputValue, setInputValue] = useState("all");
    //fetch blog data using the custom hook useGetBlog
    const { data: blogData = [], isLoading } = useGetBlog();

    //filter the blog data based on the input value, allowing for an "all" option to show all blog posts
    const filteredBlog = blogData?.filter(blogCard => {
        // if no filter is selected, show all cards
        if (inputValue === "all") return blogCard;
        // otherwise, only show cards that match the selected filter
        const getFilteredValues = blogCard.field.toLowerCase().includes(inputValue);
        return getFilteredValues;
    });


    //If is loading return spinner
    if (isLoading) return <Spinner />

    const baseStyles = `px-4 py-2 text-sm font-medium rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:shadow-[0_6px_18px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 active:scale-95 active:shadow-[0_2px_6px_rgba(0,0,0,0.12)]`;
    const activeStyles = "bg-black text-white border-black shadow-[0_6px_18px_rgba(0,0,0,0.2)]";

    return (
        <main className="w-full min-h-screen px-4 flex flex-col space-y-8">
            {/* Hero section */}
            <header className="w-full min-h-41.5">
                <section className="w-full min-h-41.5 flex flex-col py-6 justify-center space-y-4">
                    <p className="text-blue-500 text-[12px] font-semibold">News & Insights</p>
                    <h1 className="text-[36px] font-semibold">Latest from Aetheris</h1>
                    <p className="text-gray-500">Stay informed with the latest medical research, wellness tips, and institutional updates from our team.</p>
                </section>
            </header>


            {/* Buttons */}
            <Button activeStyles={activeStyles} baseStyles={baseStyles} inputValue={inputValue} setInputValue={setInputValue} />

            {/* Cards section */}
            <section className="min-h-220.5 w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 ">
                {filteredBlog?.map(blog => (
                    <div
                        key={blog.id}
                        className="flex rounded-xl h-120.75 flex-col gap-4 p-5 
                        shadow-[0_4px_20px_rgba(0,0,0,0.08)] 
                        hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] 
                        transition-all duration-300 ease-out 
                        hover:-translate-y-1"
                    >
                        {/* Image */}
                        <figure className="min-h-48 rounded-xl overflow-hidden">
                            <img src={blog.image} alt="" className="w-full h-full object-cover" />
                        </figure>

                        {/* Flex container */}
                        <div className="w-full flex items-center space-x-6">
                            <div className="flex items-center rounded-full bg-indigo-300 text-white px-2 py-1 space-x-1 ">
                                <CiShoppingTag size={20} />
                                <p className="font-medium text-[10px] tracking-wider uppercase">{blog.field}</p>
                            </div>

                            <div className="flex items-center space-x-1 ">
                                <CiTimer size={16} />
                                <p className="font-medium text-[12px] tracking-wider text-gray-500 ">{blog?.timeRead}</p>
                            </div>
                        </div>

                        {/* Header */}
                        <h3 className="font-medium leading-snug text-xl">{blog.header}</h3>

                        {/* Paragraph */}
                        <p className="text-[14px] line-clamp-3 font-normal text-gray-400">{blog.paragraph1}</p>

                        {/* Time + read more => */}
                        <div className="flex justify-between items-center w-full ">
                            <span className="text-[12px] text-blue-600 font-medium ">{blog?.datePublished}</span>
                            <Link to={`/blogDetails/${blog.id}`} className="text-blue-500 font-medium flex items-center text-[12px]">
                                Read <IoIosArrowRoundForward size={20} />
                            </Link>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    )
};