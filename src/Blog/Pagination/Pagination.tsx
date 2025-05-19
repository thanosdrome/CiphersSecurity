// Project: Cipher Security
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../components/ui/pagination";

export const PaginationDiv = (): JSX.Element => {
  // Page numbers to display
  const pageNumbers = [1, 2, 3];
  const lastPageNumbers = [11, 12, 13];
  const currentPage = 1;

  return (
    <div className="w-full py-8 border-t border-[#323236]">
      <Pagination>
        <PaginationContent className="flex justify-between">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              className="flex items-center gap-2 bg-[#f5f9ff24] rounded-full px-4 py-1.5 text-white text-[13.8px] tracking-[-0.14px] font-normal [font-family:'Inter',Helvetica]"
              // icon={<img className="w-6 h-6" alt="Icon" src="/icon-1.svg" />}
            />
          </PaginationItem>

          <div className="flex items-center gap-2">
            {pageNumbers.map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  className={`w-9 h-9 flex items-center justify-center rounded-full text-white text-[16.1px] [font-family:'Inter',Helvetica] font-normal ${
                    page === currentPage ? "bg-[#f5f9ff36]" : ""
                  }`}
                  isActive={page === currentPage}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationEllipsis className="w-9 h-9 flex items-center justify-center rounded-full text-white text-[16.1px] [font-family:'Inter',Helvetica] font-normal" />
            </PaginationItem>

            {lastPageNumbers.map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full text-white text-[16.1px] [font-family:'Inter',Helvetica] font-normal"
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
          </div>

          <PaginationItem>
            <PaginationNext
              href="#"
              className="flex items-center gap-2 bg-[#f5f9ff24] rounded-full px-4 py-1.5 text-white text-[13.8px] tracking-[-0.14px] font-normal [font-family:'Inter',Helvetica]"
              // icon={<img className="w-6 h-6" alt="Icon" src="/icon.svg" />}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
