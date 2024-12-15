export function Spinner({
  size = 8,
  color = "text-white",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <div
      className={`animate-spin rounded-full border-4 border-t-transparent ${color}`}
      style={{
        width: `${size * 4}px`, // Размер в Tailwind единицах
        height: `${size * 4}px`,
      }}
    ></div>
  );
}
