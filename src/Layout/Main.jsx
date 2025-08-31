import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";

export default function Main() {
  const location = useLocation();
  const isAuthRoute =
    location.pathname.includes("/user_login") ||
    location.pathname.includes("/user_register");
  return (
    <>
      {isAuthRoute || (
        <header>
          <Navbar></Navbar>
        </header>
      )}
      <main>
        <Outlet></Outlet>
      </main>
      {isAuthRoute || (
        <footer>
          <Footer></Footer>
        </footer>
      )}
    </>
  );
}
