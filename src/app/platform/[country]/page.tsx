"use client";
import { getFlagsAPI } from "@/api/actions";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { ChevronLeft, FlagIcon, FlagOffIcon, Loader, Map, MapPin, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CountryCard from "../country-card/country-card";

type CountryData = {
    name: { common: string };
    flags: { png: string };
    population: number;
    languages: { [key: string]: string };
    capital: string;
    region: string;
    subregion: string;
    borders?: string[];
    cca3: string;
};

export default function CountryPage() {
    const params = useParams();
    const country = params.country as string;
    const [selectedCountry, setSelectCountry] = useState<CountryData | null>(null);
    const [loading, setLoading] = useState(true);
    const [countries, setCountries] = useState<CountryData[]>([]);

    useEffect(() => {
        getFlagsAPI().then((data) => {
            setCountries(data);
            const foundCountry = data.find((c: CountryData) => c.name.common.toLowerCase().trim() === country.toLowerCase().trim());
            if (foundCountry) setSelectCountry(foundCountry);
            setLoading(false);
        }).catch(() => setLoading(false));
    }, [country]);

    if (loading) {
        return <div className="flex items-center justify-center mt-60"><Loader className="animate-spin" size={20} /></div>;
    }

    if (!selectedCountry) {
        return <div className="text-center text-red-500 mt-20">País não encontrado.</div>;
    }

    return (
        <section className="p-8">
            <Link href="/platform" className="flex items-center gap-4">
                <ChevronLeft size={20} />
                Voltar
            </Link>
            <div className="flex flex-col items-center justify-center">
            <h1 className="text-center mt-4 text-3xl font-semibold">{selectedCountry.name.common}</h1>
            <Card className="mt-10 w-full p-4 lg:p-10 lg:w-[80%]">
                <span className="flex justify-between items-center">
                <CardContent className="flex flex-col gap-2">
                    <CardDescription className="text-2xl flex items-center gap-2">
                        <Map className="text-blue-500" />
                        Capital: {selectedCountry.name.common}
                    </CardDescription>
                    <CardDescription className="text-2xl flex items-center gap-2">
                        <MapPin  className="text-blue-500"/>
                        Continente: {selectedCountry.region}
                    </CardDescription>
                    <CardDescription className="text-2xl flex items-center gap-2">
                        <Users className="text-blue-500" />
                        População: {selectedCountry.population.toLocaleString()}
                        </CardDescription>
                    <CardDescription className="text-2xl flex items-center gap-2">
                        <FlagIcon className="text-blue-500" />
                        Idiomas: {Object.values(selectedCountry.languages).join(", ")}
                        </CardDescription>
                        <CardDescription className="text-2xl flex items-center gap-2">
                          <FlagOffIcon className="text-blue-500" />
                          Subregião: {selectedCountry.subregion}
                        </CardDescription>
                </CardContent>
                <CardContent>
                    <Image
                        src={selectedCountry.flags.png}
                        width={400}
                        height={250}
                        alt={`Bandeira de ${selectedCountry.name.common}`}
                        className="rounded-xl"
                    />
                </CardContent>
                </span>  
            </Card>
            </div>
            <div className="mt-6">
             <p className="text-2xl text-center">Paises que fazem fronteira</p>
            </div>
            <div className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
    {selectedCountry.borders?.map((border: string, index: number) => {
        const borderCountry = countries.find((c: CountryData) => c.cca3 === border);
        return borderCountry ? (
            <CountryCard 
                key={index} 
                country={borderCountry.name.common} 
                ptName={borderCountry.name.common} 
                flag={borderCountry.flags.png} 
                flagAlt={`Bandeira de ${borderCountry.name.common}`}
            />
        ) : null;
    })}
</div>
            </div>
        </section>
    );
}
