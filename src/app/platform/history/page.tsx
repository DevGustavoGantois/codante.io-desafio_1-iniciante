import { Button } from "@/components/ui/button";
import { TableCountriesComponent } from "./v-table-countries";
import Link from "next/link";

export default function HistoryPage() {



    return (
        <main>
            <div>
            <Button variant="ghost" asChild>
                    <Link href="/">
                    Voltar
                    </Link>
                </Button>
            </div>
            <h1 className="text-center mt-20">Histórico de Países da nossa plataforma.</h1>
            <TableCountriesComponent />
        </main>
    )
}