import Nextauth from "../assets/nextauth.svg";
import GitHub from "../assets/github.svg";
import Website from "../assets/website.svg";
import Css from "../assets/css.svg";
import Firebase from "../assets/firebase.svg";
import Mui from "../assets/mui.svg";
import Next from "../assets/next.svg";
import React from "../assets/react.svg";
import Js from "../assets/js.svg";
import Mantine from "../assets/matine.svg";
import Django from "../assets/django.svg";
import Html from "../assets/html.svg";
import Python from "../assets/python.svg";

const getLogo = (name: string) => {
  switch (name) {
    case "github":
      return GitHub;
    case "website":
      return Website;
    case "css":
    case "css3":
      return Css;
    case "firebase":
      return Firebase;
    case "material-ui":
    case "mui":
      return Mui;
    case "next":
    case "nextjs":
      return Next;
    case "react":
    case "reactjs":
      return React;
    case "js":
    case "javascript":
      return Js;
    case "mantine":
    case "mantine-ui":
      return Mantine;
    case "next-auth":
      return Nextauth;
    case "django":
      return Django;
    case "html":
    case "html5":
      return Html;
    case "python":
    case "python3":
      return Python;
    default:
      return null;
  }
};

export const Icon = ({
  name,
  size,
  className = "",
}: {
  name: string;
  size: number;
  className?: string;
}) => {
  const imgSrc = getLogo(name);

  return (
    <>
      {imgSrc ? (
        <img
          src={imgSrc}
          alt={`${name} icon`}
          className={`w-[3rem] h-[3rem] ${className}`}
        />
      ) : (
        <span>{name}</span>
      )}
    </>
  );
};
