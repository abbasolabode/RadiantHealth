export default function SelectTimeSlotForAppointment({ moment = "Afternoon", morningTimeSlots, selectedTimeIdForMorning, setSelectedTimeIdForMorning, afternoonTimeSlots = [], selectedTimeIdForAfternoon, setSelectedTimeIdForAfternoon, setSelectedTime, selectedTime }) {
  const timeSlotsToUse = moment === "Morning" ? morningTimeSlots : afternoonTimeSlots;

  return (
    <div className="space-y-3">
      <p className="text-sm text-gray-500 font-medium">{moment}</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {timeSlotsToUse?.map(slot => (
          <button
            key={slot.id}
            onClick={() => {
              if (moment === "Morning") {
                setSelectedTimeIdForMorning(slot.id);
                setSelectedTime(slot.time);
              } else {
                setSelectedTimeIdForAfternoon(slot.id);
                setSelectedTime(slot.time);
              }
            }}
            className={`w-full flex items-center justify-center px-3 py-2 text-sm rounded-xl font-semibold transition-all duration-200 border
            active:scale-95
            ${selectedTimeIdForMorning === slot.id || selectedTimeIdForAfternoon === slot.id
                ? "bg-gradient-to-br from-indigo-500 to-violet-500 text-white border-transparent shadow-md shadow-indigo-200"
                : "bg-white text-gray-700 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-sm"
              }`}
          >
            {slot.time}
          </button>
        ))}
      </div>
    </div>
  );
}