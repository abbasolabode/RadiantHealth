import { motion } from "framer-motion";

const numCards = [
    {
        id: 1,
        num: "30+",
        text: "Years of Excellence"
    },
    {
        id: 2,
        num: "200+",
        text: "Specialist Physicians"
    },
    {
        id: 3,
        num: "50K+",
        text: "Patients Annually"
    },
    {
        id: 4,
        num: "98%",
        text: "Satisfaction Rate"
    },
];

export default function NumCards() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
            className="w-full min-h-40 bg-gray-300/20"
        >
            <div className="py-16 px-6 grid grid-cols-2 gap-8 items-center min-[800px]:flex min-[800px]:items-center min-[800px]:justify-center min-[800px]:space-x-8">
                
                {numCards.map((card, index) => (
                    <motion.div
                        key={card.id}
                        initial={{ opacity: 0, y: 60, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: index * 0.15,
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={{
                            y: -8,
                            scale: 1.04,
                        }}
                        className="flex flex-col min-[800px]:gap-2"
                    >
                        <motion.h4
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                delay: index * 0.15 + 0.2,
                                duration: 0.6,
                                type: "spring",
                                stiffness: 120,
                            }}
                            className="text-3xl font-bold text-center text-blue-500 min-[800px]:text-4xl"
                        >
                            {card.num}
                        </motion.h4>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{
                                delay: index * 0.15 + 0.35,
                                duration: 0.6,
                            }}
                            className="text-xs text-center text-gray-500 min-[800px]:text-base font-medium"
                        >
                            {card.text}
                        </motion.p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}