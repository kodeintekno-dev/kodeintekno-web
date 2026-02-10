import { Outlet } from "react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto sm:px-12 px-5 space-y-7 pt-40">
        <Outlet />
        <Footer />
      </main>
    </>
  );
}
