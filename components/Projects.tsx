import { getRepositories } from "@/utils/getRepositories";
import { PageSection } from "@/utils/pageSection";
import { ProjectCard } from "./ProjectCard";

export async function Projects() {
  const repos = await getRepositories();

  return (
    <section
      id={PageSection.Projects}
      className="grid grid-cols-3 gap-4 md:flex-row"
    >
      {repos.map((repo) => (
        <ProjectCard key={repo.name} project={repo} />
      ))}
    </section>
  );
}
