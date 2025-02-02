"use client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useEffect, useState } from "react";
import { getFlagsAPI } from "@/api/actions";
import { Card } from "@/components/ui/card";

type Props = {
    id: string;
    name: { common: string };
    population: number;
    languages: { [key: string]: string };
    capital: string;
    region: string;
    subregion: string;
};

export function TableCountriesComponent() {
    const [countries, setCountries] = useState<Props[]>([]);

    // Carregar os países ao montar o componente
    useEffect(() => {
        getFlagsAPI().then((data) => {
            if (data) setCountries(data);
        });
    }, []);

    return (
        <section className="max-w-4xl mx-auto p-6">
            <Card>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Países</TableHead>
                            <TableHead>População</TableHead>
                            <TableHead>Idiomas</TableHead>
                            <TableHead>Subregião</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {countries.length > 0 ? (
                            countries.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell>{item.name.common}</TableCell>
                                    <TableCell>{item.population.toLocaleString()}</TableCell>
                                    <TableCell>{item.languages ? Object.values(item.languages).join(', ') : "N/A"}</TableCell>
                                    <TableCell>{item.subregion}</TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={3} className="text-center">
                                    Nenhum país encontrado.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </Card>
        </section>
    );
}
