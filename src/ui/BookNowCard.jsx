import { motion } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

export default function BookNowCard() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-[#f4f7fb] w-full min-h-69 px-4 pb-6 min-[800px]:pt-10"
        >
            <motion.div
                initial={{ opacity: 0, y: 80, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                    y: -6,
                    boxShadow: "0px 30px 80px rgba(15,23,42,0.15)",
                }}
                className="rounded-[2rem] bg-gradient-to-br from-[#1e3a5f] via-[#1e40af] to-[#2563eb] text-white items-center px-4 py-10 flex flex-col gap-5 min-h-full border border-white/10 relative overflow-hidden"
            >
                {/* Decorative Glow */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

                <motion.h2
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.2,
                        duration: 0.8,
                    }}
                    className="min-[500px]:w-full font-medium text-center w-[261.333px] text-3xl md:text-4xl font-display text-primary-foreground mb-4 relative z-10"
                >
                    Ready to take control of your health?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.35,
                        duration: 0.8,
                    }}
                    className="text-center text-white/80 mb-8 max-w-lg mx-auto w-full relative z-10"
                >
                    Schedule your consultation with a specialist today.
                    Same-day appointments available.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay: 0.5,
                        duration: 0.7,
                    }}
                    whileHover={{
                        scale: 1.05,
                    }}
                    whileTap={{
                        scale: 0.97,
                    }}
                    className="relative z-10"
                >
                    <Link
                        to="/appointment"
                        className="flex bg-white text-[#0f172a] items-center gap-2 w-40 justify-center py-3 text-center rounded-full font-semibold shadow-lg"
                    >
                        Book Now <GoArrowRight size={20} />
                    </Link>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}