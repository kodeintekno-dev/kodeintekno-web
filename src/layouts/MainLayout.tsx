import Navbar from "@/components/Navbar";
import type { ReactNode } from "react";
import Footer from "@/components/Footer";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto sm:px-12 px-5 space-y-7 pt-40">
        {children}
        <Footer />
      </main>
    </>
  );
}
