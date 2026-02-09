import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-lg z-10">
          {/* <span
            className="w-8 h-8 rounded-md flex items-center justify-center
              bg-[var(--primary-color)] text-white"
          >
            B
          </span> */}
          BernardHub
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-8">
          <Link className="hover:text-[var(--primary-color)]" to="/">
            Home
          </Link>
          <Link className="hover:text-[var(--primary-color)]" to="/">
            Services
          </Link>
          <Link className="hover:text-[var(--primary-color)]" to="/">
            About
          </Link>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:flex z-10">
          <Link
            to="/register"
            className="px-5 py-2 rounded-md text-white bg-[var(--primary-color)] hover:opacity-90"
          >
            Create Account
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl z-10"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Sidebar */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-lg transform transition-transform md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-6 py-6 flex justify-between items-center border-b">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <span
              className="w-8 h-8 rounded-md flex items-center justify-center
                bg-[var(--primary-color)] text-white"
            >
              B
            </span>
            Bernard’s Hub
          </Link>
          <button
            className="text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col mt-6 space-y-4 px-6">
          <Link
            onClick={() => setMenuOpen(false)}
            to="/"
            className="hover:text-[var(--primary-color)]"
          >
            Home
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            to="/"
            className="hover:text-[var(--primary-color)]"
          >
            Services
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            to="/"
            className="hover:text-[var(--primary-color)]"
          >
            About
          </Link>
          <Link
            to="/register"
            onClick={() => setMenuOpen(false)}
            className="mt-4 text-center text-white py-2 rounded-md bg-[var(--primary-color)]"
          >
            Create Account
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
