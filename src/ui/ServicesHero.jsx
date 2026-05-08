import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { LuBrain } from "react-icons/lu";
import { LuBone } from "react-icons/lu";
import { LuBaby } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";
import { BiInjection } from "react-icons/bi";
import { PiMicroscopeLight } from "react-icons/pi";
import { CiStethoscope } from "react-icons/ci";
import { MdArrowRightAlt } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useServicesHero } from "../hooks/useServicesHero";
import { useEffect } from "react";

const cards = [
  {
    id: 1,
    icon: <CiHeart className="text-blue-500" size={24} />,
    field: "specialty",
    header: "Cardiology",
    detail: "Advanced cardiac care with state-of-the-art diagnostics and interventional procedures.",
    date: "Next: Today, 2:45 PM",
    path: "/",
  },
  {
    id: 2,
    icon: <LuBrain className="text-blue-500" size={24} />,
    field: "specialty",
    header: "Neurology",
    detail: "Comprehensive neurological evaluation, treatment, and rehabilitation services.",
    date: "Next: Today, 4:00 PM",
    path: "/",
  },
  {
    id: 3,
    icon: <LuBone className="text-blue-500" size={24} />,
    field: "specialty",
    header: "Orthopedics",
    detail: "Expert musculoskeletal care from diagnosis through recovery and rehabilitation.",
    date: "Next: Tomorrow, 9:15 AM",
    path: "/",
  },
  {
    id: 4,
    icon: <LuBaby className="text-blue-500" size={24} />,
    field: "primary",
    header: "Pediatrics",
    detail: "Dedicated child-focused care in a comfortable and reassuring environment.",
    date: "Next: Today, 3:30 PM",
    path: "/",
  },
  {
    id: 5,
    icon: <FaRegEye className="text-blue-500" size={24} />,
    field: "specialty",
    header: "Ophthalmology",
    detail: "Precision eye care including surgical and non-surgical vision treatments.",
    date: "Next: Tomorrow, 11:00 AM",
    path: "/",
  },
  {
    id: 6,
    icon: <SlGraph className="text-blue-500" size={24} />,
    field: "diagnostics",
    header: "Diagnostics",
    detail: "Full-spectrum laboratory and imaging services for accurate, rapid results.",
    date: "Next: Today, 1:00 PM",
    path: "/",
  },
  {
    id: 7,
    icon: <CiStethoscope className="text-blue-500" size={24} />,
    field: "primary",
    header: "Internal Medicine",
    detail: "Holistic adult primary care addressing chronic conditions and preventive wellness.",
    date: "Next: Today, 1:00 PM",
    path: "/",
  },
  {
    id: 8,
    icon: <PiMicroscopeLight className="text-blue-500" size={24} />,
    field: "diagnostics",
    header: "Pathology",
    detail: "Advanced tissue analysis and molecular diagnostics for precise medical decisions.",
    date: "Next: Tomorrow, 10:00 AM",
    path: "/",
  },
  {
    id: 9,
    icon: <BiInjection className="text-blue-500" size={24} />,
    field: "specialty",
    header: "Immunology",
    detail: "Allergy testing, immunotherapy, and autoimmune disorder management.",
    date: "Next: Tomorrow, 2:00 PM",
    path: "/",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0, y: -20, scale: 0.95,
    transition: { duration: 0.2 },
  },
};

const filterLabels = {
  all: "All",
  primary: "Primary",
  specialty: "Specialty",
  diagnostics: "Diagnostics",
};


export default function ServicesHero() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const { filter, setFilter, filteredCards = [] } = useServicesHero(cards);

  return (
    <div className="w-full min-h-screen pt-10 px-4 py-6 flex flex-col gap-8">

      {/* HEADER */}
      <div className="flex flex-col gap-5">
        <section className="flex flex-col gap-2">
          <p className="font-medium text-blue-600 text-xs tracking-widest">
            SPECIALTIES
          </p>
          <h1 className="font-semibold text-4xl">
            Our medical services
          </h1>
        </section>
        <p className="text-gray-500 max-w-xl">
          From primary care to advanced specialty treatments, our
          integrated departments deliver coordinated, evidence-based care.
        </p>
      </div>

      {/* FILTER BUTTONS */}
      <div className="inline-flex items-center gap-1 p-1 bg-gray-100/80 border border-gray-200/80 rounded-xl w-fit flex-wrap">
        {["all", "primary", "specialty", "diagnostics"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`
              relative px-4 py-2 text-xs font-semibold rounded-lg cursor-pointer
              transition-all duration-200 active:scale-95
              ${filter === item
                ? "bg-white text-slate-800 shadow-sm shadow-black/10 border border-gray-200/80"
                : "text-gray-400 hover:text-gray-600 hover:bg-white/60"
              }
            `}
          >
            {filter === item && (
              <span className="absolute left-2.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-500" />
            )}
            <span className={filter === item ? "pl-3" : ""}>
              {filterLabels[item]}
            </span>
          </button>
        ))}
      </div>

      {/* CARDS */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="wait">
          {filteredCards?.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
              }}
              className="border bg-white border-gray-200 rounded-xl p-6 flex flex-col gap-4 transition-all"
            >
              <span className="p-2 w-fit rounded-lg bg-indigo-100">
                {card.icon}
              </span>

              <p className="uppercase text-gray-400 text-[10px] tracking-widest">
                {card.field}
              </p>

              <h3 className="font-semibold text-lg">
                {card.header}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                {card.detail}
              </p>

              <div className="flex justify-between items-center mt-auto">
                <p className="text-xs font-medium text-blue-500">
                  {card.date}
                </p>
                <Link className="flex items-center gap-1 text-blue-500 text-xs font-medium">
                  View <MdArrowRightAlt size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

    </div>
  );
}