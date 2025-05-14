"use client"; // Important for Next.js client components

import Image from "next/image";
import WonderlaNavbar from "../components/WonderlaNavbar"; // Correct import path
import Homepage from "@/components/Homepage";

export default function Home() {
  return (
    <div className="bg-[rgb(34,48,74)] min-h-screen">
      {/* Navbar positioned with more space from top */}
      <div className="pt-4">
        <WonderlaNavbar />
      </div>
      <Homepage />
    </div>
  );
}
