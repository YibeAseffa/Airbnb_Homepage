function Home() {
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
            <div key={index} className="flex flex-col items-start flex-[1_0_0]">
              <h4 className="text-lg font-semibold text-black">
                {destination.city}
              </h4>
              <p className="text-sm text-gray-600">{destination.region}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
