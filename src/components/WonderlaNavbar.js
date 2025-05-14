"use client";
import { useState, useRef, forwardRef } from "react";
import Image from "next/image";
import {
  ChevronDown,
  MapPin,
  Tag,
  Ticket,
  Utensils,
  Calendar,
  Zap,
  ChevronRight,
  Menu,
  X,
  Home,
  Hotel,
  Users,
  Briefcase,
  Handshake,
} from "lucide-react";

import { Mulish } from "next/font/google";

const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mulish",
});

import logo from "../../public/Wondreala.webp";
import Bangalore from "../../public/Bangalore.webp";
import Kochi from "../../public/Kochi.webp";
import Bhubaneswar from "../../public/Bhubaneswar.webp";
import Hyderabad from "../../public/Hyderabad.webp";

export default function WonderlaNavbar() {
  const [showLocations, setShowLocations] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isParksOpen, setIsParksOpen] = useState(false);
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
  const locationNavRef = useRef(null);
  const locationDropdownRef = useRef(null);

  // Handle mouseenter/leave with a slight delay to improve UX
  const handleLocationEnter = () => {
    setShowLocations(true);
  };

  const handleLocationLeave = () => {
    const timer = setTimeout(() => {
      if (!activeSubmenu) {
        setShowLocations(false);
      }
    }, 200);
    return () => clearTimeout(timer);
  };

  const handleSubmenuEnter = (location) => {
    setActiveSubmenu(location);
  };

  const handleSubmenuLeave = () => {
    setActiveSubmenu(null);
  };

  const handleDropdownLeave = () => {
    const timer = setTimeout(() => {
      setShowLocations(false);
      setActiveSubmenu(null);
    }, 200);
    return () => clearTimeout(timer);
  };

  const toggleParks = () => {
    setIsParksOpen(!isParksOpen);
  };

  const toggleQuickLinks = () => {
    setIsQuickLinksOpen(!isQuickLinksOpen);
  };

  const closeSidebar = () => {
    setShowMenu(false);
  };

  return (
    <div className={`px-4 md:px-12 py-4 md:py-6 mx-auto ${mulish.className}`}>
      <div className="bg-white w-full rounded-xl px-4 md:px-8 py-3 md:py-4 border shadow-sm relative">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 w-1/4">
            <div className="flex items-center">
              <Image
                src={logo}
                alt="Wonderla Logo"
                width={130}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center space-x-4 lg:space-x-6 w-1/2">
            <NavItem
              icon={<MapPin size={18} />}
              text="LOCATIONS"
              hasDropdown
              onMouseEnter={handleLocationEnter}
              onMouseLeave={handleLocationLeave}
              isActive={showLocations}
              ref={locationNavRef}
            />
            <NavItem icon={<Tag size={18} />} text="OFFERS" />
            <NavItem icon={<Ticket size={18} />} text="RIDES" />
            <NavItem icon={<Utensils size={18} />} text="RESTAURANTS" />
            <NavItem icon={<Calendar size={18} />} text="EVENTS" />
          </div>

          <div className="w-1/4 flex justify-end items-center space-x-2 md:space-x-4">
            <button className="bg-yellow-400 text-blue-900 px-2 md:px-4 py-1 md:py-2 rounded-md font-bold text-xs md:text-sm flex items-center whitespace-nowrap">
              BOOK TICKETS <Zap className="ml-1" size={14} />
            </button>

            <button
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              onClick={() => setShowMenu(!showMenu)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {showLocations && (
          <div
            className="absolute bg-white rounded-3xl shadow-lg z-20 w-64"
            style={{
              left: locationNavRef.current
                ? locationNavRef.current.offsetLeft - 20
                : "20%",
              top: "100%",
              marginTop: "10px",
            }}
            onMouseEnter={() => setShowLocations(true)}
            onMouseLeave={handleDropdownLeave}
            ref={locationDropdownRef}
          >
            <div className="p-2 overflow-hidden rounded-3xl">
              <div className="grid grid-cols-1">
                <LocationItem
                  name="KOCHI"
                  imageSrc={Kochi}
                  onMouseEnter={() => handleSubmenuEnter(null)}
                />
                <LocationItem
                  name="BENGALURU"
                  imageSrc={Bangalore}
                  hasArrow
                  onMouseEnter={() => handleSubmenuEnter("BENGALURU")}
                  isActive={activeSubmenu === "BENGALURU"}
                  activeSubmenu={activeSubmenu}
                />
                <LocationItem
                  name="HYDERABAD"
                  imageSrc={Hyderabad}
                  onMouseEnter={() => handleSubmenuEnter(null)}
                />
                <LocationItem
                  name="BHUBANESHWAR"
                  imageSrc={Bhubaneswar}
                  onMouseEnter={() => handleSubmenuEnter(null)}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div
        className={`fixed inset-0 bg-black z-50 transition-opacity duration-300 ease-in-out ${
          showMenu ? "bg-opacity-50 visible" : "bg-opacity-0 invisible"
        }`}
        onClick={() => setShowMenu(false)}
      >
        <div
          className={`fixed top-0 right-0 h-dvh w-[470px] bg-white overflow-hidden no-scrollbar transition-transform duration-300 ease-in-out ${
            showMenu ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center bg-white w-[470px] p-8 pb-3">
            <Image
              src={logo}
              alt="Wonderla Logo"
              width={130}
              height={40}
              className="h-15 w-auto object-contain"
            />
            <div
              className="mr-4 p-1.5 rounded-full cursor-pointer border-gray-200 border"
              onClick={closeSidebar}
            >
              <X size={18} className="text-black" />
            </div>
          </div>

          <div className="h-full min-h-0 overflow-y-scroll p-7">
            <div className="h-fit flex flex-col overflow-y-visible flex-1 pb-24">
              <div className="flex-1 cursor-pointer">
                <div
                  className="flex items-center gap-3 justify-between"
                  onClick={toggleParks}
                >
                  <div className="flex items-center gap-3">
                    <div>
                      <Home className="h-7 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xl font-normal mb-1">Parks</div>
                      <div className="text-xs text-gray-600">
                        Explore Your favourite Wonderla Park
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    size={24}
                    className={`text-blue-600 ${
                      isParksOpen ? "rotate-180 transform" : ""
                    }`}
                  />
                </div>
                <div
                  className="overflow-hidden transform transition-all ease-out duration-350"
                  style={{ height: isParksOpen ? "auto" : "0px" }}
                >
                  <div className="grid grid-cols-2 grid-rows-2 gap-3 p-3 pb-1">
                    <div>
                      <div className="flex cursor-pointer items-center flex-col border border-gray-200 shadow-md rounded-2xl p-3">
                        <div>
                          <Image
                            src={Kochi}
                            alt="Kochi"
                            width={40}
                            height={40}
                            className="rounded-full h-10 w-10 mb-2 object-cover"
                          />
                        </div>
                        <div className="capitalize">kochi</div>
                      </div>
                    </div>
                    <div>
                      <div className="flex cursor-pointer items-center flex-col border border-gray-200 shadow-md rounded-2xl p-3">
                        <div>
                          <Image
                            src={Bangalore}
                            alt="Bengaluru"
                            width={40}
                            height={40}
                            className="rounded-full h-10 w-10 mb-2 object-cover"
                          />
                        </div>
                        <div className="capitalize">bengaluru</div>
                      </div>
                    </div>
                    <div>
                      <div className="flex cursor-pointer items-center flex-col border border-gray-200 shadow-md rounded-2xl p-3">
                        <div>
                          <Image
                            src={Hyderabad}
                            alt="Hyderabad"
                            width={40}
                            height={40}
                            className="rounded-full h-10 w-10 mb-2 object-cover"
                          />
                        </div>
                        <div className="capitalize">hyderabad</div>
                      </div>
                    </div>
                    <div>
                      <div className="flex cursor-pointer items-center flex-col border border-gray-200 shadow-md rounded-2xl p-3">
                        <div>
                          <Image
                            src={Bhubaneswar}
                            alt="Bhubaneshwar"
                            width={40}
                            height={40}
                            className="rounded-full h-10 w-10 mb-2 object-cover"
                          />
                        </div>
                        <div className="capitalize">bhubaneshwar</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="h-4"></div>
                  <hr className="border-t-1 border-gray-200" />
                  <div className="h-4"></div>
                </div>
              </div>

              {/* Resorts Section */}
              <div>
                <div className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div>
                      <Hotel className="h-7 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xl font-normal mb-1">Resorts</div>
                      <div className="text-xs text-gray-600">
                        Get a rejuvenating experience at Wonderla Resort
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="h-4"></div>
                    <hr className="border-t-1 border-gray-200" />
                    <div className="h-4"></div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div>
                      <Tag className="h-7 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xl font-normal mb-1">
                        Offers & Combos
                      </div>
                      <div className="text-xs text-gray-600">
                        Plan the perfect day with exciting offers
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="h-4"></div>
                    <hr className="border-t-1 border-gray-200" />
                    <div className="h-4"></div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div>
                      <Calendar className="h-7 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xl font-normal mb-1">
                        Timings And Guidelines
                      </div>
                      <div className="text-xs text-gray-600">
                        Know the timings and other guidelines
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="h-4"></div>
                    <hr className="border-t-1 border-gray-200" />
                    <div className="h-4"></div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div
                  className="flex-1 p-2 rounded-2xl"
                  style={{
                    backgroundColor: "rgb(250, 214, 0)",
                    color: "rgb(0, 0, 0)",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div>
                      <Users className="h-10 w-10 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xl font-normal mb-1 flex items-center">
                        Group Booking
                      </div>
                      <div className="text-xs text-gray-600 flex items-center">
                        Reach Out To Wonderla Team
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="flex-1 p-2 rounded-2xl"
                  style={{
                    backgroundColor: "rgb(51, 77, 207)",
                    color: "rgb(255, 255, 255)",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div>
                      <Briefcase className="h-10 w-10 text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-normal mb-1">
                        Tour Operator Portal
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: "rgb(255, 255, 255)" }}
                      >
                        Reach Out To Wonderla Team
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="flex-1 p-2 rounded-2xl"
                  style={{
                    backgroundColor: "rgb(250, 214, 0)",
                    color: "rgb(0, 0, 0)",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div>
                      <Handshake className="h-10 w-10 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xl font-normal mb-1 flex items-center">
                        Partner With Us
                      </div>
                      <div className="text-xs text-gray-600">
                        Reach Out To Wonderla Team
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <div className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div>
                      <Home className="h-7 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xl font-normal mb-1">About Us</div>
                      <div className="text-xs text-gray-600">
                        Know all about Wonderla
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="h-4"></div>
                    <hr className="border-t-1 border-gray-200" />
                    <div className="h-4"></div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex-1 cursor-pointer">
                  <div
                    className="flex items-center gap-3 justify-between"
                    onClick={toggleQuickLinks}
                  >
                    <div className="flex items-center gap-3">
                      <div>
                        <ChevronRight className="h-7 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-normal mb-1">
                          Quick Links
                        </div>
                        <div className="text-xs text-gray-600">
                          Explore all other relevant information here
                        </div>
                      </div>
                    </div>
                    <ChevronDown
                      size={24}
                      className={`text-blue-600 ${
                        isQuickLinksOpen ? "rotate-180 transform" : ""
                      }`}
                    />
                  </div>
                  <div
                    className="overflow-hidden transform transition-all ease-out duration-350"
                    style={{ height: isQuickLinksOpen ? "auto" : "0px" }}
                  >
                    <div className="flex pt-3">
                      <div className="w-10"></div>
                      <div className="flex gap-2 text-sm flex-col">
                        <div>Restaurants</div>
                        <div>Merchandise</div>
                        <div>Events</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="h-4"></div>
                    <hr className="border-t-1 border-gray-200" />
                    <div className="h-4"></div>
                  </div>
                </div>
              </div>

              <div className="flex-1 cursor-pointer">
                <div className="flex items-center gap-3">
                  <div>
                    <Ticket className="h-7 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xl font-normal mb-1">Contact Us</div>
                    <div className="text-xs text-gray-600">
                      Get In Touch Wonderla Team
                    </div>
                  </div>
                </div>
                <div>
                  <div className="h-4"></div>
                  <hr className="border-t-1 border-gray-200" />
                  <div className="h-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const NavItem = forwardRef(function NavItem(
  {
    icon,
    text,
    hasDropdown = false,
    onMouseEnter,
    onMouseLeave,
    isActive = false,
  },
  ref
) {
  return (
    <div
      className={`flex items-center cursor-pointer hover:text-gray-900 ${
        isActive ? "text-gray-900" : "text-[#717D92]"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={ref}
    >
      <div className={`mr-1 ${isActive ? "text-gray-900" : "text-[#717D92]"}`}>
        {icon}
      </div>
      <div className="font-medium text-sm">{text}</div>
      {hasDropdown && (
        <ChevronDown
          size={16}
          className={`ml-1 transition-transform ${
            isActive ? "rotate-180" : ""
          }`}
        />
      )}
    </div>
  );
});

function LocationItem({
  name,
  imageSrc,
  hasArrow = false,
  onMouseEnter,
  isActive = false,
}) {
  return (
    <div
      className="relative flex items-center py-2 px-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100"
      onMouseEnter={onMouseEnter}
    >
      <div className="rounded-md overflow-hidden mr-3">
        <Image
          src={imageSrc}
          alt={name}
          width={40}
          height={40}
          className="w-10 h-10 object-cover rounded-md"
        />
      </div>
      <div className="font-medium text-[#717D92]">{name}</div>
      {hasArrow && (
        <ChevronRight size={16} className="ml-auto text-[#717D92]" />
      )}

      {name === "BENGALURU" && isActive && (
        <div className="absolute left-full top-0 bg-white shadow-lg rounded-xl p-2 min-w-40 z-30">
          <div className="font-medium text-gray-900 px-3 py-2 mb-2 border-b border-gray-100">
            Resorts
          </div>
          <div className="flex items-center py-2 px-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100">
            <div className="rounded-md overflow-hidden mr-3">
              <Hotel size={20} className="text-blue-600" />
            </div>
            <div className="font-medium text-[#717D92]">Bangalore Resort</div>
          </div>
          <div className="flex items-center py-2 px-3 hover:bg-gray-50 cursor-pointer">
            <div className="rounded-md overflow-hidden mr-3">
              <Hotel size={20} className="text-blue-600" />
            </div>
            <div className="font-medium text-[#717D92]">Premium Resort</div>
          </div>
        </div>
      )}
    </div>
  );
}
