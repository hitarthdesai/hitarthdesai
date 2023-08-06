import { SpecialWord } from "./SpecialWord";

export const Hero = () => {
  return (
    <section className="text-white w-full px-8 py-40 flex flex-row justify-between">
      <div className="grow flex flex-col items-center px-8 gap-y-6">
        <div className="text-3xl w-full">👋 I am</div>
        <div className="text-6xl w-full flex flex-row gap-4">
          <SpecialWord
            className="font-hero text-gradient bg-gradient-1"
            text="Hitarth"
          />
          <SpecialWord
            className="font-hero text-gradient bg-gradient-2"
            text="Desai"
          />
        </div>
        <div className="text-3xl w-full flex flex-row gap-4">
          <SpecialWord
            className="font-hero text-gradient bg-gradient-3"
            text="React.JS"
          />
          &
          <SpecialWord
            className="font-hero text-gradient bg-gradient-3"
            text="Next.JS"
          />
          connoisseur
        </div>
        <div className="text-xl">
          A student and software engineer. I create full-stack applications most
          of the times. Otherwise, I am playing Overwatch 🔫
        </div>
      </div>
      <div className="w-1/3 aspect-square m-8 rounded-full bg-red-500" />
    </section>
  );
};
