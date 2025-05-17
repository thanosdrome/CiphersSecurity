import React from "react";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const FrameWrapperByAnima = (): JSX.Element => {
  // Navigation items data
  const navItems = [
    { id: "home", label: "Home", isActive: true },
    { id: "courses", label: "Courses", isActive: false },
    { id: "blog", label: "Blog", isBold: true, isActive: false },
  ];

  return (
    <Tabs defaultValue="home" className="w-auto">
      <TabsList className="flex items-center gap-3  !px-2 !py-8 bg-dark-08 rounded-[100px] border-none backdrop-blur-[11.3px]">
        {navItems.map((item) => (
          <TabsTrigger
            key={item.id}
            value={item.id}
            className={`
              px-6 py-4 rounded-[100px] text-gray-70 text-base
              ${item.isActive ? "bg-dark-02" : "bg-transparent"}
              ${item.isBold ? "font-bold" : "font-medium"}
              [font-family:'Instrument_Sans',Helvetica] leading-[22.4px]
            `}
          >
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};