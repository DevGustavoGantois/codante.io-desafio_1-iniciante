"use client";
import { Header } from "@/components/header";
import { getFlagsAPI } from "@/api/actions";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Tipagem correta para os países
type CountryProps = {
    id: string;
    name: { common: string };
    flags: { png: string };
    population: string;
    languages?: { [key: string]: string };
};

export default function Page() {
    const [countries, setCountries] = useState<CountryProps[]>([]);
    const [searchTerm, setSearchTerm] = useState(""); 

    useEffect(() => {
        getFlagsAPI().then((data) => {
            if (data) setCountries(data);
        });
    }, []);

    const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section>
            <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <main className="mt-20 lg:mt-60">
                <h1 className="text-3xl font-semibold text-center mb-10">Países</h1>
                <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12 p-8">
                    {filteredCountries.length > 0 ? (
                        filteredCountries.map((country, index) => (
                                <Card key={index}>
                                    <CardHeader>
                                        <Image
                                            src={country.flags.png}
                                            alt={country.name.common}
                                            width={400}
                                            height={400}
                                            className="rounded-2xl"
                                        />
                                    </CardHeader>
                                    <CardContent>
                                        <CardTitle className="text-2xl text-center">
                                            {country.name.common}
                                        </CardTitle>
                                        <CardDescription className="mt-6 text-center text-xl">
                                            
                                        </CardDescription>
                                    </CardContent>
                                    <div className="flex items-center justify-center">
                                    <Button asChild className="w-[90%]">
                                        <Link href={`/platform/${country.name.common}`}>Saiba mais</Link>
                                    </Button>
                                    </div>
                                </Card>
                        ))
                    ) : (
                        <div className="flex items-center justify-center">
                            <p className="text-center text-gray-400">Nenhum país encontrado.</p>
                        </div>
                    )}
                </ul>
            </main>
        </section>
    );
}
