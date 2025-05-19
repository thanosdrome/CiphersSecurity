import { NavBar } from "../NavBar";
import { Button } from "../components/ui/button";


export const Courses = (): JSX.Element => {
    return (
      <div className="bg-[#050505] h-screen flex flex-row justify-center w-[vw]">
      <div className="w-full max-w-[vw]">
        <div className="bg-[#050505]">
          {/* Top Navigation Bar */}
            <div className="flex items-center justify-between px-8 py-8">
            {/* Logo and Name */}
            <div className="flex z-20 items-center gap-4">
              <div className="w-10 h-10 rounded-full [background:linear-gradient(180deg,rgba(0,122,255,1)_0%,rgba(92,132,254,0.18)_100%)] flex items-center justify-center">
                <img
                  className="w-6 h-6 object-contain"
                  alt="Isologo"
                  src="/isologo-1.png"
                />
              </div>
              <span className="[font-family:'Cabinet_Grotesk',Helvetica] font-normal text-white text-xl">
                Cipher Security
              </span>
            </div>

            {/* Navigation */}
            <NavBar />

            {/* Sign In Button */}
            <Button className="h-[42px] z-10 px-6 py-2 rounded-[100px] [background:linear-gradient(180deg,rgba(92,132,254,0.18)_0%,rgba(0,122,255,1)_100%)]">
              <span className="[font-family:'Instrument_Sans',Helvetica] font-medium text-absolutewhite text-base leading-[22.4px]">
                SIGN IN
              </span>
            </Button>
          </div>
          <div className="mx-auto w-full max-w-[1280px] px-5 md:px-20">
          </div>
    <div>
      <div className="flex">
      <div className="video-player">
        <div className="video-container">
            Coming Soon
        </div>
        <div className="controls">
            <div className="progress-bar">
                <div className="progress"></div>
            </div>
            <span className="time">0:00 / 00:00</span>
        </div>
    </div>
    <div className="video-player">
        <div className="video-container">
            Coming Soon
        </div>
        <div className="controls">
            <div className="progress-bar">
                <div className="progress"></div>
            </div>
            <span className="time">0:00 / 00:00</span>
        </div>
    </div>
    </div>
    <div className="flex">
    <div className="video-player">
        <div className="video-container">
            Coming Soon
        </div>
        <div className="controls">
            <div className="progress-bar">
                <div className="progress"></div>
            </div>
            <span className="time">0:00 / 00:00</span>
        </div>
    </div>
    <div className="video-player">
        <div className="video-container">
            Coming Soon
        </div>
        <div className="controls">
            <div className="progress-bar">
                <div className="progress"></div>
            </div>
            <span className="time">0:00 / 00:00</span>
        </div>
    </div>
    </div></div>
        </div>
      </div>
      </div>
    )
  
}
