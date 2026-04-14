import { type ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MobileBottomBar from "./MobileBottomBar";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
    <MobileBottomBar />
    {/* Bottom padding for mobile bar */}
    <div className="h-14 lg:hidden" />
  </div>
);

export default Layout;
