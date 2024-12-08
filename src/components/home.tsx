import {
  GlobeIcon,
  PersonIcon,
  MagnifyingGlassIcon,
  TwitterLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";
function Home() {
  const cityData = [
    {
      name: "Nashville",
      distance: "53 miles away",
      image:
        "https://a0.muscache.com/im/pictures/1faa127c-8f65-4ffe-a249-9254c29bafdb.jpg?im_w=240",
    },
    {
      name: "South Haven",
      distance: "168 miles away",
      image:
        "https://a0.muscache.com/im/pictures/a433b4d0-8183-4523-b4c5-99b81c5729c1.jpg?im_w=240",
    },
    {
      name: "Stanton",
      distance: "192 miles away",
      image:
        "https://img.freepik.com/premium-vector/french-countryside-cartoon-vector_970209-1028.jpg?w=826",
    },
    {
      name: "New Buffalo",
      distance: "130 miles away",
      image:
        "https://a0.muscache.com/im/pictures/03bb6d0a-5ccb-47e1-83fc-b7ad87e7f8c3.jpg?im_w=320",
    },
  ];

  const tabs = [
    "Destinations for arts & culture",
    "Destinations for outdoor adventure",
    "Mountain cabins",
    "Beach destinations",
    "Popular destinations",
    "Unique Stays",
  ];

  const destinations = [
    { city: "Phoenix", region: "Arizona" },
    { city: "Hot Springs", region: "Arkansas" },
    { city: "Los Angeles", region: "California" },
    { city: "San Diego", region: "California" },
    { city: "San Francisco", region: "California" },
    { city: "Barcelona", region: "Catalonia" },
    { city: "Prague", region: "Czechia" },
    { city: "Washington", region: "District of Columbia" },
    { city: "Keswick", region: "England" },
    { city: "London", region: "England" },
    { city: "Scarborough", region: "England" },
  ];

  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col items-center w-screen overflow-x-hidden">
        {/* Section 1 */}
        <div className="flex flex-col items-center gap-6 w-full px-4 lg:px-20 py-6 lg:py-12 bg-black">
          {/* Navbar */}
          <nav className="bg-black text-white px-4 md:px-8 py-3 flex flex-wrap items-center justify-between w-full">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <a href="/" className="flex items-center">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="102"
                  height="32"
                  viewBox="0 0 200 200"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g fill="#566777">
                    <path d="M0 100 l0 -100 100 0 100 0 0 100 0 100 -100 0 -100 0 0 -100z m26.50 29.85 c2.75 -0.95 14.70 -5.80 18.65 -7.55 2.05 -0.95 2.85 -1.55 2.85 -2.25 0 -1.30 4.65 -3.05 8.10 -3.05 1.75 0 3.60 -0.45 5.85 -1.45 3.70 -1.65 10.05 -4.30 15.20 -6.30 5.85 -2.30 16.95 -5.25 19.70 -5.25 1.95 0 2.65 -0.20 2.65 -0.70 0 -0.95 1.10 -1.30 4.25 -1.30 2.40 0 2.70 0.15 2.90 1.15 0.15 0.65 0.25 0.35 0.30 -0.80 l0.05 -1.95 3.25 0.20 c2.60 0.10 3.25 0 3.40 -0.65 0.20 -0.80 2.65 -1.45 5.75 -1.45 1.40 0 1.60 0.15 1.60 1.30 0 0.70 0.20 1.15 0.50 0.95 0.30 -0.15 0.50 -0.85 0.50 -1.50 0 -1.35 0.85 -1.75 3.75 -1.75 l2.20 0 0.20 3.40 0.15 3.35 0.10 -3.60 0.10 -3.65 3.75 0 3.70 0 0.20 3.65 0.15 3.60 0.10 -4.10 0.10 -4.10 2.15 -0.30 c4.40 -0.65 4.55 -0.55 4.90 4.25 l0.25 4.25 0.10 -4.60 0.10 -4.65 2.40 0 c1.30 0 5.75 -0.30 9.85 -0.70 4.15 -0.40 10.15 -0.90 13.40 -1.10 l5.85 -0.35 0 -1.40 c0 -1.75 1.20 -2.45 4.05 -2.45 2.05 0 2.10 0 1.20 -1 -0.50 -0.55 -1.70 -1.20 -2.60 -1.45 -2.50 -0.70 -18.90 0.45 -33.65 2.30 -3.15 0.40 -6.70 0.85 -7.85 1 l-2.15 0.25 0 -1.80 c0 -1.30 0.25 -1.90 0.90 -2.10 8.05 -2.70 31.60 -12.85 34.65 -14.95 1.60 -1.15 2.80 -3.05 2.20 -3.65 -0.20 -0.25 -8.85 0.75 -14.50 1.65 -2.45 0.40 -6.75 1.10 -9.50 1.50 -9.10 1.45 -25.50 4.85 -35.25 7.25 -3.15 0.80 -6.15 1.50 -6.60 1.60 -0.65 0.10 -0.75 0.35 -0.40 0.90 0.40 0.65 1.15 0.60 5.85 -0.60 7.15 -1.75 13.20 -3.05 23.15 -4.90 4.55 -0.85 9.25 -1.75 10.50 -2 3.35 -0.70 12.70 -2 14.45 -2 1.40 0 1.55 0.15 1.55 1.70 0 1.55 -0.20 1.75 -2.35 2.55 -1.35 0.50 -4.20 1.75 -6.40 2.80 -2.20 1 -5.90 2.55 -8.25 3.35 -2.35 0.85 -5.95 2.20 -8 3.05 -2.05 0.85 -6.45 2.55 -9.75 3.80 -3.30 1.30 -7.90 3.05 -10.25 3.95 -7.15 2.80 -12.65 4.30 -15.75 4.30 l-1.70 0 -0.20 -3.10 -0.15 -3.15 -0.10 3.80 c-0.10 4.20 -0.30 4.45 -3.40 4.45 -0.95 0 -1.70 0.25 -1.70 0.50 0 0.30 -1.25 0.50 -2.75 0.50 -2.50 0 -2.75 -0.10 -2.75 -1.10 0 -0.65 -0.25 -1.50 -0.50 -1.90 -0.35 -0.55 -0.50 -0.15 -0.50 1.50 0 1.25 -0.20 2.50 -0.40 2.80 -0.70 1.05 -2.55 1.70 -4.80 1.70 l-2.25 0 -0.20 -3.35 -0.15 -3.40 -0.10 4.15 c-0.10 3.95 -0.15 4.15 -1.40 4.60 -0.70 0.30 -2.15 0.50 -3.25 0.50 -1.30 0 -1.95 0.20 -1.95 0.70 0 0.40 -1.60 1.25 -3.85 2.05 -2.15 0.75 -4.80 1.75 -5.90 2.25 -1.10 0.50 -4.45 1.85 -7.50 3 -7.45 2.90 -17.35 7.30 -27.10 12.10 -7.75 3.75 -8.15 4.05 -8.15 5.40 l0 1.45 2.15 -0.65 c1.15 -0.35 3.10 -1 4.35 -1.45z m44.85 -32.70 c-0.10 -0.80 -0.20 -0.15 -0.20 1.35 0 1.50 0.10 2.15 0.20 1.40 0.10 -0.80 0.10 -2 0 -2.75z" />
                  </g>
                  <g fill="#e3d7db">
                    <path d="M18.30 133.25 c-0.15 -0.40 -0.15 -1.05 0 -1.40 0.10 -0.35 -0.20 -1.10 -0.80 -1.60 -0.55 -0.50 -1 -1.05 -1 -1.25 0 -0.95 26.20 -13.25 37.25 -17.50 3.05 -1.15 6.40 -2.50 7.50 -3 1.10 -0.50 3.75 -1.50 5.90 -2.25 3.15 -1.15 3.75 -1.50 3.30 -2.05 -0.45 -0.55 -0.30 -0.70 0.95 -0.70 1.05 0 1.60 -0.30 1.75 -0.85 0.20 -0.85 0.25 -0.85 0.30 0 0.05 0.90 1.10 1.05 2.80 0.40 0.55 -0.25 1.50 -0.25 2.15 0 1 0.40 1.10 0.30 1.10 -1.55 0 -1.45 0.20 -2 0.75 -2 0.40 0 0.75 0.35 0.75 0.75 0 1.35 3.20 0.50 4.15 -1.05 0.85 -1.45 1.80 -0.75 2 1.45 0.15 1.80 0.20 1.70 0.25 -0.75 0.10 -2.55 0.25 -2.90 1.10 -2.90 0.55 0 1 0.25 1 0.50 0 0.30 0.55 0.50 1.25 0.50 1.25 0 1.65 -0.70 0.75 -1.25 -1.05 -0.65 -0.45 -1.25 1.25 -1.25 1.20 0 1.75 0.25 1.75 0.75 0 0.40 0.20 0.75 0.45 0.75 1.05 0 2.05 -0.65 2.05 -1.30 0 -0.40 0.35 -0.70 0.75 -0.70 0.60 0 0.75 0.90 0.75 5.25 l0 5.25 -1.40 0 c-1.75 0 -15.15 3.95 -20.10 5.90 -2.05 0.80 -6 2.45 -8.75 3.60 -2.75 1.15 -6.35 2.60 -8 3.25 -1.65 0.65 -6.05 2.45 -9.75 4 -16.25 6.75 -20.55 8.45 -25.45 10.05 -5.85 1.95 -6.35 2 -6.75 0.95z m35.95 -13.85 c1.70 -0.85 1.80 -0.90 0.50 -0.65 -0.80 0.20 -2.40 0.75 -3.50 1.25 -1.70 0.80 -1.80 0.90 -0.50 0.65 0.85 -0.20 2.40 -0.75 3.50 -1.25z" />
                    <path d="M99.30 103.90 c-0.60 -2.30 -0.30 -8.70 0.45 -9.70 0.70 -0.90 0.70 -0.90 0.75 0 0 0.75 0.25 0.85 1.40 0.55 0.75 -0.20 2.25 -0.55 3.35 -0.75 1.85 -0.35 5.45 -1.60 13.25 -4.65 1.80 -0.70 5.75 -2.20 8.75 -3.30 3.05 -1.15 6.85 -2.65 8.50 -3.35 1.65 -0.75 4.90 -1.95 7.25 -2.80 2.35 -0.85 6.05 -2.35 8.25 -3.35 2.20 -1.05 5.05 -2.30 6.40 -2.80 1.30 -0.50 2.30 -0.95 2.20 -1.05 -0.20 -0.20 -9.70 1.15 -12.85 1.80 -1.25 0.25 -5.95 1.15 -10.50 2 -4.55 0.85 -10.50 2 -13.25 2.60 -9.75 2.10 -40.15 9.90 -49 12.65 -10.20 3.15 -9.25 2.90 -9.25 2.30 0 -0.30 1.30 -0.85 2.90 -1.35 1.55 -0.45 4.90 -1.45 7.35 -2.20 2.50 -0.75 6.55 -2 9 -2.70 5.30 -1.60 6.90 -2.20 5.70 -2.25 -1 -0.05 -20.25 5.60 -26.40 7.75 -0.55 0.15 -0.55 0.35 -0.05 0.95 0.95 1.15 0.15 1.55 -1.65 0.85 -1.30 -0.50 -1.65 -0.45 -1.95 0.10 -0.40 0.75 -3.45 2.80 -4.10 2.80 -0.20 0 -0.20 -0.45 -0.05 -1.05 0.30 -0.90 0.20 -1 -0.85 -0.70 -0.90 0.30 -3.45 1.35 -4.90 2.05 -0.15 0.05 -0.60 -0.05 -1 -0.30 -0.70 -0.40 -0.15 -0.70 6.25 -3.40 1.40 -0.60 4.70 -1.85 7.40 -2.80 2.65 -1 6.95 -2.55 9.50 -3.50 4.95 -1.85 16.70 -5.65 21.60 -7.05 1.65 -0.50 3.80 -1.15 4.75 -1.50 0.95 -0.35 3 -0.90 4.50 -1.20 1.50 -0.35 5.35 -1.25 8.50 -2.05 9.90 -2.45 26.30 -5.80 35.25 -7.25 2.75 -0.40 6.90 -1.10 9.25 -1.50 6.10 -1 16.65 -2 17.65 -1.60 1.75 0.65 0.65 4.40 -1.85 6.40 -1.85 1.45 -13.90 6.90 -24.70 11.20 -4.75 1.85 -8.50 3.50 -8.35 3.65 0.20 0.25 3.45 -0.05 16.25 -1.40 9.95 -1.05 22.35 -1.60 24.40 -1.05 2.45 0.70 4.25 2.70 3.80 4.25 -0.60 1.90 -1.15 2.25 -2.70 1.75 -1 -0.35 -1.75 -0.35 -2.50 0.05 -1.50 0.80 -0.75 1.50 1.55 1.50 1.35 0 1.95 0.20 1.95 0.70 0 1.25 -0.95 1.45 -6.95 1.55 -10.60 0.20 -16.50 0.80 -16.20 1.55 0.35 0.90 -0.75 0.90 -3 -0.05 -1.40 -0.55 -2.05 -0.60 -3.30 -0.10 -0.85 0.30 -1.55 0.85 -1.55 1.20 0 0.35 -0.45 0.65 -1.05 0.65 -0.75 0 -0.95 -0.25 -0.75 -0.75 0.20 -0.60 -0.15 -0.75 -1.45 -0.75 -1.30 0 -1.75 0.20 -1.75 0.80 0 0.55 -0.30 0.75 -1 0.55 -0.55 -0.15 -1 -0.05 -1 0.20 0 0.70 -1.10 0.50 -1.70 -0.30 -0.70 -1 -3.80 -0.50 -3.80 0.60 0 1.20 -1.70 0.50 -2.05 -0.85 -0.35 -1.15 -0.35 -1.15 -0.40 0.35 -0.05 1.55 -1.05 2.95 -1.05 1.45 0 -0.60 -0.55 -0.80 -2.25 -0.80 -1.70 0 -2.25 0.20 -2.25 0.80 0 1.60 -1.25 0.30 -1.55 -1.60 -0.25 -1.75 -0.30 -1.80 -0.40 -0.40 -0.05 1.70 -1.50 4.15 -1.55 2.60 0 -1.10 -1.65 -1.20 -2.70 -0.15 -0.90 0.90 -1.80 1 -1.80 0.15 0 -0.35 -0.35 -0.10 -0.80 0.50 -0.90 1.30 -1.70 1.45 -1.70 0.35 0 -0.65 -0.40 -0.75 -1.85 -0.45 -1.05 0.15 -2.15 0.65 -2.50 1.05 -0.80 1 -1.65 0.40 -1.65 -1.25 0 -1.05 -0.10 -1.20 -0.50 -0.60 -0.25 0.40 -0.50 1.40 -0.50 2.20 0 1.15 -0.15 1.35 -0.60 0.90 -0.75 -0.75 -3.40 -0.80 -3.40 -0.05 0 0.30 -0.40 0.40 -0.90 0.25 -0.60 -0.20 -1.05 0.05 -1.35 0.80 -0.60 1.25 -1.90 1.90 -1.45 0.70 0.40 -1.05 -2.40 -1.10 -3.50 -0.05 -1.05 1.05 -1.65 0.95 -2 -0.35z m-2.80 -19.65 c1.50 -0.45 3.80 -1.10 5.10 -1.40 2.60 -0.65 4.05 -1.70 1.65 -1.20 -0.80 0.20 -3.05 0.80 -5 1.35 -1.90 0.55 -4.25 1.15 -5.15 1.35 -0.90 0.15 -1.75 0.50 -1.95 0.80 -0.35 0.60 1.50 0.30 5.35 -0.90z" />
                    <path d="M49.70 100.20 c0.45 -0.40 0.80 -1 0.80 -1.30 0 -0.30 0.15 -0.45 0.30 -0.30 0.40 0.45 -0.70 2.40 -1.35 2.40 -0.30 0 -0.15 -0.35 0.25 -0.80z" />
                    <path d="M51 94.80 c0 -0.10 0.55 -0.30 1.25 -0.40 0.70 -0.15 1.25 -0.05 1.25 0.15 0 0.25 -0.55 0.45 -1.25 0.45 -0.70 0 -1.25 -0.10 -1.25 -0.20z" />
                    <path d="M69 94.50 c-0.65 -0.45 -0.65 -0.50 0 -0.50 0.40 0 1.10 0.25 1.50 0.50 0.65 0.45 0.65 0.50 0 0.50 -0.40 0 -1.10 -0.25 -1.50 -0.50z" />
                  </g>
                  <g fill="#aac3df">
                    <path d="M41.90 110.45 c-1.10 -0.65 -1.15 -2.10 -0.10 -3 0.70 -0.55 1.05 -0.50 2.30 0.20 2.05 1.20 2.30 1.10 2.70 -0.90 0.25 -1.45 -0.10 -2.50 -2.50 -7 l-2.80 -5.25 1.70 0 c0.95 0 2.05 -0.15 2.50 -0.30 0.55 -0.20 0.80 -0.05 0.80 0.50 0 1.15 2.40 5.80 3 5.80 0.30 0 0.50 -0.25 0.50 -0.60 0 -0.30 0.10 -0.45 0.30 -0.30 0.40 0.45 -3.80 9.55 -4.90 10.55 -1.15 0.95 -2.25 1.05 -3.50 0.30z" />
                    <path d="M115 105.20 c-2.25 -0.95 -4.30 -3.20 -4.10 -4.45 0.45 -3.10 1.30 -4.70 3.10 -5.70 2.15 -1.20 3.75 -1.45 2.25 -0.35 -0.80 0.55 -1 1.40 -1.10 4.30 -0.10 4.45 0.40 6 2.05 6 1.65 0 2.40 -1.10 2.25 -3.35 -0.10 -1.05 0 -2.20 0.20 -2.50 0.20 -0.30 0.15 -0.70 -0.10 -0.85 -0.25 -0.15 -0.35 -0.75 -0.20 -1.30 0.15 -0.55 0 -1 -0.30 -1 -0.30 0 -0.55 -0.45 -0.55 -1 0 -0.55 0.10 -1 0.20 -1 0.80 0 3.80 2.25 4.05 3.05 0.20 0.50 0.65 1.30 1.05 1.70 0.45 0.40 0.55 0.75 0.25 0.75 -0.30 0 -0.55 0.50 -0.55 1.10 0 1.70 -2.30 4.30 -4.40 4.90 -2.25 0.60 -1.95 0.60 -4.10 -0.30z" />
                    <path d="M57 104.05 c-1.85 -1.85 -2.25 -3.55 -1.50 -6.30 0.45 -1.55 1.10 -2.50 2.20 -3.20 1.85 -1.20 2.75 -0.65 1.90 1.20 -0.75 1.60 -0.80 6.95 -0.10 8.30 0.30 0.55 1.05 0.95 1.75 0.95 1.70 0 2.25 -1.35 2.25 -5.50 0 -3.30 -0.10 -3.55 -1.30 -4.10 -1.15 -0.55 -1.20 -0.65 -0.45 -1.20 1.75 -1.30 5.75 2.75 5.75 5.90 0 1.65 -1.80 4.35 -3.30 4.90 -0.70 0.30 -2.30 0.50 -3.50 0.50 -1.85 0 -2.55 -0.30 -3.70 -1.45z" />
                    <path d="M70.95 104.55 c-1.05 -0.85 -1.20 -1.45 -1.40 -5.40 -0.10 -2.50 -0.40 -4.60 -0.75 -4.80 -0.30 -0.25 -0.05 -0.30 0.70 -0.15 0.70 0.15 1.75 0.30 2.30 0.30 1 0 1.10 0.30 1.25 4.30 0.15 3.45 0.35 4.35 1.10 4.75 0.45 0.30 0.85 0.85 0.85 1.20 0 1.10 -2.65 0.95 -4.05 -0.20z" />
                    <path d="M77.15 104.80 c-1.35 -0.65 -1.50 -1.55 -0.35 -2 0.65 -0.25 0.75 -1 0.60 -4.30 -0.15 -4.30 0.10 -4.75 2.40 -4.20 1.20 0.30 1.20 0.40 1.20 5.75 l0 5.45 -1.35 -0.05 c-0.80 -0.05 -1.90 -0.30 -2.50 -0.65z" />
                    <path d="M84.85 103.90 c-0.10 -0.90 0 -1.80 0.25 -1.95 0.30 -0.20 0.25 -0.45 -0.15 -0.60 -0.45 -0.20 -0.50 -0.40 -0.20 -0.70 0.60 -0.45 0.65 -4.60 0.10 -5.50 -0.30 -0.50 0.15 -0.65 1.80 -0.65 2.30 0 2.85 0.50 2.85 2.50 0 0.50 0.40 1.05 0.90 1.15 0.65 0.20 0.55 0.25 -0.25 0.30 -1.05 0.05 -1.15 0.30 -1.15 2.60 0 3.25 -0.65 4.45 -2.45 4.45 -1.25 0 -1.45 -0.25 -1.70 -1.60z" />
                    <path d="M96.90 98 c0.15 -5.40  0 -7.75 -0.40 -8.25 -0.55 -0.65 -0.30 -0.75 1.70 -0.75 l2.30 0 0 3 c0 1.75 0.20 3 0.50 3 0.35 0 0.35 0.35 -0.05 1.05 -0.75 1.45 -0.35 6.90 0.60 7.50 0.50 0.30 0.50 0.45 0.10 0.45 -0.35 0 -0.65 0.35 -0.65 0.75 0 0.55 -0.55 0.75 -2.10 0.75 l-2.15 0 0.15 -7.50z" />
                    <path d="M104.55 104.70 c0.50 -0.65 0.50 -0.85 0 -1.20 -0.45 -0.25 -0.50 -0.50 -0.10 -0.70 0.30 -0.20 0.55 -1.65 0.55 -3.25 0 -2.25 -0.20 -3.10 -1 -3.80 -1.20 -1.10 -0.85 -1.75 0.95 -1.75 2.25 0 3.70 1.95 3.50 4.70 -0.15 1.85 -0.05 2.35 0.80 2.75 0.85 0.40 0.90 0.50 0.15 0.50 -1.05 0.05 -1.25 2 -0.30 2.95 0.45 0.45 -0.05 0.60 -2.30 0.60 -2.60 0 -2.85 -0.10 -2.25 -0.80z" />
                    <path d="M125.90 104.90 c0.70 -0.70 0.80 -5.90 0.15 -5.90 -0.25 0 -0.20 -0.70 0.10 -1.50 0.45 -1.15 0.45 -1.65 0 -1.90 -0.40 -0.25 -0.40 -0.60 0.15 -1.35 0.55 -0.75 0.85 -0.80 1.30 -0.35 0.35 0.35 1.05 0.60 1.65 0.60 0.95 0 1 0.30 1 5.50 l0 5.50 -2.45 0 c-1.95 0 -2.35 -0.15 -1.90 -0.60z" />
                    <path d="M134 104.55 c0.60 -1.15 0.70 -6.05 0.10 -6.05 -0.25 0 -0.35 -0.65 -0.20 -1.45 0.15 -1.15 -0.05 -1.50 -0.85 -1.80 -1.80 -0.55 -1.20 -1.35 0.85 -1.15 3.90 0.45 3.90 0.45 4.05 6.35 0.05 2.35 0.20 4.40 0.35 4.65 0.15 0.20 -0.90 0.40 -2.30 0.40 -2.35 0 -2.50 -0.05 -2 -0.95z" />
                    <path d="M141.85 100.90 c0.10 -4.50 0.05 -4.70 -1.25 -5.75 l-1.35 -1.15 1.80 0 c1.10 0 2.35 0.40 3.15 1.05 1.25 0.95 1.30 1.25 1.30 5.45 0 3.05 0.20 4.50 0.65 4.65 0.30 0.15 -0.50 0.30 -1.90 0.30 l-2.50 0.05 0.10 -4.60z" />
                    <path d="M149.95 104.05 c-1.50 -1.55 -1.85 -3.85 -1.15 -7.40 0.45 -2.30 4.15 -3.30 7.60 -2.10 1.60 0.55 2.60 2.40 2.60 4.75 0 1.15 -0.15 1.20 -3.20 1.20 -1.80 0 -3.40 0.20 -3.55 0.50 -0.55 0.85 0.95 3.20 2.30 3.70 0.95 0.30 1.75 0.20 3 -0.35 l1.70 -0.85 -1.20 1 c-0.85 0.75 -1.90 1 -3.90 1 -2.35 0 -2.95 -0.20 -4.20 -1.45z m6.05 -4.50 c0 -0.25 -0.15 -1.15 -0.30 -2 -0.30 -1.45 -0.50 -1.60 -1.90 -1.45 -1.40 0.15 -1.55 0.35 -1.70 2.05 l-0.15 1.85 2 0 c1.15 0 2.05 -0.20 2.05 -0.45z" />
                    <path d="M49.50 97.70 c0 -0.40 0.45 -0.70 1 -0.70 0.55 0 1 0.20 1 0.45 0 0.25 -0.45 0.55 -1 0.70 -0.65 0.15 -1 0 -1 -0.45z" />
                    <path d="M90.90 96.15 c-0.95 -1 -1 -1.25 -0.40 -1.65 1.85 -1.20 4.25 -0.05 3.90 1.80 -0.25 1.30 -2.25 1.20 -3.50 -0.15z" />
                    <path d="M65 94.05 c0 -0.55 1.95 -1.30 2.35 -0.85 0.40 0.40 0.15 0.60 -1.20 1 -0.65 0.20 -1.15 0.15 -1.15 -0.15z" />
                  </g>
                  <g opacity="0.5" transform="rotate(-45, 100.0, 100.0)"></g>
                </svg>
              </a>
            </div>

            {/* Center Links */}
            <div className="hidden md:flex space-x-6">
              <a href="/" className="hover:underline">
                Places to stay
              </a>
              <a href="/" className="hover:underline">
                Experiences
              </a>
              <a href="/" className="hover:underline">
                Online Experiences
              </a>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-6">
              <a href="/" className="hover:underline">
                Become a Host
              </a>
              <GlobeIcon className="w-5 h-5" />
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4.75 5.75H19.25"
                    stroke="#111827"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.75 18.25H19.25"
                    stroke="#111827"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.75 12H19.25"
                    stroke="#111827"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <PersonIcon className="w-5 h-5 rounded-full bg-gray-500" />
              </div>
            </div>
          </nav>

          {/* Search Bar */}
          <div className="flex justify-center items-center my-5 px-4">
            <div className="flex flex-col md:flex-row items-center bg-white rounded-full shadow-md px-5 py-2 w-full max-w-4xl">
              {/* Location Field */}
              <div className="flex flex-col mb-4 md:mb-0 md:pr-5 md:border-r md:border-gray-300">
                <label className="text-xs font-bold text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="text-sm text-gray-600 focus:outline-none placeholder-gray-400 w-full md:w-40"
                />
              </div>

              {/* Check-in Field */}
              <div className="flex flex-col mb-4 md:mb-0 md:px-5 md:border-r md:border-gray-300">
                <label className="text-xs font-bold text-gray-700 mb-1">
                  Check in
                </label>
                <input
                  type="text"
                  placeholder="Add dates"
                  className="text-sm text-gray-600 focus:outline-none placeholder-gray-400 w-full md:w-40"
                />
              </div>

              {/* Check-out Field */}
              <div className="flex flex-col mb-4 md:mb-0 md:px-5 md:border-r md:border-gray-300">
                <label className="text-xs font-bold text-gray-700 mb-1">
                  Check out
                </label>
                <input
                  type="text"
                  placeholder="Add dates"
                  className="text-sm text-gray-600 focus:outline-none placeholder-gray-400 w-full md:w-40"
                />
              </div>

              {/* Guests Field */}
              <div className="flex flex-col mb-4 md:mb-0 md:px-5">
                <label className="text-xs font-bold text-gray-700 mb-1">
                  Guests
                </label>
                <input
                  type="text"
                  placeholder="Add guests"
                  className="text-sm text-gray-600 focus:outline-none placeholder-gray-400 w-full md:w-40"
                />
              </div>

              {/* Search Button */}
              <button className="ml-0 md:ml-4 bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-600 shadow-md">
                <MagnifyingGlassIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Big Card Section */}
          <div className="flex justify-center items-center w-full h-[640px]">
            <div className="relative w-full h-full">
              <img
                src="https://simpsonbuildingdevelopments.com/wp-content/uploads/2024/06/custom-homes-2.png.webp"
                alt="Modern House"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 text-center text-white">
                <h1 className="text-4xl lg:text-5xl font-bold">
                  Not sure where to go? Perfect.
                </h1>
                <button className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all">
                  I’m flexible
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Inspirations Section */}
        <div className="w-full px-4 lg:px-20 py-6 lg:py-12 bg-white">
          <div className="flex flex-col items-center gap-12 w-full px-6 md:px-16 py-16 bg-white">
            {/* Inspiration Section */}

            <div className="w-full">
              <h2 className="text-3xl md:text-4xl font-medium text-black mb-8">
                Inspiration for your next trip
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cityData.map((city, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <img
                      src={city.image}
                      alt={city.name}
                      className="w-full h-40 object-cover"
                    />
                    <div className="flex flex-col items-start gap-2 p-[24px_16px_96px_16px] w-full bg-[#BC1A6E]">
                      <h3 className="text-white text-4xl font-medium leading-[44px] w-full">
                        {city.name}
                      </h3>
                      <p className="text-white text-lg font-normal leading-[28px] w-full">
                        {city.distance}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Experiences Section */}
            <div className="px-5 py-10 flex flex-col items-start gap-12 w-full">
              <p className="text-black text-[36px] font-medium leading-[44px] w-full">
                Discover Airbnb Experiences
              </p>
              <div className="flex items-start gap-6 w-full">
                {/* Experience 1 */}
                <div className="flex flex-col items-start gap-6 h-[628px] p-20 rounded-lg bg-[url('https://www.mickeyshannon.com/photos/thumbs/webp/antelope-canyon-spirit-ghost.webp')] bg-lightgray bg-cover bg-center flex-1">
                  <div className="w-full h-[112px]">
                    <p className="text-white text-[48px] font-medium leading-[56px]">
                      Things to do on your trip
                    </p>
                    <button className="mt-4 px-6 py-4 rounded-lg bg-white shadow-sm hover:bg-gray-100">
                      Experiences
                    </button>
                  </div>
                </div>

                {/* Experience 2 */}
                <div className="flex flex-col items-start gap-6 h-[628px] p-20 rounded-lg bg-[url('https://publish.purewow.net/wp-content/uploads/sites/2/2020/07/man-filming-an-online-cooking-class.jpg?fit=728%2C524')] bg-lightgray bg-cover bg-center flex-1">
                  <div className="w-full h-[112px]">
                    <p className="text-white text-[48px] font-medium leading-[56px]">
                      Things to do on your trip
                    </p>
                    <button className="mt-4 px-6 py-4 rounded-lg bg-white shadow-sm hover:bg-gray-100">
                      Experiences
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Gift Card Section */}
            <div className="flex flex-col lg:flex-row items-center gap-6 w-full">
              <div className="flex-1">
                <p className="text-3xl font-medium text-black mb-4">
                  Shop Yourhome gift cards
                </p>
                <button className="px-6 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-800">
                  Learn more
                </button>
              </div>
              <img
                src="https://www.haltonhills.ca/en/images/pageImages/Page%20Headers/Giftcards%20page%20header.jpg"
                alt="Gift Card"
                className="w-full lg:w-1/2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* ask the super host section */}
            <div
              className="flex flex-col justify-between items-start self-stretch h-[500px] p-20 rounded-lg mt-24"
              style={{
                background:
                  "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE7CmbgX6_Td2BuGcMeqLYgMjZcApKtee4GbHdcmtpdlyTnNYU') lightgray 0px -773.154px / 100% 300% no-repeat",
              }}
            >
              <div className="w-[465px] h-[288px]">
                <p className="text-white font-medium text-[96px] leading-[96px]">
                  Questions about hosting?
                </p>
                <button className="flex items-start justify-center gap-2 px-6 py-4 rounded-lg bg-white shadow-md hover:bg-gray-100">
                  Ask a Superhost
                </button>
              </div>
            </div>

            {/* Pre-Footer Section */}
            <div className="w-full">
              <h3 className="text-xl font-semibold text-black mb-4">
                Inspiration for future getaways
              </h3>
              <ul className="flex items-center gap-6 w-full bg-white shadow-[inset_0_-1px_0_0_#F3F4F6] ">
                {tabs.map((tab, index) => (
                  <li
                    key={index}
                    className={`text-black text-sm font-medium leading-5 ${
                      index === 0
                        ? "text-black text-sm font-medium leading-5 underline"
                        : "text-gray-500 text-sm font-medium leading-5"
                    }`}
                  >
                    {tab}
                  </li>
                ))}
              </ul>
              <div className="flex items-start gap-6 self-stretch grid grid-cols-4 gap-y-6 gap-x-10">
                {destinations.map((destination, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start flex-[1_0_0]"
                  >
                    <h4 className="text-lg font-semibold text-black">
                      {destination.city}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {destination.region}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="px-8 py-8 md:px-20 md:py-16 flex flex-col gap-12 w-full bg-gray-50">
          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Help Center</li>
                <li>Safety Information</li>
                <li>Cancellation Options</li>
                <li>Our COVID-19 Response</li>
                <li>Supporting people with disabilities</li>
                <li>Report a neighborhood concern</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Community</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Airbnb.org: disaster relief housing</li>
                <li>Support Afghan refugees</li>
                <li>Celebrating diversity & belonging</li>
                <li>Combating discrimination</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Hosting</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Try hosting</li>
                <li>AirCover: protection for Hosts</li>
                <li>Explore hosting resources</li>
                <li>Visit our community forum</li>
                <li>How to host responsibly</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">About</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Newsroom</li>
                <li>Learn about new features</li>
                <li>Letter from our founders</li>
                <li>Careers</li>
                <li>Investors</li>
                <li>Airbnb Luxe</li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-4">
            <div className="text-center md:text-left">
              © 2024 Airbnb, Inc. ·{" "}
              <a href="#" className="underline">
                Privacy
              </a>{" "}
              ·{" "}
              <a href="#" className="underline">
                Terms
              </a>{" "}
              ·{" "}
              <a href="#" className="underline">
                Sitemap
              </a>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 gap-4">
              <div className="flex items-center space-x-2">
                <GlobeIcon className="w-5 h-5" />
                <span>English (US)</span>
              </div>
              <div>
                <span>USD</span>
              </div>
              <div className="flex space-x-4">
                <a href="#" aria-label="Facebook" className="hover:underline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="text-gray-600"
                  >
                    <path d="M18.896 0H1.104A1.104 1.104 0 0 0 0 1.104v17.792C0 19.617.384 20 1.104 20H10.76V12.46h-2.36v-2.96h2.36V7.05c0-2.36 1.44-3.65 3.56-3.65.7 0 1.5.05 1.8.1v2.08h-1.22c-1.2 0-1.5.7-1.5 1.46v1.76h3.02l-.36 2.96h-2.66V20h5.18c.72 0 1.1-.384 1.1-1.104V1.104A1.104 1.104 0 0 0 18.896 0z"></path>
                  </svg>
                </a>
                <a href="#" aria-label="Twitter" className="hover:underline">
                  <TwitterLogoIcon className="w-5 h-5" />
                </a>
                <a href="#" aria-label="Instagram" className="hover:underline">
                  <InstagramLogoIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
