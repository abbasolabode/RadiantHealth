import { Link, NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navLinks = [
    { id: 1, label: "Home", path: "/home" },
    { id: 2, label: "Services", path: "/services" },
    { id: 3, label: "Appointment", path: "/appointment" },
    { id: 4, label: "Blog", path: "/blog" },
    { id: 5, label: "About", path: "/about" },
    { id: 6, label: "Contact", path: "/contact" },
    { id: 7, label: "Doctors", path: "/doctors" },
    { id: 8, label: "Testimonials", path: "/testimonials" }
];



// Animation variants
const navVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
    exit: { y: "-100%", opacity: 0, transition: { duration: 0.4 } },
};

const linkVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};



export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = function () {
        setIsOpen(true)
    }

    return (
        <header className="w-full fixed top-0 left-0 z-50 bg-white/50 backdrop-blur-lg border-b/50 border-stone-700">
            <div className="w-full lg:hidden flex justify-between shadow-md bg-white top-0 items-center gap-50 px-4 min-h-[63.33px]  ">
                <Link to="/home" className="text-base font-bold">
                    Aestheris<span className="text-blue-500">Health</span>
                </Link>
                <>
                    {!isOpen ? <button onClick={handleOpen} className="w-7.5 h-7.5 flex items-center justify-center">
                        <CiMenuBurger size={24} />
                    </button>
                        :
                        <button onClick={() => setIsOpen(false)} className="text-3xl flex justify-end text-gray-500"><IoMdClose size={26} /></button>}
                </>
            </div>

            {/*This is a sidebar for the mobile screen  */}
            {/* Navigation */}
            <AnimatePresence>
                {isOpen && <motion.nav
                    variants={navVariants}
                    initial="hidden"
                    aria-label="Mobile navigation"
                    animate="visible"
                    exit="exit"
                    className="min-[1024px]:hidden top-0 pt-7 bg-white  w-full px-4 min-h-100 flex flex-col gap-5">
                    {/* Links */}
                    <ul className="w-full flex flex-col gap-5">
                        {navLinks.map(link => (
                            <li key={link.id} className="font-semibold text-gray-400" variants={linkVariants}>
                                <Link to={link.path}>{link.label}</Link>
                            </li>
                        ))}

                    </ul>
                    {/* BUtton to navigate */}
                    <Link to="/" className="border text-white bg-blue-500 py-2 text-center font-semibold rounded-full w-full">Patient Portal</Link>
                </motion.nav>}
            </AnimatePresence>



            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 justify-between w-full px-5 py-5  lg:z-0">
                <Link to="/home" className="text-base font-bold">
                    Aestheris<span className="text-blue-500">Health</span>
                </Link>
                <ul className="flex items-center justify-center gap-6 text-gray-400 font-medium">

                    {navLinks.map(link => (
                        <li key={link.id}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    isActive ? "text-blue-500 font-bold" : "text-gray-500"
                                }
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
