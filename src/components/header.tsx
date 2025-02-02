"use client";
import { Search } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
     searchTerm: string;
     setSearchTerm: (value: string) => void;
}
export function Header({searchTerm, setSearchTerm}: Props) {

    return (
        <header className="max-w-[1440px] mx-auto p-8 lg:p-0 mt-6">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center">
        <div className="mb-6 lg:mb-0 -mt-10 lg:mt-0">
            <ModeToggle />
        </div>
            <div>
                <h1 className="text-xl text-center mb-4 lg:mb-0 mt-20 lg:mt-0">Olá! Seja bem vindo a plataforma.</h1>
            </div>
            <div className="flex items-center gap-2">
            <div className="relative">
                <Input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Pesquisar..." type="search" className="w-full" />
                <Search size={14} className="top-3 absolute right-4 text-gray-300" />
            </div>
            <div>
                <Button asChild variant="ghost">
                    <Link href="/">
                        Voltar
                    </Link>
                </Button>
            </div>
            </div>
        </div>
        </header>
    )
}