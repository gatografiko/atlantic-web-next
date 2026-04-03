import Link from "next/link";
import { withLocalePath } from "@/lib/locale";

export default async function AmenitiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

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
