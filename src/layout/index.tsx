import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-100vh w-full">
      <Nav />
      <main className="flex-1">
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
