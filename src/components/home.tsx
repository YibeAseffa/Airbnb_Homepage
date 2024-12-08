function Home() {
  return (
    <div className="w-screen h-screen">
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
    </div>
  );
}

export default Home;
