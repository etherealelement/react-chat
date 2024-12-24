import { useAccount } from "@/entities/account";
import getAvatarUrl from "@/shared/lib/get-avatar";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";

export function Header() {
  const { meProfile } = useAccount();

  return (
    <header className="header  text-white flex items-center justify-between col-span-3 border-b border-zinc-500 pr-10 pl-10">
      <div className="flex items-center gap-5">
        <Avatar key={meProfile?.avatarUrl} className="w-24 h-24">
          <AvatarImage
            src={getAvatarUrl(meProfile?.avatarUrl)}
            alt={meProfile?.avatarUrl}
          />
          <AvatarFallback>
            {meProfile?.username?.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <p className="text-xl font-semibold">{meProfile?.firstName}</p>
        <p className="text-sm font-light">{meProfile?.username}</p>
      </div>
      <Button>Редактировать</Button>
    </header>
  );
}
