import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import Link from "next/link";

function HeroContent() {
  return (
    <div>
      <h1 className="lg:text-5x text-centerl text-4xl font-extrabold tracking-tight sm:text-left">
        👋 I am Hitarth
      </h1>
      <h3 className="text-center text-lg font-semibold tracking-tight sm:text-left">
        A student and software engineer
      </h3>
      <div className="hidden sm:block">
        <h3 className="text-center text-sm font-semibold tracking-tight sm:text-left">
          I create full stack web applications most times.
        </h3>
        <h3 className="text-center text-sm font-semibold tracking-tight sm:text-left">
          Otherwise, I am playing Overwatch 🔫
        </h3>
      </div>
      <div className="mt-4">
        <Button variant="link" size="sm">
          <Link href="/projects" className="flex items-center">
            View my projects
          </Link>
        </Button>
        <Button>
          <Link href="/contact" className="flex items-center">
            Get in touch
          </Link>
        </Button>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="flex h-full flex-col items-center justify-center gap-4 md:flex-row">
      <Avatar className="aspect-square h-28 w-28 sm:h-60 sm:w-60">
        <AvatarImage src="avatar.jpeg" alt="@hitarthdesai" />
        <AvatarFallback>HD</AvatarFallback>
      </Avatar>
      <HeroContent />
    </section>
  );
}
