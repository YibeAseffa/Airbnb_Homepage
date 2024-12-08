function Home() {
  return (
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
  );
}

export default Home;
