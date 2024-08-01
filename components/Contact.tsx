import Link from "next/link";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { SocialLink, socials } from "@/utils/social";
import { Separator } from "./ui/separator";
import { ContactForm } from "./ContactForm";

function Social({ social }: { social: SocialLink }) {
  return (
    <Button variant="secondary">
      <Link href={social.url}>{social.icon}</Link>
    </Button>
  );
}

export async function Contact() {
  return (
    <Card className="min-w-72 max-w-72 sm:min-w-80 sm:max-w-80">
      <CardHeader>
        <CardTitle>Get in touch</CardTitle>
        <CardDescription>Best ways to contact me</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex">
          {socials.map((social) => (
            <Social key={social.name} social={social} />
          ))}
        </div>
        <Separator decorative className="bg-gray-500" />
        <ContactForm />
      </CardContent>
    </Card>
  );
}
