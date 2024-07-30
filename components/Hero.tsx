import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function HeroText() {
  return (
    <div>
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        👋 I am Hitarth
      </h1>
      <h3 className="text-lg font-semibold tracking-tight">
        A student and software engineer
      </h3>
      <div className="hidden sm:block">
        <h3 className="text-sm font-semibold tracking-tight">
          I create full stack web applications most times.
        </h3>
        <h3 className="text-sm font-semibold tracking-tight">
          Otherwise, I am playing Overwatch 🔫
        </h3>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-4 md:flex-row">
      <Avatar className="aspect-square h-28 w-28 sm:h-60 sm:w-60">
        <AvatarImage src="avatar.jpeg" alt="@hitarthdesai" />
        <AvatarFallback>HD</AvatarFallback>
      </Avatar>
      <HeroText />
    </section>
  );
}
