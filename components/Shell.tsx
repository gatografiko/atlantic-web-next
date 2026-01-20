import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <Header />
      <div className="site-main">
        {children}
      </div>
      <Footer />
    </div>
  );
}
