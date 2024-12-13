export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-screen grid-cols-[300px_1fr] bg-zinc-950">
      {/* Sidebar */}
      <aside className="p-4 border-r border-gray-500">
        <nav>
          {/* Здесь можно добавить элементы навигации или контент для сайдбара */}
          <ul>
            <li className="text-white">Item 1</li>
            <li className="text-white">Item 2</li>
            <li className="text-white">Item 3</li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="p-6 text-white">{children}</main>
    </div>
  );
}
