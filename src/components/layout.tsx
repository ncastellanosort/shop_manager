import { Outlet } from "react-router-dom";
import {  SidebarProvider } from "./ui/sidebar";
import { AppSidebar } from "./app-sidebar";

function Layout() {
  return(
    <SidebarProvider className="flex h-screen">
      <AppSidebar />
      <main className="flex-1 p-4 overflow-auto">
        <Outlet />
      </main>
    </SidebarProvider>
  );
}

export default Layout;
