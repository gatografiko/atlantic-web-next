import Link from "next/link";
import { OperationActions } from "@/components/OperationActions";
import { getApartmentBySlug } from "@/lib/apartments";
import { withLocalePath } from "@/lib/locale";

export default function ApartmentDetailPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const { locale, slug } = params;
  const apartment = getApartmentBySlug(slug);
  const title = apartment?.title ?? `Apartamento: ${slug}`;
  const summary =
    apartment?.summary ?? "Pagina de detalle (placeholder).";
  const operation = apartment?.operation ?? "rent";

  return (
    <main className="container" style={{ padding: "32px 0" }}>
      <h1>{title}</h1>
      <p className="footer-muted" style={{ marginTop: 8 }}>
        {summary}
      </p>

      <OperationActions operation={operation} />

      <div style={{ marginTop: 20, display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Link className="btn" href={withLocalePath(locale, "/apartamentos")}>
          Volver al catalogo
        </Link>
        <Link className="btn" href={withLocalePath(locale, "/contacto")}>
          Solicitar informacion
        </Link>
      </div>
    </main>
  );
}
