import React, { useState } from "react";

const ScheduleRide = () => {
  const [schedule, setSchedule] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10">
        
        <h1 className="text-2xl md:text-3xl font-bold mb-8">
          Book or Schedule a Ride
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* LEFT FORM */}
          <div className="md:col-span-2 space-y-6">

            {/* Pickup */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Pickup Location
              </label>
              <input
                type="text"
                placeholder="Enter pickup location"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] outline-none"
              />
            </div>

            {/* Destination */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Destination
              </label>
              <input
                type="text"
                placeholder="Enter destination"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] outline-none"
              />
            </div>

            {/* Ride Now / Schedule Toggle */}
            <div className="flex items-center gap-4">
              <span className={!schedule ? "font-semibold" : ""}>
                Ride Now
              </span>

              <button
                onClick={() => setSchedule(!schedule)}
                className={`w-12 h-6 rounded-full relative transition ${
                  schedule ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute top-1 w-4 h-4 bg-white rounded-full transition ${
                    schedule ? "right-1" : "left-1"
                  }`}
                />
              </button>

              <span className={schedule ? "font-semibold" : ""}>
                Schedule for Later
              </span>
            </div>

            {/* Date Picker */}
            {schedule && (
              <div>
                <label className="block text-sm font-medium mb-2">
                  Select Date & Time
                </label>
                <input
                  type="datetime-local"
                  className="p-3 border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] outline-none"
                />
              </div>
            )}
          </div>

          {/* RIGHT SUMMARY */}
          <div className="bg-gray-50 rounded-xl p-6 space-y-6">
            <div>
              <p className="text-sm text-gray-600">Estimated Fare</p>
              <p className="text-3xl font-bold">₦500</p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Pickup Time</p>
              <p className="font-medium">Now</p>
            </div>

            <button
              className="w-full bg-[var(--primary-color)] text-white py-3 rounded-lg font-semibold hover:opacity-90"
            >
              Request Driver
            </button>

            <p className="text-xs text-gray-500 text-center">
              A driver will contact you via WhatsApp or Call to confirm.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ScheduleRide;
