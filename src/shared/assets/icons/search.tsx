export function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="ht1tp://www.w3.org/2000/svg"
      className="h-5 w-5 text-gray-400 group-hover:text-gray-300 transition-colors"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 21a2 2 0 002 2m0-2a2 2 0 012-2m-4 0H5a2 2 0 00-2 2m0-4h16"
      />
    </svg>
  );
}
