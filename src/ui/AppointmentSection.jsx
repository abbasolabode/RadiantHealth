import { motion } from "framer-motion";
import { MdLibraryBooks, MdSecurity, MdStarRate } from "react-icons/md";
import { CiCalendar, CiPhone, CiStar, CiStethoscope, CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";
import { LuBone, LuBrain, LuMicroscope } from "react-icons/lu";
import { FaChild, FaRegFileAlt } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { SlEnvolopeLetter, SlGraph } from "react-icons/sl";
import { MdOutlineSecurity } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { LiaArrowRightSolid } from "react-icons/lia";
import { useEffect, useState } from "react";
import { useDoctors } from "../hooks/useDoctors";
import { useForm } from "react-hook-form";
import Spinner from "./Spinner";
import SelectTimeSlotForAppointment from "../reuseables/SelectTimeSlotForAppointment";
import { useAppointment } from "../hooks/useAppointment";
import AppointmentForm from "./AppointmentForm";

const specialties = [
    {
        id: 1,
        name: "Cardiology",
        description: "Heart & vascular care",
        icon: <CiHeart size={20} />
    },
    {
        id: 2,
        name: "Neurology",
        description: "Brain & nervous system",
        icon: <LuBrain size={20} />
    },
    {
        id: 3,
        name: "Orthopedics",
        description: "Bone & joint health",
        icon: <LuBone size={20} />
    },
    {
        id: 4,
        name: "Pediatrics",
        description: "Children's healthcare",
        icon: <FaChild size={20} />
    },
    {
        id: 5,
        name: "Ophthalmology",
        description: "Eye care & surgery",
        icon: <FaRegEye size={20} />
    },
    {
        id: 6,
        name: "Internal Medicine",
        description: "General adult care",
        icon: <SlGraph size={20} />,
    },
    {
        id: 7,
        name: "Immunology",
        description: "Immune disorders",
        icon: <MdOutlineSecurity size={20} />,
    },
    {
        id: 8,
        name: "Diagnostics",
        description: "Lab & Imaging",
        icon: <LuMicroscope size={20} />,
    },
];

/* Time */
const morningTimeSlots = [
    {
        id: 1,
        time: "9:00 AM",
    },

    {
        id: 2,
        time: "9:30 AM",
    },

    {
        id: 3,
        time: "10:00 AM",
    },
    {
        id: 4,
        time: "10:30 AM",
    },
    {
        id: 5,
        time: "11:00 AM",
    },
    {
        id: 6,
        time: "11:30 AM",
    },
]



const afternoonTimeSlots = [
    {
        id: 1,
        time: "1:00 PM",
    },

    {
        id: 2,
        time: "1:30 PM",
    },

    {
        id: 3,
        time: "2:00 PM",
    },
    {
        id: 4,
        time: "2:30 PM",
    },
    {
        id: 5,
        time: "3:00 PM",
    },
    {
        id: 6,
        time: "3:30 PM",
    },
    {
        id: 7,
        time: "4:00 PM",
    },

    {
        id: 8,
        time: "4:30 PM",
    },
]

//const { register, handleSubmit, reset, formState: { errors, isSubmitting }, } = useForm()
export default function AppointmentSection() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const [inputDate, setInputDate] = useState("");
    const [confirmedDate, setConfirmedDate] = useState("");
    const [selectedTimeIdForMorning, setSelectedTimeIdForMorning] = useState("");
    const [selectedTimeIdForAfternoon, setSelectedTimeIdForAfternoon] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [selectedDoctor, setSelectedDoctor] = useState("");
    const [selectedSpecialty, setSelectedSpecialty] = useState("");
    const { doctors = [], isLoading } = useDoctors();
    const { mutate, isPending } = useAppointment();

    //useForm hook from react-hook-form could be used here for better form handling and validation, but for simplicity, I'm using basic state management and alerts for validation in this example.
    const { handleSubmit, formState: { errors, isSubmitting }, register, reset, } = useForm()

    const filteredDoctors = doctors.filter(doctor => {
        if (!selectedSpecialty) return false;
        //Converts the specialty string to lowercase
        const docSpecialty = doctor.specialty.toLowerCase();

        //Converts the selectedSpecialty string (state) to lowercase
        const selected = selectedSpecialty.toLowerCase();
        return docSpecialty === selected || docSpecialty.includes(selected);
    });


    function handleConfirm() {
        if (!inputDate) return alert("Please select a date before confirming.");
        setConfirmedDate(inputDate);
    }



    if (isLoading) return <Spinner />


    const onSubmit = (formData) => {
        if (!formData.fullName || !formData.email || !formData.phone || !formData.message) {
            return alert("Please fill in all required fields before submitting the form.");
        }

        if (!selectedSpecialty || !selectedDoctor || !confirmedDate || !selectedTime) return alert("Please provide the doctor's name, specialty, time and date");
        mutate({
            ...formData, selectedSpecialty, selectedDoctor, confirmedDate, selectedTime

        });
        console.log(formData, "form data on submit");
    }


    return (
        <main className=" w-full min-h-screen px-4 py-10 space-y-12">

            {/* Animation keyframes */}
            <style>{`
                @keyframes slideUpFade {
                    0% {
                        opacity: 0;
                        transform: translateY(24px) scale(0.97);
                        filter: blur(2px);
                    }
                    60% {
                        filter: blur(0px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0px) scale(1);
                        filter: blur(0px);
                    }
                }
                @keyframes shimmer {
                    0% { background-position: -200% center; }
                    100% { background-position: 200% center; }
                }
                .doctor-card-enter {
                    opacity: 0;
                    animation: slideUpFade 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                }
                .doctor-card-enter:hover .initials-badge {
                    background: linear-gradient(90deg, #bfdbfe, #93c5fd, #bfdbfe);
                    background-size: 200% auto;
                    animation: shimmer 1.5s linear infinite;
                }
            `}</style>

            <header className="flex flex-col items-center w-full ">
                <p className="border uppercase inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/50 text-white text-primary text-[11px] font-semibold mb-5 tracking-wider"><MdLibraryBooks size={20} /> book appointment </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold text-foreground tracking-tight mb-4">Schedule your visit</h1>
                <p className="text-center text-gray-500 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">From primary care to advanced specialty treatments, our integrated departments deliver coordinated, evidence-based care.</p>
            </header>

            {/* Content body */}
            <div className="md:flex-row items-center justify-center shadow-sm shadow-white min-h-screen flex flex-col gap-3 mb-5">
                {/* 01 - Specialty */}
                <section className="min-h-full w-full ">
                    <div className="flex  items-center gap-3 mb-5">
                        <span className="w-9 h-9 rounded-xl bg-blue-200 text-primary flex items-center justify-center text-white">
                            <CiStethoscope size={24} />
                        </span>
                        <div>
                            <p className="text-[10px] text-gray-400 tracking-wider font-semibold text-muted-foreground">01</p>
                            <h3 className="text-lg sm:text-xl font-display font-semibold text-foreground tracking-tight leading-tight">Choose a specialty</h3>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                        {specialties?.map((specialty, index) => (
                            <motion.button
                                key={specialty.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => setSelectedSpecialty(specialty.name)}
                                className={`border cursor-pointer border-blue-100 relative group p-4 rounded-xl text-left transition-all duration-300 overflow-hidden border-border/60 bg-background/40 hover:border-foreground/20 shadow-md hover:shadow-lg ${selectedSpecialty === specialty.name ? "border-red-200 bg-blue-300/20" : ""}`}
                            >
                                <div className="flex relative items-center justify-between gap-3">
                                    <span className={`w-10 h-10 rounded-xl flex items-center border justify-center mb-3 transition-colors border-blue-300 text-blue-200 ${selectedSpecialty === specialty.name ? "bg-blue-600/50 text-white" : ""}`}>
                                        {specialty.icon}
                                    </span>
                                    <span className={`${selectedSpecialty === specialty.name ? "bg-blue-600/50 text-white" : "bg-primary"} absolute p-0.5 border border-blue-300 text-blue-200 top-0 right-0 w-5 h-5 rounded-full flex items-center justify-center`}>
                                        <CiTimer size={20} />
                                    </span>
                                </div>
                                <h3 className="text-sm font-semibold ">{specialty.name}</h3>
                                <p className="text-xs text-muted-foreground mt-0.5 leading-snug text-gray-500">
                                    {specialty.description}
                                </p>
                            </motion.button>
                        ))}
                    </div>
                </section>

                {/* Section for displaying selected specialty details */}
                <section className="overflow-hidden shadow-sm flex flex-col gap-6 p-4 w-full lg:w-100">
                    <div className="space-y-6 border border-blue-300 pb-4 rounded-lg ">
                        <div className="p-2 bg-blue-200  rounded-lg">
                            <p className="text-blue-500 text-[11px] text-primary font-semibold uppercase tracking-wider mb-1.5">Your Booking</p>
                            <p className=" text-base font-display font-semibold text-foreground">{selectedSpecialty || "Start by choosing a specialty"}</p>
                        </div>
                        <div className="p-1 space-y-4">
                            <div className="flex items-start gap-3">
                                <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-primary text-white bg-blue-200"><LuMicroscope /></span>
                                <div className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">
                                    <p className="text-gray-400 text-[11px] text-muted-foreground uppercase tracking-wider font-medium">Specialty</p>
                                    <p className="text-sm mt-0.5 truncate text-foreground font-medium text-[11px]">{selectedSpecialty || "No specialty selected"}</p>
                                </div>
                            </div>

                            {/* Specialist */}
                            <div className="flex items-start gap-3">
                                <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-primary/10 text-primary text-white bg-blue-200"><CiUser /></span>
                                <div className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">
                                    <p className="text-gray-400 text-[11px] text-muted-foreground uppercase tracking-wider font-medium">Doctor</p>
                                    <p className="text-sm mt-0.5 truncate text-foreground font-medium text-[11px]">{selectedDoctor || "No doctor selected"}</p>
                                </div>
                            </div>

                            {/* Date */}
                            <div className="flex items-start gap-3">
                                <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-primary/10 text-primary text-white bg-blue-200"><CiCalendarDate /></span>
                                <div className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">
                                    <p className="text-gray-400 text-[11px] text-muted-foreground uppercase tracking-wider font-medium">Date</p>
                                    <p className="text-sm mt-0.5 truncate text-foreground font-medium text-[11px]">{confirmedDate || "No date selected"}</p>
                                </div>
                            </div>

                            {/* Time */}
                            <div className="flex items-start gap-3">
                                <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-primary/10 text-primary text-white bg-blue-200"><CiTimer /></span>
                                <div className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">
                                    <p className="text-gray-400 text-[11px] text-muted-foreground uppercase tracking-wider font-medium">Time</p>
                                    <p className="text-sm mt-0.5 truncate text-foreground font-medium text-[11px]">{selectedTime || "No time selected"}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border border-blue-300 min-h-50 rounded-lg pt-4 pl-1.5 shadow-sm shadow-white">
                        <div className="lg:block p-2 text-left">
                            <div className="flex items-center gap-3">
                                <span className="bg-blue-500/10 text-blue-400 rounded-lg p-1"><IoShieldCheckmarkOutline /></span>
                                <div>
                                    <p className="text-sm font-semibold">HIPAA Secure</p>
                                    <p className="text-xs text-gray-500">End-to-end encrypted</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:block p-2 text-left">
                            <div className="flex items-center gap-3">
                                <span className="bg-blue-500/10 text-blue-400 rounded-lg p-1"><CiStar /></span>
                                <div>
                                    <p className="text-sm font-semibold">Top-Rated Care</p>
                                    <p className="text-xs text-gray-500">4.9 average rating</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:block p-2 text-left">
                            <div className="flex items-center gap-3">
                                <span className="bg-blue-500/10 text-blue-400  rounded-lg p-1"><CiTimer /></span>
                                <div>
                                    <p className="text-sm font-semibold">Easy Reschedule</p>
                                    <p className="text-xs text-gray-500">Up to 20 before</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* 02 - Select a Specialist */}
            <section className="w-full">
                <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                        <span className="w-9 h-9 text-blue-800 rounded-xl bg-primary/10 bg-blue-200/80 flex items-center justify-center">
                            <CiUser />
                        </span>
                        <div>
                            <p className="text-[10px] font-md text-gray-500 uppercase tracking-wider font-semibold text">02</p>
                            <h3 className="text-lg sm:text-xl font-display font-semibold text-foreground tracking-tight leading-tight">Select a Specialist</h3>
                        </div>
                    </div>

                    <p className="text-gray-500 text-sm">{filteredDoctors.length > 0 ? selectedSpecialty : "No specialists available"}</p>
                </div>

                {/* Specialist Options */}
                {filteredDoctors?.length > 0 ? (
                    <div className="flex flex-col gap-4 w-full md:max-w-3xl lg:max-w-4xl lg:grid lg:grid-cols-2 ">
                        {filteredDoctors?.map((doctor, index) => {
                            const nameParts = doctor.name.split(" ");
                            const titles = ["Dr.", "Mr.", "Mrs.", "Ms."];
                            const initials = nameParts
                                .filter((p) => !titles.includes(p))
                                .map((p) => p[0].toUpperCase())
                                .join("");

                            return (
                                <motion.button
                                    key={doctor.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.35, delay: index * 0.05 }}
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setSelectedDoctor(doctor.name)}
                                    className="cursor-pointer doctor-card-enter group bg-blue-200/20 border-blue-500 flex h-30 px-3 py-3 rounded-3xl items-center justify-between border w-full transition-all duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-100 hover:-translate-y-0.5 active:scale-[0.99]"
                                >
                                    <div className="flex items-center gap-4 min-w-0">
                                        <span className="bg-blue-500/20 text-white border w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-bold shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-300 group-hover:bg-blue-50">
                                            {initials}
                                        </span>

                                        <div className="min-w-0">
                                            <p className="text-sm font-semibold text-foreground truncate transition-colors duration-200 group-hover:text-blue-600">
                                                {doctor.name}
                                            </p>
                                            <p className="text-xs text-muted-foreground mt-0.5 truncate text-left text-gray-600">
                                                {doctor.specialty}
                                            </p>

                                            <div className="flex items-center gap-2.5 mt-1.5 text-[11px]">
                                                <span className="flex items-center gap-1 font-semibold">
                                                    <MdStarRate className="text-yellow-600" />
                                                    {doctor.rating}
                                                </span>
                                                <span>{doctor.yearsOfExperience} yrs</span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="flex text-right shrink-0 bg-green-400/50 py-1 px-1.5 text-green-800 font-semibold rounded-full text-[12px] gap-2 items-center transition-all duration-300 group-hover:bg-green-400/70 group-hover:scale-105">
                                        <CiTimer />
                                        {doctor.calendar}
                                    </p>
                                </motion.button>
                            );
                        })}
                    </div>
                ) : <p className="h-30 rounded-lg  bg-blue-200/50 flex items-center justify-center text-blue-500/90 text-sm text-center">Pick a specialty above to see available doctors.</p>}
            </section>

            {/* Pick a date & Time */}
            <section className="space-y-6">
                <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                        <span className="w-9 h-9 text-blue-800 rounded-xl bg-primary/10 bg-blue-200/80 flex items-center justify-center">
                            <CiCalendar />
                        </span>
                        <div>
                            <p className="text-[10px] font-md text-gray-500 uppercase tracking-wider font-semibold text">03</p>
                            <h3 className="text-lg sm:text-xl font-display font-semibold text-foreground tracking-tight leading-tight">Pick a date & time</h3>
                        </div>
                    </div>
                </div>

                {/* Date */}
                <div className="px-2 rounded-xl bg-blue-400/20 space-y-2.5  w-full py-6 h-40 ">
                    <p className="uppercase text-gray-500 font-medium text-[14px] ">Date</p>
                    <div className="flex items-center gap-3">

                        {/* Date Input with calendar icon */}
                        <div className="relative flex items-center">
                            <svg
                                className="absolute left-3.5 text-slate-400 pointer-events-none"
                                width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            >
                                <rect x="3" y="4" width="18" height="18" rx="3" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            <input
                                type="date"
                                value={inputDate}
                                onChange={(e) => setInputDate(e.target.value)}
                                className="pl-10 w-40 pr-4 py-2.5 text-sm font-medium text-slate-900 bg-white border border-slate-200 rounded-xl cursor-pointer shadow-sm shadow-black/5 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all duration-150"
                            />
                        </div>

                        {/* Confirm Button */}
                        <button
                            onClick={handleConfirm}
                            className="flex items-center gap-1.5 cursor-pointer px-5 py-2.5 text-sm font-semibold text-white rounded-xl transition-all duration-150 bg-linear-to-br from-indigo-500 to-violet-500 shadow-md shadow-indigo-300 hover:shadow-lg hover:shadow-indigo-300 hover:brightness-105 active:scale-95"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            Confirm Date
                        </button>
                    </div>
                </div>

                {/* Time */}
                <div className="flex flex-col space-y-6 justify-between mb-5">
                    <div className="flex items-center gap-3">
                        <span className="w-9 h-9 text-blue-800 rounded-xl bg-primary/10 bg-blue-200/80 flex items-center justify-center">
                            <CiTimer />
                        </span>
                        <div>
                            <p className="text-[10px] font-md text-gray-500 uppercase tracking-wider font-semibold text">Time</p>
                        </div>
                    </div>
                  
                    <SelectTimeSlotForAppointment moment="Morning" morningTimeSlots={morningTimeSlots} selectedTimeIdForMorning={selectedTimeIdForMorning} setSelectedTimeIdForMorning={setSelectedTimeIdForMorning} setSelectedTime={setSelectedTime} selectedTime={selectedTime} />
                    <SelectTimeSlotForAppointment setSelectedTime={setSelectedTime} selectedTime={selectedTime} afternoonTimeSlots={afternoonTimeSlots} selectedTimeIdForAfternoon={selectedTimeIdForAfternoon} setSelectedTimeIdForAfternoon={setSelectedTimeIdForAfternoon} />
                </div>
            </section>


            {/* Form  */}
            <AppointmentForm handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} errors={errors} isSubmitting={isSubmitting} isPending={isPending} />
        </main >
    )
}