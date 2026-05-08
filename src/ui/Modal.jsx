import { LiaArrowRightSolid } from "react-icons/lia";
import { HiOutlineX } from "react-icons/hi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { CiTimer } from "react-icons/ci";
import { MdStarRate } from "react-icons/md";
import { LuBrain } from "react-icons/lu";
import { useEffect, useRef, useState } from "react";
import { useHandleOutsideClick } from "../hooks/useHandleOutsideClick";

export default function Modal() {
  const { modalRef, setIsOpen, isOpen } = useHandleOutsideClick()




  return (
    <>
      {isOpen && (
        <>
          {/* ── BACKDROP ── */}
          <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" />

          {/* ── MODAL PANEL ── */}
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div ref={modalRef} className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl shadow-black/10 overflow-hidden">

              {/* Top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-blue-500 to-violet-500" />

              {/* Header */}
              <div className="flex items-start justify-between px-6 pt-6 pb-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-indigo-500">
                      AetherisHealth
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-800 tracking-tight leading-snug">
                    World-class care,
                    <br />
                    built around you.
                  </h2>

                  <p className="text-xs text-gray-400 mt-1.5 leading-relaxed max-w-xs">
                    Join thousands of patients who trust AetherisHealth for
                    expert, compassionate, and evidence-based medical care.
                  </p>
                </div>

                {/* Close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 shrink-0 ml-4 transition-all duration-150 active:scale-90 cursor-pointer"
                >
                  <HiOutlineX size={14} />
                </button>
              </div>

              {/* Benefits rows */}
              <div className="mx-6 rounded-2xl border border-gray-100 overflow-hidden divide-y divide-gray-50 mb-4 shadow-sm shadow-black/[0.02]">
                {[
                  {
                    icon: <MdStarRate size={14} />,
                    label: "Top-Rated Specialists",
                    value: "4.9★ across 200+ doctors",
                  },
                  {
                    icon: <LuBrain size={13} />,
                    label: "Advanced Diagnostics",
                    value: "AI-assisted precision care",
                  },
                  {
                    icon: <CiTimer size={14} />,
                    label: "Flexible Scheduling",
                    value: "Same-day appointments available",
                  },
                  {
                    icon: <IoShieldCheckmarkOutline size={14} />,
                    label: "HIPAA Compliant",
                    value: "End-to-end encrypted records",
                  },
                ].map(({ icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between px-4 py-3 hover:bg-gray-50/70 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="w-6 h-6 rounded-lg bg-indigo-50 border border-indigo-100/80
                      flex items-center justify-center text-indigo-400 shrink-0"
                      >
                        {icon}
                      </span>

                      <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                        {label}
                      </span>
                    </div>

                    <span className="text-xs font-semibold text-slate-600">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Trust note */}
              <div className="mx-6 flex items-start gap-2.5 px-4 py-3 rounded-xl bg-indigo-50/60 border border-indigo-100/80 mb-5">
                <IoShieldCheckmarkOutline
                  size={15}
                  className="text-indigo-400 shrink-0 mt-0.5"
                />

                <p className="text-[11px] text-gray-500 leading-relaxed">
                  AetherisHealth is accredited by the{" "}
                  <span className="font-semibold text-slate-600">
                    Joint Commission International
                  </span>{" "}
                  and committed to the highest standards of patient safety and
                  care.
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-2.5 px-6 pb-6">
                <button className="flex-1 py-3 text-sm font-semibold text-slate-500 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 hover:text-slate-700 active:scale-[0.9] transition-all duration-150 cursor-pointer">
                  Maybe later
                </button>

                <button className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white rounded-xl cursor-pointer bg-gradient-to-br from-indigo-500 to-violet-600 shadow-md shadow-indigo-200/60 hover:shadow-lg hover:shadow-indigo-300/50 hover:brightness-105 active:scale-[0.97] transition-all duration-150">
                  Book Appointment <LiaArrowRightSolid size={15} />
                </button>
              </div>

            </div>
          </div>
        </>
      )}
    </>
  );
}