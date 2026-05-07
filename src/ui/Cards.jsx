import { motion } from "framer-motion";
import { GrFavorite } from "react-icons/gr";
import { GoArrowRight } from "react-icons/go";
import { LuBrain } from "react-icons/lu";
import { Link } from "react-router-dom";
import { LuBone } from "react-icons/lu";
import { LuBaby } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { GoGraph } from "react-icons/go";

const cards = [
    {
        id: 1,
        header: "Cardiology",
        smallText:
            "Advanced cardiac care with state-of-the-art diagnostics and interventional procedures.",
        time: "Next available: Today, 2:45 PM",
        icon: <GrFavorite size={24} />,
        gradient: "from-[#0f172a] via-[#1e293b] to-[#334155]",
    },
    {
        id: 2,
        header: "Neurology",
        smallText:
            "Comprehensive neurological evaluation, treatment, and rehabilitation services.",
        time: "Next available: Today, 4:00 PM",
        icon: <LuBrain size={24} />,
        gradient: "from-[#0b3b5a] via-[#1d4ed8] to-[#2563eb]",
    },
    {
        id: 3,
        header: "Orthopedics",
        smallText:
            "Expert musculoskeletal care from diagnosis through recovery and rehabilitation.",
        time: "Next available: Tomorrow, 9:15 AM",
        icon: <LuBone size={24} />,
        gradient: "from-[#064e3b] via-[#047857] to-[#10b981]",
    },
    {
        id: 4,
        header: "Pediatrics",
        smallText:
            "Dedicated child-focused care in a comfortable and reassuring environment.",
        time: "Next available: Today, 3:30 PM",
        icon: <LuBaby size={24} />,
        gradient: "from-[#4c1d95] via-[#7c3aed] to-[#a855f7]",
    },
    {
        id: 5,
        header: "Ophthalmology",
        smallText:
            "Precision eye care including surgical and non-surgical vision treatments.",
        time: "Next available: Tomorrow, 11:00 AM",
        icon: <LuEye size={24} />,
        gradient: "from-[#1e3a8a] via-[#0369a1] to-[#0ea5e9]",
    },
    {
        id: 6,
        header: "Diagnostics",
        smallText:
            "Full-spectrum laboratory and imaging services for accurate, rapid results.",
        time: "Next available: Today, 1:00 PM",
        icon: <GoGraph size={24} />,
        gradient: "from-[#111827] via-[#374151] to-[#6b7280]",
    },
];

export default function Cards() {
    return (
        <div className="w-full min-h-screen pt-10 px-4 flex flex-col gap-4 bg-[#f8fafc]">

            {/* Header */}
            <section className="min-h-26 px-4 py-6 flex flex-col gap-4 min-[800px]:flex-row min-[800px]:items-center justify-between">
                <div className="flex flex-col gap-3">
                    <p className="font-medium text-slate-500 text-xs tracking-[0.3em]">
                        OUR SPECIALTIES
                    </p>
                    <h3 className="text-3xl font-semibold text-slate-900">
                        Comprehensive care across disciplines
                    </h3>
                </div>

                <Link to={"/services"} className="flex items-center gap-2 font-medium text-blue-700">
                    View all services <GoArrowRight />
                </Link>
            </section>

            {/* Cards */}
            <section className="flex flex-col gap-8 px-4 min-[800px]:grid min-[800px]:grid-cols-2">

                {cards.map((card, index) => (
                    <motion.div
                        key={card.id}
                        initial={{ opacity: 0, y: 60, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            delay: index * 0.12,
                            duration: 0.8,
                        }}
                        whileHover={{
                            y: -10,
                            boxShadow: "0px 30px 70px rgba(2,6,23,0.25)",
                        }}
                        className={`relative overflow-hidden flex flex-col gap-4 rounded-3xl min-h-[210px] p-8 text-white bg-gradient-to-br ${card.gradient} border border-white/10`}
                    >
                        {/* glow */}
                        <div className="absolute -top-10 -right-10 w-44 h-44 bg-white/10 blur-3xl rounded-full"></div>

                        {/* icon */}
                        <span className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center w-14 h-14 text-white">
                            {card.icon}
                        </span>

                        <h4 className="relative z-10 text-xl font-semibold">
                            {card.header}
                        </h4>

                        <p className="relative z-10 text-sm text-white/80 leading-relaxed">
                            {card.smallText}
                        </p>

                        <p className="relative z-10 text-sm font-semibold text-white/90 mt-auto">
                            {card.time}
                        </p>
                    </motion.div>
                ))}
            </section>
        </div>
    );
}