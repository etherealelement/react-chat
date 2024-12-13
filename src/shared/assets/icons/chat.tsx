export function ChatIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M21 10l-9-9m0 0L3 10m18 0v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10"
      />
    </svg>
  );
}
