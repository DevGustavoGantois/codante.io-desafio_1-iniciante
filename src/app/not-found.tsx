import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <section className="mt-20 lg:mt-80 flex items-center justify-center flex-col gap-3">
            <p className="text-center text-2xl">Rota não encontrada. Por favor volte a rota inicial.</p>
            <Button asChild className="">
                <Link href="/">
                Login
                </Link>
            </Button>
        </section>
    )
}