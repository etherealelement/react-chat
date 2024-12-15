export function Avatar({
  src,
}: {
  size?: number;
  color?: string;
  src?: string;
}) {
  return src ? (
    <img
      className="w-8 h-8 rounded-full"
      src={`https://icherniakov.ru/yt-course/${src}`}
      alt=""
    />
  ) : (
    <div className="w-8 h-8 rounded-full bg-gray-400"></div>
  );
}
