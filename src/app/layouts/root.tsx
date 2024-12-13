import { Sidebar } from "@/features/sidebar";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-screen grid-cols-[300px_1fr] bg-zinc-950">
      <Sidebar></Sidebar>
      <main className="p-6 text-white">{children}</main>
    </div>
  );
}
