import React from "react";
import loginImg from "../../assets/others/authentication2.png";
import loginBG from "../../assets/others/authentication.png";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center">
      <div
        style={{
          backgroundImage: `url(${loginBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full flex flex-col md:flex-row overflow-hidden"
      >
        {/* Left Image */}
        <div className="hidden md:flex items-center justify-center p-6">
          <img
            src={loginImg}
            alt="Login Illustration"
            className="object-contain"
          />
        </div>

        {/* Right Form */}
        <div className="p-8 flex flex-col justify-center shadow-xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Welcome To Bistro Boss 👋
          </h1>
          <p className="text-gray-500 mb-8 text-center">
            Please Register in to continue
          </p>
          <form className="space-y-5">
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
                className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-lg shadow-sm outline-none"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-lg shadow-sm outline-none"
                placeholder="Enter your password"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-lg shadow-sm outline-none"
                placeholder="Re-enter your password"
              />
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
            <Link to={"/"} className="text-indigo-600 hover:underline">
              Sign in
            </Link>
          </p>
          <div className="mt-8">
            <button
              onClick={() => (window.location.href = "/")}
              className="w-full bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg shadow-sm hover:bg-gray-300 transition-all duration-300"
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
