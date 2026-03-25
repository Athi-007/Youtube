import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImYoutube2 } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <header className="bg-white shadow-md px-4 py-2 sticky top-0 z-50">
      <div className="flex items-center justify-between gap-4">

        <div className="flex items-center gap-3">
          <GiHamburgerMenu size={22} className="text-gray-700 cursor-pointer" />
          <ImYoutube2 size={50} className="text-red-600" />
        </div>

        <div className="flex items-center flex-1 max-w-xl border border-gray-300 rounded-full overflow-hidden shadow-sm">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 px-4 py-2 text-sm outline-none bg-white"
          />
          <button className="bg-gray-100 px-4 py-2 border-l border-gray-300">
            <AiOutlineSearch size={20} className="text-gray-600" />
          </button>
        </div>
        <CgProfile size={28} className="text-gray-700 cursor-pointer" />

      </div>
    </header>
  )
}

export default Header