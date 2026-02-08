import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[80vh] flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-left">
            Book a keke or Find your next Home in Ughelli
          </h1>

          {/* <p className="mt-6 text-lg text-gray-200">
            We help individuals and businesses create, launch, and scale modern
            digital products with ease and confidence.
          </p> */}

          <div className="mt-8 flex gap-4">
            <Link
              to="/register"
              className="px-6 py-3 rounded-md bg-[var(--primary-color)]
              text-white font-medium hover:opacity-90"
            >
              Get Started
            </Link>

            <Link
              to="/"
              className="px-6 py-3 rounded-md border border-white
              text-white hover:bg-white hover:text-black transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
