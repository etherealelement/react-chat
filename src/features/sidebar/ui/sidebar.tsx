import {
  ChatIcon,
  LogoIcon,
  SearchIcon,
  UserProfileIcon,
} from "@/shared/assets";
import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="p-4 border-r border-gray-500 bg-zinc-950 text-white flex flex-col justify-between h-screen">
      {/* Top Section */}
      <div>
        <div className="mb-6">
          <Link to={"/"}>
            <LogoIcon></LogoIcon>
          </Link>
        </div>
        {/* Links Section */}
        <div className="mb-12">
          <ul className="space-y-4">
            <Link to={"/"}>
              <li className="group flex items-center cursor-pointer gap-3 p-2 rounded-lg hover:bg-zinc-800 transition">
                <UserProfileIcon></UserProfileIcon>
                Моя страница
              </li>
            </Link>
            <Link to={"/chats"}>
              <li className="group flex items-center cursor-pointer gap-3 p-2 rounded-lg hover:bg-zinc-800 transition">
                <ChatIcon></ChatIcon>
                Чаты
              </li>
            </Link>
            <Link to={"/search"}>
              <li className="group flex items-center cursor-pointer gap-3 p-2 rounded-lg hover:bg-zinc-800 transition">
                <SearchIcon></SearchIcon>
                Поиск
              </li>
            </Link>
          </ul>
        </div>

        {/* Subscribers Section */}
        <div className="">
          <h3 className="text-sm font-semibold text-gray-400 mb-2">
            Подписчики
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-800 transition">
              <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
              <span className="text-sm">Пользователь 1</span>
            </li>
            <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-800 transition">
              <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
              <span className="text-sm">Пользователь 2</span>
            </li>
            <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-800 transition">
              <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
              <span className="text-sm">Пользователь 3</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Section */}
      <div className="border-t border-gray-600 pt-4">
        <ul className="space-y-4">
          <li className="group flex items-center gap-2 hover:text-gray-300 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400 group-hover:text-gray-300 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3m6 0h.01M4.5 4.5l15 15"
              />
            </svg>
            Настройки профиля
          </li>
          <li className="group flex items-center gap-2 hover:text-gray-300 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400 group-hover:text-gray-300 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m4-7.5H8"
              />
            </svg>
            Профиль
          </li>
        </ul>
      </div>
    </aside>
  );
}
