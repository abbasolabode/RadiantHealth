import { motion } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import { CiShoppingTag } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";
import { Link } from "react-router-dom";

const cards = [
  {
    id: 1,
    time: "6 min read",
    area: "RESEARCH",
    header: "Advances in Minimally Invasive Cardiac Surgery",
    smallText:
      "Our cardiology team has pioneered a new approach to valve replacement that reduces recovery time by 40%.",
    date: "Mar 15, 2026",
  },

  {
    id: 2,
    time: "4 min read",
    area: "WELLNESS",
    header: "Understanding the Link Between Sleep and Immune Health",
    smallText:
      "New research reveals critical connections between sleep patterns and immune system resilience.",
    date: "Mar 15, 2026",
  },

  {
    id: 3,
    time: "7 min read",
    area: "Technology",
    header: "AI-Assisted Diagnostics: Accuracy Rates Surpass 97%",
    smallText:
      "Machine learning models deployed in our diagnostics lab are now matching specialist-level accuracy.",
    date: "Mar 5, 2026",
  },
];

export default function HomeBlog() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="w-full min-h-screen flex px-4 py-8 flex-col gap-5 bg-stone-200/50"
    >
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="min-h-26 py-5 px-4 flex flex-col gap-4"
      >
        <div className="flex flex-col gap-3">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0px" }}
            whileInView={{ opacity: 1, letterSpacing: "4px" }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-medium uppercase text-[#64748b] text-xs tracking-widest pt-10"
          >
            News & Insights
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl font-semibold text-[#0f172a]"
          >
            Latest from our blog
          </motion.p>
        </div>

        <motion.div
          whileHover={{ x: 6 }}
          transition={{ type: "spring", stiffness: 250 }}
        >
          <Link className="flex items-center gap-2 font-medium text-[#1e3a5f]">
            View all articles <GoArrowRight />
          </Link>
        </motion.div>
      </motion.section>

      {/* Blog Cards */}
      <section className="min-[800px]:grid min-[800px]:grid-cols-2 flex flex-col items-center min-h-96 gap-8 px-4">
        {cards?.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              delay: index * 0.15,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -10,
              transition: { duration: 0.3 },
              boxShadow: "0px 25px 60px rgba(15,23,42,0.10)",
            }}
            className="justify-center min-[800px]:h-70 min-[500px]:space-y-3 min-[500px]:h-60 w-full flex flex-col gap-4 h-70 py-6 px-5 rounded-3xl border border-[#dbe4ee] bg-[#ffffff]"
          >
            {/* Top Tags */}
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: index * 0.15 + 0.2,
                duration: 0.6,
              }}
              className="flex gap-2 items-center"
            >
              <p className="flex items-center text-[#1d4ed8] bg-[#dbeafe] gap-1 px-3 py-1 rounded-full text-xs font-semibold">
                <CiShoppingTag size={18} />
                {card.area.toLocaleUpperCase()}
              </p>

              <p className="flex items-center gap-1 px-3 py-1 text-[#64748b] text-xs font-medium">
                <CiTimer size={18} />
                {card.time}
              </p>
            </motion.span>

            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15 + 0.3,
                duration: 0.7,
              }}
              className="text-xl font-semibold leading-snug text-[#0f172a]"
            >
              {card.header}
            </motion.h3>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: index * 0.15 + 0.4,
                duration: 0.7,
              }}
              className="text-sm leading-relaxed text-[#475569]"
            >
              {card.smallText}
            </motion.p>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: index * 0.15 + 0.5,
                duration: 0.7,
              }}
              className="flex justify-between items-center mt-auto"
            >
              <p className="text-sm text-[#64748b]">{card.date}</p>

              <motion.div
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                <Link to={"/blog"} className="flex items-center gap-2 text-sm font-medium text-[#1e40af]">
                  Read more <GoArrowRight />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </section>
    </motion.div>
  );
}