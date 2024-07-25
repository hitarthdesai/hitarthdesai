import { getRepositories } from "@/utils/getRepositories";
import { PageSection } from "@/utils/pageSection";
import { ProjectCard } from "./ProjectCard";

export async function Projects() {
  const [repo] = await getRepositories();

  return (
    <section
      id={PageSection.Projects}
      className="flex min-h-full flex-col items-center justify-center gap-4 md:flex-row"
    >
      <ProjectCard repo={repo} />
    </section>
  );
}
