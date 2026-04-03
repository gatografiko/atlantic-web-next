import Link from "next/link";
import type { Apartment } from "@/lib/apartments";
import { withLocalePath } from "@/lib/locale";
import { OperationActions } from "./OperationActions";

type ApartmentCardProps = {
  apartment: Apartment;
  locale: string;
};

export function ApartmentCard({ apartment, locale }: ApartmentCardProps) {
  return (
    <article className="apartment-card">
      <div className="apartment-meta">
        {apartment.operation === "rent" ? "Rentar" : "Comprar"}
      </div>
      <h3>{apartment.title}</h3>
      <p className="footer-muted">{apartment.summary}</p>

      <div className="apartment-actions">
        <Link
          className="btn"
          href={withLocalePath(locale, `/apartamentos/${apartment.slug}`)}
        >
          Ver detalle
        </Link>
      </div>

      <OperationActions operation={apartment.operation} />
    </article>
  );
}
