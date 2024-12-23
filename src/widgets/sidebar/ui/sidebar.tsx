import {
  ChatIcon,
  LogoIcon,
  SearchIcon,
  UserProfileIcon,
} from "@/shared/assets";
import { Link } from "react-router-dom";
import { useAccount } from "@/entities/account";
import { useState } from "react";
import { Spinner } from "@/shared/ui/spinner";
import { SettingsIcon } from "@/shared/assets/icons/settings";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import getAvatarUrl from "@/shared/lib/get-avatar";

export function Sidebar() {
  const { items, isLoading, meProfile } = useAccount();
  const [visibleCount, setVisibleCount] = useState(3); // Состояние для управления количеством видимых подписчиков
  const [expanded, setExpanded] = useState(false); // Состояние для отслеживания, раскрыт ли список

  const handleToggle = () => {
    if (expanded) {
      setVisibleCount(3); // Скрыть до 5 элементов
    } else {
      setVisibleCount(items?.length || 0); // Показать все элементы
    }
    setExpanded(!expanded); // Переключаем состояние
  };

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
        {isLoading ? (
          <Spinner></Spinner>
        ) : (
          <div className="">
            <h3 className="text-sm font-semibold text-gray-400 mb-2">
              Подписчики
            </h3>
            <ul className="space-y-3">
              {items?.slice(0, visibleCount).map((sub) => (
                <li
                  key={sub.id}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-800 transition cursor-pointer"
                >
                  <Avatar>
                    <AvatarImage src={getAvatarUrl(sub.avatarUrl)} />
                    <AvatarFallback>
                      {sub.username.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{sub.username}</span>
                </li>
              ))}
            </ul>
            {items && items.length > 5 && (
              <button
                onClick={handleToggle}
                className="mt-3 text-sm text-blue-400 hover:underline"
              >
                {expanded ? "Скрыть" : "Показать ещё"}
              </button>
            )}
          </div>
        )}
      </div>

      {/* Footer Section */}
      <div className=" border-gray-600 pt-4">
        <div className="flex items-center justify-between gap-3 p-2 rounded-lg hover:bg-zinc-800 transition cursor-pointer">
          <Avatar>
            <AvatarImage src={getAvatarUrl(meProfile?.avatarUrl)} />
            <AvatarFallback>
              {meProfile?.username.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <span>{meProfile?.username}</span>
          <button>
            <SettingsIcon />
          </button>
        </div>
      </div>
    </aside>
  );
}
