import React, { useState } from "react";

const Register = () => {
  const [role, setRole] = useState("customer");

  return (
    <div className="min-h-screen bg-[var(--bg-light)] flex items-center justify-center py-10">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-lg p-8">
        
        <h2 className="text-2xl font-bold text-center text-[var(--primary-color)] mb-6">
          Create Account
        </h2>

        <form className="space-y-4">

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-[var(--text-dark)]">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-[var(--text-dark)]">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-[var(--text-dark)]">
              Phone Number (Call Line)
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] outline-none"
            />
          </div>

          {/* Whatsapp */}
          <div>
            <label className="block text-sm font-medium text-[var(--text-dark)]">
              WhatsApp Number
            </label>
            <input
              type="tel"
              placeholder="Enter your WhatsApp number"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] outline-none"
            />
          </div>

          {/* Role Selection */}
          <div>
            <label className="block text-sm font-medium text-[var(--text-dark)] mb-2">
              Register As
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] outline-none"
            >
              <option value="customer">Customer</option>
              <option value="driver">Keke Driver</option>
              <option value="agent">Real Estate Agent</option>
            </select>
          </div>

          {/* DRIVER EXTRA FIELDS */}
          {role === "driver" && (
            <>
              {/* Keke Plate Number */}
              <div>
                <label className="block text-sm font-medium text-[var(--text-dark)]">
                  Keke Plate Number
                </label>
                <input
                  type="text"
                  placeholder="Enter plate number"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] outline-none"
                />
              </div>

              {/* Driver License Number */}
              <div>
                <label className="block text-sm font-medium text-[var(--text-dark)]">
                  Driver’s License Number
                </label>
                <input
                  type="text"
                  placeholder="Enter license number"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] outline-none"
                />
              </div>

              {/* Years of Experience */}
              <div>
                <label className="block text-sm font-medium text-[var(--text-dark)]">
                  Years of Driving Experience
                </label>
                <input
                  type="number"
                  placeholder="Minimum 1–3 years"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] outline-none"
                />
              </div>

              {/* Upload License Image */}
              <div>
                <label className="block text-sm font-medium text-[var(--text-dark)]">
                  Upload Driver’s License (Image)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full mt-1 px-4 py-2 border rounded-lg bg-white"
                />
              </div>

              {/* Upload Driver Picture */}
              <div>
                <label className="block text-sm font-medium text-[var(--text-dark)]">
                  Upload Your Picture
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full mt-1 px-4 py-2 border rounded-lg bg-white"
                />
              </div>
            </>
          )}

          {/* AGENT EXTRA FIELD */}
       {/* AGENT EXTRA FIELDS */}
{role === "agent" && (
  <>
    {/* Business Name */}
    <div>
      <label className="block text-sm font-medium text-[var(--text-dark)]">
        Business Name
      </label>
      <input
        type="text"
        placeholder="Enter business name"
        className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] outline-none"
      />
    </div>

    {/* Means of Identification Type */}
    <div>
      <label className="block text-sm font-medium text-[var(--text-dark)]">
        Means of Identification
      </label>
      <select
        className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] outline-none"
      >
        <option value="">Select ID Type</option>
        <option value="nin">National ID (NIN)</option>
        <option value="passport">International Passport</option>
        <option value="drivers_license">Driver’s License</option>
        <option value="voters_card">Voter’s Card</option>
      </select>
    </div>

    {/* ID Number */}
    <div>
      <label className="block text-sm font-medium text-[var(--text-dark)]">
        ID Number
      </label>
      <input
        type="text"
        placeholder="Enter ID number"
        className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] outline-none"
      />
    </div>

    {/* Upload ID Image */}
    <div>
      <label className="block text-sm font-medium text-[var(--text-dark)]">
        Upload ID Image
      </label>
      <input
        type="file"
        accept="image/*"
        className="w-full mt-1 px-4 py-2 border rounded-lg bg-white"
      />
    </div>

    {/* Upload Profile Picture */}
    <div>
      <label className="block text-sm font-medium text-[var(--text-dark)]">
        Upload Your Picture
      </label>
      <input
        type="file"
        accept="image/*"
        className="w-full mt-1 px-4 py-2 border rounded-lg bg-white"
      />
    </div>

    {/* Office Address (Optional but Recommended) */}
    <div>
      <label className="block text-sm font-medium text-[var(--text-dark)]">
        Office Address
      </label>
      <input
        type="text"
        placeholder="Enter office address"
        className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] outline-none"
      />
    </div>
  </>
)}


          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-[var(--text-dark)]">
              Password
            </label>
            <input
              type="password"
              placeholder="Create password"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[var(--primary-color)] text-[var(--text-light)] py-2 rounded-lg hover:opacity-90 transition"
          >
            Register
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-[var(--primary-color)] font-medium">
              Login
            </a>
          </p>

        </form>
      </div>
    </div>
  );
};

export default Register;
