import Link from "next/link";
import { ApartmentCard } from "@/components/ApartmentCard";
import { getApartmentsByCategory } from "@/lib/apartments";
import { withLocalePath } from "@/lib/locale";

export default function PresidencialPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  const apartments = getApartmentsByCategory("presidential");
  const rentApartments = apartments.filter((apartment) => apartment.operation === "rent");
  const saleApartments = apartments.filter((apartment) => apartment.operation === "sale");

  return (
    <main className="container" style={{ padding: "32px 0" }}>
      <h1>Presidencial</h1>
      <p className="footer-muted" style={{ marginTop: 8 }}>
        Unidades de maxima exclusividad con enfoque institucional y de alto protocolo.
      </p>

      <section className="section-block">
        <h2>Rentar</h2>
        {rentApartments.length ? (
          <div className="apartment-grid">
            {rentApartments.map((apartment) => (
              <ApartmentCard key={apartment.slug} apartment={apartment} locale={locale} />
            ))}
          </div>
        ) : (
          <p className="footer-muted">No hay unidades disponibles para renta.</p>
        )}
      </section>

      <section className="section-block">
        <h2>Comprar</h2>
        {saleApartments.length ? (
          <div className="apartment-grid">
            {saleApartments.map((apartment) => (
              <ApartmentCard key={apartment.slug} apartment={apartment} locale={locale} />
            ))}
          </div>
        ) : (
          <p className="footer-muted">No hay unidades disponibles para compra.</p>
        )}
      </section>

      <div style={{ marginTop: 24, display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Link className="btn" href={withLocalePath(locale, "/apartamentos")}>
          Volver a categorias
        </Link>
        <Link className="btn" href={withLocalePath(locale, "/contacto")}>
          Contacto institucional
        </Link>
      </div>
    </main>
  );
}
