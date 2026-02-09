import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-4">
        
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            BernardHub
          </Link>
          <p className="mt-4 text-sm text-gray-600">
            Book trusted keke rides and find your next home in Ughelli all in one
            simple platform.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link to="/" className="hover:text-[var(--primary-color)]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-[var(--primary-color)]">
                Services
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-[var(--primary-color)]">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link to="/" className="hover:text-[var(--primary-color)]">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-[var(--primary-color)]">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-[var(--primary-color)]">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h4 className="font-semibold mb-4">Get Started</h4>
          <p className="text-sm text-gray-600 mb-4">
            Create an account and start using Bernard’s Hub today.
          </p>
          <Link
            to="/register"
            className="inline-block px-5 py-2 rounded-md text-white
            bg-[var(--primary-color)] hover:opacity-90"
          >
            Create Account
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Bernard’s Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;