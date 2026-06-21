import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaStar, } from "react-icons/fa";
import { LuBrain } from "react-icons/lu";
import { AiOutlineSkin } from "react-icons/ai";
import { CiTimer } from "react-icons/ci";
import { LuDot } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { LuBadge } from "react-icons/lu";
import { LuBone } from "react-icons/lu";
import { CiStethoscope } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineChildCare } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { SlBadge } from "react-icons/sl";
import { getDoctorDataById } from "../services/apiGetDoctors";
import Spinner from "./Spinner";
import { useGetDoctorDetailsById } from "../hooks/useGetDoctorDetailsById";

export default function DoctorDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { doctor = [], isLoading } = useGetDoctorDetailsById();

  //Get initials
  const lastTwo = doctor?.name?.split(" ")?.map(name => name[0]).join("").slice(-2).toUpperCase();

  //Return spinner when data is loading
  if (isLoading) return <Spinner />

  const getIcons = (text) => {
    if (!text) return <CiStethoscope />;

    console.log(text);
    const normalized = text.toLowerCase();
    if (normalized.includes("cardio") || normalized.includes("heart")) return <FaHeart />;
    if (normalized.includes("neuro") || normalized.includes("brain")) return <LuBrain />;
    if (normalized.includes("bone") || normalized.includes("ortho")) return <LuBone />;
    if (normalized.includes("eye") || normalized.includes("ophthal")) return <IoEyeOutline />;
    if (normalized.includes("skin") || normalized.includes("derma")) return <AiOutlineSkin />;
    if (normalized.includes("child") || normalized.includes("pedia")) return <MdOutlineChildCare />;
    if (normalized.includes("cancer") || normalized.includes("onco")) return <LuBadge />;
    return <CiStethoscope />;
  };


  return (
    <main className="min-h-screen w-full">
      <div className="w-full min-h-95 flex flex-col gap-4 px-4 py-6">
        {/* Go back home */}
        <Link className="flex items-center gap-2 font-medium text-gray-500 text-[14px]" to="/doctors">< IoIosArrowRoundBack size={20} /> Back to Doctors</Link>
        {/* parent container */}
        <div className=" shadow-[0_8px_25px_rgba(0,0,0,0.08),0_0_20px_rgba(255,255,255,0.6)] rounded-2xl min-h-90 px-4 py-5  flex flex-col gap-4">
          {/* Left container */}
          <section className=" flex flex-col gap-3">
            <div className="flex flex-col gap-4">
              <h4 className="bg-amber-300 text-white w-24 rounded-2xl min-h-24 text-3xl flex font-semibold items-center justify-center">
                {lastTwo}
              </h4>
              {/*child flex container */}
              <div className="flex flex-col gap-2 ">
                <h4 className="font-semibold text-2xl">{doctor.name}</h4>
                <div className="flex items-center gap-2">
                  <p className=" font-semibold text-blue-700">{doctor.specialty}</p> <span className="text-gray-700"><LuDot /></span>
                  <p className="text-[14px] text-gray-500">{doctor.title}</p>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-4">
                    <p className="flex items-center gap-2  font-semibold">< FaStar size={16} className="text-amber-500 text-[14px]" />4.9<span className="text-[14px] text-gray-400">(312 reviews)</span></p>
                    <p className="flex items-center gap-1"><CiTimer size={16} />18 Years</p>
                  </div>
                  <p className="flex items-center gap-2 text-[14px]">< CiLocationOn size={16} />Main Campus</p>
                </div>
              </div>
            </div>
          </section>

          {/* Right container  - buttons for navigation to booking page & call btn*/}
          <section className="flex h-12 items-center w-73.5 gap-4">
            <Link to="/appointment" className=" bg-blue-700 text-white h-12 w-2/3 flex items-center justify-center font-semibold rounded-lg">Book Appointment</Link>
            <a className="bg-black/30 text-white h-12 w-1/3 flex items-center justify-center font-semibold rounded-lg" href="tel:+2348012345678">Call Us</a>
          </section>
        </div>
      </div>

      {/* Body */}
      <div className="min-h-screen w-full">
        {/* Left container */}
        <div className="min-h-screen flex flex-col gap-4 p-6 w-full">
          {/* About the doctor */}
          <section className="shadow-amber-50 p-6  rounded-xl flex flex-col gap-2 min-h-49.75  w-full  shadow-[0_8px_25px_rgba(0,0,0,0.08),0_0_20px_rgba(255,255,255,0.6)]">
            <h3 className="text-lg font-semibold">About</h3>
            <p className="text-sm leading-relaxed text-zinc-500">{doctor.about}</p>
          </section>

          {/* Specializations */}
          <section className="rounded-xl shadow-[0_8px_25px_rgba(0,0,0,0.08),0_0_20px_rgba(255,255,255,0.6)] max-h-screen flex flex-col gap-4 p-6 w-full">
            <h3 className="text-lg font-semibold">Specializations</h3>
            {doctor?.specializations?.map(item => (
              <div key={item.id} className="min-h-10 bg-zinc-200 rounded-lg p-3 flex items-center gap-3">
                <span className="bg-red-200 rounded-md h-9 w-9 flex items-center justify-center">{getIcons(item?.specialty)}</span>
                <p className="text-sm text-zinc-500">{item.text}</p>
              </div>
            ))}
          </section>

          {/* Certifications & Education */}
          <section className="bg-white border-gray-200 flex flex-col gap-4 p-6 w-full max-h-screen rounded-xl shadow-[0_8px_25px_rgba(0,0,0,0.08),0_0_20px_rgba(255,255,255,0.6)]">
            <h4 className="text-lg font-semibold text-gray-800">
              Certifications & Education
            </h4>

            {doctor?.certificationsAndEducation?.map(item => (
              <div key={item.id} className="flex items-center gap-3">
                {/*  <span className="min-h-9 w-9 bg-blue-500/10 text-blue-600 flex items-center justify-center rounded-md">
                  {item.icon}
                </span> */}

                <div className={` ${item.id === 1 ? "bg-gray-200/50 p-1.5" : ""} ${item.id === 2 ? "bg-pink-200/50" : ""} ${item.id === 3 ? "bg-blue-200/30 p-1.5" : ""} w-full flex flex-col gap-1`}>
                  <p className="text-sm font-semibold text-gray-800">
                    {item.header}
                  </p>
                  <p className="w-full text-sm text-gray-500">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </div>

        {/*Right container*/}
        <div className="min-h-screen flex flex-col gap-4 p-6 w-full">
          {/* Next available */}
          <section className="bg-white border border-gray-200 min-h-28 p-6 rounded-xl shadow-[0_8px_25px_rgba(0,0,0,0.08),0_0_20px_rgba(255,255,255,0.6)]">
            <div className="min-h-28 flex flex-col gap-3">
              <h4 className="text-lg font-medium text-gray-800">Next Available</h4>

              <p className="font-medium text-sm text-blue-500">
                Today, 2:30 PM
              </p>
              <Link
                to="/appointment"
                className="w-full bg-blue-500 hover:bg-blue-600 transition text-white font-medium rounded-lg min-h-[46px] flex items-center justify-center text-center shadow-[0_4px_15px_rgba(59,130,246,0.4)]"
              >
                Schedule Now
              </Link>
            </div>
          </section>

          {/*Weekly schedule*/}
          <section className="bg-white border border-gray-200 min-h-28 p-6 rounded-xl shadow-[0_8px_25px_rgba(0,0,0,0.08),0_0_20px_rgba(255,255,255,0.6)]">
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-medium text-gray-800">Weekly Schedule</h4>

              {doctor?.weeklySchedule?.map(item => (
                <span key={item.id} className="flex w-full justify-between">
                  <p className="font-semibold text-gray-700">{item.day}</p>
                  <p className="text-xs text-gray-400">{item.hours}</p>
                </span>
              ))}
            </div>
          </section>
          {/* Languages */}
          <section className="bg-white flex flex-col gap-3 min-h-28 p-6 rounded-xl shadow-[0_8px_25px_rgba(0,0,0,0.08),0_0_20px_rgba(255,255,255,0.6)]">
            <h4 className="text-lg font-medium text-gray-800">Language</h4>

            <div className="flex gap-3">
              {doctor?.languages?.map(item => (
                <span key={item.id} className="bg-gray-200 text-gray-700 text-xs px-2 py-1.5 rounded-full">
                  {item.text}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>


    </main>
  )
}
