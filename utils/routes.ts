import { z } from "zod";

export const RoutePathname = {
  Home: "home",
  Projects: "projects",
  Contact: "contact",
} as const;

const routePathnameSchema = z.nativeEnum(RoutePathname);
export const routes = z
  .array(routePathnameSchema)
  .parse(Object.values(RoutePathname));

type RoutePathnames = (typeof RoutePathname)[keyof typeof RoutePathname];

type RouteDetails = {
  label: string;
};

export const Route: Record<RoutePathnames, RouteDetails> = {
  [RoutePathname.Home]: { label: "Home" },
  [RoutePathname.Projects]: { label: "Projects" },
  [RoutePathname.Contact]: { label: "Contact" },
} as const;
