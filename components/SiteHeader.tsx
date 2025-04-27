"use client";

import { Route, routes } from "@/utils/routes";
import Link from "next/link";
import { useLayoutEffect } from "react";

const activeNavItemClass = "nav-item-active";

function NavItems() {
  return (
    <ul className="flex gap-4 sm:gap-6">
      {routes.map((route) => (
        <li key={route} data-nav-id={route}>
          <Link href={`#${route}`}>{Route[route].label}</Link>
        </li>
      ))}
    </ul>
  );
}

export function SiteHeader() {
  useLayoutEffect(() => {
    const container = document.querySelector("main");

    const handleScroll = () => {
      const y = window.scrollY;

      container?.querySelectorAll("section").forEach((section) => {
        const id = section.getAttribute("id");
        const { top, bottom } = section.getBoundingClientRect();

        const navItem = document.querySelector(`[data-nav-id="${id}"]`);
        if (top <= y && y < bottom) {
          navItem?.classList.add(activeNavItemClass);
        } else {
          navItem?.classList.remove(activeNavItemClass);
        }
      });
    };

    container?.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="bg-header fixed z-10 flex w-full flex-col items-center justify-between p-4 sm:flex-row">
      <Link href="/">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Hitarth Desai
        </h1>
      </Link>
      <nav>
        <NavItems />
      </nav>
    </header>
  );
}
