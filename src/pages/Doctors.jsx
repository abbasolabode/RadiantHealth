import { useEffect, useState } from "react";
import { CiCalendar, CiLocationOn, CiSearch, CiStar, } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useDoctors } from "../hooks/useDoctors";
import Spinner from "../ui/Spinner";

const options = [
  { id: 1, option: "Cardiology" },
  { id: 2, option: "Neurology" },
  { id: 3, option: "Orthopedics" },
  { id: 4, option: "Pediatrics" },
  { id: 5, option: "Ophthalmology" },
  { id: 6, option: "Dermatology" },
  { id: 7, option: "Oncology" },
  { id: 8, option: "General Medicine" },
];

export default function Doctors() {
  // Navigation
  const navigate = useNavigate();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //STATES
  const [filterByDepartment, setFilterByDepartment] = useState("all");
  const [search, setSearch] = useState("");

  //The data coming from the useDoctors custom hook
  const { doctors = [], isLoading } = useDoctors();

  //FILTER + SEARCH LOGIC 
  const filteredDoctorCard = doctors.filter((docCard) => {
    const matchesSearch = docCard.name.toLowerCase().includes(search.toLowerCase()) || docCard.specialty.toLowerCase().includes(search.toLowerCase()) || docCard.title.toLowerCase().includes(search.toLowerCase());
    const matchesDepartment = filterByDepartment === "all" || docCard.specialty.toLowerCase() === filterByDepartment.toLowerCase();
    return matchesSearch && matchesDepartment;
  });

  // loading state
  if (isLoading) return <Spinner />;

  // Function to get color based on specialty and return a default color if specialty is not in the list
  function getColorBySpecialty(specialty) {
    if (specialty === "Cardiology") return "#FFA500";
    if (specialty === "Neurology") return "#FF0000";
    if (specialty === "Dermatology") return "#800080";
    if (specialty === "Pediatrics") return "#FFFF00";
    if (specialty === "Orthopedics") return "#008000";
    if (specialty === "Ophthalmology") return "#0000FF";
    return "#4B0082";
  };


  return (
    <main className="w-full min-h-screen px-4 py-4 flex flex-col gap-6">
      {/* Hero */}
      <div className="flex flex-col gap-5">
        <section className="flex flex-col gap-2">
          <p className="font-medium text-blue-600 text-xs tracking-widest">
            FIND A DOCTOR
          </p>
          <h1 className="font-semibold text-4xl">
            Our Medical Specialists
          </h1>
          <p className="text-gray-500 px-2">
            Access world-class specialists, real-time health data, and seamless scheduling.
          </p>
        </section>
      </div>

      {/* Search + Filter */}
      <div className="w-full px-4 py-5 border border-gray-200  bg-white/20 shadow-gray-300 shadow-xs rounded-xl flex flex-col gap-5">
        {/* Search */}
        <div className="relative">
          <input
            type="search"
            placeholder="Search by name, specialty, or title..."

            className="py-2.5 w-full pl-7 bg-zinc-200 pr-4 text-gray-600 rounded-lg outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <CiSearch size={20} className="absolute top-3 left-2" />
        </div>

        {/* Filter */}
        <select
          value={filterByDepartment}
          onChange={(e) => setFilterByDepartment(e.target.value)}
          className="py-2.5 w-full bg-zinc-200 text-gray-600 px-1 rounded-xl outline-none"
        >
          <option className="text-gray-100" value="all">All Departments</option>
          {options.map((option) => (
            <option
              key={option.id}
              value={option.option.toLowerCase()}
            >
              {option.option}
            </option>
          ))}
        </select>
      </div>

      {/* Cards */}
      <section className="flex flex-col md:grid md:grid-cols-3 lg:gric-cols-4 gap-5">
        <p className="text-sm text-gray-500">
          Showing{" "}
          <span className="font-bold text-black">
            {filteredDoctorCard.length}
          </span>{" "}
          doctors
        </p>

        {filteredDoctorCard.map((doctor) => {
          const nameParts = doctor.name.split(" ");
          const titles = ["Dr.", "Mr.", "Mrs.", "Ms."];
          const initials = nameParts
            .filter((p) => !titles.includes(p))
            .map((p) => p[0].toUpperCase())
            .join("")
            const bgColor = getColorBySpecialty(doctor.specialty);
          return (
            <div
              key={doctor.id}
              className="flex flex-col gap-4 shadow rounded-xl p-4"
            >
              <div className="flex items-center gap-2">
                <span
                  style={{ backgroundColor: bgColor }}
                  className="text-white flex w-14 h-14 rounded-lg justify-center items-center font-bold"
                >
                  {initials}
                </span>

                <div>
                  <p className="font-semibold text-lg">{doctor.name}</p>
                  <p className="text-indigo-600 font-medium">
                    {doctor.specialty}
                  </p>
                  <p className="text-xs text-gray-500">
                    {doctor.title}
                  </p>
                </div>
              </div>

              <div className="flex gap-2 items-center text-sm">
                <CiStar className="text-yellow-500" />
                <span className="font-bold">{doctor.rating}</span>
                ({doctor.numOfPatients}) • {doctor.yearsOfExperience} years
              </div>

              <p className="text-sm flex items-center gap-1">
                <CiLocationOn /> {doctor.location}
              </p>

              <p className="text-sm flex items-center gap-1">
                <CiCalendar /> Next:
                <span className="text-blue-500">
                  Today, 2:30 PM
                </span>
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => navigate("/appointment")}
                  className="bg-blue-600 w-80 text-white px-4 py-2 rounded-lg"
                >
                  Book Now
                </button>

                <button
                  onClick={() =>
                    navigate(`/doctorDetails/${doctor.id}`)
                  }
                  className="bg-gray-400 text-white px-4 py-2 rounded-lg"
                >
                  Profile
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};