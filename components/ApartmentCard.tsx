import Link from "next/link";
import type { Apartment } from "@/lib/apartments";
import { OperationActions } from "./OperationActions";

type ApartmentCardProps = {
  apartment: Apartment;
};

export function ApartmentCard({ apartment }: ApartmentCardProps) {
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
          href={`/apartamentos/${apartment.slug}`}
        >
          Ver detalle
        </Link>
      </div>

      <OperationActions operation={apartment.operation} />
    </article>
  );
}
