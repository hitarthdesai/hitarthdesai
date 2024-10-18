import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
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
import Link from "next/link";
import { getDownloadHrefByContentUrl } from "@/utils/getDownloadHrefByContentUrl.ts";

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

export async function ProjectCard({
  project: {
    description,
    github_url,
    isHighlighted,
    name,
    topics,
    thumbnail_url,
  },
}: ProjectCardProps) {
  const shouldShowImage = isHighlighted;
  const cardWidth = "w-72 min-w-72 max-w-72";
  const cardHeight = shouldShowImage
    ? "h-96 max-h-96 min-h-96"
    : "h-60 max-h-60 min-h-60";

  const thumbnail_href = isHighlighted
    ? await getDownloadHrefByContentUrl({
        url: thumbnail_url,
      })
    : undefined;

  return (
    <Card
      className={`xs:w-80 flex flex-col justify-between ${cardHeight} ${cardWidth}`}
    >
      <div className="relative grow overflow-hidden">
        {shouldShowImage && (
          <div className="relative h-[172px] w-full overflow-hidden rounded-t-xl">
            <Image
              src={thumbnail_href ?? "/thumbnail-fallback.png"}
              alt={`Thumbnail: ${name}`}
              layout="fill"
              objectFit="cover"
              objectPosition="left top"
              className="absolute"
            />
          </div>
        )}
        <CardTitle>
          <CardHeader>
            <Link
              href={github_url}
              className="flex flex-row gap-2 align-bottom"
              target="_blank"
            >
              <p>{name} </p>
              <ExternalLinkIcon />
            </Link>
          </CardHeader>
        </CardTitle>
        <CardContent>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </div>
      <CardFooter className="flex justify-between">
        <ProjectTopicsIconGroup topics={topics} />
        <Button variant="link">
          <Link href={github_url} target="_blank">
            <GitHubLogoIcon />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
