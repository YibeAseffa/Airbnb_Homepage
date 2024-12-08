function Home() {
  return (
    <div className="w-screen h-screen">
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
    </div>
  );
}

export default Home;
