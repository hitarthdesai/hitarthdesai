"use client";

import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Button } from "@/components/ui/button";
import { PageSection, PageSectionKeys } from "@/utils/pageSection";
import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";
import { Fragment, useEffect, useState, type ReactNode } from "react";

type PageSectionType = {
  key: PageSectionKeys;
  component: ReactNode;
};

const pageSections: PageSectionType[] = [
  // { key: PageSection.Hero, component: <Hero /> },
  { key: PageSection.Projects, component: <Projects /> },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  useEffect(() => {
    const sectionKey = pageSections[activeSection].key;
    const section = document.getElementById(sectionKey);
    section?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [activeSection]);

  return (
    <main className="relative w-screen">
      <div className="z-10 flex h-[100vh] flex-col overflow-y-hidden">
        {pageSections.map(({ key, component }) => (
          <Fragment key={key}>{component}</Fragment>
        ))}
      </div>
      <div className="absolute right-0 top-0 mr-4 flex h-screen flex-col justify-between py-4">
        <Button
          size="icon"
          className="bg-red-900"
          onClick={() =>
            setActiveSection((prev) => (prev === 0 ? prev : prev - 1))
          }
        >
          <ArrowUpIcon className="h-4 w-4" />
        </Button>
        <Button
          size="icon"
          className="bg-red-900"
          onClick={() =>
            setActiveSection((prev) =>
              prev === pageSections.length - 1 ? prev : prev + 1
            )
          }
        >
          <ArrowDownIcon className="h-4 w-4" />
        </Button>
      </div>
    </main>
  );
}
