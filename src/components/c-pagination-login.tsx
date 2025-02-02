"use client";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

export function PaginationLogin() {
    return (
        <>
    <Pagination className="flex justify-center lg:justify-end mt-20 lg:mt-[310px]">
          <PaginationContent className="flex gap-12">
            <PaginationItem>
              <PaginationPrevious href="/" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="platform/register">Cadastre-se</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="platform/history" />
            </PaginationItem>
          </PaginationContent>
      </Pagination>
    </>
    )
}