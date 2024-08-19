import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full py-0 flex items-center justify-center text-sm sticky top-0 z-50 bg-[#fffafa] ">
      {/* Mobile Navigation */}
      <div className="w-full flex h-14 items-center justify-between sm:hidden border-b px-4">
        <div className="flex items-center relative">
          <div className="flex items-center gap-x-2">
            <div className="w-8 h-8 rounded-full bg-orange-200"></div>
            <span className="text-lg font-semibold orange_gradient">
              Adventures Blogs
            </span>
          </div>
          <div className="px-3 py-4 drop-shadow shadow absolute top-[44px] hidden -left-4 z-10 bg-slate-50">
            <div className="absolute right-2 bg-white w-6 h-6 flex-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 320 512"
              >
                <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
              </svg>
            </div>
            <ul className="gap-x-3 gap-y-5 pl-2 w-36">
              <Link to="/">
                <li className="my-4 cursor-pointer">Home</li>
              </Link>
              <Link to="/blogs">
                <li className="my-4 cursor-pointer">Blogs</li>
              </Link>
              <Link to="/community">
                <li className="my-4 cursor-pointer">Community</li>
              </Link>
              <Link to="/about">
                <li className="my-4 cursor-pointer">About</li>
              </Link>
              <Link to="/contact">
                <li className="my-4 cursor-pointer">Contact</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="w-8 h-8 bg-green-200 rounded-full cursor-pointer"></div>
      </div>
      {/* DeskTop Navigation */}
      <div className="w-full items-center h-14 justify-between hidden sm:flex md:px-10 lg:px-20 border-b px-3">
        <div className="flex items-center gap-x-3 md:gap-x-5">
          <div className="w-8 h-8 rounded-full bg-orange-200"></div>
          <span className="text-lg font-semibold orange_gradient ">
            Adventures Blogs
          </span>
        </div>
        <ul className="flex items-center gap-x-4 md:gap-x-7 lg:gap-x-10">
          <li className="desktop-li">Home</li>
          <li className="desktop-li">Blogs</li>
          <li className="desktop-li">Community</li>
          <li className="desktop-li">About</li>
          <li className="desktop-li">Contact</li>
        </ul>
        <div className="w-8 h-8 bg-green-200 rounded-full cursor-pointer"></div>
      </div>
    </nav>
  );
};

export default Navbar;
