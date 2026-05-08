import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Herosection() {
    const navigate = useNavigate();

    return (
        <main className="min-h-screen pt-10 space-y-16 md:pb-30 md:flex-row md:items-center  flex flex-col lg:flex-row lg:items-center gap-6 px-4 min-[425px]:gap-8 lg:z-0">

            <motion.section
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="w-full  h-[530.667px] md:w-1/2 flex flex-col gap-6 py-4"
            >
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    className="font-semibold text-blue-500"
                >
                    Established 1994 — Excellence in Care
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.35,
                        duration: 0.9,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="w-full min-[375px]:w-[371.583px] font-medium text-5xl leading-[1.05] min-[500px]:w-full md:text-7xl"
                >
                    Human-centric medicine{" "}
                    <span className="text-gray-500">
                        powered by precision.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55, duration: 0.8 }}
                    className="w-full min-[375px]:w-[327.333px] text-lg leading-relaxed max-w-xl mb-8 min-[500px]:w-full text-gray-500"
                >
                    Access world-class specialists, real-time health data,
                    and seamless scheduling in one unified platform.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.75, duration: 0.8 }}
                    className="flex flex-col gap-5 w-full"
                >
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            y: -2,
                            boxShadow: "0px 12px 30px rgba(37,99,235,0.25)",
                        }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => navigate("/appointment")}
                        className="tracking-widest text-white bg-blue-600 whitespace-nowrap rounded-full w-full min-[375px]:w-[246.771px] justify-center font-semibold py-3 px-6 flex items-center gap-2"
                    >
                        Book Appointment <FiArrowRight />
                    </motion.button>

                    <motion.button
                        whileHover={{
                            scale: 1.04,
                            y: -2,
                            backgroundColor: "#f9fafb",
                        }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => navigate("/doctors")}
                        className="border mb-20 border-gray-400/50 w-full text-black tracking-widest whitespace-nowrap rounded-full min-[375px]:w-[200.771px] justify-center font-semibold py-3 px-6 flex items-center gap-2"
                    >
                        View Specialist
                    </motion.button>
                </motion.div>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, x: 80, scale: 0.92 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                    duration: 1.2,
                    delay: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="min-[500px]:-mt-20 min-[800px]:mt-2"
            >
                <motion.img
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="min-h-[389.58px] md:w-1/2 md:min-w-full md:object-cover md:min-h-[600.58px] lg:min-h-[600.58px] w-full aspect-16/10 object-cover rounded-md shadow-elevated"
                    src="/images/hospital-building2.jpg"
                    alt="hero image"
                />
            </motion.section>
        </main>
    );
}