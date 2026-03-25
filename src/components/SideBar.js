import React from 'react'
import { useSelector } from 'react-redux'
import { AiFillHome } from 'react-icons/ai'
import { SiYoutubeshorts } from 'react-icons/si'
import { MdOutlineVideoLibrary, MdOutlineSubscriptions, MdOutlineLiveTv } from 'react-icons/md'
import { TbBrandYoutube } from 'react-icons/tb'
import { SiYoutubemusic } from 'react-icons/si'
import { IoFlameOutline, IoGameControllerOutline } from 'react-icons/io5'

const SideBar = () => {
  const menuToggle = useSelector((state) => state.Menu.isMenuOpen)
  if (!menuToggle) return null

  return (
    <aside className="w-56 h-screen bg-white fixed top-14  overflow-y-auto py-2 z-40 ml ">
      <ul>
        <li className="flex items-center gap-4 px-4 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-100 rounded-xl mx-2 cursor-pointer">
          <AiFillHome size={20} className="text-gray-700" /> Home
        </li>
        <li className="flex items-center gap-4 px-4 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-100 rounded-xl mx-2 cursor-pointer">
          <SiYoutubeshorts size={20} className="text-gray-700" /> Shorts
        </li>
        <li className="flex items-center gap-4 px-4 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-100 rounded-xl mx-2 cursor-pointer">
          <MdOutlineVideoLibrary size={20} className="text-gray-700" /> Library
        </li>
      </ul>

      <hr className="my-2 border-gray-200 mx-4" />

      <ul>
        <li className="flex items-center gap-4 px-4 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-100 rounded-xl mx-2 cursor-pointer">
          <MdOutlineSubscriptions size={20} className="text-gray-700" /> Subscriptions
        </li>
        <li className="flex items-center gap-4 px-4 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-100 rounded-xl mx-2 cursor-pointer">
          <TbBrandYoutube size={20} className="text-gray-700" /> Originals
        </li>
        <li className="flex items-center gap-4 px-4 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-100 rounded-xl mx-2 cursor-pointer">
          <SiYoutubemusic size={18} className="text-gray-700" /> YouTube Music
        </li>
      </ul>

      <hr className="my-2 border-gray-200 mx-4" />

      <ul>
        <li className="flex items-center gap-4 px-4 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-100 rounded-xl mx-2 cursor-pointer">
          <IoFlameOutline size={20} className="text-gray-700" /> Trending
        </li>
        <li className="flex items-center gap-4 px-4 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-100 rounded-xl mx-2 cursor-pointer">
          <IoGameControllerOutline size={20} className="text-gray-700" /> Gaming
        </li>
        <li className="flex items-center gap-4 px-4 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-100 rounded-xl mx-2 cursor-pointer">
          <MdOutlineLiveTv size={20} className="text-gray-700" /> Live
        </li>
      </ul>

    </aside>
  )
}

export default SideBar