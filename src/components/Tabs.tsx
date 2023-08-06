import { Repository } from "@/util";
import React from "react";

export type Tab = Repository & {
  isActive: boolean;
};

type TabsProps = {
  tabs: Tab[];
  width: number;
  activeTabSetter: (newIndex: number) => void;
};

export const Tabs = ({ tabs, width, activeTabSetter }: TabsProps) => {
  const activeTab = tabs?.find((tab) => tab.isActive);
  if (!activeTab) return null;

  const activeTabWidth = activeTab.name.length * 8;
  const inactiveTabWidth = (width - activeTabWidth) / (tabs.length - 1);

  return (
    <>
      {tabs.map(({ name, isActive }, index) => {
        return (
          <React.Fragment key={index}>
            <button
              key={index}
              className={`mt-1.5 relative ${
                isActive ? `tab-active` : `tab-inactive`
              }`}
              style={{
                width: isActive ? activeTabWidth : inactiveTabWidth,
              }}
              onClick={() => activeTabSetter(index)}
            >
              <p className="px-2 text-xs truncate text-white">
                {isActive ? name : name}
              </p>
              {!isActive && (
                <span className="absolute -left-[.15rem] bottom-1/3 h-[40%] border-[.01rem] border-chrome-active-tab"></span>
              )}
            </button>
          </React.Fragment>
        );
      })}
    </>
  );
};
