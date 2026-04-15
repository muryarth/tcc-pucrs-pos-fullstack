import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SidebarComponent } from "./components/Sidebar";
import { HeaderComponent } from "./components/Header";
import { FooterComponent } from "./components/Footer";
import "./style.css";

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarAnimating, setSidebarAnimating] = useState(false);

  const handleToggle = () => {
    setSidebarAnimating(true);
    setSidebarOpen((prev) => !prev);
    setTimeout(() => setSidebarAnimating(false), 300);
  };

  const handleClose = () => {
    setSidebarAnimating(true);
    setSidebarOpen(false);
    setTimeout(() => setSidebarAnimating(false), 300);
  };

  return (
    <>
      <HeaderComponent onToggleSidebar={handleToggle} />
      <main className="d-flex">
        <SidebarComponent isOpen={sidebarOpen} isAnimating={sidebarAnimating} />
        {sidebarOpen && (
          <div
            className="app-layout-backdrop d-lg-none"
            onClick={handleClose}
          />
        )}
        <div className="flex-grow-1 d-flex flex-column">
          <div className="app-layout-content">
            <Outlet />
          </div>
          <FooterComponent />
        </div>
      </main>
    </>
  );
}

export { Layout };
