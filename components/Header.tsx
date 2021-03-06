import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img className="w-44 object-contain cursor-pointer" src="/cordobabitcoin.png" alt="" />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
          {/* <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="text-white bg-green-600 px-4 py-1 rounded-full cursor-pointer">Follow</h3> */}
        </div>
      </div>

      <div className="flex items-center space-x-5 text-blue-300">
        <h3 className="border px-4 py-1 border-blue-300 rounded-full"><a href="https://t.me/cordobabitcoin">Telegram</a></h3>
      </div>
    </header>
  )
};

export default Header;