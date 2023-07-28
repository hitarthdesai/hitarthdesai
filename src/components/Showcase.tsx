import { Repository } from "@/util";

type ShowcaseProps = {
  repo: Repository;
};

export const Showcase = ({
  repo: { name, description, ...rest },
}: ShowcaseProps) => {
  console.log(rest);
  return (
    <>
      <main className="w-full h-full p-4 flex flex-col bg-red-900 text-2xl">
        <div className="flex flex-row mb-2">
          <strong className="pr-1">HittuDesai</strong>
          <span>/</span>
          <p className="pl-1">{name || "DEFAULT_REPO_NAME"}</p>
        </div>
        <article className="w-full flex-grow grid grid-cols-2 gap-4">
          <div className="grid place-items-center rounded-md text-lg p-4 bg-red-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            reiciendis nam exercitationem quibusdam accusantium dicta unde nobis
            dolore accusamus, magnam autem natus quis in quod ea aliquid
            dignissimos? Ullam aliquam aspernatur quae possimus officiis
            sapiente magni perspiciatis? Veritatis ut consequuntur magnam
            labore. Natus, autem veritatis aut itaque quas iste molestias. Ipsum
            mollitia a perferendis placeat expedita voluptatum quaerat dolore
            doloremque quia sapiente animi assumenda delectus labore distinctio
            corporis, aspernatur qui ad at sint nobis perspiciatis itaque!
            Reiciendis voluptatum animi recusandae?
          </div>
          <div className="grid grid-rows-2 place-items-center rounded-md bg-red-500">
            <div className="bg-black grid-rows-1">ONE</div>
            <div className="bg-white grid-rows-2">TWO</div>
          </div>
        </article>
      </main>
    </>
  );
};
