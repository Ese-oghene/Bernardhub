import React from "react";
import { Link } from "react-router-dom";
import kekeImage from "../../assets/images/keke.png";
import HouseImage from "../../assets/images/house.png";

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
          <Link
            to="/keke"
            className="flex-1 max-w-md bg-gray-50 border rounded-xl overflow-hidden
            shadow-sm hover:shadow-md transition hover:-translate-y-1"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-4">
                Keke Services
              </h3>
            </div>

            <div className="h-56 w-full flex items-center justify-center bg-white">
              <img
                src={kekeImage}
                alt="Delta State Keke Service"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </Link>

          {/* Real Estate Service */}
          <Link
            to="/real-estate"
            className="flex-1 max-w-md bg-gray-50 border rounded-xl overflow-hidden
            shadow-sm hover:shadow-md transition hover:-translate-y-1"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-4">
                Real Estate Services
              </h3>
            </div>

            <div className="h-56 w-full flex items-center justify-center bg-white">
              <img
                src={HouseImage}
                alt="Real Estate Service"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default OurServices;
