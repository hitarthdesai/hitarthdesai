import { SpecialWord } from "./SpecialWord";

export const Hero = () => {
  return (
    <section className="w-full px-8 py-40 bg-yellow-800 flex flex-row justify-between">
      <div className="grow flex flex-col items-center justify-center px-8">
        <div className="text-3xl w-full">👋 I am</div>
        <div className="font-hero text-6xl w-full flex flex-row justify-between">
          <SpecialWord className="text-cyan-300" text="Hitarth" />
          <SpecialWord text="Desai" />
        </div>
        <div className="font-hero text-3xl w-full flex flex-row justify-between">
          <SpecialWord className="text-emerald-300" text="React JS" />
          &
          <SpecialWord className="text-emerald-300" text="Next JS" />
          Connoisseur
        </div>
        <div className="text-white text-xl">
          A student and software engineer. I create full-stack applications most
          of the times. When I am not, I am mostly playing Overwatch
        </div>
      </div>
      <div className="w-1/3 aspect-square m-8 rounded-full bg-red-500" />
    </section>
  );
};
