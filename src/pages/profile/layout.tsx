export function Layout({
  main,
  profileInfo,
  header,
}: {
  header: React.ReactNode;
  main: React.ReactNode;
  profileInfo: React.ReactNode;
}) {
  return (
    <div className="grid h-screen grid-cols-[1fr_1.3fr_0.7fr] grid-rows-[0.5fr_1.5fr_1fr] gap-0">
      {/* Header */}
      {header}
      {/* Main Content */}
      <main className="Main p-4 col-span-2 row-span-2">{main}</main>

      {/* Profile Info */}
      <aside className="profile-info p-4 border-l border-zinc-500 row-span-2">
        {profileInfo}
      </aside>
    </div>
  );
}
