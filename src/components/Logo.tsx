import GitHubLogo from "./public/github.svg";
import WebsiteLogo from "./public/website.png";

const getLogo = (name: string) => {
  switch (name) {
    case "github":
      return GitHubLogo;
    case "website":
      return WebsiteLogo;
  }
};

export const Logo = ({
  name,
  size,
  className = "",
}: {
  name: string;
  size: number;
  className?: string;
}) => {
  return (
    <img
      src={getLogo(name) || ""}
      alt="GitHub Logo"
      height={size}
      width={size}
      className={className}
    />
  );
};
