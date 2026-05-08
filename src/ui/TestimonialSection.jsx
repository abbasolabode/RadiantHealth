import { FaQuoteRight } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import Cards from "./Cards";
import { useEffect } from "react";
const contents = [
    {
        id: 1,
        num: "4.9",
        title: "Average Rating",
    },
    {
        id: 2,
        num: "12K+",
        title: "Patients Reviews",
    },
    {
        id: 3,
        num: "98%",
        title: "Would Recommend",
    },
    {
        id: 4,
        num: "#1",
        title: "Patients Satisfaction",
    },
]


const testimonialsCards = [
    {
        id: 1,
        text: "After my cardiac procedure at Aetheris, I was walking within 48 hours. The team explained every step with patience and clarity. I've never felt more cared for in a medical setting.",
        name: "Margaret H.",
        department: "Cardiology. February 2026",
        icon: <IoIosStar className="text-gray-500/50 mr-1" />,
        rating: 5,
    },
    {
        id: 2,
        text: "Dr. Kim performed my knee replacement and the results have been extraordinary. Six weeks post-surgery, I'm already back to daily walks. The physical therapy team was equally outstanding.",
        name: "David L.",
        department: "Orthopedics · January 2026",
        icon: <IoIosStar className="text-gray-500/50 mr-1" />,
        rating: 5,
    },

    {
        id: 3,
        text: "The diagnostic accuracy at Aetheris is remarkable. After years of unexplained symptoms, Dr. Patel identified the issue in my first visit. I finally have answers and a clear treatment path.",
        name: "Priya S.",
        department: "Neurology · March 2026",
        icon: <IoIosStar className="text-gray-500/50 mr-1" />,
        rating: 5,
    },
]



const moreTestimonial = [
    {
        id: 1,
        text: "Bringing my daughter here was the best decision. Dr. Johansson has a gift with children — my daughter actually looks forward to her appointments. The facility is bright, clean, and welcoming.",
        name: "James T.",
        department: "Pediatrics · February 2026",
        icon: <IoIosStar className="text-gray-500/50 mr-1" />,
    },

    {
        id: 2,
        text: "Comprehensive annual checkup with real follow-through. Dr. Santos identified early markers that other physicians had missed. The patient portal makes accessing results effortless.",
        name: "Sarah M.",
        department: "Internal Medicine · January 2026",
        icon: <IoIosStar className="text-gray-500/50 mr-1" />,
    },

    {
        id: 3,
        text: "LASIK procedure was seamless from consultation to recovery. Dr. Park's precision and the advanced equipment gave me complete confidence. 20/15 vision three weeks later.",
        name: "Robert K.",
        department: "Ophthalmology · December 2025",
        icon: <IoIosStar className="text-gray-500/50 mr-1" />,
    },
    {
        id: 4,
        text: "The imaging center is state-of-the-art. Results were available on my portal within hours, not days. The technicians were professional and made an anxious experience much easier.",
        name: "Elena V",
        department: "Diagnostics · January 2026",
        icon: <IoIosStar className="text-gray-500/50 mr-1" />,
    },

    {
        id: 4,
        text: "As a heart patient for over a decade, I can say the level of care at Aetheris is in a different league. The remote monitoring through their digital platform gives me peace of mind daily.",
        name: "Michael R.",
        department: "Cardiology · November 2025",
        icon: <IoIosStar className="text-gray-500/50 mr-1" />,
    },

    {
        id: 5,
        text: "Dr. O'Brien's approach to my autoimmune condition has been transformative. For the first time in years, my symptoms are well-managed and I understand my treatment plan fully.",
        name: "Linda C.",
        department: "Immunology · March 2026",
        icon: <IoIosStar className="text-gray-500/50 mr-1" />,
    },
]

export default function TestimonialSection() {
      useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    
    return (
        <main className="min-h-screen px-4 pb-8 pt-10">
            {/* Testimonial Header */}
            <header className="flex flex-col space-y-4">
                <p className="text-primary font-medium text-blue-600 text-xs tracking-widest uppercase ">testimonials</p>
                <h1 className="text-4xl md:text-5xl font-display font-medium text-foreground mt-2 mb-4">What our patients say</h1>
                <p className="text-muted-foreground text-gray-400 max-w-2xl mb-16 leading-relaxed">Real stories from patients who have experienced the Aetheris difference. Their words guide our commitment to excellence.Real stories from patients who have experienced the Aetheris difference. Their words guide our commitment to excellence.</p>
            </header>

            {/* Testimonial contents */}
            <section>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 p-8 bg-card rounded-2xl shadow-soft shadow-md bg-white/10 ">
                    {contents?.map(content => (
                        <div key={content.id} className="text-center">
                            <p className="text-2xl text-blue-600/80 md:text-3xl font-display font-semibold text-primary tabular-nums">{content.num}</p>
                            <p className="text-xs font-medium text-gray-500 text-muted-foreground mt-1 ">{content.title}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Cards */}
            <section>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16 space-y-3">
                    {testimonialsCards?.map(Cards => (
                        <div key={testimonialsCards.id} className="bg-blue-500 pt-4 text-white text-primary-foreground p-8 rounded-2xl relative">
                            <FaQuoteRight className="text-3xl text-white/20" />
                            <p className="text-sm leading-relaxed pt-3 mb-6 opacity-90">{Cards.text}</p>
                            <div className="flex items-center pb-4">
                                <div className="flex items-center gap-1 mb-4">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <IoIosStar
                                            key={index}
                                            className="text-gray-400 text-xl"
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="border-t  border-primary-foreground/20 pt-6">
                                <p className="text-sm font-medium">{Cards.name}</p>
                                <p className="text-xs opacity-70">{Cards.department}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* Section for more cards */}
            <section>
                <div className="flex flex-col space-y-7">
                    <h2 className="text-2xl font-display font-medium text-foreground mb-8">More Patients stories</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16 space-y-3">
                        {moreTestimonial?.map(card => (
                            <div className="flex flex-col gap-4 bg-white shadow-md pt-4 text-gray-400 text-primary-foreground p-8 rounded-2xl relative">
                                <div className="flex items-center gap-1 mb-4">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <IoIosStar
                                            key={index}
                                            className="text-gray-400 text-xl"
                                        />
                                    ))}
                                </div>
                                <p className="text-sm font-medium">{card.text}</p>
                                <div className="border-t flex flex-col gap-3 border-primary-foreground/20 pt-6">
                                    <p className="text-sm font-medium text-black">{card.name}.</p>
                                    <p className="text-xs opacity-70">{card.department}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
