import Link from "next/link";
import { withLocalePath } from "@/lib/locale";

export default function ApartmentDetailPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const { locale, slug } = params;

  return (
    <main className="container" style={{ padding: "32px 0" }}>
      <h1>Apartamento: {slug}</h1>
      <p className="footer-muted" style={{ marginTop: 8 }}>
        Pagina de detalle (placeholder).
      </p>

      <div style={{ marginTop: 20, display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Link className="btn" href={withLocalePath(locale, "/apartamentos")}>
          Volver al catalogo
        </Link>
        <Link className="btn btn-primary" href={withLocalePath(locale, "/contacto")}>
          Solicitar informacion
        </Link>
      </div>
    </main>
  );
}
