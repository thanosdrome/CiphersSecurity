import { Tabs, TabsList } from "../components/ui/tabs";
import {NavLink} from "react-router-dom";
export const NavBar = (): JSX.Element => {
  // Navigation items data
  const navItems = [
    { id: "home", label: "Home" },
    { id: "courses", label: "Courses"},
    { id: "blog", label: "Blog", isBold: false },
  ];
 
  return (
    <Tabs className="max-sm:hidden  left-1/2 -translate-x-1/2 absolute w-auto ">
      <TabsList className="flex gap-2 !px-1 !py-6 bg-dark-08 rounded-[100px] border-none border border-solid border-[#3d3d3d] backdrop-blur-[11.3px]">
        {navItems.map((item) => (
            <NavLink
            key={item.id}
            to={item.id === "home" ? "/" : `/${item.id}`}
            end={item.id === "home"}
            className={({ isActive }) => 
              `inline-flex items-center justify-center px-6 py-2.5 rounded-[100px] text-gray-70 text-base 
              ${isActive ? "bg-[var(--dark-02)]" : "bg-transparent"} 
              ${item.isBold ? "font-bold" : "font-medium"}
              font-[Instrument_Sans] leading-[22.4px]
              hover:no-underline hover:text-white
              transition-colors duration-200`
            }
            >
            {item.label}
            </NavLink>
        ))}
      </TabsList>
    </Tabs>
  );
};