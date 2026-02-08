import React from "react";

const OurServices = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore our key services designed to meet everyday needs.
          </p>
        </div>

        {/* Services Cards */}
        <div className="flex flex-col md:flex-row gap-8 justify-center">

          {/* Keke Service */}
          <div className="flex-1 max-w-md bg-gray-50 border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-4">
                Keke Services
              </h3>
            </div>

            {/* Image */}
            <div className="h-56 w-full">
              <img
                src="/images/delta-keke.jpg"
                alt="Delta State Keke Service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Real Estate Service */}
          <div className="flex-1 max-w-md bg-gray-50 border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-4">
                Real Estate Services
              </h3>
            </div>

            {/* Image */}
            <div className="h-56 w-full justify-center items-center flex">
              <img
                src="/images/real-estate.jpg"
                alt="Real Estate Service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurServices;
