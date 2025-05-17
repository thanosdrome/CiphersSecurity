import { MedalIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

export const FrameByAnima = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1280px] items-center gap-10 mx-auto my-20">
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="flex flex-col items-center gap-5 w-full">
          <div className="flex items-center justify-center">
            <Badge className="flex items-center gap-0.5 px-3.5 py-2.5 bg-dark-08 text-gray-80 rounded-[100px] border border-solid border-[#26262a]">
              <MedalIcon className="w-6 h-6" />
              <span className="[font-family:'Instrument_Sans',Helvetica] font-medium text-base leading-6 [text-shadow:0px_0.26px_0.05px_#00000014]">
                Evolving Landscape of Security.
              </span>
            </Badge>
          </div>

          <a
            className="w-full text-center"
            href="https://cipherssecurity.com/hacking-methodology-guide-for-cybersecurity/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <h1 className="[font-family:'Cabinet_Grotesk-Regular',Helvetica] my-3 font-medium text-white text-[62px] leading-[64.4px]">
              Hack Your Way to a Career in Cybersecurity{" "}
            </h1>
            <p className="text-2xl leading-[43.2px] text-white [font-family:'Cabinet_Grotesk-Regular',Helvetica]">
              Learn, research, and grow with cutting-edge&nbsp;&nbsp;Cyber
              Security content.
            </p>
          </a>
        </div>

        <p className="max-w-[744px] [font-family:'Instrument_Sans',Helvetica] font-medium text-gray-70 text-base text-center leading-6">
          Hacking is not mere exploitation of weaknesses; rather it is basically
          a systematic process comprising planning, reconnaissance,
          exploitation, and post-exploitation activities.
        </p>
      </div>

      <Button className="h-[52px] my-10 px-6 py-4 rounded-[100px] [background:linear-gradient(180deg,rgba(92,132,254,0.18)_0%,rgba(0,122,255,1)_100%)]">
        <span className="[font-family:'Instrument_Sans',Helvetica] font-medium text-absolutewhite text-lg leading-[25.2px]">
          Join Now
        </span>
      </Button>
    </section>
  );
};
