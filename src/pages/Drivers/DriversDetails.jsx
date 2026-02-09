import React from "react";
import { useParams } from "react-router-dom";
import { drivers } from "../../assets/data/drivers";
import { Link } from "react-router-dom";


const DriversDetails = () => {
  const { id } = useParams();
  const driver = drivers.find(d => d.id === Number(id));

  // 🚨 Handle missing driver
  if (!driver) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Driver not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">
        <div className="flex flex-col items-center text-center">
          
          {/* Driver Image */}
          <img
            src={driver.image}
            alt={driver.name}
            className="w-28 h-28 rounded-full object-cover mb-4"
          />

          <h2 className="text-2xl font-bold">{driver.name}</h2>
          <p className="text-gray-600 mb-2">{driver.location}</p>

          <p
            className={`font-semibold mb-6 ${
              driver.status === "Available"
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {driver.status}
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col gap-4 w-full">
            
            {/* CALL NOW */}
            <a
              href={`tel:${driver.phone}`}
              className="bg-[var(--primary-color)] text-white py-3 rounded-lg text-center font-medium"
            >
              Call Now
            </a>

            {/* WHATSAPP */}
            <a
              href={`https://wa.me/${driver.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white py-3 rounded-lg text-center font-medium"
            >
              Chat on WhatsApp
            </a>

           {/* BOOK LATER */}
            <Link
            to="/schedule-ride"
            className="border border-gray-300 py-3 rounded-lg font-medium text-center hover:bg-gray-100 transition"
            >
            Schedule Booking
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriversDetails;

