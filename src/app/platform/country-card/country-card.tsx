import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function CountryCard({
  country,
  ptName,
  flag,
  flagAlt,
}: {
  country: string;
  ptName: string;
  flag: string;
  flagAlt: string;
}) {
  return (
    <Link href={`/platform/${country}`}>
      <Card
        className="p-8"
        key={country}
      >
        <div className="relative w-full h-40 p-2 overflow-hidden rounded-xl">
          <Image src={flag} alt={flagAlt} fill className="object-cover" />
        </div>
        <h1 className="font-bold text-xl text-center mt-8">{ptName}</h1>
      </Card>
    </Link>
  );
}
