import { CheckIcon } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { Badge } from "../../../../components/ui/badge";

export const DivWrapperByAnima = (): JSX.Element => {
  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);

  // Define the tag data for easier mapping
  const topRowTags = [
    "Networking",
    "Linux",
    "Ethical Hacking",
    "Try Hack Me",
    "Footprint",
    "NMAP",
    "Walkthrough",
  ];

  const bottomRowTags = [
    "Content Creation",
    "Cryptography",
    "IP Adress",
    "Information Gathering",
    "Reconnaissance",
    "Scanning Network",
    "Algorithm",
    "App Development",
  ];

  useEffect(() => {
    const topRow = topRowRef.current;
    const bottomRow = bottomRowRef.current;

    if (!topRow || !bottomRow) return;

    let topPosition = 0;
    let bottomPosition = 0;

    const animate = () => {
      if (!topRow || !bottomRow) return;

      // Move top row left to right
      topPosition += 0.5;
      if (topPosition >= topRow.scrollWidth / 2) {
        topPosition = 0;
      }
      topRow.style.transform = `translateX(${-topPosition}px)`;

      // Move bottom row right to left
      bottomPosition += 0.5;
      if (bottomPosition >= bottomRow.scrollWidth / 2) {
        bottomPosition = 0;
      }
      bottomRow.style.transform = `translateX(${bottomPosition}px)`;

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className=" flex flex-col w-full max-w-[1006px] items-center justify-center gap-5 mx-auto relative mt-30 ">
       {/* Gradient masks for side fading */}
  <div className="absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#050505] to-transparent"></div>
  <div className="absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#050505] to-transparent"></div>
      {/* First row of tags */}
      <div className="flex items-center justify-center relative self-stretch w-full flex-[0_0_auto] overflow-hidden ">
        <div
          ref={topRowRef}
          className="flex items-center justify-start gap-5 py-2"
          style={{ width: "fit-content" }}
        >
          {[...topRowTags, ...topRowTags].map((tag, index) => (
            <Badge
              key={`top-${index}`}
              className="inline-flex items-center gap-2 px-4  bg-dark-04 rounded-[100px] border border-solid border-[#007aff] whitespace-nowrap"
              variant="outline"
            >
              <div className="inline-flex items-center gap-3 p-1.5 rounded-[120px]">
                <CheckIcon className="w-4 h-4 text-[#007aff]" />
              </div>
              <span className="font-medium leading-6 [font-family:'Instrument_Sans',Helvetica] text-gray-70 text-base">
                {tag}
              </span>
            </Badge>
          ))}
        </div>
      </div>

      {/* Second row of tags */}
      <div className="flex items-center justify-center relative self-stretch w-full flex-[0_0_auto] overflow-hidden">
        <div
          ref={bottomRowRef}
          className="flex items-center justify-start gap-5 py-2"
          style={{ width: "fit-content" }}
        >
          {[...bottomRowTags, ...bottomRowTags].map((tag, index) => (
            <Badge
              key={`bottom-${index}`}
              className="inline-flex items-center gap-2 px-4  bg-dark-04 rounded-[100px] border border-solid border-[#007aff] whitespace-nowrap"
              variant="outline"
            >
              <div className="inline-flex items-center gap-3 p-1.5 rounded-[120px]">
                <CheckIcon className="w-4 h-4 text-[#007aff]" />
              </div>
              <span className="font-medium leading-6 [font-family:'Instrument_Sans',Helvetica] text-gray-70 text-base">
                {tag}
              </span>
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};