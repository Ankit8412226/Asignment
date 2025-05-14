"use client"; // Important for Next.js client components

import Image from "next/image";
import WonderlaNavbar from "../components/WonderlaNavbar";
import Homepage from "@/components/Homepage";

export default function Home() {
  return (
    <div className="bg-[rgb(34,48,74)] min-h-screen">
      <div className="pt-4">
        <WonderlaNavbar />
      </div>
      <div>
        <Homepage />
      </div>
    </div>
  );
}
