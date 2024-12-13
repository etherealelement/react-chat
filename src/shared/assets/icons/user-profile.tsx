export function UserProfileIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
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
        d="M3 10l9-9m0 0l9 9M4 10h16v10a2 2 0 01-2 2H6a2 2 0 01-2-2V10z"
      />
    </svg>
  );
}
