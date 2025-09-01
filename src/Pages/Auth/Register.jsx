import React, { useState } from "react";
import registerImg from "../../assets/others/authentication2.png";
import registerBG from "../../assets/others/authentication.png";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Something was wrong !");
      return;
    }
    console.log("Register Data:", formData); // 👉 send this to backend
  };
  return (
    <section className="min-h-screen w-full flex items-center justify-center">
      <div
        style={{
          backgroundImage: `url(${registerBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full flex justify-center flex-col md:flex-row overflow-hidden"
      >
        {/* Left Image */}
        <div className="hidden md:flex items-center justify-center p-6">
          <img
            src={registerImg}
            alt="Register Illustration"
            className="object-contain"
          />
        </div>

        {/* Right Form */}
        <div className="p-8 flex flex-col justify-center shadow-xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Welcome To Bistro Boss 👋
          </h1>
          <p className="text-gray-500 mb-8 text-center">
            Please Register to continue
          </p>
          {/* input  form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-lg shadow-sm outline-none"
                placeholder="Enter your email"
              />
            </div>

            {/* Password with eye toggle */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  className="w-full px-4 py-2 rounded-lg pr-10 bg-white text-black border border-gray-300 shadow-sm outline-none"
                  placeholder="Enter your password"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            {/* Password with eye toggle */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={confirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg pr-10 bg-white text-black border border-gray-300 shadow-sm outline-none"
                  placeholder="Enter your password"
                  required
                />
                <span
                  onClick={() => setConfirmPassword(!confirmPassword)}
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500 hover:text-gray-700"
                >
                  {confirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-lg shadow-sm outline-none"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300"
            >
              Sign Up
            </button>
          </form>
          {/* Social Logins */}
          <div className="mt-8">
            <div className="flex items-center justify-center">
              <span className="h-px w-16 bg-gray-300"></span>
              <span className="px-4 text-sm text-gray-500">
                Or continue with
              </span>
              <span className="h-px w-16 bg-gray-300"></span>
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <button className="flex items-center justify-center gap-2 w-36 px-4 py-2 text-black border rounded-lg shadow-sm hover:bg-gray-50 transition">
                <FaGoogle className="text-red-500" /> Google
              </button>
              <button className="flex items-center justify-center gap-2 w-36 px-4 py-2 text-black border rounded-lg shadow-sm hover:bg-gray-50 transition">
                <FaFacebook className="text-blue-600" /> Facebook
              </button>
              <button className="flex items-center justify-center gap-2 w-36 px-4 py-2 text-black border rounded-lg shadow-sm hover:bg-gray-50 transition">
                <FaGithub className="text-black" /> GitHub
              </button>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?
            <Link
              to={"/user_login"}
              className="text-indigo-600 hover:underline"
            >
              Sign in
            </Link>
          </p>
          <p className="text-center text-sm text-gray-500 mt-2">
            <Link to={"/"} className="text-gray-700 hover:underline">
              Go to Home
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
