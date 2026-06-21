import React from 'react'
import { CiPhone, CiUser } from 'react-icons/ci'
import { FaRegFileAlt } from 'react-icons/fa'
import { LiaArrowRightSolid } from 'react-icons/lia'
import { MdSecurity } from 'react-icons/md'
import { SlEnvolopeLetter } from 'react-icons/sl'

export default function AppointmentForm({ handleSubmit, onSubmit, register, errors, isSubmitting, isPending }) {
    return (
        <form onSubmit={handleSubmit(onSubmit)} action="" className="flex flex-col gap-6 min-h-120 rounded-md bg-blue-300/20 px-3 py-4">
            <div className="flex items-center gap-3 mb-5">
                <span className="w-9 h-9 rounded-xl bg-blue-200 text-primary flex items-center justify-center text-white">
                    <SlEnvolopeLetter size={24} />
                </span>
                <div>
                    <p className="text-[10px] text-gray-400 tracking-wider font-semibold text-muted-foreground">04</p>
                    <h3 className="text-lg sm:text-xl font-display font-semibold text-foreground tracking-tight leading-tight">Your information</h3>
                </div>
            </div>

            <div className="w-full flex flex-col md:flex-row gap-6">
                <div className="w-full flex flex-col gap-2">
                    <span className="flex items-center gap-2">
                        <CiUser size={13} className="text-indigo-400" />
                        <label className="text-sm uppercase font-medium text-gray-500" htmlFor="fullName">Full Name</label>
                    </span>

                    <div className="flex flex-col gap-1.5 w-full">
                        <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            placeholder="e.g. John Doe"
                            disabled={isSubmitting || isPending}
                            {...register("fullName", { required: "Full name is required" })}
                            className="w-full px-4 py-3 text-sm font-medium text-slate-800 bg-gray-50 border-gray-200 rounded-xl placeholder:text-slate-300 tracking-wide focus:outline-none focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 hover:border-gray-300 transition-all duration-200"
                        />

                        <small className="text-[11px] font-semibold tracking-wide text-red-400 pl-1">
                            {errors.fullName && errors.fullName.message}
                        </small>
                    </div>
                </div>
            </div>

            <div className="space-y-5">
                {/* Email & Phone - side by side */}
                <div className="flex flex-col sm:flex-row gap-4">

                    {/* Email */}
                    <div className="flex flex-col gap-1.5 w-full">
                        <div className="flex items-center gap-2">
                            <SlEnvolopeLetter size={14} className="text-indigo-400" />
                            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                                Email
                            </label>
                        </div>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            disabled={isSubmitting || isPending}
                            placeholder="you@example.com"
                            {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
                            className="w-full px-4 py-3 text-sm font-medium text-slate-800 bg-gray-50 border border-gray-200 rounded-xl placeholder:text-slate-300 tracking-wide hover:border-gray-300 focus:outline-none focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 transition-all duration-200"
                        />
                        <small className="text-[11px] font-semibold tracking-wide text-red-400 pl-1">
                            {errors.email && errors.email.message}
                        </small>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5 w-full">
                        <div className="flex items-center gap-2">
                            <CiPhone size={14} className="text-indigo-400" />
                            <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                                Phone
                            </label>
                        </div>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            disabled={isSubmitting || isPending}
                            className="w-full px-4 py-3 text-sm font-medium text-slate-800 bg-gray-50 border border-gray-200 rounded-xl placeholder:text-slate-300 tracking-wide hover:border-gray-300 focus:outline-none focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 transition-all duration-200"
                            placeholder="+1 (555) 000-0000"
                            {...register("phone", { required: "Phone number is required", pattern: { value: /^\+?(\d{1,3})?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/, message: "Invalid phone number" } })}
                        />
                        <small className="text-[11px] font-semibold tracking-wide text-red-400 pl-1">
                            {errors.phone && errors.phone.message}
                        </small>
                    </div>

                </div>

                {/* Reason for visit */}
                <div className="flex flex-col gap-1.5 w-full">
                    <div className="flex items-center gap-2">
                        <FaRegFileAlt size={13} className="text-indigo-400" />
                        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                            Reason for visit
                        </label>
                    </div>
                    <textarea
                        name="message"
                        id="message"
                        rows={4}
                        disabled={isSubmitting || isPending}
                        {...register("message", { required: "Please provide a reason for your visit" })}
                        placeholder="Briefly describe your symptoms or reason for the visit..."
                        className="w-full px-4 py-3 text-sm font-medium text-slate-800 bg-gray-50 border border-gray-200 rounded-xl placeholder:text-slate-300 tracking-wide resize-none hover:border-gray-300 focus:outline-none focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 transition-all duration-200"
                    />
                    <small className="text-[11px] font-semibold tracking-wide text-red-400 pl-1">
                        {errors.message && errors.message.message}
                    </small>
                </div>

                {/* Security note */}
                <div className="flex items-center gap-2.5 px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl">
                    <MdSecurity size={18} className="text-indigo-400 shrink-0" />
                    <p className="text-xs text-gray-400 tracking-wide leading-relaxed">
                        Your information is <span className="font-semibold text-gray-500">secure and encrypted</span>. We respect your privacy.
                    </p>
                </div>

                {/* Submit */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <p className="text-xs text-gray-400 tracking-wide">
                        Complete the fields above to confirm your appointment.
                    </p>
                   <div>
                     <button
                        type="submit"
                        disabled={isSubmitting || isPending}
                        className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-linear-to-br from-indigo-500 to-violet-500 rounded-xl shadow-md shadow-indigo-200 hover:shadow-lg hover:shadow-indigo-300 hover:brightness-105 active:scale-95 transition-all duration-150 cursor-pointer whitespace-nowrap"
                    >
                        {isSubmitting || isPending ? "Submitting for appointment.." : "Confirm Appointment"}
                        <LiaArrowRightSolid size={16} />
                    </button>
                   </div>
                </div>

            </div>
        </form>
    )
}
