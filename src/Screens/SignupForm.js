import React, { useState } from 'react';
import Config from '../Config/Config';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const BASE_URL = Config.BASE_URL;

const SignupForm = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const validationErrors = {};
    console.log(e);
    if (!formData.name) validationErrors.name = 'Name is required';
    if (!formData.mobile) validationErrors.mobile = 'Mobile is required';
    if (!formData.email) validationErrors.email = 'Email is required';
    if (!formData.password) validationErrors.password = 'Password is required';
    if (!formData.confirmPassword) validationErrors.confirmPassword = 'Please confirm your password';
    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.acceptTerms) validationErrors.acceptTerms = 'You must accept the Terms & Conditions';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Make API call
    axios.post(`${BASE_URL}/ragister`, formData)
      .then((response) => {
        if (response.data.success) {
          alert('Successfully registered');
          setFormData({
            name: '',
            mobile: '',
            email: '',
            password: '',
            confirmPassword: '',
            acceptTerms: false,
          });

         navigate("/login");
        } else {
          alert(response.data.message || 'Registration failed');
        }
      })
      .catch((error) => {
        console.error(error);
        alert('An error occurred while registering.');
      });
  };

  return (
    <div className="min-h-screen mt-16 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-[#F2FAFA] rounded-[30px] p-8 relative">
        {/* Close button */}
        <button className="absolute top-6 right-6 text-black hover:text-gray-700">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <h2 className="text-[48px] font-bold text-center mb-8 font-poppins">Signup</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2196F3] font-poppins text-[16px]"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1 font-poppins">*{errors.name}</p>}
          </div>

          {/* Mobile */}
          <div>
            <input
              name="mobile"
              type="text"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2196F3] font-poppins text-[16px]"
            />
            {errors.mobile && <p className="text-red-500 text-sm mt-1 font-poppins">*{errors.mobile}</p>}
          </div>

          {/* Email */}
          <div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2196F3] font-poppins text-[16px]"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1 font-poppins">*{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <input
              name="password"
              type="password"
              placeholder="Create Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2196F3] font-poppins text-[16px]"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1 font-poppins">*{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2196F3] font-poppins text-[16px]"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1 font-poppins">*{errors.confirmPassword}</p>}
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center space-x-2">
            <input
              id="acceptTerms"
              name="acceptTerms"
              type="checkbox"
              checked={formData.acceptTerms}
              onChange={handleChange}
              className="w-4 h-4 border-gray-300 rounded focus:ring-[#2196F3]"
            />
            <label htmlFor="acceptTerms" className="text-sm font-poppins">
              I agree to the{' '}
              <a href="#" className="text-[#2196F3]">Terms & Conditions</a>
              {' '}and{' '}
              <a href="#" className="text-[#2196F3]">Privacy Policy</a>
            </label>
          </div>
          {errors.acceptTerms && <p className="text-red-500 text-sm mt-1 font-poppins">*{errors.acceptTerms}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#2196F3] text-white py-3 rounded-xl hover:bg-[#1976D2] focus:outline-none focus:ring-2 focus:ring-[#2196F3] focus:ring-offset-2 font-poppins text-[18px] mt-6"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
