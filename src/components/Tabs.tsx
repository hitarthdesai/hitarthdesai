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
              <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 overflow-hidden">
                <p className="text-xs truncate text-white">
                  {isActive ? name : index}
                </p>
              </div>
              {!isActive && (
                <span className="absolute -left-[.15rem] bottom-1/3 h-[40%] border-[.01rem] border-gray-500"></span>
              )}
            </button>
          </React.Fragment>
        );
      })}
    </>
  );
};
