import { MdCheckCircleOutline } from "react-icons/md";
import { CiCalendarDate, CiTimer, CiUser } from "react-icons/ci";
import { LuMicroscope } from "react-icons/lu";
import { LiaArrowRightSolid } from "react-icons/lia";
import { SlEnvolopeLetter } from "react-icons/sl";
import { useLocation, useNavigate } from "react-router-dom";

export default function ThankYouForAppointmentForm() {
    const navigate = useNavigate();
    const { state: appointmentFormData = {} } = useLocation();

    const { fullName, email, selectedSpecialty, selectedDoctor, confirmedDate, selectedTime } = appointmentFormData ?? {};
    console.log(fullName)

    const formatDate = (date) => date ? new Date(date).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" }) : "—";

    return (
        <main className="min-h-screen w-full flex items-center justify-center px-4 py-16 bg-gradient-to-br from-slate-50 via-white to-indigo-50/40">

            <style>{`
                @keyframes popIn {
                    0%   { opacity: 0; transform: scale(0.85) translateY(20px); }
                    70%  { transform: scale(1.03) translateY(0); }
                    100% { opacity: 1; transform: scale(1) translateY(0); }
                }
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(16px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes pulse-ring {
                    0%   { transform: scale(1); opacity: 0.4; }
                    100% { transform: scale(1.6); opacity: 0; }
                }
                .pop-in    { animation: popIn  0.5s cubic-bezier(0.22,1,0.36,1) both; }
                .fade-up   { animation: fadeUp 0.5s cubic-bezier(0.22,1,0.36,1) both; }
                .delay-1   { animation-delay: 0.1s; }
                .delay-2   { animation-delay: 0.2s; }
                .delay-3   { animation-delay: 0.3s; }
                .delay-4   { animation-delay: 0.4s; }
                .delay-5   { animation-delay: 0.55s; }
                .pulse-ring { animation: pulse-ring 1.6s cubic-bezier(0.22,1,0.36,1) infinite; }
            `}</style>

            <div className="w-full max-w-md flex flex-col items-center text-center">

                {/* Success icon */}
                <div className="pop-in relative flex items-center justify-center mb-8">
                    <span className="absolute w-24 h-24 rounded-full bg-indigo-400/20 pulse-ring" />
                    <span className="absolute w-24 h-24 rounded-full bg-indigo-400/10 pulse-ring delay-1" />
                    <span className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500
                                     flex items-center justify-center shadow-lg shadow-indigo-200">
                        <MdCheckCircleOutline size={38} className="text-white" />
                    </span>
                </div>

                {/* Heading */}
                <div className="fade-up delay-1 space-y-2 mb-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
                        Appointment confirmed
                    </p>
                    <h1 className="text-3xl sm:text-4xl font-semibold text-slate-800 tracking-tight leading-tight">
                        You're all booked!
                    </h1>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        A confirmation will be sent to <span className="font-semibold text-slate-600">{email}</span>
                    </p>
                </div>

                {/* Booking summary card */}
                <div className="fade-up delay-3 w-full bg-white border border-gray-100 rounded-2xl shadow-sm shadow-black/5 overflow-hidden mb-4">
                    <div className="px-5 py-3 bg-indigo-50/60 border-b border-indigo-100/80 flex items-center justify-between">
                        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
                            Booking summary
                        </p>
                        <span className="text-[10px] font-semibold text-indigo-300 tracking-wide">
                            APT-{Date.now().toString().slice(-6)}
                        </span>
                    </div>

                    <div className="divide-y divide-gray-50 px-5">

                        <div className="flex items-center justify-between py-3">
                            <div className="flex items-center gap-2.5">
                                <span className="text-indigo-400"><CiUser size={15} /></span>
                                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Patient</span>
                            </div>
                            <span className="text-sm font-semibold text-slate-700">{fullName ?? "—"}</span>
                        </div>

                        <div className="flex items-center justify-between py-3">
                            <div className="flex items-center gap-2.5">
                                <span className="text-indigo-400"><SlEnvolopeLetter size={15} /></span>
                                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Email</span>
                            </div>
                            <span className="text-sm font-semibold text-slate-700 truncate max-w-[180px]">{email ?? "—"}</span>
                        </div>

                        <div className="flex items-center justify-between py-3">
                            <div className="flex items-center gap-2.5">
                                <span className="text-indigo-400"><LuMicroscope size={15} /></span>
                                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Specialty</span>
                            </div>
                            <span className="text-sm font-semibold text-slate-700">{selectedSpecialty ?? "—"}</span>
                        </div>

                        <div className="flex items-center justify-between py-3">
                            <div className="flex items-center gap-2.5">
                                <span className="text-indigo-400"><CiUser size={15} /></span>
                                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Doctor</span>
                            </div>
                            <span className="text-sm font-semibold text-slate-700">{selectedDoctor ?? "—"}</span>
                        </div>

                        <div className="flex items-center justify-between py-3">
                            <div className="flex items-center gap-2.5">
                                <span className="text-indigo-400"><CiCalendarDate size={15} /></span>
                                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Date</span>
                            </div>
                            <span className="text-sm font-semibold text-slate-700">{formatDate(confirmedDate)}</span>
                        </div>

                        <div className="flex items-center justify-between py-3">
                            <div className="flex items-center gap-2.5">
                                <span className="text-indigo-400"><CiTimer size={15} /></span>
                                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Time</span>
                            </div>
                            <span className="text-sm font-semibold text-slate-700">{selectedTime ?? "—"}</span>
                        </div>

                    </div>
                </div>

                {/* Reschedule note */}
                <div className="fade-up delay-4 w-full flex gap-3 px-4 py-3 bg-amber-50 border border-amber-100 rounded-xl mb-6 text-left">
                    <div className="w-1 rounded-full bg-amber-300 shrink-0" />
                    <p className="text-xs text-amber-700 leading-relaxed">
                        Need to reschedule? You can modify your appointment up to{" "}
                        <span className="font-semibold">20 minutes</span> before the scheduled time.
                    </p>
                </div>

                {/* CTAs */}
                <div className="fade-up delay-5 flex flex-col sm:flex-row gap-3 w-full">
                    <button
                        onClick={() => navigate("/")}
                        className="flex-1 px-5 py-3 text-sm font-semibold text-slate-600 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 active:scale-95 transition-all duration-150 cursor-pointer"
                    >
                        Back to Home
                    </button>
                    <button
                        onClick={() => navigate("/appointment")}
                        className="flex-1 flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-gradient-to-br from-indigo-500 to-violet-500 rounded-xl shadow-md shadow-indigo-200 hover:shadow-lg hover:shadow-indigo-300 hover:brightness-105 active:scale-95 transition-all duration-150 cursor-pointer"
                    >
                        View Appointments <LiaArrowRightSolid size={16} />
                    </button>
                </div>

            </div>
        </main>
    );
}