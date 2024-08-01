import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

export type SocialLink = {
  name: string;
  url: string;
  icon: React.ReactNode;
};

export const socials: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/hitarthdesai",
    icon: <GitHubLogoIcon />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hitarthdesai1272/",
    icon: <LinkedInLogoIcon />,
  },
  {
    name: "Twitter",
    url: "https://x.com/DesaiHittu",
    icon: <TwitterLogoIcon />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/_hittu_desai/",
    icon: <InstagramLogoIcon />,
  },
];
