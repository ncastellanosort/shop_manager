import { Outlet } from "react-router-dom";
import { SidebarProvider } from "./ui/sidebar";
import { AppSidebar } from "./app-sidebar";

function Layout() {
  return(
    <SidebarProvider>
    <div className="flex h-screen">
      <AppSidebar />
      <main className="flex-1 p-4 overflow-auto">
        <Outlet />
      </main>
    </div>
    </SidebarProvider>
  );
}

export default Layout;
