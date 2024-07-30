import { Route, routes } from "@/utils/routes";
import Link from "next/link";

function NavItems() {
  return (
    <ul className="flex gap-4 sm:gap-6">
      {routes.map((route) => (
        <li key={route}>
          <Link href={route}>{Route[route].label}</Link>
        </li>
      ))}
    </ul>
  );
}

export function SiteHeader() {
  return (
    <header className="flex flex-col items-center justify-between p-4 sm:flex-row">
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
