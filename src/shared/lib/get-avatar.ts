export default function getAvatarUrl(path?: string): string | undefined {
  if (!path) return undefined;

  return `https://icherniakov.ru/yt-course/${path}`;
}
