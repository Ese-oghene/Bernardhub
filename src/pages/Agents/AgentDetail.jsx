import React from "react";
import { useParams } from "react-router-dom";
import { agents } from "../../assets/data/agent";
import { properties } from "../../assets/data/properties";

const AgentDetail = () => {
  const { id } = useParams();
  const agent = agents.find(a => a.id === Number(id));

  // FIRST check if agent exists
  if (!agent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Agent not found.
      </div>
    );
  }

  // THEN filter properties safely
  const agentProperties = properties.filter(
    property => property.agentId === agent.id
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">
        <div className="flex flex-col items-center text-center">

          <img
            src={agent.image}
            alt={agent.name}
            className="w-28 h-28 rounded-full object-cover mb-4"
          />

          <h2 className="text-2xl font-bold">{agent.name}</h2>
          <p className="text-gray-600">{agent.location}</p>
          <p className="text-blue-600 font-medium mb-6">
            {agent.specialty}
          </p>

          <div className="flex flex-col gap-4 w-full">
            
            <a
              href={`tel:${agent.phone}`}
              className="bg-[var(--primary-color)] text-white py-3 rounded-lg text-center"
            >
              Call Agent
            </a>

            <a
              href={`https://wa.me/${agent.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white py-3 rounded-lg text-center"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Properties Section */}
          <h3 className="text-xl font-bold mt-8 mb-4">
            Properties by {agent.name}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {agentProperties.length > 0 ? (
              agentProperties.map(property => (
                <div
                  key={property.id}
                  className="border rounded-lg overflow-hidden shadow-sm"
                >
                  <img
                    src={property.image}
                    alt={property.title}
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold">{property.title}</h4>
                    <p className="text-gray-600">{property.location}</p>
                    <p className="text-[var(--primary-color)] font-bold">
                      {property.price}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-full text-gray-500">
                No properties listed yet.
              </p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default AgentDetail;