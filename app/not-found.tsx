import Image from "next/image";

export default function FourZeroFour() {
  return (
    <main className="flex h-full w-screen items-center justify-center">
      <div className="max-w-80 text-center sm:max-w-96">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          404: Page not found
        </h1>
        <p className="p-4 text-xs sm:text-lg">
          You are seeing the incorrect outcome 😢 from the 14,000,605 possible
          outcomes. Try again or try visiting another page to test your chances.
        </p>
        <div className="relative grid place-content-center p-4">
          <Image
            src="/dr-strange.webp"
            alt="Dr. Strange calculating all outcomes"
            width={320}
            height={134}
          />
        </div>
      </div>
    </main>
  );
}
