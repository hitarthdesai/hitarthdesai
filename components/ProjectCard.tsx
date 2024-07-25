import { type Repository } from "@/schemas/repository";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

type ProjectCardProps = {
  repo: Repository;
};

export const ProjectCard = ({ repo }: ProjectCardProps) => {
  return (
    <Card>
      <CardTitle>
        <CardHeader>{repo.name}</CardHeader>
      </CardTitle>
      <CardContent>
        <CardDescription>{repo.topics}</CardDescription>
      </CardContent>
    </Card>
  );
};
