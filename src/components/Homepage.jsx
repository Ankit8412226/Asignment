"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function Homepage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    slidesToScroll: 1,
    loop: true,
  });

  // Update selected index when scrolling
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Set up auto-scroll and event listeners
  useEffect(() => {
    if (!emblaApi) return;

    // Register onSelect event
    emblaApi.on("select", onSelect);

    // Initial selection
    onSelect();

    // Auto-scroll functionality - one by one
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000); // Scroll every 3 seconds

    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(autoplay); // Clean up interval on component unmount
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Function to scroll to specific slide
  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const rides = [
    {
      name: "Water Pendulum",
      location: "Kochi",
      description:
        "Hold on tight as you glide up and down on a water tube across a U-shaped slide!",
      videoUrl:
        "https://d22pimhl2qmbj7.cloudfront.net/public/Water_Pendulam_480p_53805faa9e.mp4",
      link: "/rides/kochi/rides/water-pendulum",
    },
    {
      name: "Drop Loop",
      location: "Bengaluru",
      description:
        "Slide down a sky-high slope, twist through a loop and make a splashy exit!",
      videoUrl:
        "https://d22pimhl2qmbj7.cloudfront.net/public/Drop_Loop_480p_604a9571a6.mp4",
      link: "/rides/bengaluru/rides/drop-loop",
    },
    {
      name: "Sea Lagoon",
      location: "Hyderabad",
      description:
        "Get soaked, splashed and sprayed in this thrilling pool paradise!",
      videoUrl:
        "https://d22pimhl2qmbj7.cloudfront.net/public/Sea_Lagoon_480p_072171123b.mp4",
      link: "/rides/hyderabad/rides/sea-lagoon",
    },
    {
      name: "Wave Pool",
      location: "Bhubaneswar",
      description:
        "Experience the bliss of waves washing over you, far away from the sea.",
      videoUrl:
        "https://d22pimhl2qmbj7.cloudfront.net/public/Wave_Pool_1_480p_7ff2c460ac.mp4",
      link: "/rides/bhubaneswar/rides/wave-pool",
    },
    {
      name: "Korneto",
      location: "Kochi",
      description:
        "Slide, swirl and splash through a whirling vortex on this slippery ride!",
      videoUrl:
        "https://d22pimhl2qmbj7.cloudfront.net/public/Korneto_480p_76298a8b68.mp4",
      link: "/rides/kochi/rides/korneto",
    },
    {
      name: "Bullet",
      location: "Bengaluru",
      description:
        "Navigate through twists, tunnels and loops on 3 epic water slides!",
      videoUrl:
        "https://d22pimhl2qmbj7.cloudfront.net/public/Banded_Kraits_480p_191dfcc9cf.mp4",
      link: "/rides/bengaluru/rides/bullet",
    },
    {
      name: "Screw",
      location: "Hyderabad",
      description:
        "Get ready to rush through dizzying turns and loops at mind-blowing speeds!",
      videoUrl:
        "https://d22pimhl2qmbj7.cloudfront.net/public/Skrew_480p_e740d8313b.mp4",
      link: "/rides/hyderabad/rides/screw",
    },
    {
      name: "Drop & Tornado",
      location: "Bhubaneswar",
      description:
        "Zoom down through a twisty maze of 4 thrilling tunnels into a splashy escape!",
      videoUrl:
        "https://d22pimhl2qmbj7.cloudfront.net/public/Drop_480p_592faaf01c.mp4",
      link: "/rides/bhubaneswar/rides/drop-tornado",
    },
    {
      name: "Water Falls",
      location: "Kochi",
      description: "Get drenched under a cascading waterfall with steep rocks.",
      videoUrl:
        "https://d22pimhl2qmbj7.cloudfront.net/public/Waterfall_480p_986c910678.mp4",
      link: "/rides/kochi/rides/water-falls",
    },
    {
      name: "Harakiri",
      location: "Bengaluru",
      description:
        "Rush down, take a breather, and slide back down to the finish for pure, non-stop thrill!",
      videoUrl:
        "https://d22pimhl2qmbj7.cloudfront.net/public/Harakiri_480p_fb97d12eba.mp4",
      link: "/rides/bengaluru/rides/harakiri",
    },
  ];

  const RideTypeCircle = () => (
    <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-[600px] pointer-events-none">
      <div
        className="h-[600px] w-[600px] rounded-full relative"
        style={{
          background:
            "conic-gradient(from 0deg, rgb(232, 233, 241) 15deg, rgb(250, 213, 0) 65deg, rgb(250, 213, 0) 115deg, rgb(232, 233, 241) 165deg, rgb(232, 233, 241))",
          position: "absolute",
          left: "-300px",
        }}
      >
        <div className="bg-[rgb(34,48,74)] h-[420px] w-[420px] rounded-full absolute top-1/2 left-[90px] -translate-y-1/2"></div>

        <div
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{ top: "19rem", left: "16.7rem" }}
        ></div>

        {/* Land Rides */}
        <div>
          <div className="absolute top-24 left-20 transform z-20 -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer">
            <img
              className="scale-100 transition-transform duration-300 ease-in-out hover:scale-110"
              src="https://wonderla.vercel.app/icons/landRides.svg"
              alt="Land Rides"
            />
          </div>
          <div className="absolute top-24 left-48 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl capitalize">
            <div>land</div>
            <div className="text-sm rounded-2xl px-3 py-1 bg-blue-500 bg-opacity-30">
              73 Rides
            </div>
          </div>
        </div>

        {/* Water Rides */}
        <div>
          <div className="absolute top-28 left-28 transform z-20 -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer">
            <img
              className="transition-transform duration-300 ease-in-out hover:scale-110"
              src="https://wonderla.vercel.app/icons/waterRides.svg"
              alt="Water Rides"
              style={{ transform: "scale(1.4)" }}
            />
          </div>
          <div className="absolute top-1/2 left-56 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl capitalize">
            <div>water</div>
            <div className="text-sm rounded-2xl px-3 py-1 bg-blue-500 bg-opacity-30">
              54 Rides
            </div>
          </div>
        </div>

        {/* Kids Rides */}
        <div>
          <div className="absolute bottom-12 left-20 transform z-20 -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer">
            <img
              className="scale-100 transition-transform duration-300 ease-in-out hover:scale-110"
              src="https://wonderla.vercel.app/icons/waterRides.svg"
              alt="Kids Rides"
            />
          </div>
          <div className="absolute bottom-12 left-48 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl capitalize">
            <div>kids</div>
            <div className="text-sm rounded-2xl px-3 py-1 bg-blue-500 bg-opacity-30">
              35 Rides
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex w-full h-full relative">
      {/* Yellow strip section with ride types */}
      <div className="w-1/4 relative">
        <RideTypeCircle />
      </div>

      {/* Main content area */}
      <div className="w-3/4 pl-16">
        {/* Heading section with buttons */}
        <div className="flex justify-between items-center py-8">
          <h1 className="text-5xl text-white font-bold">OUR ICONIC RIDES</h1>
          <div className="flex space-x-4">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-all duration-200"
              aria-label="Previous slide"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="#1E3A8A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              onClick={scrollNext}
              className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-all duration-200"
              aria-label="Next slide"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 6L15 12L9 18"
                  stroke="#1E3A8A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel section */}
        <div className="relative">
          <div className="embla mt-5 relative overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {rides.map((ride, index) => (
                <div
                  key={index}
                  className="rounded-3xl mx-2 min-w-[250px] max-w-[250px] flex-none transform-gpu relative"
                >
                  {/* Gradient overlay */}
                  <div
                    className="absolute z-10 h-full w-full flex flex-col rounded-2xl pb-10 justify-end"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(245,245,245,0) 34.08%, rgba(34, 48, 74,1) 100%)",
                    }}
                  ></div>

                  {/* Text container */}
                  <div className="absolute z-10 p-3 h-full flex justify-end flex-col">
                    <div className="text-white">
                      <div className="font-bold text-lg">{ride.name}</div>
                      <div className="text-xs text-gray-300">
                        {ride.location}
                      </div>
                      <div className="text-xs mt-1">{ride.description}</div>
                      <div className="transition-transform duration-200 hover:scale-105">
                        <a href={ride.link}>
                          <button className="py-2 px-6 mt-3 uppercase font-extrabold bg-[#FAD504] rounded-lg text-blue-900 hover:cursor-pointer">
                            <div className="flex justify-center items-center gap-1">
                              <div className="text-xs">Ride Details</div>
                            </div>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Video background */}
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="aspect-[229/394] rounded-3xl w-full object-cover lg:aspect-[246/346]"
                  >
                    <source src={ride.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Explore button */}
        <div className="flex justify-start mt-8">
          <button className="py-3 px-16 font-bold bg-yellow-400 rounded-full text-blue-900 hover:bg-yellow-500 transition-all duration-200">
            Explore All Rides!
          </button>
        </div>
      </div>
    </div>
  );
}
