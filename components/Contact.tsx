import Link from "next/link";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { type SocialLink, socials } from "@/utils/social";
import { Separator } from "./ui/separator";
import { ContactForm } from "./ContactForm";
import { RoutePathname } from "@/utils/routes";

function Social({ social }: { social: SocialLink }) {
  return (
    <Button variant="outline" size="icon" className="rounded-full">
      <Link href={social.url}>{social.icon}</Link>
    </Button>
  );
}

export function Contact() {
  return (
    <section
      id={RoutePathname.Contact}
      className="grid min-h-dvh w-full snap-start snap-always place-items-center"
    >
      <Card className="min-w-72 max-w-72 sm:min-w-80 sm:max-w-80">
        <CardHeader>
          <CardTitle>Get in touch</CardTitle>
          <CardDescription>Best ways to contact me</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex gap-4">
            {socials.map((social) => (
              <Social key={social.name} social={social} />
            ))}
          </div>
          <Separator decorative className="bg-gray-500" />
          <ContactForm />
        </CardContent>
      </Card>
    </section>
  );
}
