import { getRepositories } from "@/utils/getRepositories";
import { ProjectCard } from "./ProjectCard";

export async function Projects() {
  const { highlighted, others } = await getRepositories();

  return (
    <main className="flex flex-col gap-8 p-4 sm:p-10 md:p-16">
      <section>
        <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
          🤩 Highlighted Projects
        </h1>
        <p className="text-gray-400">
          These are some of my most recent and best pieces of work.
        </p>
        <div className="flex flex-row flex-wrap items-center justify-center gap-4 pt-4 md:justify-normal">
          {highlighted.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>
      <section>
        <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
          Other Projects
        </h1>
        <p className="text-gray-400">
          These are projects that I don&apos;t actively work on any longer.
        </p>
        <div className="flex flex-row flex-wrap items-center justify-center gap-4 pt-4 md:justify-normal">
          {others.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
