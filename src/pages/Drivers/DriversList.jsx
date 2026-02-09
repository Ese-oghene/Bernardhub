import React, { useState } from "react";
import { Link } from "react-router-dom";
import { drivers } from "../../assets/data/drivers";

const DriversList = () => {
  const [search, setSearch] = useState("");

  const filteredDrivers = drivers.filter(driver =>
    driver.name.toLowerCase().includes(search.toLowerCase()) ||
    driver.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Find a Keke Near You
        </h1>

        {/* Search */}
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Search by driver or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 p-3 border rounded-lg"
          />
        </div>

        {/* Drivers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDrivers.map(driver => (
            <Link
              key={driver.id}
              to={`/drivers/${driver.id}`}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition
                         flex flex-col items-center cursor-pointer"
            >
              <img
                src={driver.image}
                alt={driver.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />

              <h3 className="text-xl font-semibold">{driver.name}</h3>
              <p className="text-gray-600">Location: {driver.location}</p>
              <p className={`font-medium ${
                driver.status === "Available"
                  ? "text-green-500"
                  : "text-red-500"
              }`}>
                {driver.status}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DriversList;
