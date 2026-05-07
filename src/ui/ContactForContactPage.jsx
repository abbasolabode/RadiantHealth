import { useForm } from "react-hook-form";
import { useState } from "react"
import { useContactForm } from "../hooks/useContactFom";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";


const selectOption = [
  {
    id: 1,
    option: "Cardiology",
  },
  {
    id: 2,
    option: "Neurology",
  },
  {
    id: 3,
    option: "Orthopedics",
  },

  {
    id: 4,
    option: "Orthopedics",
  },

  {
    id: 5,
    option: "Pediatrics",
  },
  {
    id: 6,
    option: "General Medicine",
  },
];


export default function ContactForContactPage() {
  const [isActive, setIsActive] = useState("first");
  const { register, handleSubmit, reset, formState: { errors, isSubmitting }, } = useForm()
  const { mutate, isPending } = useContactForm()

  const onSubmit = (formData) => {
    if (!formData) return;
    mutate(formData, {
      onSettled: reset
    });
  };


  const baseStyle = "text-white font-medium  bg-gray-400";
  const isActiveStyle = "text-white font-medium  bg-blue-500";
  const isActiveSecondStyle = "text-white font-medium bg-red-600";

  return (
    <div className="w-full min-h-screen flex flex-col gap-16 px-4 py-6">
      <header className="">
        <p className="text-primary text-xs tracking-widest uppercase font-medium text-blue-600">Contact</p>
        <h1 className="text-4xl md:text-5xl font-display font-medium text-foreground mt-2 mb-4">Get in Touch</h1>
        <p className="text-muted-foreground max-w-xl leading-relaxed text-gray-600">Reach our care team for appointments, inquiries, or emergencies.</p>
      </header>

      {/* buttons to show the current form */}
      <main className="w-full min-h-205 flex flex-col gap-14 ">
        <div className=" w-full flex gap-4 items-center ">
          <button onClick={() => setIsActive("first")} className={`px-4 py-2 border rounded-full text-sm font-medium transition-colors capitalize bg-primary text-primary-foreground  ${isActive === "first" ? isActiveStyle : baseStyle}`}>General Inquiry</button>
          <button onClick={() => setIsActive("second")} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize bg-secondary text-secondary-foreground  ${isActive === "second" ? isActiveSecondStyle : baseStyle}`}>Emergency</button>
        </div>

        {/* Form + map */}
        <div className="px-2">

          {/* Emergency Alert */}
          {isActive === "second" && (
            <div className="bg-red-50 border border-red-200 rounded-xl tracking-wider p-4 mb-6">
              <p className="text-red-600 text-sm font-medium">
                If this is a life-threatening emergency, please call 911 immediately.
              </p>
            </div>
          )}

          {/* FIRST FORM */}
          {isActive === "first" && (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="max-w-xl mx-auto space-y-6 bg-white p-6 rounded-xl shadow-md border border-gray-100"
            >
              {/* First Name + Last Name */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">First Name</label>
                  <input
                    disabled={isSubmitting || isPending}
                    {...register("firstName", { required: "First Name is required" })}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  {errors?.firstName?.message && (
                    <small className="text-red-500 text-xs">{errors.firstName.message}</small>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    disabled={isSubmitting || isPending}
                    {...register("lastName", { required: "Last Name is required" })}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  {errors?.lastName?.message && (
                    <small className="text-red-500 text-xs">{errors.lastName.message}</small>
                  )}
                </div>
              </section>

              {/* Email */}
              <section>
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input
                  disabled={isSubmitting || isPending}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
                {errors?.email?.message && (
                  <small className="text-red-500 text-xs">{errors.email.message}</small>
                )}
              </section>

              {/* Phone */}
              <section>
                <label className="text-sm font-medium text-gray-700">Phone</label>
                <input
                  disabled={isSubmitting || isPending}
                  {...register("phone", { required: "Phone is required" })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
                {errors?.phone?.message && (
                  <small className="text-red-500 text-xs">{errors.phone.message}</small>
                )}
              </section>

              {/* Department */}
              <section>
                <label className="text-sm font-medium text-gray-700">Department</label>
                <select
                  disabled={isSubmitting || isPending}
                  {...register("department", { required: "Department is required" })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">Select a department</option>
                  {selectOption?.map((option) => (
                    <option key={option.id} value={option.option}>
                      {option.option}
                    </option>
                  ))}
                </select>
                {errors?.department?.message && (
                  <small className="text-red-500 text-xs">{errors.department.message}</small>
                )}
              </section>

              {/* Message */}
              <textarea
                disabled={isSubmitting || isPending}
                {...register("message", { required: "Message is required" })}
                placeholder="Write message..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm min-h-[120px] focus:ring-2 focus:ring-blue-500 outline-none"
              />

              {/* Submit */}
              <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition">
                {isPending || isSubmitting ? "Submitting form..." : "Submit Inquiry"}
              </button>
            </form>
          )}

          {/* SECOND FORM */}
          {isActive === "second" && (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="max-w-xl mx-auto space-y-6 bg-white p-6 rounded-xl shadow-md border border-gray-100"
            >
              {/* First Name + Last Name */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">First Name</label>
                  <input
                    disabled={isSubmitting || isPending}
                    {...register("firstName", { required: "First Name is required" })}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  {errors?.firstName?.message && (
                    <small className="text-red-500 text-xs">{errors.firstName.message}</small>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    disabled={isSubmitting || isPending}
                    {...register("lastName", { required: "Last Name is required" })}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  {errors?.lastName?.message && (
                    <small className="text-red-500 text-xs">{errors.lastName.message}</small>
                  )}
                </div>
              </section>

              {/* Email */}
              <section>
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input
                  disabled={isSubmitting || isPending}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
                {errors?.email?.message && (
                  <small className="text-red-500 text-xs">{errors.email.message}</small>
                )}
              </section>

              {/* Phone */}
              <section>
                <label className="text-sm font-medium text-gray-700">Phone</label>
                <input
                  disabled={isSubmitting || isPending}
                  {...register("phone", { required: "Phone is required" })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
                {errors?.phone?.message && (
                  <small className="text-red-500 text-xs">{errors.phone.message}</small>
                )}
              </section>

              {/* Message */}
              <section>
                <textarea
                  disabled={isSubmitting || isPending}
                  {...register("message", { required: "Message is required" })}
                  placeholder="Write message..."
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm min-h-[120px] focus:ring-2 focus:ring-blue-500 outline-none"
                />
                {errors?.email?.message && (
                  <small className="text-red-500 text-xs">{errors.email.message}</small>
                )}
              </section>

              {/* Submit */}
              <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition">
                {isPending || isSubmitting ? "Submitting form..." : "Submit Inquiry"}
              </button>
            </form>
          )}

          {/* MAP + CONTACT DETAILS */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            {/* MAP */}
            <div>
              <iframe
                title="Our Location"
                className="w-full h-96 rounded-xl border border-gray-100 shadow-sm"
                src="https://maps.google.com/maps?q=Ikeja%2C%20Lagos%2C%20Nigeria&z=14&output=embed"
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* CONTACT DETAILS */}
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 space-y-6">

              {/* Address */}
              <div className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition">
                <span className="text-blue-600 text-xl mt-1">
                  <CiLocationOn />
                </span>
                <div>
                  <p className="text-xs uppercase text-gray-400 tracking-wide">Address</p>
                  <p className="text-sm font-semibold text-gray-800">
                    1200 Medical Centre Drive
                  </p>
                  <p className="text-sm text-gray-500">
                    Suite 400, Boston MA 02155
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition">
                <span className="text-green-600 text-xl mt-1">
                  <CiPhone />
                </span>
                <div>
                  <p className="text-xs uppercase text-gray-400 tracking-wide">Phone</p>
                  <p className="text-sm font-semibold text-gray-800">
                    +234 706 556 0628
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition">
                <span className="text-purple-600 text-xl mt-1">
                  <CiMail />
                </span>
                <div>
                  <p className="text-xs uppercase text-gray-400 tracking-wide">Email</p>
                  <p className="text-sm font-semibold text-gray-800">
                    info@aetheris.health
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition">
                <span className="text-orange-500 text-xl mt-1">
                  <CiTimer />
                </span>
                <div>
                  <p className="text-xs uppercase text-gray-400 tracking-wide">Hours</p>
                  <p className="text-sm font-semibold text-gray-800">
                    Mon–Fri: 7 AM – 8 PM
                  </p>
                  <p className="text-sm text-gray-500">
                    Sat: 8 AM – 4 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
};
