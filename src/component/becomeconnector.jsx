import React, { useState } from "react";
import Navbar from "./navbar";

const Becomeconnector = () => {
  return (
    <>
      <Navbar />
      <Connector />
    </>
  );
};

export default Becomeconnector;

const Connector = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    loan: "",
    pan: "",
    aadhar: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() === "") {
        newErrors[key] = `${key.replace(/([A-Z])/g, " $1")} is required`;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log(formData);
      alert("Form submitted successfully");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center pt-10 mt-20">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-3xl rounded-xl shadow-md p-8"
      >
        <h2 className="text-center text-2xl font-bold text-blue-700 mb-8">
          Connector Registration Form
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="border-2 border-cyan-600 p-1.5 w-full"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="border-2 border-cyan-600 p-1.5 w-full"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName}</p>
            )}
          </div>

          {/* Company */}
          <div>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              className="border-2 border-cyan-600 p-1.5 w-full"
              value={formData.company}
              onChange={handleChange}
            />
            {errors.company && (
              <p className="text-red-500 text-sm">{errors.company}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border-2 border-cyan-600 p-1.5 w-full"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="border-2 border-cyan-600 p-1.5 w-full"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          {/* Loan */}
          <div>
            <select
              name="loan"
              className="border-2 border-cyan-600 p-1.5 w-full"
              value={formData.loan}
              onChange={handleChange}
            >
              <option value="">Choose a Loan</option>
              <option>Personal Loan</option>
              <option>Home Loan</option>
              <option>Business Loan</option>
              <option>Mortgage Loan</option>
            </select>
            {errors.loan && (
              <p className="text-red-500 text-sm">{errors.loan}</p>
            )}
          </div>

          {/* PAN */}
          <div>
            <input
              type="text"
              name="pan"
              placeholder="PAN Number"
              className="border-2 border-cyan-600 p-1.5 w-full"
              value={formData.pan}
              onChange={handleChange}
            />
            {errors.pan && (
              <p className="text-red-500 text-sm">{errors.pan}</p>
            )}
          </div>

          {/* Aadhar */}
          <div>
            <input
              type="text"
              name="aadhar"
              placeholder="Aadhar Number"
              className="border-2 border-cyan-600 p-1.5 w-full"
              value={formData.aadhar}
              onChange={handleChange}
            />
            {errors.aadhar && (
              <p className="text-red-500 text-sm">{errors.aadhar}</p>
            )}
          </div>
        </div>

        {/* Address */}
        <div className="mt-6">
          <textarea
            name="address"
            placeholder="Enter Your Address"
            rows="4"
            className="border-2 border-cyan-600 p-1.5 w-full"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address}</p>
          )}
        </div>

        {/* File Uploads */}
        <div className="mt-6 space-y-4">
          <div>
            <label className="font-semibold block mb-1">
              Upload PAN Card
            </label>
            <input type="file" />
          </div>

          <div>
            <label className="font-semibold block mb-1">
              Upload Aadhar Card
            </label>
            <input type="file" />
          </div>

          <div>
            <label className="font-semibold block mb-1">
              Upload Cancelled Cheque
            </label>
            <input type="file" />
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-3 rounded-lg font-semibold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
