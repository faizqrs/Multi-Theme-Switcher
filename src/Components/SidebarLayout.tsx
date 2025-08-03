import { ReactNode } from "react";

// Layout component to add a extra sidebar on left in theme2
const SidebarLayout = ({ children }: { children: ReactNode }) => {
  return (
    // Main wrapper with horizontal flex layout
    <div className="flex min-h-screen pt-24">
      <aside
        className="w-44 h-full p-6 bg-[var(--sidebar-bg)] text-[var(--sidebar-text)] hidden md:block"
      >
        <ul className="space-y-4 font-bold">
          <li>Dashboard</li>
          <li>Orders</li>
          <li>Products</li>
          <li>Settings</li>
        </ul>
      </aside>
      <main className="flex-1  bg-[var(--bg)] text-[var(--text)]">
        {children}
      </main>
    </div>
  );
};

export default SidebarLayout;
