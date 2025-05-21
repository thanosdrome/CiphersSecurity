import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";


export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1280px] items-center gap-10 mx-auto my-20">
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="flex flex-col items-center gap-5 w-full">
          <div className="flex items-center justify-center">
            <Badge className="flex items-center gap-0.5 px-3.5 py-2.5 bg-dark-08 text-gray-80 rounded-[100px] border border-solid border-[#26262a]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#007aff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mx-1 lucide lucide-brain-circuit-icon lucide-brain-circuit"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M9 13a4.5 4.5 0 0 0 3-4"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M12 13h4"/><path d="M12 18h6a2 2 0 0 1 2 2v1"/><path d="M12 8h8"/><path d="M16 8V5a2 2 0 0 1 2-2"/><circle cx="16" cy="13" r=".5"/><circle cx="18" cy="3" r=".5"/><circle cx="20" cy="21" r=".5"/><circle cx="20" cy="8" r=".5"/></svg>
              <span className="[font-family:'Instrument_Sans',Helvetica] font-medium text-base leading-6 [text-shadow:0px_0.26px_0.05px_#00000014]">
                Evolving Landscape of Security.
              </span>
            </Badge>
          </div>

          <a
            className="w-full text-center"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            <h1 className="[font-family:'Cabinet_Grotesk',Helvetica] my-3 font-medium text-white text-[62px] leading-[64.4px] text-justify">
              Hack Your Way to a Career in Cybersecurity{" "}
            </h1>
            <p className="max-md:text-3xl text-4xl  leading-[43.2px] text-white [font-family:'Cabinet_Grotesk',Helvetica] text-center">
              Learn, research, and grow with cutting-edge&nbsp;&nbsp;Cyber
              Security content.
            </p>
          </a>
        </div>

        <p className="z-10 max-w-[744px] [font-family:'Instrument_Sans',Helvetica] font-medium text-gray-70 text-base text-center leading-6 max-md:text-justify px-5">
          Hacking is not mere exploitation of weaknesses; rather it is a systematic process comprising planning, reconnaissance, exploitation, and <span className="max-md:text-centre">post-exploitation activities.</span>
        </p>
      </div>

      <Button className=" z-10 h-[52px] my-10 px-6 py-4 rounded-[100px] [background:linear-gradient(180deg,rgba(92,132,254,0.18)_0%,rgba(0,122,255,1)_100%)]">
        <span className="[font-family:'Instrument_Sans',Helvetica] font-medium text-absolutewhite text-lg leading-[25.2px]">
          Join Now
        </span>
      </Button>
    </section>
  );
};
