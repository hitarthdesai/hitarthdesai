import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import Link from "next/link";
import { RoutePathname, routes } from "@/utils/routes";

function HeroContent() {
  return (
    <div className="max-w-xs">
      <h1 className="text-center text-4xl font-extrabold tracking-tight md:text-left">
        👋 I am Hitarth
      </h1>
      <h3 className="text-center text-lg font-semibold tracking-tight md:text-left">
        a <span className="text-blue-400">student</span> and{" "}
        <span className="text-blue-400">software engineer</span>
      </h3>
      <h3 className="text-center text-sm font-semibold tracking-tight md:text-left">
        I enjoy building performant things
      </h3>
      <h3 className="text-center text-sm font-semibold tracking-tight md:text-left">
        I believe in <span className="text-green-400">proactivity</span>,{" "}
        <span className="text-green-400">determination</span>, and{" "}
        <span className="text-green-400">persistence</span>
      </h3>
      <div className="mt-4 flex items-center justify-center gap-4 px-4 sm:justify-start md:px-0 md:pr-8">
        <Link href="/projects" className="flex grow items-center">
          <Button variant="outline" className="g h-full w-full">
            View my projects
          </Button>
        </Link>
        <Link href="/contact" className="flex grow items-center">
          <Button className="h-full w-full">Get in touch</Button>
        </Link>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id={RoutePathname.Home}
      className="flex min-h-dvh snap-start snap-always flex-col items-center justify-center gap-4 md:flex-row"
    >
      <Avatar className="aspect-square h-28 w-28 sm:h-60 sm:w-60">
        <AvatarImage src="avatar.jpg" alt="@hitarthdesai" />
        <AvatarFallback>HD</AvatarFallback>
      </Avatar>
      <HeroContent />
    </section>
  );
}
