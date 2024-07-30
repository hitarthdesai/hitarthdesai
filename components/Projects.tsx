import { getRepositories } from "@/utils/getRepositories";
import { PageSection } from "@/utils/pageSection";
import { ProjectCard } from "./ProjectCard";

export async function Projects() {
  const { highlighted, others } = await getRepositories();

  return (
    <main className="flex flex-col gap-8 p-10 md:p-16">
      <section id={PageSection.Projects}>
        <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
          🤩 Highlighted Projects
        </h1>
        <p className="text-gray-400">
          These are some of my most recent and best pieces of work.
        </p>
        <div className="grid grid-cols-1 justify-evenly md:grid-cols-2 lg:grid-cols-3">
          {highlighted.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>
      <section id={PageSection.Projects}>
        <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
          Other Projects
        </h1>
        <p className="text-gray-400">
          These are projects that I don't actively work on any longer.
        </p>
        <div className="justify-evenlyd grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {others.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
