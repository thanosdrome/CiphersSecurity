// Project: Cipher Security
import { Avatar } from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";

export const HeroImage = (): JSX.Element => {
  return (
    <Card className="flex flex-col md:flex-row w-full max-w-[1224px] mx-auto my-10 bg-[#18181a] rounded-3xl overflow-hidden">
      {/* Image section */}
      <div className="w-full md:w-2/3 h-[453px] rounded-2xl overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url(https://cipherssecurity.com/wp-content/uploads/2024/04/902e18985074a95cdbd73f4557e26abd24388931-1920x1080-1.webp)" }}
        />
      </div>

      {/* Content section */}
      <CardContent className="w-full md:w-1/3 p-8 flex flex-col justify-between">
        <div className="space-y-4">
          {/* News badge */}
          <Badge className="bg-[#381e2c] text-[#f3b2d5] rounded-md px-2 py-1 text-xs font-normal">
            Info
          </Badge>

          {/* Article title */}
          <div className="space-y-1">
            <h2 className="font-medium text-white text-[27.1px] leading-[33px] tracking-[-0.30px]">
              Cyber Advocacy: 
              <br />
              A Growing and Profitable 
              <br />
              Field in the Digital Age
            </h2>
          </div>

          {/* Article description */}
          <div className="text-[#96969e] text-[19.8px] leading-[26px]">
            <p>
              Cyber advocacy involves efforts to influence digital policies, promote cybersecurity awareness, and defend online rights. 
            </p>
          </div>
        </div>

        {/* Author information */}
        <div className="flex items-center gap-2.5 mt-8">
          <Avatar className="h-9 w-9 rounded-[9px]">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: "url(..//image-12.png)" }}
            />
          </Avatar>
          <div className="flex flex-col">
            <span className="text-white text-[13.9px] leading-[18.2px] font-normal">
              Anukram Rao
            </span>
            <span className="text-[#b0b0b6] text-[13.9px] leading-[18.2px] font-normal">
              Co-founder
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
