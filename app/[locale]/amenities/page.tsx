import Link from "next/link";
import { withLocalePath } from "@/lib/locale";

export default function AmenitiesPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  return (
    <main className="container" style={{ padding: "32px 0" }}>
      <h1>Amenities</h1>
      <p className="footer-muted" style={{ marginTop: 8 }}>
        Servicios y facilidades del inmueble (placeholder).
      </p>

      <div style={{ marginTop: 20 }}>
        <Link className="btn btn-primary" href={withLocalePath(locale, "/contacto")}>
          Solicitar informacion
        </Link>
      </div>
    </main>
  );
}
