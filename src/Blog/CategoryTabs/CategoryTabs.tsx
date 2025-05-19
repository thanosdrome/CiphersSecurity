
import { Badge } from "../../components/ui/badge";

export const CategoryTabs = (): JSX.Element => {
  // Define categories for the filter badges
  const categories = [
    "Algorithm",
    "Cryptography",
    "THM Walkthrough",
    "Operations",
    "Scanning Network",
    "News",
  ];

  return (
    <section className="w-full py-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-[43.3px] font-medium text-white tracking-[-0.96px] leading-[52.8px] [font-family:'Inter',Helvetica]">
          Recent Articles
        </h2>

        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <Badge
              key={index}
              variant="outline"
              className="bg-[#f5f9ff24] hover:bg-[#f5f9ff36] text-white rounded-full px-4 py-2 h-9 text-[13.8px] tracking-[-0.14px] leading-[18.2px] [font-family:'Inter',Helvetica] font-normal cursor-pointer"
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};
