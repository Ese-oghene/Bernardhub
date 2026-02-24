import React, { useState } from "react";
import { Link } from "react-router-dom";
import { agents } from "../../assets/data/agent";

const AgentsList = () => {
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("All");

  const filteredAgents = agents.filter(agent => {
    const matchesSearch =
      agent.name.toLowerCase().includes(search.toLowerCase());

    const matchesLocation =
      locationFilter === "All" || agent.location === locationFilter;

    return matchesSearch && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-6 text-center">
          Find a Real Estate Agent
        </h1>

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
          <input
            type="text"
            placeholder="Search agent..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-3 border rounded-lg md:w-1/3"
          />

          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="p-3 border rounded-lg md:w-1/4"
          >
            <option value="All">All Locations</option>
            <option value="Ughelli">Ughelli</option>
            <option value="Warri">Warri</option>
          </select>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.map(agent => (
            <div
              key={agent.id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="flex flex-col items-center text-center">

                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-24 h-24 rounded-full object-cover mb-3"
                />

                <h3 className="text-xl font-semibold flex items-center gap-2">
                  {agent.name}
                  {agent.verified && (
                    <span className="text-blue-600 text-sm">✔ Verified</span>
                  )}
                </h3>

                <p className="text-gray-600">{agent.location}</p>

                {/* Rating */}
                <p className="text-yellow-500 font-medium mt-1">
                  ⭐ {agent.rating}
                </p>

                <Link
                  to={`/agents/${agent.id}`}
                  className="mt-4 bg-[var(--primary-color)] text-white px-4 py-2 rounded-lg"
                >
                  View Profile
                </Link>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AgentsList;