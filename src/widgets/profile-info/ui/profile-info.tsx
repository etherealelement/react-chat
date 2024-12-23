import { useAccount } from "@/entities/account";
import getAvatarUrl from "@/shared/lib/get-avatar";
import { Avatar, AvatarImage, AvatarFallback } from "@/shared/ui/avatar";

export function ProfileInfo() {
  const { items, meProfile } = useAccount();

  return (
    <div className="grid grid-cols-1 gap-4 bg-transparent">
      {/* Followers Block */}
      <div className="p-4 border rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Followers</h2>
        <div className="flex items-center space-x-2 mb-2">
          {items?.map((follower) => (
            <Avatar key={follower.id}>
              <AvatarImage
                src={getAvatarUrl(follower?.avatarUrl)}
                alt={follower.avatarUrl}
              />
              <AvatarFallback>{follower?.avatarUrl?.charAt(0)}</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <p className="text-gray-600">Total: {items?.length}</p>
      </div>

      {/* Skills Block */}
      <div className="p-4 border rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc pl-5 text-gray-600">
          {meProfile?.stack?.length <= 0 ? (
            <span>Навыков нет</span>
          ) : (
            meProfile?.stack?.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))
          )}
        </ul>
      </div>

      {/* About Me Block */}
      <div className="p-4 border rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-600">
          {meProfile?.description ? meProfile?.description : "Нет описания"}
        </p>
      </div>
    </div>
  );
}
