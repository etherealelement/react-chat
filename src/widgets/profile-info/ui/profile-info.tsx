import { Avatar, AvatarImage, AvatarFallback } from "@/shared/ui/avatar";

export function ProfileInfo() {
  const followers = [
    { id: 1, name: "Alice", image: "https://via.placeholder.com/40" },
    { id: 2, name: "Bob", image: "https://via.placeholder.com/40" },
    { id: 3, name: "Charlie", image: "https://via.placeholder.com/40" },
  ];

  const skills = ["JavaScript", "React", "Tailwind CSS", "Node.js"];

  const aboutMe =
    "I am a web developer with a passion for building user-friendly interfaces and writing clean, maintainable code.";

  return (
    <div className="grid grid-cols-1 gap-4 bg-transparent">
      {/* Followers Block */}
      <div className="p-4 border rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Followers</h2>
        <div className="flex items-center space-x-2 mb-2">
          {followers.map((follower) => (
            <Avatar key={follower.id}>
              <AvatarImage src={follower.image} alt={follower.name} />
              <AvatarFallback>{follower.name.charAt(0)}</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <p className="text-gray-600">Total: {followers.length}</p>
      </div>

      {/* Skills Block */}
      <div className="p-4 border rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc pl-5 text-gray-600">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* About Me Block */}
      <div className="p-4 border rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-600">{aboutMe}</p>
      </div>
    </div>
  );
}
