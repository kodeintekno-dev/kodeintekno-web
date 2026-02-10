import { useEffect, useState } from "react";
import { links } from "../data/navbar";
import { twMerge } from "tailwind-merge";
import { Button } from "./ui/button";
import { Link } from "react-router";

export default function Navbar() {
  const [navHamburger, setNavHamburger] = useState(false);
  useEffect(() => {
    if (navHamburger) document.body.classList.toggle("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [navHamburger]);

  return (
    <div className="fixed top-0 inset-x-0 container mx-auto sm:px-12 px-5 space-y-5 z-50">
      <nav className="flex justify-between items-center px-10 py-5 border border-black/10 rounded-lg mt-4 sm:mt-8 bg-white/80 backdrop-blur-xl relative">
        <Link
          to="/"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <img
            src="/img/logo.png"
            alt="Logo"
            className="h-5 sm:h-6 md:h-8 cursor-pointer"
          />
        </Link>

        <ul className="hidden lg:flex gap-8 items-center">
          {links.map((link, i) => (
            <li key={i}>
              <Link
                to={link.href}
                onClick={(e) => {
                  setNavHamburger(false);

                  const [path, hash] = link.href.split("#");

                  if (hash) {
                    if (window.location.pathname === path) {
                      e.preventDefault();
                      const el = document.getElementById(hash);
                      el?.scrollIntoView({ behavior: "smooth" });
                    } else {
                      e.preventDefault();
                      window.location.href = link.href;
                    }
                  } else {
                    if (window.location.pathname === link.href) {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }
                }}
                className="text-black/60 font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/6282170270241"
          target="_blank"
          className="hidden lg:flex"
        >
          <Button
            variant="default"
            className="bg-orange-500 hover:bg-orange-600 border border-orange-700 cursor-pointer"
          >
            Kontak
          </Button>
        </a>
        <div
          className="lg:hidden flex flex-col ml-auto gap-1 w-7 h-5 cursor-pointer"
          id="navMobile"
          onClick={() => setNavHamburger(!navHamburger)}
        >
          <div
            className={twMerge(
              navHamburger && "rotate-45 translate-y-[180%]",
              "w-full h-1 bg-black transition-transform",
            )}
          />
          <div className={navHamburger ? "opacity-0" : "w-full h-1 bg-black"} />
          <div
            className={`${navHamburger && "-rotate-45 -translate-y-[120%]"} w-full h-1 bg-black transition-transform`}
          />
        </div>
      </nav>
      <ul
        className={twMerge(
          navHamburger
            ? "lg:hidden translate-x-0"
            : "translate-x-2/1 pointer-events-none opacity-0",
          "flex flex-col gap-4 items-center bg-white px-10 py-5 border border-black/10 rounded-lg transition-transform duration-300 absolute inset-x-5 sm:inset-x-12 z-50",
        )}
      >
        {links.map((link, i) => (
          <li key={i}>
            <Link
              to={link.href}
              onClick={(e) => {
                setNavHamburger(false);

                if (
                  !link.href.includes("#") &&
                  window.location.pathname === link.href
                ) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }

                if (
                  link.href.includes("#") &&
                  window.location.pathname === "/"
                ) {
                  e.preventDefault();
                  const id = link.href.split("#")[1];
                  const el = document.getElementById(id);
                  el?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-black/60 font-medium"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      {navHamburger && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setNavHamburger(false)}
        />
      )}
    </div>
  );
}
