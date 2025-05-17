import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { DivWrapperByAnima } from "./sections/DivWrapperByAnima";
import { FrameByAnima } from "./sections/FrameByAnima";
import { FrameWrapperByAnima } from "./sections/FrameWrapperByAnima";

export const SaasStyle = (): JSX.Element => {
  return (
    <div className="bg-[#050505] flex flex-row justify-center w-full">
      <div className="bg-[#050505] overflow-hidden w-full relative">
        <div className="relative pt-4">
          {/* Top Navigation Bar */}
          <div className="flex items-center justify-between px-8 py-4">
            {/* Logo and Name */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#007aff] flex items-center justify-center">
                <img
                  className="w-6 h-6 object-contain"
                  alt="Isologo"
                  src="/isologo-1.png"
                />
              </div>
              <span className="[font-family:'Cabinet_Grotesk-Regular',Helvetica] font-normal text-white text-xl">
                Cipher Security
              </span>
            </div>

            {/* Navigation */}
            <FrameWrapperByAnima />

            {/* Sign In Button */}
            <Button className="h-[42px] z-10 px-6 py-2 rounded-[100px] [background:linear-gradient(180deg,rgba(92,132,254,0.18)_0%,rgba(0,122,255,1)_100%)]">
              <span className="[font-family:'Instrument_Sans',Helvetica] font-medium text-absolutewhite text-base leading-[22.4px]">
                SIGN IN
              </span>
            </Button>
          </div>

          {/* Right side abstract design */}
          <div className="absolute w-[342px] h-[423px] top-0 right-0 opacity-75">
            <div className="relative w-[377px] h-[423px] left-[035px]">
              <img
                className="absolute w-[302px] h-[324px] top-0 left-[75px]"
                alt="Group"
                src="/group.png"
              />
              <img
                className="absolute w-[377px] h-[414px] top-0 left-0"
                alt="Group"
                src="/group-1.png"
              />
              <img
                className="absolute w-[302px] h-[324px] top-0 left-[75px]"
                alt="Group"
                src="/group-2.png"
              />
              <img
                className="absolute w-[237px] h-[244px] top-0 left-[140px]"
                alt="Group"
                src="/group-3.png"
              />
              <img
                className="absolute w-[353px] h-[323px] top-0 left-6"
                alt="Group"
                src="/group-4.png"
              />
              <img
                className="absolute w-[353px] h-[323px] top-0 left-6"
                alt="Group"
                src="/group-5.png"
              />
              <img
                className="absolute w-[322px] h-[423px] top-0 left-[55px]"
                alt="Group"
                src="/group-6.png"
              />
              <img
                className="absolute w-[322px] h-[423px] top-0 left-[55px]"
                alt="Group"
                src="/group-7.png"
              />
              <img
                className="absolute w-[272px] h-[275px] top-0 left-[105px]"
                alt="Abstract design"
                src="/abstract-design.svg"
              />
            </div>
          </div>

            {/* Left side abstract design (properly mirrored) */}
<div className="absolute w-[342px] h-[423px] top-0 left-0">
  <div className="relative w-[377px] h-[423px] right-[025px] opacity-75">
    <img
      className="absolute w-[302px] h-[324px] top-0 right-[75px] scale-x-[-1]"
      alt="Group"
      src="/group.png"
    />
    <img
      className="absolute w-[377px] h-[414px] top-0 right-0 scale-x-[-1]"
      alt="Group"
      src="/group-1.png"
    />
    <img
      className="absolute w-[302px] h-[324px] top-0 right-[75px] scale-x-[-1]"
      alt="Group"
      src="/group-2.png"
    />
    <img
      className="absolute w-[237px] h-[244px] top-0 right-[140px] scale-x-[-1]"
      alt="Group"
      src="/group-3.png"
    />
    <img
      className="absolute w-[353px] h-[323px] top-0 right-6 scale-x-[-1]"
      alt="Group"
      src="/group-4.png"
    />
    <img
      className="absolute w-[353px] h-[323px] top-0 right-6 scale-x-[-1]"
      alt="Group"
      src="/group-5.png"
    />
    <img
      className="absolute w-[322px] h-[423px] top-0 right-[55px] scale-x-[-1]"
      alt="Group"
      src="/group-6.png"
    />
    <img
      className="absolute w-[322px] h-[423px] top-0 right-[55px] scale-x-[-1]"
      alt="Group"
      src="/group-7.png"
    />
    <img
      className="absolute w-[272px] h-[275px] top-0 right-[105px] scale-x-[-1]"
      alt="Abstract design"
      src="/abstract-design.svg"
    />
  </div>
</div>

          <FrameByAnima />

          {/* Join learners card */}
          <div className="absolute top-[570px] right-[225px]">
            <Card className="bg-dark-04 rounded-2xl border border-solid border-[#18181a] backdrop-blur-[2.56px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2.56px)_brightness(100%)]">
              <CardContent className="px-3.5 py-3">
                <p className="[font-family:'Instrument_Sans',Helvetica] font-medium text-gray-70 text-base tracking-[0] leading-6 whitespace-nowrap">
                  Join 50,000+ learners
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Weekly Growth card */}
          <Card className="absolute top-[520px] left-[167px] bg-dark-04 rounded-2xl border border-solid border-[#18181a] backdrop-blur-[2.56px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2.56px)_brightness(100%)]">
            <CardContent className="relative w-[175px] h-[154px] bg-dark-04 rounded-2xl overflow-hidden border border-solid border-[#18181a] backdrop-blur-[2.56px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2.56px)_brightness(100%)]">
              <div className="absolute top-[11px] left-3.5 [font-family:'Instrument_Sans',Helvetica] font-medium text-gray-70 text-base tracking-[0] leading-6 whitespace-nowrap">
                Weekly Growth
              </div>

              <div className="flex w-[53px] items-center gap-1.5 absolute top-32 left-[60px]">
                <div className="relative w-2.5 h-2.5 bg-[#007aff] rounded-[5px]" />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Instrument_Sans',Helvetica] font-normal text-[#949494] text-[10px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  89.4%
                </div>
                <img
                  className="relative w-[4.82px] h-[5.65px]"
                  alt="Arrow"
                  src="/arrow-1.svg"
                />
              </div>

              <img
                className="absolute w-[146px] h-14 top-12 left-3.5"
                alt="Vector"
                src="/vector-585.svg"
              />
            </CardContent>
          </Card>
        </div>

        <DivWrapperByAnima />

        <img
          className="w-[1215px] h-40 mx-auto mt-00"
          alt="Frame"
          src="/frame-1707479905.svg"
        />
      </div>
    </div>
  );
};