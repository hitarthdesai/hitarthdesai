import { GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { type Project } from "@/schemas/project";
import { Button } from "./ui/button";
import { Icons } from "@/utils/getIconByKey";
import Image from "next/image";
import { Tooltip, TooltipProvider } from "./ui/tooltip";
import { TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";

type ProjectTopicsIconGroupProps = {
  topics: Project["topics"];
};

function ProjectTopicsIconGroup({ topics }: ProjectTopicsIconGroupProps) {
  return (
    <TooltipProvider>
      <div className="flex flex-row gap-2">
        {topics.map((topic) => (
          <Tooltip key={topic}>
            <TooltipTrigger asChild className="rounded-full bg-white p-1">
              <Image
                src={Icons[topic]}
                alt={`Icon ${topic}`}
                width={24}
                height={24}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs">{topic}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-96 max-w-80">
      <CardTitle>
        <CardHeader>{project.name}</CardHeader>
      </CardTitle>
      <CardContent>
        <CardDescription>{project.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex flex-row justify-end">
        <ProjectTopicsIconGroup topics={project.topics} />
        <Button variant="link">
          <GitHubLogoIcon />
        </Button>
      </CardFooter>
    </Card>
  );
}
