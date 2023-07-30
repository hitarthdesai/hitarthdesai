import { Repository } from "@/util";
import { TopicsCarousel } from "./TopicsCarousel";
import { LanguagesChart } from "./LanguagesChart";
import { useState } from "react";

type ShowcaseProps = {
  repo: Repository;
};

export const Showcase = ({
  repo: { name, description, topics, languages, ...rest },
}: ShowcaseProps) => {
  const [isTopicsCarouselActive, setIsTopicsCarouselActive] =
    useState<boolean>(false);
  return (
    <main className="w-full h-full p-4 flex flex-col text-2xl bg-gray-700">
      <div className="flex flex-row mb-2 text-white">
        <strong className="pr-1">HittuDesai</strong>
        <span>/</span>
        <p className="pl-1">{name || "DEFAULT_REPO_NAME"}</p>
      </div>
      <div className="w-full h-full flex-grow flex flex-row gap-4 overflow-hidden">
        <article className="flex-grow rounded-md text-sm p-4 bg-red-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          reiciendis nam exercitationem quibusdam accusantium dicta unde nobis
          dolore accusamus, magnam autem natus quis in quod ea aliquid
          dignissimos? Ullam aliquam aspernatur quae possimus officiis sapiente
          magni perspiciatis? Veritatis ut consequuntur magnam labore. Natus,
          autem veritatis aut itaque quas iste molestias. Ipsum mollitia a
          perferendis placeat expedita voluptatum quaerat dolore doloremque quia
          sapiente animi assumenda delectus labore distinctio corporis,
          aspernatur qui ad at sint nobis perspiciatis itaque! Reiciendis
          voluptatum animi recusandae?
        </article>
        <div className="relative min-w-[400px] max-w-[400px] min-h-[400px] max-h-[400px]">
          <div
            className={`absolute bg-pink-300 rounded-md ${
              isTopicsCarouselActive
                ? "w-full h-full z-10"
                : "w-1/2 h-1/2 bottom-0 right-0 z-20"
            }`}
            onClick={() => setIsTopicsCarouselActive((prev) => !prev)}
          >
            <TopicsCarousel
              width={isTopicsCarouselActive ? 400 : 200}
              height={isTopicsCarouselActive ? 400 : 200}
              topics={topics}
            />
          </div>
          <div
            className={`absolute ${
              !isTopicsCarouselActive
                ? "w-full h-full z-10"
                : "w-1/2 h-1/2 bottom-0 right-0 z-20"
            }`}
            onClick={() => setIsTopicsCarouselActive((prev) => !prev)}
          >
            <LanguagesChart
              width={!isTopicsCarouselActive ? 400 : 200}
              height={!isTopicsCarouselActive ? 400 : 200}
              data={languages}
            />
          </div>
        </div>
      </div>
    </main>
  );
};
