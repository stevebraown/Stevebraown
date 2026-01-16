import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => (
  <div className="min-h-screen bg-bg text-text">
    <Header />
    <main className="pt-24">{children}</main>
    <Footer />
  </div>
);
