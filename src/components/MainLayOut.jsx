import Navbar from "./Navbar.jsx";
import Footer from "../pages/Footer.jsx";
import { Outlet } from "react-router-dom";

export default function MainLayOut() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar always on top */}
      <Navbar />

      {/* Page content in the middle */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
}
