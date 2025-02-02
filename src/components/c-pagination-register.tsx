import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";

export default function PaginationRegister() {
    return (
        <Pagination className="flex justify-center lg:justify-end mt-20 lg:mt-52">
          <PaginationContent className="flex gap-12">
            <PaginationItem>
              <PaginationPrevious href="/" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="/">Login</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="platform/history" />
            </PaginationItem>
          </PaginationContent>
      </Pagination>
    )
}