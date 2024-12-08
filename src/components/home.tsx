function Home() {
  return (
    <div className="w-screen h-screen">
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
    </div>
  );
}

export default Home;
