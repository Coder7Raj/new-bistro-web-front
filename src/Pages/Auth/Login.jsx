import React from "react";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import loginImg from "../../assets/others/authentication2.png";
import loginBG from "../../assets/others/authentication.png";
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
        className="min-h-screen w-full flex justify-center flex-col md:flex-row overflow-hidden"
      >
        {/* left side */}
        <div className="p-8 flex flex-col justify-center shadow-xl">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Login
          </h1>
          <p className="text-gray-500 mb-8 text-center">
            Please Login to continue
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
                className="w-full px-4 py-2 border bg-white text-black border-gray-300 rounded-lg shadow-sm outline-none"
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
                className="w-full px-4 py-2 border border-gray-300 bg-white text-black rounded-lg shadow-sm outline-none"
                placeholder="Enter your password"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300"
            >
              Login
            </button>
          </form>
          {/* Social Login */}
          <div className="mt-8">
            <div className="flex items-center justify-center">
              <span className="h-px w-16 bg-gray-300"></span>
              <span className="px-4 text-sm text-gray-500">
                Or continue with
              </span>
              <span className="h-px w-16 bg-gray-300"></span>
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <button className="flex items-center justify-center gap-2 px-4 py-2 border rounded-lg shadow-sm hover:bg-gray-50 transition">
                <FaGoogle className="text-red-500" /> Google
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-2 border rounded-lg shadow-sm hover:bg-gray-50 transition">
                <FaFacebook className="text-blue-600" /> Facebook
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-2 border rounded-lg shadow-sm hover:bg-gray-50 transition">
                <FaGithub className="text-gray-800" /> GitHub
              </button>
            </div>
          </div>
          {/* Extra links */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Don't have an account?{" "}
            <Link
              to={"/user_register"}
              className="text-indigo-600 hover:underline"
            >
              Sign up
            </Link>
          </p>
          <p className="text-center text-sm text-gray-500 mt-2">
            <Link to={"/"} className="text-gray-700 hover:underline">
              Go to Home
            </Link>
          </p>
        </div>
        {/* right side */}
        <div className="hidden md:flex items-center justify-center p-6">
          <img
            src={loginImg}
            alt="Register Illustration"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
